import {Router} from "express";
import doctorAPIController from "../../controllers/doctors/doctorsAPIController.js";


const router = Router();

// conseguir todos los doctores
router.get("/",doctorAPIController.getAll)

// conseguir doctor por id
router.get("/:id",doctorAPIController.getByID)

// modificar un doctor
router.get("/:id/edit",doctorAPIController.editForm)
router.post("/:id",doctorAPIController.edit)


export default router;