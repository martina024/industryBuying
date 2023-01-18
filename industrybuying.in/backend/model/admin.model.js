const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phoneNumber:Number,
    GSTIN:String,
    storeName:String
},{
    versionKey:false
}
)

const AdminModel = mongoose.model("admin",adminSchema)

module.exports={AdminModel}