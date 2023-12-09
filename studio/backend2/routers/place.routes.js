const { checkExitsPlace } = require("../middleware/verifyCommon");

const { place } = require("../controllers");

const router = require("express").Router();

router.get("/place", place.findAll);

router.get("/place/:id", place.findOne);

router.post("/place", checkExitsPlace, place.create);
router.patch("/place/:id", place.update);
router.delete("/place/:id", place.delete);

module.exports = router;
