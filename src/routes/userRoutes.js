const express = require("express");
const router = express.Router();
const { login, signUp } = require("../controller/userController");
const { auth } = require("../middleware/auth");
const createResponseJSON = require("../utils/createResponseJSON");

router.post("/signup", signUp);
router.post("/login", login);

// Example of a protected route
router.get("/profile", auth, (req, res) => {
  res
    .status(200)
    .json(
      createResponseJSON(true, "This is a protected route", { user: req.user })
    );
});

module.exports = router;
