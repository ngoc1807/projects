const models = require("../models");

const Rating = models.Rating;

exports.create = async (req, res) => {
  await Rating.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.findAll = async (req, res) => {
  await Rating.findAll()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.findOne = async (req, res) => {
  await Rating.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = async (req, res) => {
  await Rating.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = async (req, res) => {
  await Rating.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
