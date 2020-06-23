require("dotenv").config();
const express = require("express");

const server = express();

server.listen(process.env.PORT || 3001, () =>
  console.log(`Server listening on ${process.env.PORT || 3000}`)
);
