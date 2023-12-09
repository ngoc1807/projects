const jwt = require("jsonwebtoken");

const { verifyAccessJWT } = require("../helper/jwt.helper");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: `Auth failed  : ${error} `,
    });
  }
  next();
};

const verify = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // const token = req.headers.authorization.split(" ")[1];

    const decoded = await verifyAccessJWT(authorization);

    // set userDate = decoded in req
    req.userData = decoded;
  } catch (error) {
    return res.status(403).json({
      message: `Auth failed :${error} `,
    });
  }
  next();
};

module.exports = {
  verifyToken,
  verify,
};
