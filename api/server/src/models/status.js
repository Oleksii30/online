'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
   status: DataTypes.STRING
  }, {});
  status.associate = function(models) {
    status.belongsTo(models.sensor)
  };
  return status;
};