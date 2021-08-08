const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
// const cartRouter = require('./cartRouter');

app.use(cors);
app.use(express.json());
// app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  if (req) {
    console.log('=== Req in ===\n==============');
  }
  fs.readFile('/brand-shop/src/server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    }
    res.send(data);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`===================\nListening ${port} port\n===================`);
});
