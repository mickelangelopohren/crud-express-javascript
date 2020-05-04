/** Services */
const eventsService = require('./services/eventsService');

const context = 'tmpString';

module.exports = {
  eventsService: eventsService(context),
};
