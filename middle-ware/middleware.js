// custom middleware func
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // to call next middleware in stack :)
    next();
}
module.exports = logger;