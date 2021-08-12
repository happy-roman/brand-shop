const express = require('express');
const fs = require('fs');
const cors = require('cors');
const cartRouter = require('./cartRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
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
app.get('/api/products/:id', (req, res) => {
  if (req) {
    console.log('=== Req Prod==\n==============');
  }
  fs.readFile('/brand-shop/src/server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    }
    res.send(JSON.parse(data).find(el => el.id_product === parseInt(req.params.id, 10)));
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`===================\nListening ${port} port\n===================`);
});
