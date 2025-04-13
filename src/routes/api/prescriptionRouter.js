import {Router} from "express";
import prescriptionsAPIController from "../../controllers/prescriptions/prescriptionsAPIController";


const router = Router();

// conseguir todos los doctores
router.get("/",prescriptionsAPIController.getAll)

// conseguir doctor por id
router.get("/:id",prescriptionsAPIController.getByID)

// modificar un doctor
router.post("/:id",prescriptionsAPIController.edit)


export default router;