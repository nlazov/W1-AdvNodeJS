import { Router } from "express";
import animalsRouter from "../routes/animals.route.js";

const router = Router();

router.use("/animals", animalsRouter);

export default router;