const getAppStatus = async (req, res) => {
  try {
    res.status(200).json({ status: "Application is up & running! " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAppStatus,
};
