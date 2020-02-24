'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_receipt = sequelize.define('product_receipt', {
    quantity: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
  }, {});
  product_receipt.associate = function(models) {
    product_receipt.belongsTo(models.product, {
      foreignKey: 'productId'
    });
    product_receipt.belongsTo(models.receipt, {
      foreignKey: 'receiptNumber'
    });
  };
  return product_receipt;
};