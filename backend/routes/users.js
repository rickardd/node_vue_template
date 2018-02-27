var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// GET /
router.get('/', function( req, res ) {
  queries.findUsers( function( docs ) {
    res.send(docs)
  });
});

// GET /:id
router.get('/:id', function( req, res ) {
  const id = req.params.id;
  queries.findUser( id, function ( doc ) {
    res.send( doc )
  });
});

// POST /
router.post('/', function( req, res ) {
  const doc = { name: req.body.name, surname: req.body.surname };
  queries.insertUser(doc, function( doc ) {
    console.log(doc)
    res.send( doc )
  });
});

// PUT /:id
router.put('/:id', function( req, res ) {
  const id = req.params.id;
  const doc = { name: req.body.name, surname: req.body.surname };

  queries.updateUser( id, doc, function () {
    res.send(doc);
  });
});

// DELETE /:id
router.delete('/:id', function( req, res ) {
  const id = req.params.id;

  queries.deleteUser( id, function ( doc ) {
    res.send(doc);
  });
});

module.exports = router;
