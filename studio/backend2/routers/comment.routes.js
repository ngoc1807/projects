const { comment } = require("../controllers");

const router = require("express").Router();

router.get("/comment", comment.findAll);

// router.get("/comment/:id", comment.findOne);

router.post("/comment", comment.create);
router.post("/comment-type", comment.findAllType);
// router.patch("/comment/:id", comment.update);
router.delete("/comment/:id", comment.delete);

// router.post("/blogComment", comment.blogComment);

module.exports = router;
