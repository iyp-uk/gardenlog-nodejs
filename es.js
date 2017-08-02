// Configure the region for aws-sdk.
var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-2' });

// Create an elasticsearch client for your Amazon ES.
var es = require('elasticsearch').Client({
    hosts: [ 'https://search-gardenlog-76upvm5anguwgwdxmzcg5rzsyi.eu-west-2.es.amazonaws.com' ],
    connectionClass: require('http-aws-es')
});

module.exports = es;