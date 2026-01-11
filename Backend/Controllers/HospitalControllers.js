const User = require("../Models/HospitalModels");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword, role });

    res.send("Registered Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User Not Found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send("Wrong Password");

    res.json({
      message: "Login Successful",
      role: user.role,
      user: user
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" });
    res.json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
