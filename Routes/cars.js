const express = require("express");
const routes = express.Router();

const carsController = require("../Controllers/cars");

routes.get("/", carsController.getAll);

routes.get("/:id", carsController.getSingle);

routes.post("/", carsController.createCar);

routes.put("/:id", carsController.updateCar);

routes.delete("/:id", carsController.deleteCar);

module.exports = routes;
