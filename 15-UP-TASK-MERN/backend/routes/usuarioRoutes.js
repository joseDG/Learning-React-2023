import express from "express";
import {registrar, autenticar, confirmar} from '../controllers/usuarioController.js'

const router = express.Router();

// Autenticacion, Registros y Confirmacion de Usuarios
router.post('/', registrar);
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)

export default router;
