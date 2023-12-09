"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // COMMENT - BLOG
      // Comment.belongsToMany(models.Blog, {
      //   through: "Blog_Comments",
      //   as: "Blog_NN_Comment",
      // });

      // COMMENT - BOOKING

      // Comment.belongsToMany(models.Booking, {
      //   through: "Booking_comments",
      //   as: "Booking_NN_Comment",
      // });

      // COMMENT - RATING
      Comment.hasOne(models.Rating);

      // COMMENT - COMMENT
      // Comment.hasMany(models.Comment);
    }
  }

  Comment.init(
    {
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      email: DataTypes.STRING,
      content: DataTypes.TEXT,
      point: DataTypes.INTEGER,
      type: DataTypes.STRING,
      CommentId: DataTypes.INTEGER,
      avatar: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
