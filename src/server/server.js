const express = require('express');
const fs = require('fs');
const cors = require('cors');
const cartRouter = require('./cartRouter');

const app = express();
app.use(cors());
app.use('/api/cart', cartRouter);
app.use(express.json());
// app.all('*', (req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Origin, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`===================\nListening ${port} port\n===================`);
});
