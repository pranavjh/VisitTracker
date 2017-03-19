var express = require('express');
var router = express.Router();

var Patient = require('../models/VisitTracker.js');

/* GET /patients listing. */
router.get('/', function(req, res, next) {
    Patient.find(function (err, patients) {
        if (err) return next(err);
        res.json(patients);
    });
});

/* POST /patients */
router.post('/', function(req, res, next) {
    Patient.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /patients/id */
router.get('/:id', function(req, res, next) {
    Patient.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /patients/:id */
router.put('/:id', function(req, res, next) {
    Patient.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /patients/:id */
router.delete('/:id', function(req, res, next) {
    Patient.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
