const jwt = require("jsonwebtoken");

const createAccessJWT = (payload) => {
  const accessJWT = jwt.sign(
    { payload },
    process.env.JWT_ACCESS_SECRET
    // {
    // expiresIn: "15m",
    // }
  );
  return Promise.resolve(accessJWT);
};

const createRefreshJWT = (payload) => {
  const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });
  return Promise.resolve(refreshJWT);
};

const verifyAccessJWT = (payload) => {
  try {
    return jwt.verify(payload, process.env.JWT_ACCESS_SECRET);
  } catch (error) {
    return error;
  }
};
const verifyRefreshJWT = (payload) => {
  try {
    return jwt.verify(payload, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    return error;
  }
};
module.exports = {
  createAccessJWT,
  createRefreshJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
};
