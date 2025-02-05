const express = require("express");
const routes = express.Router();

const ownersController = require("../Controllers/owners");

routes.get("/", ownersController.getAll);

routes.get("/:id", ownersController.getSingle);

routes.post("/", ownersController.createOwner);

routes.put("/:id", ownersController.updateOwner);

routes.delete("/:id", ownersController.deleteOwner);

module.exports = routes;
