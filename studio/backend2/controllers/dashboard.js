const models = require("../models");
const Album_Img = models.Album_Img;
const Album = models.Album;
const order = models.order;
const Blog = models.Blog;
const Booking = models.Booking;
const Comment = models.Comment;

exports.totalImage = async (req, res) => {
  //   const result =

  let total = {};

  await Album_Img.count()
    .then((data) => {
      total.image = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  await Album.count()
    .then((data) => {
      total.album = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  await Blog.count()
    .then((data) => {
      total.blog = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  await Booking.count()
    .then((data) => {
      total.tour = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  await order
    .count()
    .then((data) => {
      total.order = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  await Comment.count()
    .then((data) => {
      total.comment = data ? data : 0;
    })

    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  await res.send({ status: "success", data: total });

  //   return result;
};
