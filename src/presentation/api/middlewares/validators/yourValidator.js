const Ajv = require('ajv').default;
const ValidationError = require('../errors/ValidationError');
const yourSchema = require('../../schemas/your-schema.json');

const ajv = new Ajv({
  allErrors: true,
});

function yourValidator(req, res, next) {
  if (!ajv.validate(yourSchema, req.body)) {
    const apiProblem = new ValidationError(ajv.errorsText());
    return next(apiProblem);
  }

  return next();
}

module.exports = yourValidator;
