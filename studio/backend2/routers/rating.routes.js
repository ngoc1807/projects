const { rating } = require("../controllers");

const router = require("express").Router();

router.get("/rating", rating.findAll);

router.get("/rating/:id", rating.findOne);

router.post("/rating", rating.create);
router.patch("/rating/:id", rating.update);
router.delete("/rating/:id", rating.delete);
module.exports = router;
