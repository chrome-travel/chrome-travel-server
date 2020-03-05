'use strict';
module.exports = (sequelize, DataTypes) => {

  class Destination extends sequelize.Sequelize.Model { }

  Destination.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize
  });

  Destination.associate = function (models) {
    Destination.hasMany(models.User)
  };
  return Destination;
};