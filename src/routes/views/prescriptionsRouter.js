import {Router} from "express";
import prescriptionsViewController from "../../controllers/prescriptions/prescriptionsViewController.js";


const router = Router();

// conseguir todos los doctores
router.get("/",prescriptionsViewController.getAll)

// conseguir doctor por id
router.get("/:id",prescriptionsViewController.getByID)

// modificar un doctor
router.get("/:id/edit",prescriptionsViewController.editForm)
router.post("/:id",prescriptionsViewController.edit)


export default router;