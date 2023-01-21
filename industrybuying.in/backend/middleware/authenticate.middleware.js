var jwt = require('jsonwebtoken');
require("dotenv").config()

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    const GSTIN=req.headers.gstin;
    const urlArr=req.url.split("/")
    const url=urlArr[urlArr.length-1]
    // console.log(url)
    // console.log(req.params)
    // console.log(token,GSTIN)
    if(req.url=="/products/post" || req.url==`/products/update/${url}` || req.url==`/products/delete/${url}`){
        if(token){
            const decodedToken=jwt.verify(token,process.env.key)
            if(decodedToken && GSTIN){
                next()
            }
            else{
                res.send("please login first")
            }
        }
        else{
            res.send("please login first")
        }
    }

    else if(req.url===`/products/quantity/${url}`){
        if(token){
            const decodedToken=jwt.verify(token,process.env.key)
            if(decodedToken){
                next()
            }
            else{
                res.send("please login first")
            }
        }
        else{
            res.send("please login first")
        }
    }

    else{
        next()
    }
   
    
}

module.exports={authenticate}