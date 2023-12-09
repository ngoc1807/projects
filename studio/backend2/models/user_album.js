"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Album.belongsTo(models.User, { foreignKey: "UserId" });
      User_Album.belongsTo(models.Album, { foreignKey: "AlbumId" });
    }
  }
  User_Album.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      AlbumId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Album",
          key: "id",
        },
      },
      linkDrive: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: "User_Album",
    }
  );
  return User_Album;
};
