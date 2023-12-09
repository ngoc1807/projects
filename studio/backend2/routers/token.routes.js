const router = require("express").Router();

const { verifyRefreshJWT } = require("../helper/jwt.helper");

const models = require("../models");
const User = models.User;
const User_Role = models.User_Role;
router.all("/token", async (req, res, next) => {
  const { authorization } = req.headers;

  //  1.make sure the token  is valid

  const decode = await verifyRefreshJWT(authorization);

   // check if the jwt is email in database
// if()


  res.json({ message: decode });
});

module.exports = router;
