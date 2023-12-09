const { randomArray } = require("../helper/bcrypt.helper");
const models = require("../models");

const Album = models.Album;
const Album_Img = models.Album_Img;
const Album_Cate = models.Album_Cate;
const Album_Place = models.Album_Place;
const Place = models.Place;
const Place_Img = models.Place_Img;
const Category = models.Cate;
const User_Album = models.User_Album;
const User = models.User;
// In put

// {
//   "name" : "a",
//   "Album_ON_Cate": [{"CateId":1},{"CateId":2}],
//  "Album_ON_Place": [
//              {"PlaceId":1}
//          ]
//  }

exports.create = async (req, res) => {
  const result = await Album.create(req.body, {
    include: [
      Album_Img,
      { model: Album_Cate, as: "Album_ON_Cate" },
      { model: Album_Place, as: "Album_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;

  //   res.send({ data: paths });
};

exports.findAll = async (req, res) => {
  const result = Album.findAll({
    include: [
      Album_Img,
      {
        model: Category,
        as: "Album_NN_Cate",
      },
      { model: Place, as: "Album_NN_Place", include: [Place_Img] },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};

exports.findOne = async (req, res) => {
  await Album.findOne({
    where: { id: req.params.id },
    include: [
      Album_Img,
      {
        model: Category,
        as: "Album_NN_Cate",
      },
      { model: Place, as: "Album_NN_Place", include: [Place_Img] },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};
exports.delete = async (req, res) => {
  await Album.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};
// //////////////////////////////////////////////
exports.update = async (req, res) => {
  // console.log(req.body);
  await Album.destroy({ where: { id: req.params.id } })
    .then()
    .catch((er) => {
      throw er;
    });
  await Album.create(req.body, {
    include: [
      Album_Img,
      { model: Album_Cate, as: "Album_ON_Cate" },
      { model: Album_Place, as: "Album_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
exports.updateStatus = async (req, res) => {
  const result = await Album.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => {
      res.send({ status: "success", message: " update Successfully " });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};

exports.createUserAlbum = async (req, res) => {
  const result = await User_Album.create(req.body)
    .then(async (data) => {
      if (data) {
        await User_Album.findOne({
          where: { id: data.id },
          include: [{ model: User }, { model: Album }],
        })
          .then((result) => {
            res.send({ status: "success", data: result });
          })
          .catch((er) => {
            res.send({ status: "error", message: "Error " + er });
          });
      }
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};
exports.findAllUserAlbum = async (req, res) => {
  await User_Album.findAll({
    include: [{ model: User }, { model: Album }],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

exports.findAllUserAlbumProfile = async (req, res) => {
  await User_Album.findAll({
    where: { UserId: req.params.id },
    include: [
      { model: User },
      {
        model: Album,
        include: [
          Album_Img,
          {
            model: Category,
            as: "Album_NN_Cate",
          },
          { model: Place, as: "Album_NN_Place", include: [Place_Img] },
        ],
      },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

exports.updateUserAlbum = async (req, res) => {
  const result = await User_Album.update(req.body, {
    where: { id: req.params.id },
  })
    .then(async (data) => {
      if (data) {
        await User_Album.findOne({
          where: { id: req.params.id },
          include: [{ model: User }, { model: Album }],
        })
          .then((result) => {
            res.send({ status: "success", data: result });
          })
          .catch((er) => {
            res.send({ status: "error", message: "Error " + er });
          });
      }
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};

exports.findOneUserAlbum = async (req, res) => {
  await User_Album.findOne({
    where: { id: req.params.id },
    include: [
      { model: User },
      {
        model: Album,
        include: [
          Album_Img,
          {
            model: Category,
            as: "Album_NN_Cate",
          },
          { model: Place, as: "Album_NN_Place", include: [Place_Img] },
        ],
      },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};

exports.findOneUserAlbumForUser = async (req, res) => {
  const { UserId, AlbumId } = req.body;

  await User_Album.findOne({
    where: { AlbumId: AlbumId, UserId: UserId },
    include: [
      { model: User },
      {
        model: Album,
        include: [
          Album_Img,
          {
            model: Category,
            as: "Album_NN_Cate",
          },
          { model: Place, as: "Album_NN_Place", include: [Place_Img] },
        ],
      },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};

exports.deleteUserAlbum = async (req, res) => {
  await User_Album.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};

exports.listImage = async (req, res) => {
  await Album_Img.findAll()
    .then((data) => {
      if (data.length >= 8) {
        let a = randomArray(data, 8);

        res.send({ status: "success", data: a });
      } else {
        res.send({ status: "success", data });
      }
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};

// const randomArray = (v, k) => {
//   const listId = v.map((i) => i.id);
//   const resultSort = listId.sort(func);
//   if (listId.length <= k) {
//     return v;
//   } else {
//     const res = resultSort.slice(0, k);

//     return finElementId(v, res);
//   }
// };
// function func(a, b) {
//   return 0.5 - Math.random();
// }
// const finElementId = (v, u) => {
//   let a = [];
//   u.forEach((element) => {
//     const res = v.find((x) => x.id === +element);

//     a.push(res);
//   });

//   return a;
// };
