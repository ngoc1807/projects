"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Place - ALBUM

      Place.belongsToMany(models.Album, {
        through: "Album_Places",
        as: "Album_NN_Place",
      });
      Place.hasMany(models.Place_Img);

      // PLACE - BLOG

      Place.belongsToMany(models.Blog, {
        through: "Blog_Places",
        as: "Blog_NN_Place",
      });
      // PLACE - BOOKING
      Place.belongsToMany(models.Booking, {
        through: "Booking_Places",
        as: "Booking_NN_Place",
      });
    }
  }
  Place.init(
    {
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Place",
    }
  );
  return Place;
};
