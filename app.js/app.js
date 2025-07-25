const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando ✅');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
