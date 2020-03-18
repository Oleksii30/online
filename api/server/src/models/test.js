'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};