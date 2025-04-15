import {Router} from "express";
import prescriptionsViewController from "../../controllers/prescriptions/prescriptionsViewController.js";


const router = Router();

// conseguir todas las recetas
router.get("/",prescriptionsViewController.getAll)

//crear una receta
router.get("/create", prescriptionsViewController.createForm);
router.post("/", prescriptionsViewController.create);

// modificar una receta
router.get("/:id/edit",prescriptionsViewController.editForm)
router.post("/:id",prescriptionsViewController.edit)

// conseguir receta por id
router.get("/:id",prescriptionsViewController.getByID)


export default router;