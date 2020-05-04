const { eventsModel } = require('../models');

const eventsService = ({ database }) => {
  const get = async () => {
    const events = await eventsModel.get(database);
    return events;
  };

  return { get };
};

module.exports = eventsService;
