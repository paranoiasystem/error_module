var bestemmia_module = require("bestemmia_module");

module.exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        errorCode: err.status,
        message: err.message,
        userInput: req.body,
        stackTrace: ((err.prevError == null || err.prevError == '') ? '' : err.prevError),
        timestamp: Date.now(),
        token: req.get('Authorization'),
        uri: err.uri,
        method: err.method,
        bestemmia_del_giorno: bestemmia_module.getBestemmia()
    });
};