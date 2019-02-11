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
    console.log(`Event ID: ${event.eventId}`);
    console.log(`Event Type: ${event.eventType}`);
    console.log(`Bucket: ${event.data.bucket}`);
    console.log(`File: ${event.data.name}`);
    callback();
};

// check this out
// https://cloud.google.com/nodejs/getting-started/using-cloud-storage