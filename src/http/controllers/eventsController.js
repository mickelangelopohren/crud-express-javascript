const { eventsService } = require('../../container');

const get = async (req, res, next) => {
  try {
    const events = await eventsService.get(req.body);
    res.send(events);
  } catch (err) {
    next(err);
  }
};

exports.get = get;
