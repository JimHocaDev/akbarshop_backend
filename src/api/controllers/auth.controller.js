const Admins = require("../../models/Admin");
const Users = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../../utils/jwt");

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admins.findOne({ username });
    if (!admin)
      return res.status(403).json({ message: "Invalid username or password" });

    const compare = await bcrypt.compare(password, admin.password);
    if (!compare)
      return res.status(403).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: admin.id, role: "admin" });
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(403).json({ message: "Invalid username or password" });
    }

    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.status(403).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id });
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, 10);

    const findUser = await Users.findOne({ email });

    if (findUser) {
      return res.status(403).json({ message: "Email already exists" });
    } else {
      await Users.create({
        email,
        password: hashedPass,
      });
      res.status(200).json({ message: "Successfully register" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
