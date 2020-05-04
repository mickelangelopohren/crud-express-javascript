const express = require('express');
const eventsSchema = require('../schemas/eventsSchema');
const schemaValidator = require('../middlewares/schemaValidator');
const eventsController = require('../controllers/eventsController');

const router = express.Router({ mergeParams: true });

router.post(
  '/',
  schemaValidator(eventsSchema.post),
  eventsController.post,
);

router.get(
  '/',
  schemaValidator(eventsSchema.get),
  eventsController.get,
);

router.patch(
  '/:id',
  schemaValidator(eventsSchema.patch),
  eventsController.patch,
);

router.get(
  '/:id',
  schemaValidator(eventsSchema.findById),
  eventsController.findById,
);

router.delete(
  '/:id',
  // Same as find, just check the event id
  schemaValidator(eventsSchema.findById),
  eventsController.remove,
);

module.exports = router;
