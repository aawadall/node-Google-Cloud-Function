const formatter = require('./dateFormatter');
const {Storage} = require('@google-cloud/storage');
const fs = require('fs');
const uuid = require('uuid');

const projectId = 'cloud-functions-230120';
const storage = new Storage({
    projectId: projectId
});
const bucketName = 'gs://atm_events/';

exports.nodeHTTP = function entryHTTP(req, resp) {

    console.log(`HTTP Request from: ${req.ip}`);
    const fileName = `${uuid.v4()}`;
    fs.writeFile(fileName, JSON.stringify(req.body), (err)=>{
       if (err)  console.error(err);
    });
    const localFile = `/tmp/${fileName}`;
    console.log(`File to populate: ${localFile}`);
    storage.bucket(bucketName).upload(localFile, {
        gzip: false,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });
    console.log(`Body: ${JSON.stringify(req.body)}`);
    const replyString = `${formatter.dateFormatter()}: File Created: ${fileName}`;
    resp.status(200).send(replyString);
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