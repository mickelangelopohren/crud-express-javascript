const { eventsModel } = require('../models');

const eventsService = (tmpValue) => {
  const getAll = async () => {
    const events = await eventsModel.getAll(tmpValue);
    return events;
  };

  return { getAll };
};

module.exports = eventsService;
