const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const product = sequelize.define("product", {
  
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false
  },
  camera: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = product;
