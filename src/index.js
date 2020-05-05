const env = require('./env');
const http = require('./http');
// const { logger } = require('./logger');


setImmediate(() => {
  http.listen(env.PORT, () => {
    // logger.info('http.started', env.PORT);
    process.send('ready');
  });


  process.stdin.resume();
  // process.on('unhandledRejection', (reason, promise) => {
  // logger.error(`Unhandled rejection (reason=${reason}, promise=${promise}`);
  // });
});
