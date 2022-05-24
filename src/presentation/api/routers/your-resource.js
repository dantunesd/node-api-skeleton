const express = require('express');

const yourPayloadValidator = require('../middlewares/validators/yourValidator');
const YourService = require('../../../infrastructure/factories/YourServiceFactory');

const router = express.Router();

router.post('/', yourPayloadValidator, (req, res, next) => {
  YourService.create(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .then(next)
    .catch(next);
});

router.get('/', (req, res, next) => {
  YourService.getAll()
    .then((result) => {
      res.json(result);
    })
    .then(next)
    .catch(next);
});

module.exports = router;
