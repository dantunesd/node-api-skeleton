const express = require('express');
const yourResource = require('./your-resource');

const router = express.Router();

router.use('/your-resource/', yourResource);

module.exports = router;
