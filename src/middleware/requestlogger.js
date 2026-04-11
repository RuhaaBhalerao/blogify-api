const requestLogger = (req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.url}`);
  next();
};

module.exports = requestLogger;