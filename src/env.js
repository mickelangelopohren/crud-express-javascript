require('dotenv').config();

module.exports = {
  /* Application */
  PORT: parseInt(process.env.PORT, 10) || 3000,
};
