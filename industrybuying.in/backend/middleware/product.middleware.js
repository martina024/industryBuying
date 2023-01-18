const productValidator=(req,res,next)=>{
    if(req.url=="/products/post"){
     if(req.body.title && req.body.price && req.body.quantity && req.body.brand && req.body.category && req.body.sub_category && req.body.images){
        if(typeof req.body.title==="string" &&
        typeof req.body.price==="number" &&
        typeof req.body.quantity==="number" &&
        typeof req.body.brand==="string" &&
        typeof req.body.category=="string" &&
        typeof req.body.sub_category=="string" &&
        typeof req.body.images=="object" 
        )
        {

            next()
        }
        else{
            res.send({"message":"Wrong data type"})
        }
     }
     else{
        res.send({"message":"Data doesn't exist"})
     }
    }
    else{
        next()
    }
}

module.exports={productValidator}