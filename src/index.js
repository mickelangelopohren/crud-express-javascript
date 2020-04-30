const env = require('./env');
const http = require('./http');
const { logger } = require('./logger');


/* Start server */
http.listen(env.PORT, () => {
  logger.info('http.started', env.PORT);
  process.send('ready');
});
