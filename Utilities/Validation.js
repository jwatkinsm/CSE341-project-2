const validator = require("./validator");

const saveCar = (req, res, next) => {
  const validationRule = {
    make: "required|string",
    model: "required|string",
    color: "required|string",
    interiorColor: "required|string",
    type: "required|string",
    milage: "required|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};
const saveOwner = (req, res, next) => {
  const validationRule = {
    firstName: "required|string",
    lastName: "required|string",
    email: "required| email",
    vehiclesOwned: "required|string",
    birthday: "required|string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveCar,
  saveOwner,
};
