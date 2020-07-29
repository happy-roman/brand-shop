const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors);
const fs = require('fs');
const cartRouter = require('./cartRouter');

app.use(express.json());
app.use('http://localhost:3000/', express.static('@/public/index.html'));
app.use('http://localhost:3000/api/cart', cartRouter);

app.get('http://localhost:3000/api/products', (req, res) => {
  fs.readFile('./db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
