const models = require("../models");

const Category = models.Cate;

exports.create = async (req, res) => {
  const result = await Category.create(req.body)
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};

exports.findAll = async (req, res) => {
  const result = await Category.findAll()
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};

exports.findOne = async (req, res) => {
  const result = await Category.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};
exports.delete = async (req, res) => {
  const result = await Category.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};
exports.update = async (req, res) => {
  const result = await Category.update(req.body, {
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
