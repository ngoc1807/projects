"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking_Place.belongsTo(models.Booking, { foreignKey: "BookingId" });
    }
  }
  Booking_Place.init(
    {
      BookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Blog",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      PlaceId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Place",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Booking_Place",
    }
  );
  return Booking_Place;
};
