const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' });
const s3 = new AWS.S3({
    accessKeyId: process.env[`${process.env.MODE}_S3_ACCESS_KEY_ID`],
    secretAccessKey: process.env[`${process.env.MODE}_S3_SECRET_KEY`],
});


module.exports = s3