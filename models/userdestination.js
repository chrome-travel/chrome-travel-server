'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserDestination extends sequelize.Sequelize.Model { }

  UserDestination.init({
    UserId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize
  });

  UserDestination.associate = function (models) {
    UserDestination.belongsTo(models.User);
    UserDestination.belongsTo(models.Destination);
  };
  return UserDestination;
};