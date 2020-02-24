'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_invoice = sequelize.define('product_invoice', {
    quantity: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER
  }, {});
  product_invoice.associate = function(models) {
    product_invoice.belongsTo(models.product, {
      foreignKey: 'productId'
    });
    product_invoice.belongsTo(models.invoice, {
      foreignKey: 'invoiceNumber'
    });
  };
  return product_invoice;
};