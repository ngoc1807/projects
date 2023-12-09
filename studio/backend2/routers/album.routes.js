const { album } = require("../controllers");
const { checkExitsUserAlbum } = require("../middleware/verifyCommon");

const router = require("express").Router();

router.get("/album", album.findAll);

router.get("/album/:id", album.findOne);

router.post("/album", album.create);
router.patch("/album/:id", album.update);
router.delete("/album/:id", album.delete);
router.patch("/albumStatus/:id", album.updateStatus);

router.get("/user-album", album.findAllUserAlbum);
router.post("/user-album", checkExitsUserAlbum, album.createUserAlbum);
router.get("/user-album/:id", album.findOneUserAlbum);

router.delete("/user-album/:id", album.deleteUserAlbum);
router.patch("/user-album/:id", album.updateUserAlbum);

router.get("/user-album-user/:id", album.findAllUserAlbumProfile);
router.post("/user-album-one-user", album.findOneUserAlbumForUser);

router.get("/image", album.listImage);

module.exports = router;
