const createResponseJSON = require("../utils/createResponseJSON");

const getAppStatus = async (req, res) => {
  try {
    res
      .status(200)
      .json(createResponseJSON(true, "Application is up & running! "));
  } catch (err) {
    res
      .status(500)
      .json(createResponseJSON(false, "Server Error", { error: err.message }));
  }
};

module.exports = {
  getAppStatus,
};
