const { connect } = require("mongoose");
const config = require("config");
const Admins = require("../models/Admin");

const run = async (app) => {
  await connect(config.get("MONGO_URI"));

  const admin = await Admins.findOne();
  const username = config.get("admin_username");
  const password = config.get("admin_password");

  if (!admin)
    Admins.create({
      username: username,
      password: password,
    });

  const PORT = config.get("PORT");
  app.listen(PORT, () => {
    console.log(PORT);
  });
};

module.exports = run;
