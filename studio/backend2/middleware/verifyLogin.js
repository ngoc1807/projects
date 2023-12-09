const models = require("../models");

const User = models.User;

// check Username Exists
checkExitsUserName = async (req, res, next) => {
  const { username } = req.body;

  try {
    if (!username) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await User.findOne({
      where: { username: username },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Tên đã được sử dụng",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};

checkExitsEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await User.findOne({
      where: { email },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Email đã được sử dụng",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};

checkExitsPhone = async (req, res, next) => {
  const { phone } = req.body;
  try {
    if (!phone) {
      return res.json({ status: "error", message: "Invalid from submition !" });
    }
    await User.findOne({
      where: { phone },
    }).then((data) => {
      if (data) {
        return res.json({
          status: "error",
          message: "Số điện thoại đã được sử dụng",
        });
      }

      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
};
const verifyLogin = {
  checkExitsUserName,
  checkExitsEmail,
  checkExitsPhone,
};
module.exports = verifyLogin;
