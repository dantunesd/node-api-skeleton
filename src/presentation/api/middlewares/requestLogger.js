const logger = require('../../../infrastructure/logger');

function requestLogger(req, res) {
  logger.info('logging request and response', { req, res });
}

module.exports = requestLogger;
