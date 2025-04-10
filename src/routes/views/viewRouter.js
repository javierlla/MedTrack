import { Router } from "express";
import doctorRouter from "./doctorRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("hello world");
})
router.use("/doctor",doctorRouter);

export default router