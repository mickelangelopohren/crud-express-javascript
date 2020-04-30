const { init } = require('@somosphi/logger');

const {
  Logger,
} = init({
  PROJECT_NAME: 'crud_express_javascript',
  OMIT_ROUTES: ['/status', '/info'],
});

module.exports = {
  logger: Logger,
};
