const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId; // Ensure you import ObjectId

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("owners").find();
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
    .collection("owners")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createOwner = async (req, res) => {
  const owner = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    vehiclesOwned: req.body.vehiclesOwned,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("owners")
    .insertOne(owner);
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
const updateOwner = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const owner = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    vehiclesOwned: req.body.vehiclesOwned,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection("owners")
    .replaceOne({ _id: userId }, owner);
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
const deleteOwner = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection("owners")
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
  createOwner,
  updateOwner,
  deleteOwner,
};
