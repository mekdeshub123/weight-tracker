'use strict';
module.exports = (sequelize, DataTypes) => {
  const Records = sequelize.define('Records', {
    date: DataTypes.STRING,
    Weight: DataTypes.STRING,
    WLoss: DataTypes.STRING,
    Delete: DataTypes.STRING
  }, {});
  Records.associate = function(models) {
    // associations can be defined here
  };
  return Records;
};