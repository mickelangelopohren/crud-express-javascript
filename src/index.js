const env = require('./env');
const http = require('./http');

setImmediate(() => {
  http.listen(env.PORT, () => {
    process.send('ready');
  });
});
