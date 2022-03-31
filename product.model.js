const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Title:{type:String, required:true,unique:true},
  price:{type:Number,required:true},
  
},
{timestamps:true,versionKey:false}

);

const Product = mongoose.model("product",productSchema);
module.exports = Product;