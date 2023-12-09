const { randomArray } = require("../helper/bcrypt.helper");
const models = require("../models");

const User = models.User;
const Blog = models.Blog;
const Blog_Cate = models.Blog_Cate;
const Blog_Place = models.Blog_Place;

const Place = models.Place;
const Category = models.Cate;
const Place_Img = models.Place_Img;

exports.create = async (req, res) => {
  const result = await Blog.create(req.body, {
    include: [
      { model: Blog_Cate, as: "Blog_ON_Cate" },
      { model: Blog_Place, as: "Blog_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;

  //   res.json({ data: paths });
};

const getEmailUser = async (id) => {
  console.log(id);
  return await User.findOne({ where: { id } });
};

const getAllEmail = async (data) => {
  const request = data.map((i, k) => {
    return getEmailUser(i.authorId).then((a) => {
      return a.username;
      console.log(a);
    });
  });

  return Promise.all(request);
};

exports.findAll = async (req, res) => {
  const result = await Blog.findAll({
    include: [
      {
        model: Category,
        as: "Blog_NN_Cate",
      },
      { model: Place, as: "Blog_NN_Place", include: [Place_Img] },
    ],
  })
    .then(async (data) => {
      // console.log(data, "data");
      // const a = getAllEmail(data);

      await getAllEmail(data).then((res) => {
        for (let i = 0; i < data.length; i++) {
          data[i].dataValues.author = res[i];
        }
      });

      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};

exports.findOne = async (req, res) => {
  const result = await Blog.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Category,
        as: "Blog_NN_Cate",
      },
      { model: Place, as: "Blog_NN_Place", include: [Place_Img] },
    ],
  })
    .then(async (data) => {
      await User.findOne({ where: { id: data.authorId } }).then((user) => {
        data.dataValues.author = user.username;
        data.dataValues.avatarAuthor = user.avatar;
        res.send({ status: "success", data: data });
      });
      // res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};

exports.delete = async (req, res) => {
  const result = await Blog.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};
exports.updateStatus = async (req, res) => {
  const result = await Blog.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " update Successfully " });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};

exports.update = async (req, res) => {
  await Blog.destroy({ where: { id: req.params.id } })
    .then()
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  const result = await Blog.create(req.body, {
    include: [
      { model: Blog_Cate, as: "Blog_ON_Cate" },
      { model: Blog_Place, as: "Blog_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};

exports.blogUser = async (req, res) => {
  const result = await Blog.findAll({
    where: { authorId: req.params.id },
    include: [
      {
        model: Category,
        as: "Blog_NN_Cate",
      },
      { model: Place, as: "Blog_NN_Place" },
    ],
  })
    .then(async (data) => {
      await User.findOne({ where: { id: req.params.id } }).then((user) => {
        for (let i = 0; i < data.length; i++) {
          data[i].dataValues.author = user.username;
        }
        res.send({ status: "success", data: data });
      });
    })

    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};

exports.blogHome = async (req, res) => {
  const result = await Blog.findAll({
    include: [
      { model: Blog_Cate, as: "Blog_ON_Cate" },
      { model: Blog_Place, as: "Blog_ON_Place" },
    ],
  })
    .then(async (data) => {
      await getAllEmail(data).then((res) => {
        for (let i = 0; i < data.length; i++) {
          data[i].dataValues.author = res[i];
        }
      });

      if (data.length >= 3) {
        let a = randomArray(data, 3);

        res.send({ status: "success", data: a });
      } else {
        res.send({ status: "success", data });
      }
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
  return result;
};
