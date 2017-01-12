var express = require('express');
var router = express.Router();

var Client = require('../models/Client.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Client.find(function (err, clients) {
      if (err) {
          console.log(err);
          next(err);
      }
      console.log("SERVER CLIENTS: " + clients);
      res.json(clients);
    });
});

router.post('/', function(req, res, next) {
    Client.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/:id', function(req, res, next) {
    Client.findById(req.params.id, function (err, client) {
        if (err) return next(err);
        res.json(client);
    });
});

router.put('/:id', function(req, res, next) {
    Client.findByIdAndUpdate(req.params.id, req.body, function(err, client) {
        if (err) return next(err);
        res.json(client);
    });
});

router.delete('/:id', function(req, res, next) {
    Client.findByIdAndRemove(req.params.id, req.body, function(err, client) {
        if (err) return next(err);
        res.json(client);
    });
});

module.exports = router;
