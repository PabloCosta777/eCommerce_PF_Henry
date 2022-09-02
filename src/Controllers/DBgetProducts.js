const product = require("../models/product.js");

const getProductDB = async(req,res)=>{
    try {
        const products = await product.findAll();
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = getProductDB;