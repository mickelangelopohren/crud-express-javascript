const env = require('./env');
const http = require('./http');


/* Start server */
http.listen(env.PORT, () => {
  console.log(`Server started on port ${env.PORT}`);
});
