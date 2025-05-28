const Joi = require("joi");

const personSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  age: Joi.number().integer().min(1).max(120).required(),
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  mobile: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
});

const validatePerson = (req, res, next) => {
  const { error } = personSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validatePerson;
