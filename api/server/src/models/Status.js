'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
   status: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    Status.belongsTo(models.Sensor)
  };
  return Status;
};