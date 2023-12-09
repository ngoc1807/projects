"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog_Cate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog_Cate.belongsTo(models.Blog, { foreignKey: "BlogId" });
    }
  }
  Blog_Cate.init(
    {
      BlogId: {
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
      modelName: "Blog_Cate",
    }
  );
  return Blog_Cate;
};
