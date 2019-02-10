const moment = require('moment');

function dateFormatter() {
    return moment().format('Do MMMM YYYY, hh:mm:ss');
}

exports.nodeHTTP = function entryHTTP(req, resp) {
    resp.status(200).send(dateFormatter());
};

exports.nodePubsub = function entryPubsub(event, callback) {
    console.log(`Hello PUBSUB! ${dateFormatter()}`);
    callback();
};

exports.nodeStorage = function entryStorage(event, callback) {
    console.log(`Hello STORAGE! ${dateFormatter()}`);
    callback();
};