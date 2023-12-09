const models = require("../models");

const Place = models.Place;
const Place_Img = models.Place_Img;

exports.create = async (req, res) => {
  const result = await Place.create(req.body, { include: [Place_Img] })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};

exports.findAll = async (req, res) => {
  const result = await Place.findAll({ include: [Place_Img] })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};

exports.findOne = async (req, res) => {
  const result = Place.findOne({
    where: { id: req.params.id },
    include: [Place_Img],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + err });
    });
  return result;
};
exports.delete = async (req, res) => {
  const result = await Place.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};
exports.update = async (req, res) => {
  // c1
  await Place.update(req.body, {
    where: { id: req.params.id },
  })
    .then()
    .catch((er) => {
      throw er;
    });

  await Place_Img.destroy({
    where: { PlaceId: req.params.id },
  })
    .then()
    .catch((er) => {
      throw er;
    });

  const { fileList } = req.body;

  for (let i = 0; i < fileList.length; i++) {
    await Place_Img.create({
      PlaceId: req.params.id,
      image: fileList[i].image,
    })
      .then((data) => {
        res.send({ status: "success", message: " update Successfully " });
      })
      .catch((er) => {
        res.send({ status: "error", message: "Error " + er });
      });
  }

  //c2

  // await Place.destroy({
  //   where: { id: req.params.id },
  // })
  //   .then()
  //   .catch((er) => {
  //     throw er;
  //   });

  // await Place.create(req.body, { include: [Place_Img] })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     throw err;
  //   });

  // res.json("success");
};
