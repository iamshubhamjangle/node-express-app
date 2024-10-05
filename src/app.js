const express = require("express");
const bodyParser = require("body-parser");
const appRoutes = require("./routes/appRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const limiter = require("./utils/rateLimiter.js");
const corsOptions = require("./utils/cors.js");
const { notFound, errorHandler } = require("./utils/errorHandler.js");

const app = express();

// Use CORS
app.use(corsOptions);

// Use Rate Limiter
app.use(limiter);

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api/status", appRoutes);
app.use("/api/user", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
