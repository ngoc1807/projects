"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Album.belongsTo(models.User);

      Album.belongsToMany(models.User_Album, {
        through: "User_Albums",
        as: "Album_NN_User",
      });

      Album.hasMany(models.Album_Img);

      Album.belongsToMany(models.Cate, {
        through: "Album_Cates",
        as: "Album_NN_Cate",
      });

      Album.belongsToMany(models.Place, {
        through: "Album_Places",
        as: "Album_NN_Place",
      });

      Album.hasMany(models.Album_Place, { as: "Album_ON_Place" });
      Album.hasMany(models.Album_Cate, { as: "Album_ON_Cate" });
    }
  }
  Album.init(
    {
      name: DataTypes.STRING,
      avatar: DataTypes.STRING(1000),
      desc: DataTypes.STRING(1000),
      author: DataTypes.STRING,
      camera_name: DataTypes.STRING,
      camera_eyes: DataTypes.STRING,
      camera_len: DataTypes.STRING,
      camera_stopwatch: DataTypes.STRING,
      camera_iso: DataTypes.STRING,
      like: DataTypes.INTEGER,
      published: DataTypes.BOOLEAN,
      // UserId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "User",
      //     key: "id",
      //   },
      // },
    },
    {
      sequelize,
      modelName: "Album",
    }
  );
  return Album;
};
