/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
exports.register = async (req, res) => {
  const avatar = req.file.filename;
  const {
    name,
    email,
    password,
    address,
    phone,
    skypeId,
    telegramId,
    discordId,
    linkedin,
    facebook,
    twitter,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      avatar,
      address,
      phone,
      skypeId,
      telegramId,
      discordId,
      linkedin,
      facebook,
      twitter,
    });
    await user.save().then(() => {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(201).json({ message: "User created successfully!" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials!" });

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully!" });
};
