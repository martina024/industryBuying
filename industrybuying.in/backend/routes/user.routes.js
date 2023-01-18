const express=require("express")
require("dotenv").config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/user.model");

const userRouter=express.Router()


userRouter.post("/register" , async(req,res)=>{
    const {email,password,name,gender,phoneNumber}=req.body

    const userEmail=await UserModel.findOne({email})

    if(userEmail){
        res.send({"message":"This Email is already registered"})
    }
    else{

        try{
            bcrypt.hash(password, 5, async(err, secure_password)=> {
                if(err){
                    console.log(err)
                }else{
                        const user = new UserModel({email,password:secure_password,name,gender,phoneNumber})
                        await user.save()
                        console.log(user)
                            res.send({"message" :"Registered Successfully"})
                 }
        });
           
        }
        catch(err){
            console.log(err)
            console.log({"message":"SignUp failed, please try again"})
        }
    }
    

})


userRouter.post("/login" , async(req,res)=>{
    const {email,password}=req.body
    try{

    const user=await UserModel.find({email})
       console.log(user)
       
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result) =>{
               
                if(result){
                    const token=jwt.sign({userID:user[0]._id},process.env.key)
                    res.send({"message" :"Login successuful","token":token})
                }
                else{
                    res.send({"message" :"Wrong Credientials"})
                }
            });
           
        }
        else{
            res.send({"message" :"Wrong Credientials"})
        }
       
        
       
    }
    catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
})



module.exports={userRouter}