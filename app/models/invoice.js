'use strict';
module.exports = (sequelize, DataTypes) => {
  const invoice = sequelize.define('invoice', {
    transaction_date: DataTypes.DATE
  }, {});
  invoice.associate = function(models) {
    // associations can be defined here
  };
  return invoice;
};