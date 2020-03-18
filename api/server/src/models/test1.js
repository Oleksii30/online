'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test1 = sequelize.define('Test1', {
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Test1.associate = function(models) {
    // associations can be defined here
  };
  return Test1;
};