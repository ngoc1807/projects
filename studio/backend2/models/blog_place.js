"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog_Place.belongsTo(models.Blog, { foreignKey: "BlogId" });
    }
  }
  Blog_Place.init(
    {
      BlogId: {
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
      modelName: "Blog_Place",
    }
  );
  return Blog_Place;
};
