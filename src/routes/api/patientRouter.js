import {Router} from "express";
import patientsAPIController from "../../controllers/patients/patientsAPIController.js";


const router = Router();

// conseguir todos los pacientes
router.get("/",patient.getAll)

// conseguir paciente por id
router.get("/:id",patientsAPIController.getByID)

// modificar un paciente
router.post("/:id",patientsAPIController.edit)

//TODO create ..
router.post("/",patientsAPIController.create)

export default router;