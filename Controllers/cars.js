const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId; // Ensure you import ObjectId

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("cars").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id); // Convert the string ID to an ObjectId
  const result = await mongodb
    .getDb()
    .db()
    .collection("cars")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createCar = async (req, res) => {
  const car = {
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    interiorColor: req.body.interiorColor,
    type: req.body.type,
    milage: req.body.milage,
  };
  const response = await mongodb.getDb().db().collection("cars").insertOne(car);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the contact.",
      );
  }
};
const updateCar = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const car = {
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    interiorColor: req.body.interiorColor,
    type: req.body.type,
    milage: req.body.milage,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("cars")
    .replaceOne({ _id: userId }, car);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the contact.",
      );
  }
};
const deleteCar = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("cars")
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the contact.",
      );
  }
};

module.exports = {
  getAll,
  getSingle,
  createCar,
  updateCar,
  deleteCar,
};
