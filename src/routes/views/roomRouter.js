import {Router} from "express";
import roomViewController from "../../controllers/roomViewController.js";


const router = Router();

// conseguir todos los doctores
router.get("/",roomViewController.getAll)

// conseguir doctor por id
router.get("/:id",roomViewController.getByID)

// modificar un doctor
router.get("/:id/edit",roomViewController.editForm)
router.post("/:id",roomViewController.edit)


export default router;