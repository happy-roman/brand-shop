// const mysql = require('mysql2');
// const fs = require('fs');
//
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: '127.0.0.1',
//   port: 3306,
//   user: 'root',
//   database: 'brand-shop',
//   password: 'root',
// });
//
// function addMysql() {
//   fs.readFile('/brand-shop/src/server/db/catalog.json', 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     if (data) {
//       console.log(data);
//       for (const el in data) {
//         pool.query(
//           `INSERT INTO goods (id_product, product_name, price, img)
//            VALUES (${el.id_product}, ${el.product_name}, ${el.price}, ${el.img})`,
//           error => console.log(error),
//         );
//       }
//     }
//   });
// }
//
// function getMysql() {
//   let a = '';
//   pool.query('SELECT * FROM \'goods\'', ((err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     a = result;
//   }));
//   return a;
// }
