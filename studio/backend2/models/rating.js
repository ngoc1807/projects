"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Comment, { foreignKey: "CommentId" });
    }
  }
  Rating.init(
    {
      CommentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Comment",
          key: "id",
        },
      },

      onePoint: DataTypes.INTEGER,
      twoPoint: DataTypes.INTEGER,
      therePoint: DataTypes.INTEGER,
      fourPoint: DataTypes.INTEGER,
      fivePoint: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
