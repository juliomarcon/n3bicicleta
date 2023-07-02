import express from "express";
import { getBicicletas, createBicicleta, updateBicicleta, deleteBicicleta, login } from "../controllers/bicicleta_controller.js";
import { authenticateToken } from "../jwt.js";

const router = express.Router();

router.post('/login/:id', login);
router.get('/bicicleta', authenticateToken, getBicicletas);
router.post('/bicicleta', authenticateToken, createBicicleta);
router.put('/bicicleta/:id', authenticateToken, updateBicicleta);
router.delete('/bicicleta/:id', authenticateToken, deleteBicicleta);

export default router;
