const models = require("../models");
const User = models.User;
const User_Role = models.User_Role;
const Role = models.Role;
const { createAccessJWT, createRefreshJWT } = require("../helper/jwt.helper");
const bcryptHelper = require("../helper/bcrypt.helper");
exports.login = async (req, res) => {
  const { password, email } = req.body;
  if (!email || !password) {
    return res.send({ status: "error", message: "Invalid from submition !" });
  }
  await User.findOne({
    where: {
      email,
    },
  })
    .then(async (user) => {
      // Check mail

      if (!user) {
        return res.send({ status: "error", message: "Không tìm thấy email" });
      }
      const checkPassword = bcryptHelper.checkPassword(password, user.password);

      // Check Password

      if (!checkPassword) {
        return res.send({ status: "error", message: "Sai mật khẩu" });
      }

      // JWT

      const accessJWT = await createAccessJWT({
        userId: user.id,
        email: user.email,
      });

      const refreshJWT = await createRefreshJWT({
        userId: user.id,
        email: user.email,
      });

      // Result

      res.send({
        status: "success",
        message: "Login Successfully",
        accessJWT: accessJWT,
        refreshJWT: refreshJWT,
      });
    })
    .catch((error) => {
      res.send({ status: "error", message: error });
    });
};

exports.register = async (req, res) => {
  const { password, RoleId } = req.body;

  try {
    const newPassword = bcryptHelper.hashPassword(password);
    await Role.findOne({ where: { name: "user" } })
      .then((data) => {
        User.create(
          {
            ...req.body,
            password: newPassword,
            User_Roles: [
              {
                RoleId: RoleId ? RoleId : data.id,
              },
            ],
          },
          { include: [User_Role] }
        ).then((data) => {
          res.send({ status: "success", message: "Đăng kí thành công" });
        });
      })
      .catch((err) => {
        res.send({ status: "error", message: err.message });
      });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
};

exports.create = async (req, res) => {
  await User.create(req.body, { include: [User_Role] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

//  input
// {
//   "username":"g",
//   "password":"1",
//   "User_Roles":[
//       {
//          "RoleId":2
//       }
//   ]

// }

// react input
// "username":"a",
// "password":"1",
//  "email": "a",
//     "phone": 123,
//     "avatar": "a",
//     "address": "b",
//     "date": null,
//     "status": 1,
// "RoleId":6

exports.findAll = (req, res) => {
  User.findAll({ include: [Role, User_Role] })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send({ status: "error", message: error.message });
    });
};

exports.findOne = (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Role, User_Role] })
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.send({ status: "error", message: error.message });
    });
};
exports.delete = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.send({ status: "error", message: error.message });
    });
};
exports.update = async (req, res) => {
  const { RoleId } = req.body;
  if (RoleId) {
    await User_Role.update(req.body, { where: { UserId: req.params.id } })
      .then()
      .catch((err) => {
        throw err;
      });
  }
  await User.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      res.json({ message: "update success" });
    })
    .catch((err) => {
      throw err;
    });
};
exports.addRole = (req, res) => {
  User_Role.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.checkEmail = async (req, res) => {
  const { password, email } = req.body;

  await User.findOne({
    where: {
      email,
    },
  })
    .then(async (user) => {
      // Check mail

      if (!user) {
        return res.send({ status: "error", message: "Không tìm thấy email" });
      }
      res.send({ status: "success", message: "success" });
    })
    .catch((error) => {
      res.send({ status: "error", message: error });
    });
};

exports.updatePassword = async (req, res) => {
  const { email, password } = req.body;

  const newPassword = bcryptHelper.hashPassword(password);
  await User.update({ password: newPassword }, { where: { email } })
    .then((data) => {
      res.json({ status: "success", message: "update success" });
    })
    .catch((err) => {
      res.send({ status: "error", message: err });
    });
};

exports.test = async (req, res) => {
  Role.findOne({ where: { name: "user" } })
    .then((data) => {
      res.send({ data: data.id });
    })
    .catch((err) => {
      throw err;
    });
};

exports.admin = async (req, res) => {
  const { password } = req.body;

  try {
    const newPassword = bcryptHelper.hashPassword(password);
    await Role.findOne({ where: { name: "admin" } })
      .then((data) => {
        User.create(
          {
            ...req.body,
            password: newPassword,
            User_Roles: [
              {
                RoleId: data.id,
              },
            ],
          },
          { include: [User_Role] }
        ).then((data) => {
          res.send({ status: "success", message: "Đăng kí thành công" });
        });
      })
      .catch((err) => {
        res.send({ status: "error", message: err.message });
      });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
};
