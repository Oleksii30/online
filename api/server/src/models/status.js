'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    sensorId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    Status.belongsTo(models.Sensors)
  };
  return Status;
};