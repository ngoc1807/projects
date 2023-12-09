"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place_Img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place_Img.belongsTo(models.Place, { foreignKey: "PlaceId" });
    }
  }
  Place_Img.init(
    {
      image: DataTypes.STRING(1000),
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
      modelName: "Place_Img",
    }
  );
  return Place_Img;
};
