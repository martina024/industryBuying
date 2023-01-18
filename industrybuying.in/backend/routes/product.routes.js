const express=require("express")
const { ProductModel } = require("../model/products.model")
const productsRouter=express.Router()

productsRouter.get("/",async(req,res)=>{
    try{
        
        const products=await ProductModel.find()
        res.send(products)
    }
    catch(err){
        console.log(err)
        console.log({"message":"Something went wrong"})
    }
})


productsRouter.post("/post",async(req,res)=>{
    const payload=req.body
    try{
        const new_product=new ProductModel(payload)
        await new_product.save()
        res.send({"message":"Added the product",new_product})

    }catch(err){
        console.log(err)
        res.send({"message":"Something went wrong"})
    }
    
})


productsRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    
  
  
    try{
       
       const product=await ProductModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"message":"Updated the product",product})
        
    }catch(err){
        console.log(err)
        console.log({"message":"Something went wrong"})
    }
   
})



productsRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
   
   
    try{
        await ProductModel.findByIdAndDelete({_id:ID})
        res.send({"message":"Deleted the product"})

    }catch(err){
        console.log(err)
        console.log({"message":"Something went wrong"})
    }
    
   
})


module.exports={productsRouter}



