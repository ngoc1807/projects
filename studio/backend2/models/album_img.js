"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album_Img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album_Img.belongsTo(models.Album, { foreignKey: "AlbumId" });
    }
  }
  Album_Img.init(
    {
      AlbumId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Album",
          key: "id",
        },
        onDelete: "CASCADE",
      },

      image: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: "Album_Img",
    }
  );
  return Album_Img;
};
