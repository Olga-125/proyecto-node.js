const products = require('../products.json');

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};
