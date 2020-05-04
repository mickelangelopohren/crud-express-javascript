const { eventsService } = require('../../container');

const getAll = async (req, res, next) => {
  try {
    const events = await eventsService.getAll(req.body);
    res.send(events);
  } catch (err) {
    next(err);
  }
};

exports.getAll = getAll;
