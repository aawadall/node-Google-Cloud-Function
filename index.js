const formatter = require('./dateFormatter');


exports.nodeHTTP = function entryHTTP(req, resp) {
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