const { booking } = require("../controllers");

const router = require("express").Router();

router.get("/tour", booking.findAll);

router.get("/tour/:id", booking.findOne);

router.post("/tour", booking.create);
router.patch("/tour/:id", booking.update);
router.delete("/tour/:id", booking.delete);
router.patch("/tourStatus/:id", booking.updateStatus);
router.get("/tour-home", booking.bookingHome);
module.exports = router;
