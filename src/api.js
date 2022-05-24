require('dotenv').config();

const expressApp = require('./presentation/api/express-app');
const { APP_PORT, APP_NAME } = require('./infrastructure/environment');
const logger = require('./infrastructure/logger');

expressApp.listen(APP_PORT, () => {
  logger.info(`API ${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
