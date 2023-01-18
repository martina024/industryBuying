const adminValidator=(req,res,next)=>{
    if(req.url=="/admin/register"){
     if(req.body.name && req.body.email && req.body.password && req.body.phoneNumber && req.body.storeName && req.body.GSTIN){
        if(typeof req.body.name==="string" &&
        typeof req.body.email==="string" &&
        typeof req.body.password==="string" &&
        typeof req.body.phoneNumber=="number" &&
        typeof req.body.storeName=="string" &&
        typeof req.body.GSTIN=="string" 
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

module.exports={adminValidator}