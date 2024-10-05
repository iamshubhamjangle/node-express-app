const express = require("express");
const bodyParser = require("body-parser");
const appRoutes = require("./routes/appRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./utils/errorHandler.js");

const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api/status", appRoutes);
app.use("/api/user", userRoutes);

// Error handling middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Global error handler

module.exports = app;
