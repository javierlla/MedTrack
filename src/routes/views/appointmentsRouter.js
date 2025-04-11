import {Router} from "express";
import appointmentsViewController from "../../controllers/appointments/appointmentsViewController.js";


const router = Router();

// conseguir todas las citas
router.get("/",appointmentsViewController.getAll);

// conseguir cita por id
router.get("/:id",appointmentsViewController.getByID);

// modificar una cita
router.get("/:id/edit",appointmentsViewController.editForm)
router.post("/:id",appointmentsViewController.edit)


export default router;