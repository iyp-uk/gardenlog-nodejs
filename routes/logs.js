var express = require('express');
var router = express.Router();
var es = require('../es');
var config = require('../config');

router.get('/', function(req, res, next) {
    es.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
    }, function (error) {
        if (error) {
            console.trace('elasticsearch cluster is down!');
        } else {
            res.send('All is cool');
        }
    });
});

router.post('/', function (req, res, next) {
   // @todo: Implement based on events. Example: publish to an MQTT topic, which the Pi will catch and fire camera.
});

// Search through logs, it's the main entry point for the API.
router.post('/_search', function(req, res, next) {
    var params = Object.assign(req.body, {index: config.es_index});
    es.search(params).then(function (body) {
        res.send(body);
    }, function (error) {
        console.trace(error.message);
    });
});

// Get a single log, based on its id.
router.get('/:log_id', function (req, res, next) {
    es.get({
        index: config.es_index,
        type: 'log',
        id: req.params.log_id
    }).then(function (body) {
        res.send(body)
    }, function (error) {
        console.trace(error.message);
    })
});

router.delete('/:log_id', function (req, res, next) {
    es.delete({
        index: config.es_index,
        type: 'log',
        id: req.params.log_id
    }).then(function (body) {
        res.send(body)
    }, function (error) {
        console.trace(error.message);
    })
});

module.exports = router;
