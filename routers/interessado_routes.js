import express from "express";
import { createInteressado, getInteressados, updateInteressado, deleteInteressado } from "../controllers/interessado_controller.js";

const router = express.Router();

router.get('/interessado', getInteressados);
router.post('/interessado', createInteressado);
router.put('/interessado/:id', updateInteressado);
router.delete('/interessado/:id', deleteInteressado);

export default router;
