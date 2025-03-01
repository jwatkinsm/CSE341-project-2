const express = require("express");
const routes = express.Router();
const { requiresAuth } = require("express-openid-connect");

const ownersController = require("../Controllers/owners");
const validator = require("../Utilities/Validation");

routes.get("/", ownersController.getAll);

routes.get("/:id", ownersController.getSingle);

routes.post(
  "/",
  requiresAuth(),
  validator.saveOwner,
  ownersController.createOwner,
);

routes.put(
  "/:id",
  requiresAuth(),
  validator.saveOwner,
  ownersController.updateOwner,
);

routes.delete("/:id", requiresAuth(), ownersController.deleteOwner);

module.exports = routes;
