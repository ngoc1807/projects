const models = require("../models");
const Category = models.Cate;
const Place = models.Place;
const User_Album = models.User_Album;
const User = models.User;
const Album = models.Album;
const { Op } = require("sequelize");
checkExitsPlace = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await Place.findOne({
      where: { name: name },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Tên đã được sử dụng",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};

checkExitsCate = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await Category.findOne({
      where: { name: name },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Tên đã được sử dụng",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};

checkExitsUserAlbum = async (req, res, next) => {
  const { UserId, AlbumId } = req.body;

  try {
    if (!UserId || !AlbumId) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await User_Album.findOne({
      where: { UserId: UserId, AlbumId: AlbumId },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Liên kết đã tồn tại",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports = {
  checkExitsCate,
  checkExitsPlace,
  checkExitsUserAlbum,
};
