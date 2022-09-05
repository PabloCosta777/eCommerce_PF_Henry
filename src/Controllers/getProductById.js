const Product = require('../models/product')


const getProductById = async (req, res) => {
    
    const { id } = req.params;
    console.log(id)
    try {
      const idCellphone = await Product.findOne({
        where: {
          id: id
        }
      });
      !idCellphone
      ? res.status(404).send(`El id ${id} no tiene ningun celular asociado`)
      : res.status(200).send(idCellphone)
    } catch (error) {
      console.log(error)
      return res.status(404).send(`Celular no encontrado`, error);
    }
  };

  module.exports = getProductById;
