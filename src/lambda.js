require('dotenv').config();

const serverless = require('serverless-http');
const expressApp = require('./presentation/api/express-app');

exports.handler = serverless(expressApp);
