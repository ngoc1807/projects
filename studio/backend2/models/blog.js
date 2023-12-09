"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // CATE

      Blog.belongsToMany(models.Cate, {
        through: "Blog_Cates",
        as: "Blog_NN_Cate",
      });

      Blog.hasMany(models.Blog_Cate, { as: "Blog_ON_Cate" });

      // PLACE

      Blog.belongsToMany(models.Place, {
        through: "Blog_Places",
        as: "Blog_NN_Place",
      });

      Blog.hasMany(models.Blog_Place, { as: "Blog_ON_Place" });

      // Comments

      // Blog.belongsToMany(models.Comment, {
      //   through: "Blog_Comments",
      //   as: "Blog_NN_Comment",
      // });

      // Blog.hasMany(models.Comment, { as: "Blog_ON_Comment" });
    }
  }
  Blog.init(
    {
      authorId: DataTypes.INTEGER,
      parentId: DataTypes.INTEGER,
      title: DataTypes.STRING(500),
      slug: DataTypes.STRING(500),
      summary: DataTypes.TEXT,
      content: DataTypes.TEXT,
      published: DataTypes.BOOLEAN,
      image: DataTypes.STRING(1000),
      like: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
