import express from "express";
import { getQuadrosBicicleta, createQuadroBicicleta, updateQuadroBicicleta, deleteQuadroBicicleta } from "../controllers/quadrodabicicleta_controller.js";

const router = express.Router();

router.get('/quadrodabicicleta', getQuadrosBicicleta);
router.post('/quadrodabicicleta', createQuadroBicicleta);
router.put('/quadrodabicicleta/:id', updateQuadroBicicleta);
router.delete('/quadrodabicicleta/:id', deleteQuadroBicicleta);

export default router;
