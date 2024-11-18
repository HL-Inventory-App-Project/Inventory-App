const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    sequelize,
  }
);

module.exports = Item;
