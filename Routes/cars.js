const express = require("express");
const routes = express.Router();

const carsController = require("../Controllers/cars");
const validator = require("../Utilities/Validation");

routes.get("/", carsController.getAll);

routes.get("/:id", carsController.getSingle);

routes.post("/", validator.saveCar, carsController.createCar);

routes.put("/:id", validator.saveCar, carsController.updateCar);

routes.delete("/:id", carsController.deleteCar);

module.exports = routes;
