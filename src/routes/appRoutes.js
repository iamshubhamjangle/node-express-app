const express = require("express");
const router = express.Router();
const appController = require("../controller/appController");

router.get("/", appController.getAppStatus);

module.exports = router;
