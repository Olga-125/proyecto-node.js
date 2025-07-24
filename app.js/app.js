// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Crear la app de Express
const app = express();

// Middleware para aceptar JSON
app.use(express.json());

// Middleware para permitir CORS
app.use(cors());

// Importar rutas
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

// Definir rutas base
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando ✅');
});

// Configurar puerto (desde .env o 3000 por defecto)
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
///conectar rutas ???
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
