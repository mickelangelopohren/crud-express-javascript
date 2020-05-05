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

  const patch = async (id, data) => {
    await eventsModel.patch(database, { id, ...data });
    const event = await eventsModel.findById(database, id);
    return event;
  };

  const remove = async (id) => {
    const status = await eventsModel.remove(database, id);
    if (!status === 1) {
      // lançar error console
    }
    return status;
  };
  return {
    get, post, findById, patch, remove,
  };
};

module.exports = eventsService;
