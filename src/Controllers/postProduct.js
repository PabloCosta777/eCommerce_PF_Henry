const { Router } = require ('express');
const router = Router();
const  Product = require('../models/product');
const Brand = require('../models/brand');

router.post('/', async(req, res) => {
    const { marca, model, price, color, ram, camera, image, brand } = req.body;
    
    try{
        let createProduct = await Product.create({
            marca,
            model, 
            price, 
            color, 
            ram, 
            image, 
            camera, 
            
        })

        let brandDB = await Brand.findByPk(brand);

        //createProduct.addBrand(brandDB);
        
        res.status(200).send('Producto creado con exito!')
    }
    catch(err){
        console.log(err);
        res.status(400).send('Error al crear producto.')
    }
});

module.exports = router;