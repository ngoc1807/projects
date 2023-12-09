const { randomArray } = require("../helper/bcrypt.helper");
const models = require("../models");

const Booking = models.Booking;
const Place = models.Place;
const Category = models.Cate;
const Booking_Cate = models.Booking_Cate;
const Booking_Place = models.Booking_Place;
const Place_Img = models.Place_Img;
exports.create = async (req, res) => {
  await Booking.create(req.body, {
    include: [
      { model: Booking_Cate, as: "Booking_ON_Cate" },
      { model: Booking_Place, as: "Booking_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

exports.findAll = async (req, res) => {
  await Booking.findAll({
    include: [
      {
        model: Category,
        as: "Booking_NN_Cate",
      },
      { model: Place, as: "Booking_NN_Place", include: [Place_Img] },
    ],
  })
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};

exports.findOne = async (req, res) => {
  await Booking.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Category,
        as: "Booking_NN_Cate",
      },
      { model: Place, as: "Booking_NN_Place", include: [Place_Img] },
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
  await Booking.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", message: " Delete Successfully" });
    })
    .catch((er) => {
      res.send({ status: "error", message: "Error " + er });
    });
};

exports.updateStatus = async (req, res) => {
  const result = await Booking.update(req.body, {
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

exports.update = async (req, res) => {
  await Booking.destroy({ where: { id: req.params.id } })
    .then()
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  const result = await Booking.create(req.body, {
    include: [
      { model: Booking_Cate, as: "Booking_ON_Cate" },
      { model: Booking_Place, as: "Booking_ON_Place" },
    ],
  })
    .then((data) => res.send({ status: "success", data }))
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });

  return result;
};

exports.bookingHome = async (req, res) => {
  await Booking.findAll({
    include: [
      {
        model: Category,
        as: "Booking_NN_Cate",
      },
      { model: Place, as: "Booking_NN_Place", include: [Place_Img] },
    ],
  })
    .then((data) => {
      if (data.length >= 6) {
        let a = randomArray(data, 6);

        res.send({ status: "success", data: a });
      } else {
        res.send({ status: "success", data });
      }
    })
    .catch((err) => {
      res.send({ status: "error", message: "Error " + err });
    });
};
