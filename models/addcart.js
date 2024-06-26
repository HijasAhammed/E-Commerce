const mongoose=require("mongoose")
const addcart=new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    items:[{
        productID:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'addproducts'},
        quantity:{type:Number,default:1},
    }],
    createdOn:{type:Date,default:Date.now}
});
cart=mongoose.model("addcart",addcart)
module.exports=cart