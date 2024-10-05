const cors = require("cors");

const corsOptions = cors({
  origin: "*", // Adjust based on requirements
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

module.exports = corsOptions;
