const { eventsService } = require('../../container');

const post = async (req, res, next) => {
  try {
    const event = await eventsService.post(req.body);
    res.send(event);
  } catch (err) {
    next(err);
  }
};

exports.post = post;


const get = async (req, res, next) => {
  try {
    const events = await eventsService.get();
    res.send(events);
  } catch (err) {
    next(err);
  }
};

exports.get = get;


const findById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const event = await eventsService.findById(id);
    res.send(event);
  } catch (err) {
    next(err);
  }
};

exports.findById = findById;

const patch = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const event = await eventsService.patch(id, req.body);
    res.send(event);
  } catch (err) {
    next(err);
  }
};

exports.patch = patch;


const remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await eventsService.remove(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

exports.remove = remove;
