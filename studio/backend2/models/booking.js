"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Booking.belongsToMany(models.Comment, {
      //   through: "Booking_Comments",
      //   as: "Booking_NN_Comment",
      // });
      Booking.belongsToMany(models.order, {
        through: "orders",
        as: "Booking_NN_Order",
      });
      // CATE

      Booking.belongsToMany(models.Cate, {
        through: "Booking_Cates",
        as: "Booking_NN_Cate",
      });

      Booking.hasMany(models.Booking_Cate, { as: "Booking_ON_Cate" });

      // PLACE

      Booking.belongsToMany(models.Place, {
        through: "Booking_Places",
        as: "Booking_NN_Place",
      });

      Booking.hasMany(models.Booking_Place, { as: "Booking_ON_Place" });
    }
  }
  Booking.init(
    {
      title: DataTypes.STRING,

      desc: DataTypes.TEXT,
      duration: DataTypes.INTEGER,

      people: DataTypes.INTEGER,
      clothes: DataTypes.BOOLEAN,
      image: DataTypes.STRING(1000),
      price: DataTypes.INTEGER,
      sale: DataTypes.INTEGER,
      photographer: DataTypes.INTEGER,
      published: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
