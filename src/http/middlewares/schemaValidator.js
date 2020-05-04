const Joi = require('joi');

module.exports = (schema) => (req, res, next) => {
  const validation = Joi.validate(req, schema, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  if (validation.error) {
    console.log(validation.error.details);
    return next('erro de validação');
  }

  Object.assign(req, validation.value);

  return next();
};
