'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_invoice = sequelize.define('product_invoice', {
    quantity: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
  }, {});
  product_invoice.associate = function(models) {
    // associations can be defined here
  };
  return product_invoice;
};