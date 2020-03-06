'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserDestination extends sequelize.Sequelize.Model { }

  UserDestination.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User ID cannot null"
        }
      }
    },

    DestinationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Destination ID cannot null"
        }
      }
    },

    date: DataTypes.DATEONLY
  },
    {
      sequelize
    });

  UserDestination.associate = function (models) {
    UserDestination.belongsTo(models.User);
    UserDestination.belongsTo(models.Destination);
  };

  return UserDestination;
};