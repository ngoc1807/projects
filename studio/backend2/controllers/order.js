const models = require("../models");
const order = models.order;
const User = models.User;

const Booking = models.Booking;

exports.create = async (req, res) => {
  const result = await order
    .create(req.body)
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};
exports.findAll = async (req, res) => {
  await order
    .findAll({
      include: [{ model: User }, { model: Booking }],
    })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
exports.findAllUser = async (req, res) => {
  const { UserId } = req.body;

  await order
    .findAll({
      where: { UserId: UserId },
      include: [{ model: User }, { model: Booking }],
    })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

exports.update = async (req, res) => {
  const result = await order
    .update(req.body, {
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

exports.findOne = async (req, res) => {
  await order
    .findOne({
      where: { id: req.params.id },
      include: [{ model: User }, { model: Album }],
    })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};
exports.delete = async (req, res) => {
  await order
    .destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};
