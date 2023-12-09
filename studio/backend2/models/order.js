"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      order.belongsTo(models.User, { foreignKey: "UserId" });
      order.belongsTo(models.Booking, { foreignKey: "BookingId" });
    }
  }
  order.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      BookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Booking",
          key: "id",
        },
      },

      time: DataTypes.STRING,
      pay: DataTypes.BOOLEAN,
      note: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
