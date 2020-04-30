const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router({ mergeParams: true });

// router.post(
//   '/',
//   eventController.create,
// );

router.get(
  '/',
  eventController.getAll,
);

// router.put(
//   '/:id',
//   eventController.update,
// );
//
// router.get(
//   '/:id',
//   eventController.findById,
// );
//
// router.delete(
//   '/:id',
//   eventController.delete,
// );

module.exports = router;
