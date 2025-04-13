import {Router} from "express";
import appointmentsAPIController from "../../controllers/appointments/appointmentsAPIController.js";


const router = Router();

// conseguir todas las citas
router.get("/",appointmentsAPIController.getAll());

// conseguir cita por id
router.get("/:id",appointmentsAPIController.getByID());

// modificar una cita
router.post("/:id",appointmentsAPIController.edit)


export default router;