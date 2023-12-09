"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album_Place.belongsTo(models.Album, { foreignKey: "AlbumId" });
    }
  }
  Album_Place.init(
    {
      AlbumId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Album",
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
      modelName: "Album_Place",
    }
  );
  return Album_Place;
};
