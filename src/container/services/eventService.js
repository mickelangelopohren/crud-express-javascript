const { eventModel } = require('../models');

const eventService = (tmpValue) => {
  const getAll = async () => {
    const events = await eventModel.getAll(tmpValue);
    return events;
  };

  return { getAll };
};

module.exports = eventService;
