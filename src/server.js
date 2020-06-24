require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Package = require("./schema/Package");

const server = express();

mongoose.createConnection(process.env.MONGO_URI);

server.post("/api/submit", (res, req) => {
  let dimensions =
    req.body.length + "x" + req.body.width + "x" + req.body.height;
  let deliveryAddress = req.body.deliver + " " + req.body.deliverApt;
  let pickupAddress = req.body.pickup + " " + req.body.pickupApt;
  let pickupDate = req.body.pickupTime;

  Package.create(
    {
      deliveryAddress: deliveryAddress,
      pickupAddress: pickupAddress,
      pickupDate: pickupDate,
      insurance: req.body.insurance,
      overnight: req.body.overnight,
      weigth: req.body.weight,
      dimensions: dimension,
    },
    (err, doc) => {
      if (err) return err;
      res.send(doc);
    }
  );
});

server.listen(process.env.PORT || 3001, () =>
  console.log(`Server listening on ${process.env.PORT || 3000}`)
);
