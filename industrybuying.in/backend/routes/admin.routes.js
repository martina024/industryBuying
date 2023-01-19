const express=require("express")
require("dotenv").config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AdminModel } = require("../model/admin.model");


const adminRouter=express.Router()


adminRouter.post("/register" , async(req,res)=>{
    const {email,password,name,phoneNumber,GSTIN,storeName}=req.body

    const adminEmail=await AdminModel.findOne({email})
    const adminStoreName=await AdminModel.findOne({storeName})

    if(adminEmail && adminStoreName){
         res.send({"message":"This Email  and Store Name already exist"})
    }

    else if(adminEmail){
        res.send({"message":"This Email is already registered"})
    }
    else if(adminStoreName){
        res.send({"message":"This Store Name already exist"})
    }
    else {

        try{
            bcrypt.hash(password, 5, async(err, secure_password)=> {
                if(err){
                    console.log(err)
                }else{
                        const admin = new AdminModel({email,password:secure_password,name,phoneNumber,GSTIN,storeName})
                        await admin.save()
                        // console.log(admin)
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


adminRouter.post("/login" , async(req,res)=>{
    const {email,password}=req.body
    try{

    const admin=await AdminModel.find({email})
    //    console.log(admin)
    const GSTIN=admin[0].GSTIN
       
        if(admin.length>0){
            bcrypt.compare(password, admin[0].password, (err, result) =>{
               
                if(result){
                    const token=jwt.sign({adminID:admin[0]._id},process.env.key)
                    res.send({"message" :"Login successuful","token":token,GSTIN})
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



module.exports={adminRouter}