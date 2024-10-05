const jwt = require("jsonwebtoken");
const prisma = require("../db/client");
const { hashPassword, comparePassword } = require("../utils/hashUtils");

const JWT_SECRET = process.env.JWT_SECRET;

// Signup service
const signUp = async (email, password) => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
    },
  });

  return newUser;
};

// Login service
const login = async (email, password) => {
  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare the entered password with the stored hash
  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email }, // Payload
    JWT_SECRET, // Secret key
    { expiresIn: "1h" } // Token expiration
  );

  return { token };
};

module.exports = {
  signUp,
  login,
};
