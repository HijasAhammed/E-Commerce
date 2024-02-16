const express=require("express")
const app=express()
const port=9999
const path=require('path')
const mongoose=require("mongoose")
const session=require("express-session")
// const flash=require("connect flash")
const nocache=require("nocache")
mongoose.connect("mongodb://localhost:27017/ecommerece")
.then(()=>{console.log("mongodb connected")})
.catch(()=>{console.log("mongodb not connected")})
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")



const user=require("./router/userRouter")
const admin=require("./router/adminRout")
const common=require("./router/commonRout")

app.use("/",common)
app.use("/admin",admin)





app.listen(port,()=>{
    console.log(`Server started Port No ${port}`)
    
})