import {Router} from "express";
import appointmentsViewController from "../../controllers/appointments/appointmentsViewController.js";


const router = Router();

// conseguir todas las citas
router.get("/",appointmentsViewController.getAll);


// modificar una cita
router.get("/:id/edit",appointmentsViewController.editForm)
router.post("/:id",appointmentsViewController.edit)

//conseguir citas disponibles
router.get("/availables",appointmentsViewController.getAvailableAppointments);
router.get("/create",appointmentsViewController.createForm);

// conseguir cita por id
router.get("/:id",appointmentsViewController.getByID);

export default router;