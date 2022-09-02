const product = require("../models/product.js");
const getProductsApi = require("../Controllers/getProductApi");

const chargeDB = async()=>{
    const allProducts = await getProductsApi();
    allProducts.forEach(async (e)=>{
       await product.findOrCreate({
        where:{
            marca: e.marca,
            model: e.model,
            price: e.price,
            stock: e.stock,
            ram: e.ram,
            image: e.image,
            camera: e.camera
        }
       })
    })
}
module.exports = chargeDB;