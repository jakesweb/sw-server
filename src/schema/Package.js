const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Package = new Schema({
  id: ObjectId,
  deliveryAddress: String,
  pickupAddress: String,
  pickupDate: Date,
  insurance: String,
  currentLocation: String,
  overnight: Boolean,
  weight: String,
  dimenesions: String,
  deliver: Boolean,
});

module.exports = mongoose.model("Package", Package);
