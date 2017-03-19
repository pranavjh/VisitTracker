var express = require('express');
var router = express.Router();

var Patient = require('../models/VisitTracker.js');

/* GET /visits listing. */
router.get('/', function(req, res, next) {
    Patient.find(function (err, patients) {
        if (err) return next(err);
        res.json(patients);
    });
});

/* POST /visits */
router.post('/', function(req, res, next) {
    Patient.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /visits/id */
router.get('/:id', function(req, res, next) {
    Patient.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /visits/:id */
router.put('/:id', function(req, res, next) {
    Patient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /visits/:id */
router.delete('/:id', function(req, res, next) {
    Patient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
