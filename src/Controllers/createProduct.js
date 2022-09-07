const Product = require('../models/product')

const createProduct = async (req, res) => {
    const {marca, model, price, ram, camera, image, stock} = req.body
    try {
        await Product.create({
            marca,
            model,
            price,
            ram,
            camera,
            image,
            stock
        })
        res.send(`Producto ${model} creado exitosamente`)
    } catch (error) {
        res.status(404).send("No se pudo crear el producto")
    }
}

module.exports = {createProduct}