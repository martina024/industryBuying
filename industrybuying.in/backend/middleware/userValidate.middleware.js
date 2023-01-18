const userValidator=(req,res,next)=>{
    if(req.url=="/register"){
     if(req.body.name && req.body.email && req.body.password && req.body.gender && req.body.phoneNumber ){
        if(typeof req.body.name==="string" &&
        typeof req.body.email==="string" &&
        typeof req.body.password==="string" &&
        typeof req.body.gender==="string" &&
        typeof req.body.phoneNumber=="number" )
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

module.exports={userValidator}