"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "User_Roles",
      });
      User.belongsToMany(models.User_Album, {
        through: "User_Albums",
        as: "User_NN_Album",
      });

      User.belongsToMany(models.order, {
        through: "orders",
        as: "User_NN_Order",
      });

      User.hasMany(models.User_Role);

      // User.hasMany(models.Blog);
      // User.hasMany(models.Booking);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      avatar: DataTypes.STRING(1000),
      address: DataTypes.STRING,
      date: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      note: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
