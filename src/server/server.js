const express = require('express');
const cors = require('cors');
const fs = require('fs');
const cartRouter = require('./cartRouter');

const app = express();

app.use(cors).set('Access-Control-Allow-Origin', '*');
app.use(express.json());
app.use('http://localhost:5000/', express.static('@/public/index.html'));
app.use('http://localhost:5000/api/cart', cartRouter);

app.get('http://localhost:5000/api/products', (req, res) => {
  console.log('Запрс данных');
  fs.readFile('./db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      console.log('Получили ошибку при запросе данных');
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      console.log('Данные получены и отправленны');
      res.send(data);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
