'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sensor = sequelize.define('Sensor', {
    type: DataTypes.STRING,
    room: DataTypes.STRING,
    address: DataTypes.STRING,
    owner: DataTypes.STRING
  }, {});
  Sensor.associate = function(models) {
    Sensor.hasMany(models.Status)
  };
  return Sensor;
};