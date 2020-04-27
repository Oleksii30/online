'use strict';
module.exports = (sequelize, DataTypes) => {
  const sensor = sequelize.define('sensor', {
    type: DataTypes.STRING,
    room: DataTypes.STRING,
    address: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  sensor.associate = function(models) {
    sensor.hasMany(models.status)
  };
  return sensor;
};