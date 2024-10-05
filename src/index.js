const app = require("./app");
const { PrismaClient } = require("@prisma/client");
const logger = require("./utils/logger");

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

// Close Prisma connection when the app shuts down
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
