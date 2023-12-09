"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cate.belongsToMany(models.Album, {
        through: "Album_Cates",
        as: "Album_NN_Cate",
      });

      Cate.belongsToMany(models.Blog, {
        through: "Blog_Cates",
        as: "Blog_NN_Cate",
      });

      Cate.belongsToMany(models.Booking, {
        through: "Booking_Cates",
        as: "Booking_NN_Cate",
      });
    }
  }
  Cate.init(
    {
      name: DataTypes.STRING,
      images: DataTypes.STRING(1000),
      desc: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Cate",
    }
  );
  return Cate;
};
