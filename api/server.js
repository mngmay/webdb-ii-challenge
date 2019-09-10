const express = require("express");

const carsRouter = require("../cars/carsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("<h3>API is connected and server is running</h3>");
});

module.exports = server;
