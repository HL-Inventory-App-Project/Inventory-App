const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100], 
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // e.g.123.45
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [10, 500],
      },
    },
    category: {
      type: DataTypes.ENUM,
      values: ["jewelery", "electronics", "women's clothing", "men's clothing"],
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Item;
