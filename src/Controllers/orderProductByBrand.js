const Product = require('../models/product');

const orderProductByBrand = async (req, res) => {
    let nameOrder = req.body.nameOrder;
    const allProducts = await Product.findAll()

    try {
        nameOrder === 'A-Z' ?
            allProducts.sort(function (a, b) {
                if (a.marca > b.marca) {
                    return 1;
                }
                if (b.marca > a.marca) {
                    return -1;
                }
                return 0;
            }) :
            allProducts.sort(function (a, b) {
                if (a.marca > b.marca) {
                    return -1;
                }
                if (b.marca > a.marca) {
                    return 1;
                }
                return 0;
            })
        res.send(allProducts)
    } catch (e) {
        console.log(e)
    }
}

module.exports = orderProductByBrand;


