const { connect } = require("mongoose");
const Admins = require("../models/Admin");

const run = async (app) => {
  const MONGO_URI = process.env.MONGO_URI;

  await connect(MONGO_URI);

  const admin = await Admins.findOne();
  const username = process.env.admin_username;
  const password = process.env.admin_password;

  if (!admin)
    Admins.create({
      username: username,
      password: password,
    });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(PORT);
  });
};

module.exports = run;
