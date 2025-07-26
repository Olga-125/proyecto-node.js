// services/firestoreService.js
const db = require('./firebase');

const collection = db.collection('products');

// Obtener todos los productos
async function getAllProducts() {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Crear producto
async function createProduct(data) {
  const docRef = await collection.add(data);
  return { id: docRef.id };
}

// Actualizar producto
async function updateProduct(id, data) {
  await collection.doc(id).update(data);
}

// Eliminar producto
async function deleteProduct(id) {
  await collection.doc(id).delete();
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
};

///ejemplo de acceso a poductos???