const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");

const appRoutes = require("./routes/appRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const limiter = require("./utils/rateLimiter.js");
const corsOptions = require("./utils/cors.js");
const { notFound, errorHandler } = require("./utils/errorHandler.js");

const app = express();

app.use(corsOptions); // Use CORS protection
app.use(limiter); // Request Rate Limiter
app.use(helmet()); // Secures your Express app by setting various HTTP headers.
app.use(morgan("dev")); // Logs HTTP requests for easier debugging and monitoring.
app.use(compression()); // Reduces the size of the response body, improving performance.

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api/status", appRoutes);
app.use("/api/user", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
