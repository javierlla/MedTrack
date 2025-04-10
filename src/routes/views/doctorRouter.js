import {Router} from "express";
import doctorViewController from "../../controllers/doctors/doctorsViewController.js";


const router = Router();

// conseguir todos los doctores
router.get("/",doctorViewController.getAll)

// conseguir doctor por id
router.get("/:id",doctorViewController.getByID)

// modificar un doctor
router.get("/:id/edit",doctorViewController.editForm)
router.post("/:id",doctorViewController.edit)


export default router;