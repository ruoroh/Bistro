'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    last_update: DataTypes.DATE,
    stock_level: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};