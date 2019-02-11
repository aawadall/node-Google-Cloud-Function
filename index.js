const formatter = require('./dateFormatter');


exports.nodeHTTP = function entryHTTP(req, resp) {
    console.log(`HTTP Request from: ${req.ip}`);
    resp.status(200).send(formatter.dateFormatter());
};

exports.nodePubsub = function entryPubsub(event, callback) {
    console.log(`Hello PUBSUB! ${formatter.dateFormatter()}`);
    callback();
};

exports.nodeStorage = function entryStorage(event, callback) {
    console.log(`Hello STORAGE! ${formatter.dateFormatter()}`);
    callback();
};