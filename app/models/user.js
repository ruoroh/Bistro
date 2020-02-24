'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.invoice, models.receipt, {
      foreignKey: 'userId'
    });
  };
  return user;
};