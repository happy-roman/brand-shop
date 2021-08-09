const express = require('express');
const fs = require('fs');
const handler = require('./handler');

const router = express.Router();

router.get('/', (req, res) => {
  if (req) {
    console.log('=== Req cart ===\n================');
  }
  fs.readFile('/brand-shop/src/server/db/cart.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});


router.post('/', (req, res) => {
  handler(req, res, 'add', './db/cart.json');
});

router.put('/:id', (req, res) => {
  handler(req, res, 'change', './db/cart.json');
});

router.delete('/:id', (req, res) => {
  handler(req, res, 'remove', './db/cart.json');
});

module.exports = router;
