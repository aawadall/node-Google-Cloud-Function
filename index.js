const formatter = require('./dateFormatter');
const {Storage} = require('@google-cloud/storage');
const projectId = 'cloud-functions-230120';
const storage = new Storage({
    projectId: projectId
});
const bucketName = 'gs://atm_events/';

exports.nodeHTTP = function entryHTTP(req, resp) {

    console.log(`HTTP Request from: ${req.ip}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
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


// TODO: read https://cloud.google.com/nodejs/getting-started/using-cloud-storage