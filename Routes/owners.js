const express = require("express");
const routes = express.Router();

const ownersController = require("../Controllers");

routes.get("/", ownersController.getAll);

routes.get("/:id", ownersController.getSingle);

routes.post("/", ownersController.createContact);

routes.put("/:id", ownersController.updateContact);

routes.delete("/:id", ownersController.deleteContact);

module.exports = routes;
