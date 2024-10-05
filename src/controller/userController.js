const userService = require("../service/userService");
const { z } = require("zod");
const logger = require("../utils/logger");

// Define Zod schemas
const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Signup controller
const signUp = async (req, res, next) => {
  try {
    // Validate request body
    signUpSchema.parse(req.body);
    const { email, password } = req.body;

    const user = await userService.signUp(email, password);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    logger.error("Signup error:", error); // Log the error
    res.status(400).json({ message: "An error occurred. Please try again." }); // Generic message
  }
};

// Login controller
const login = async (req, res, next) => {
  try {
    // Validate request body
    loginSchema.parse(req.body);
    const { email, password } = req.body;

    const { token } = await userService.login(email, password);
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    logger.error("Login error:", error); // Log the error
    res.status(401).json({ message: "An error occurred. Please try again." }); // Generic message
  }
};

module.exports = { signUp, login };
