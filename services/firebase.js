// services/firebase.js
const admin = require('firebase-admin');
const path = require('path');

// Ruta al archivo .json de credenciales
const serviceAccount = require(path.resolve(__dirname, '../config/ecommerce-firebase-adminsdk.json'));

// Inicializar Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Exportar la instancia de Firestore
const db = admin.firestore();

module.exports = db;
