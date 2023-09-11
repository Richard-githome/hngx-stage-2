const dotenv = require("dotenv").config();
const http = require("http");
const app = require("./app");
const { mongoConnect } = require("./services/mongoConnect");
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoConnect();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();