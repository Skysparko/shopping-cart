const { DataTypes } = require("sequelize");
const { createDB } = require("../config/db");

const Product = createDB.define("product-db", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  productImage: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  date: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  brand: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cost: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

module.exports = Product;
