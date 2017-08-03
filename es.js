var config = require('./config');

// Configure the region for aws-sdk.
var AWS = require('aws-sdk');
AWS.config.update({ region: config.aws_region });

// Create an elasticsearch client for your Amazon ES.
var es = require('elasticsearch').Client({
    hosts: [ config.aws_hosts ],
    connectionClass: require('http-aws-es')
});

module.exports = es;