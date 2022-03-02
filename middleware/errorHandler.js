const createError = require('http-errors');

const errorHandler = (error, req, res, next) => {
  console.error(error);
  if (error.expose === true) {
    res.status(error.status || 500).send(error);
  } else {
    res.status(500).send(createError.InternalServerError());
  }
};

module.exports = errorHandler;