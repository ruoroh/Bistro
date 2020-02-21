'use strict';
module.exports = (sequelize, DataTypes) => {
  const invoice = sequelize.define('invoice', {
    transaction_date: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  invoice.associate = function(models) {
    invoice.belongsTo(models.user, {
      foreignKey: {
        name : 'userId',
        type: DataTypes.INTEGER
      }
    });
    invoice.hasMany(models.product_invoice, {
      foreignKey: 'invoiceNumber'
    });
  };
  return invoice;
};