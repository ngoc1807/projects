"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album_Cate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album_Cate.belongsTo(models.Album, { foreignKey: "AlbumId" });
    }
  }
  Album_Cate.init(
    {
      AlbumId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Album",
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
      modelName: "Album_Cate",
    }
  );
  return Album_Cate;
};
