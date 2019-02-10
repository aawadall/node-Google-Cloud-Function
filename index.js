const moment = require('moment');

exports.nodeHTTP = function entryHTTP(req, resp) {
    resp.status(200).send(moment().format('Do MMMM YYYY, hh:mm:ss'));
};

exports.nodePubsub = function entryPubsub(event, callback) {
    console.log(`Hello PUBSUB! ${moment().format('Do MMMM YYYY, hh:mm:ss')}`);
    callback();
};

exports.nodeStorage = function entryStorage(event, callback) {
    console.log(`Hello STORAGE! ${moment().format('Do MMMM YYYY, hh:mm:ss')}`);
    callback();
};