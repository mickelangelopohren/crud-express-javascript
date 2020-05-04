const Joi = require('joi');

exports.post = Joi.object({
  body: Joi.object({
    name: Joi.string().trim().required(),
    presentation_date: Joi.string().trim().required(),
  }).required(),
});

exports.get = Joi.object();

exports.findById = Joi.object({
  params: Joi.object({
    id: Joi.number().positive().required(),
  }),
});

exports.patch = Joi.object({
  params: Joi.object({
    id: Joi.number().positive().required(),
  }),
  body: Joi.object({
    name: Joi.string().trim().optional(),
    presentation_date: Joi.string().trim().optional(),
  }).required(),
});
