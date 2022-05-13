const express = require('express');
const fs = require('fs');
const path = require('path');
const handler = require('./handler');

const router = express.Router();
const cartFile = path.join(__dirname, '/db/cart.json');

router.get('/', (req, res) => {
  if (req) {
    console.log('=== Req cart ===\n================');
  }
  fs.readFile(cartFile, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  console.log('=== Req cart post ===\n====================');
  handler(req, res, 'add', cartFile);
});

router.put('/:id', (req, res) => {
  console.log('=== Req cart put ===\n====================');
  handler(req, res, 'change', cartFile);
});

router.delete('/:id', (req, res) => {
  console.log('=== Req cart del ===\n====================');
  handler(req, res, 'remove', cartFile);
});

module.exports = router;
