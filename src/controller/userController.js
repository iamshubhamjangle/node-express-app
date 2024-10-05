const userService = require("../services/userService");

// Signup controller
const signUp = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userService.signUp(email, password);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login controller
const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userService.login(email, password);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { signUp, login };
