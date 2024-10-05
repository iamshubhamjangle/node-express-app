const prisma = require("../db/client");

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

module.exports = {
  getAllUsers,
};
