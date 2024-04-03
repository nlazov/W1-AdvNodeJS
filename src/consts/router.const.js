import { Router } from "express";
import animalsRouter from "../routes/animals.route.js";
import adoptionsRouter from "../routes/adoptions.route.js";

const router = Router();

router.use("/animals", animalsRouter);
router.use("/adoptions", adoptionsRouter);

export default router;