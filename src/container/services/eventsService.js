const { eventsModel } = require('../models');

const eventsService = ({ database }) => {
  const post = async (data) => {
    const [eventId] = await eventsModel.post(database, data);
    const event = await eventsModel.findById(database, eventId);
    return event;
  };

  const get = async () => {
    const events = await eventsModel.get(database);
    return events;
  };

  const findById = async (id) => {
    const event = await eventsModel.findById(database, id);
    if (!event) {
      console.log('não encontrado #tratar');
    }

    return event;
  };

  return { get, post, findById };
};

module.exports = eventsService;
