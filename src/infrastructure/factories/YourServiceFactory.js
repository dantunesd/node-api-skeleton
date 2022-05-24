const YourService = require('../../application/YourService');
const YourRepository = require('../repositories/YourRepository');

const yourRepository = new YourRepository();
const yourService = new YourService(yourRepository);

module.exports = yourService;
