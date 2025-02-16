const express = require("express");
const routes = express.Router();

const ownersController = require("../Controllers/owners");
const validator = require("../Utilities/Validation");

routes.get("/", ownersController.getAll);

routes.get("/:id", ownersController.getSingle);

routes.post("/", validator.saveOwner, ownersController.createOwner);

routes.put("/:id", validator.saveOwner, ownersController.updateOwner);

routes.delete("/:id", ownersController.deleteOwner);

module.exports = routes;
