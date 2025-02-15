const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    //make should not be empty
    body("firstName")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Please enter a valid first name."),

    body("lastName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid last name."),

    body("email").trim().isEmail().withMessage("Please provide a valid email."),

    body("favoriteColor")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please provide a valid color."),

    body("birthday")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Please enter a valid birthdate"),
  ];
};
const carValidationRules = () => {
  return [
    //make should not be empty
    body("make")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid car make."),

    body("model")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid car model."),

    body("color")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid car color."),

    body("year")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid car year."),

    body("interiorColor")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Please enter a valid car interiorColor."),

    body("type")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please enter a valid car type."),

    body("mileage")
      .trim()
      .isNumeric()
      .isLength({ min: 1 })
      .withMessage("Please enter a valid car mileage."),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = {};
  errors.array().forEach((err) => {
    extractedErrors[err.path] = err.msg;
  });
  return res.status(422).json({ errors: extractedErrors });
};

module.exports = { userValidationRules, carValidationRules, validate };
