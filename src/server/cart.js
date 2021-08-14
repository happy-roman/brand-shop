const add = (cart, req) => {
  cart.content.push(req.body);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};
const change = (cart, req) => {
  const find = cart.content.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};

const remove = (cart, req) => {
  const find = cart.content.find(el => el.id_product === +req.params.id);
  cart.content.splice(cart.content.indexOf(find), 1);
  return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4) };
};

module.exports = {
  add,
  change,
  remove,
};
