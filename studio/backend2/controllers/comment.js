const models = require("../models");

const Comment = models.Comment;
const Rating = models.Rating;
const Blog_Comment = models.Blog_Comment;
// exports.create = async (req, res) => {
//   await Comment.create(req.body, { include: [Rating] })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

exports.create = async (req, res) => {
  await Comment.create(req.body)
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
exports.findAll = async (req, res) => {
  await Comment.findAll()
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
exports.findAllType = async (req, res) => {
  const { CommentId, type } = req.body;

  await Comment.findAll({
    where: { type, CommentId },
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

// exports.findAll = async (req, res) => {
//   await Comment.findAll({
//     include: [Rating],
//   })
//     .then((data) => {
//       res.json({ data: data });
//     })
//     .catch((er) => {
//       throw er;
//     });
// };

// exports.findOne = async (req, res) => {
//   await Comment.findOne({ where: { id: req.params.id } })
//     .then((data) => {
//       res.json({ data: data });
//     })
//     .catch((er) => {
//       throw er;
//     });
// };
exports.delete = async (req, res) => {
  await Comment.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
// exports.update = async (req, res) => {
//   await Comment.update(req.body, { where: { id: req.params.id } })
//     .then((data) => {
//       res.json({ data: data });
//     })
//     .catch((er) => {
//       throw er;
//     });
// };

// {
//   "name" :"d",
//   "Rating":[{
//       "onePoint":1,
//       "twoPoint":3,
//       "therePoint":3,
//       "fourPoint":4,
//       "fivePoint":5
//   }],

// "BlogId":1

// }
// exports.blogComment = async (req, res) => {
//   await Comment.create(req.body, { include: [Rating] })
//     .then((data) => {
//       Blog_Comment.create({
//         BlogId: req.body.BlogId,
//         CommentId: data.id,
//       })
//         .then((data) => res.json(data))
//         .catch((err) => {
//           throw err;
//         });
//     })
//     .catch((err) => {
//       throw err;
//     });
// };
