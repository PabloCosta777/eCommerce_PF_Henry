const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false
  },
  internalstorage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frontcam: {
    type: DataTypes.STRING,
    allowNull: false
  },
  backcam: {
    type: DataTypes.STRING,
    allowNull: false
  },
  display: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = product;
