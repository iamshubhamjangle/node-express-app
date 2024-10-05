const express = require("express");
const router = express.Router();
const { getAppStatus } = require("../controller/appController");

router.get("/", getAppStatus);

module.exports = router;
