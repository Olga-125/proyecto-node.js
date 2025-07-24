///rutas de autenticacion///
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);

// Ruta protegida de prueba
router.get('/protected', authMiddleware, authController.protectedRoute);

module.exports = router;
