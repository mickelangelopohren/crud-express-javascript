const { eventService } = require('../../container');

const getAll = async (req, res, next) => {
  try {
    const events = await eventService.getAll(req.body);
    res.send(events);
  } catch (err) {
    next(err);
  }
};

exports.getAll = getAll;
