import { Router } from "express";
import authRouter from "./authRouter.js";
import doctorRouter from "./doctorRouter.js";
import appointmentsRouter from "./appointmentsRouter.js";
import prescriptionsRouter from "./prescriptionsRouter.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("hello world");
})
router.use("/doctor",doctorRouter);
router.use("/",authRouter);
router.use("/appointments",appointmentsRouter);
router.use("/prescriptions",prescriptionsRouter);

export default router