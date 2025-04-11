import {Router} from "express";
import roomAPIController from "../../controllers/rooms/roomAPIController";


const router = Router();

// conseguir todos los doctores
router.get("/",roomAPIController.getAll)

// conseguir doctor por id
router.get("/:id",roomAPIController.getByID)

// modificar un doctor
router.get("/:id/edit",roomAPIController.editForm)
router.post("/:id",roomAPIController.edit)


export default router;