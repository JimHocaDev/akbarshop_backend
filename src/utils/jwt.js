const jwt = require("jsonwebtoken");

const sign = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });

const verify = (payload, err, data) => {
  jwt.verify(payload, process.env.SECRET_KEY, err, data);
};

module.exports = {
  sign,
  verify,
};
