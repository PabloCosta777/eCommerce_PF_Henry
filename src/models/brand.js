const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const brand = sequelize.define("brand", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = brand;
