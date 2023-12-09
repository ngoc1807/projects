const { user } = require("../controllers");
const verifyLogin = require("../middleware/verifyLogin");

// const User_Role = models.User_Role;
const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken");

const models = require("../models");
const Role = models.Role;
const User = models.User;
router.post("/user", user.create);
router.get("/user", user.findAll);
router.get("/user/:id", user.findOne);
router.delete("/user/:id", user.delete);
router.patch("/user/:id", user.update);
router.post("/user/UserRole", user.addRole);
router.post("/user/check-email", user.checkEmail);
router.post("/user/change-password", user.updatePassword);
// router.post("/signIn", user.signIn);

// login
router.post("/login", user.login);

// register
router.post(
  "/register",
  [verifyLogin.checkExitsPhone, verifyLogin.checkExitsEmail],
  user.register
);

// get profile user
router.get("/getMe", verifyToken, async (req, res) => {
  const userId = req.userData.payload.userId;

  await User.findOne({
    where: { id: userId },
    include: [Role],
  }).then((user) => {
    res.json({ status: "success", user: user });
  });
});

//
router.post("/user/admin", user.admin);
router.post("/user/test", user.test);

module.exports = router;
