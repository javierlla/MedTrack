import {Router} from "express";
import medicationsViewController from "../../controllers/medications/medicationsViewController";


const router = Router();

// conseguir todas las medicaciones
router.get("/",medicationsViewController.getAll)

// conseguir medicaciones por id
router.get("/:id",medicationsViewController.getByID)

// modificar una medicacion
router.get("/:id/edit",medicationsViewController.editForm)
router.post("/:id",medicationsViewController.edit)


export default router;