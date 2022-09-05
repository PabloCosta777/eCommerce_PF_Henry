const Product = require("../models/product.js");

const getProductByName = async (req, res) => {
  try {
    const {model} = req.query;
    const find = await Product.findAll({where:{
      marca : model.toString()
    }})
    if(find.length > 0){
      res.status(200).send(find)
    }
    else{
      throw new Error(`${model} no encontrado`)
    }
  } catch (error) {
    res.status(400).send({error:error.message})
    console.log('error byName >>>', error)
  }
};
module.exports = getProductByName;