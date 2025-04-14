import { Router } from "express";
import dataViewController from "../../controllers/data/dataViewController.js";
import { isLoggedInSession } from "../../middleware/authMiddleware.js";

const router = Router();

// Proteger la ruta con el middleware de autenticación
router.get("/show", isLoggedInSession, dataViewController.showData);

export default router;