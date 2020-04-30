const env = require('./env');
const http = require('./http');
const { logger } = require('./logger');


/* Start server */
const server = http.listen(env.PORT, () => {
  logger.info('http.started', env.PORT);
  process.send('ready');
});

const onExitProcess = () => {
  server.close(() => {
    process.exit(0);
  });
};

/* process handler */
process.stdin.resume();
process.on('SIGINT', onExitProcess);
process.on('SIGTERM', onExitProcess);

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`Unhandled rejection (reason=${reason}, promise=${promise}`);
});
