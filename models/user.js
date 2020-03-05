'use strict';
const { hashPass } = require('./../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please enter your fullname"
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email has been registered!"
      },
      validate: {
        notNull: {
          args: true,
          msg: "Please enter your email"
        },
        isEmail: {
          args: true,
          msg: "Please input with valid email"
        }
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please enter your password"
        },
        len: {
          args: [6],
          msg: "Your password must contain at least 6 characters"
        }
      }
    },

    phone_number: DataTypes.INTEGER,

    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select your gender"
        }
      }
    },

    is_active: DataTypes.BOOLEAN,
    role: DataTypes.BOOLEAN,
  }, 
  {
    hooks: {
      beforeCreate: (user, options) => {
        user.is_active = true,
        user.role = false
      },
      beforeValidate: (user, options) => {
        const password = hashPass(user.password)
        console.log(password)
        user.password = password
      }
    },
    sequelize
  });

  User.associate = function (models) {
    User.hasMany(models.UserDestination);
  };
  
  return User;
};