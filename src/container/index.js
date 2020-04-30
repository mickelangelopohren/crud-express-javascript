/** Services */
const eventService = require('./services/eventService');

const context = 'tmpString';

module.exports = {
  eventService: eventService(context),
};
