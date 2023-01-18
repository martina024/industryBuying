const mongoose=require("mongoose")

const productsSchema=mongoose.Schema({
    title:String,
    price:Number,
    quantity:Number,
    brand:String,
    category:String,
    sub_category:String,
    images:Object
},{
    versionKey:false
}
)

const ProductModel = mongoose.model("product",productsSchema)

module.exports={ProductModel}