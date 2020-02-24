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
    product.hasMany(models.product_invoice, models.product_receipt, {
      foreignKey: 'productId'
    });
  };
  return product;
};