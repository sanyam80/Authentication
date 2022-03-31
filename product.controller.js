const express = require("express");
const Product = require("../model/product.model.js");
const authenticate = require("../middleware/authenticate.js");
const router = express.Router();
router.post("/",authenticate, async (req,res)=>{
    try{
 const product = await Product.create(req.body);
 return res.send(product)
    }
    catch(err){
        return res.send(err.message)
    }

})
module.exports = router;