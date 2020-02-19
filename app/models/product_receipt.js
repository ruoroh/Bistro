'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_receipt = sequelize.define('product_receipt', {
    quantity: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
  }, {});
  product_receipt.associate = function(models) {
    // associations can be defined here
  };
  return product_receipt;
};