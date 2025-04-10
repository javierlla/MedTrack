import {Router} from "express";
import medicationsAPIController from "../../controllers/medications/medicationsAPIController";


const router = Router();

// conseguir todas las medicaciones
router.get("/",medicationsAPIController.getAll)

// conseguir medicaciones por id
router.get("/:id",medicationsAPIController.getByID)

// modificar una medicacion
router.get("/:id/edit",medicationsAPIController.editForm)
router.post("/:id",medicationsAPIController.edit)


export default router;