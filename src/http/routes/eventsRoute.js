const express = require('express');
const eventsController = require('../controllers/eventsController');

const router = express.Router({ mergeParams: true });

// router.post(
//   '/',
//   eventsController.create,
// );

router.get(
  '/',
  eventsController.getAll,
);

// router.put(
//   '/:id',
//   eventsController.update,
// );
//
// router.get(
//   '/:id',
//   eventsController.findById,
// );
//
// router.delete(
//   '/:id',
//   eventsController.delete,
// );

module.exports = router;
