import { Router } from "express";
import apiRouter from "./api/apiRouter.js";
import viewRouter from "./views/viewRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use("/api",apiRouter);

router.use("/",viewRouter);
router.use("/",authRouter);

export default router