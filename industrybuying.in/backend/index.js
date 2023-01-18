
const express=require("express")
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { userValidator } = require("./middleware/userValidate.middleware");
const { adminRouter } = require("./routes/admin.routes");
const { adminValidator } = require("./middleware/adminValidate.middleware");
const { authenticate } = require("./middleware/authenticate.middleware");
const { productsRouter } = require("./routes/product.routes");
require("dotenv").config()

const app=express()

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to industryEase.com")
})

app.use(userValidator)
app.use("/", userRouter)

app.use(adminValidator)
app.use("/admin" , adminRouter)

app.use(authenticate)
app.use("/products", productsRouter)




app.listen((process.env.port), async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log("Not connected to DB")
        console.log(err)
    }
    console.log(`Server is running in port ${process.env.port} `)
})