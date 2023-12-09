const { blog } = require("../controllers");

const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken");
router.get("/blog", blog.findAll);

router.get("/blog/:id", blog.findOne);

router.post("/blog", blog.create);
router.patch("/blogStatus/:id", blog.updateStatus);
router.patch("/blog/:id", blog.update);
router.delete("/blog/:id", blog.delete);
router.get("/blogUser/:id", blog.blogUser);

router.get("/blog-home", blog.blogHome);
// router.get("/blog", verifyToken, blog.findAll);

// router.get("/blog/:id", verifyToken, blog.findOne);

// router.post("/blog", verifyToken, blog.create);
// router.patch("/blog/:id", verifyToken, blog.update);
// router.delete("/blog/:id", verifyToken, blog.delete);

module.exports = router;

// {
//     "authorId": 1,
//        "parentId": 1,
//        "title": "bai viet 1",
//        "slug": "slug bai viet 1",
//        "summary": "tom tat 1",
//        "content": "noi dung 1",
//        "published": true,
//        "image": "abc.jpg",
//        "like": 100
//  }
