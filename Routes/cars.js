const express = require("express");
const routes = express.Router();

const carsController = require("../Controllers");

routes.get("/", carsController.getAll);

routes.get("/:id", carsController.getSingle);

routes.post("/", carsController.createContact);

routes.put("/:id", carsController.updateContact);

routes.delete("/:id", carsController.deleteContact);

module.exports = routes;
