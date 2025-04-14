import { Router } from "express";
import authRouter from "./authRouter.js";
import doctorRouter from "./doctorRouter.js";
import appointmentsRouter from "./appointmentsRouter.js";
import prescriptionsRouter from "./prescriptionsRouter.js";
import isAuthenticated from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/home", isAuthenticated, (req, res) => {
    res.render("userHome", { user: req.session.user });
});

router.get("/", (req, res) => {
    if (req.session.user) {
        return res.redirect("/home");
    } else {
        return res.redirect("/login");
    }
});



router.use("/doctor",doctorRouter);
router.use("/",authRouter);
router.use("/appointments",appointmentsRouter);
router.use("/prescriptions",prescriptionsRouter);

export default router