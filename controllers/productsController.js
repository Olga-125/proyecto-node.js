const firestoreService = require('../services/firestoreService');
exports.getAllProducts = (req, res) => {
  const products = firestoreService.getAll();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = firestoreService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = firestoreService.create(req.body);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const updated = firestoreService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(updated);
};

exports.deleteProduct = (req, res) => {
  const deleted = firestoreService.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json({ message: 'Producto eliminado' });
};
