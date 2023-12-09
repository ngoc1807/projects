"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking_Cate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking_Cate.belongsTo(models.Booking, { foreignKey: "BookingId" });
    }
  }
  Booking_Cate.init(
    {
      BookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Blog",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      CateId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cate",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Booking_Cate",
    }
  );
  return Booking_Cate;
};
