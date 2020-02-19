'use strict';
module.exports = (sequelize, DataTypes) => {
  const receipt = sequelize.define('receipt', {
    transaction_date: DataTypes.DATE
  }, {});
  receipt.associate = function(models) {
    // associations can be defined here
  };
  return receipt;
};