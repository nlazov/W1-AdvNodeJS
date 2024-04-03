import { Router } from "express";
import AdoptionsController from "../controllers/adoptions.controller.js";

const router = Router();

router.post("/", AdoptionsController.createAdoption);
router.get("/", AdoptionsController.getAllAdoptions)

export default router;