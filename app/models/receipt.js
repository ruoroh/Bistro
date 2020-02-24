'use strict';
module.exports = (sequelize, DataTypes) => {
  const receipt = sequelize.define('receipt', {
    transaction_date: DataTypes.DATE
  }, {});
  receipt.associate = function(models) {
    receipt.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        type: DataTypes.INTEGER,
        as: 'user'
      }
    });
    receipt.hasMany(models.product_receipt, {
      foreignKey: 'receiptNumber'
    });
  };
  return receipt;
};