const { dashboard } = require("../controllers");
const router = require("express").Router();

router.get("/dashboard/total", dashboard.totalImage);

module.exports = router;
