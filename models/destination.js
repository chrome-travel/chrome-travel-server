'use strict';
module.exports = (sequelize, DataTypes) => {

  class Destination extends sequelize.Sequelize.Model { }

  Destination.init({
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Destination has been registered"
      },
      validate: {
        notNull: {
          args: true,
          msg: "Please enter destination name"
        }
      }
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please enter destination's city"
        }
      }
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please enter destination's country"
        }
      }
    }
  },

  {
    sequelize
  });

  Destination.associate = function (models) {
    Destination.hasMany(models.User)
  };
  return Destination;
};