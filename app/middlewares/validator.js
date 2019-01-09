const { validationResult } = require('express-validator/check');

// local
import Response from '../helpers/response';

module.exports = (req, res, next) => {
  const errors = validationResult(req, res);

  if (!errors.isEmpty()) { return Response.badRequest({ res, errors: errors.array() }); } else { next(); }
};
