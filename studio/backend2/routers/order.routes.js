const { order } = require("../controllers");

const router = require("express").Router();

router.get("/order", order.findAll);
router.post("/order-user", order.findAllUser);
router.post("/order", order.create);
router.get("/order/:id", order.findOne);

router.delete("/order/:id", order.delete);
router.patch("/order/:id", order.update);

module.exports = router;
