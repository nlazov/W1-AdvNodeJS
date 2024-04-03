import { Router } from "express";
import animalsController from "../controllers/animal.controller.js";

const router = Router();

router.get("/", animalsController.getAllAnimals);
router.post("/", animalsController.addNewAnimal);
router.get("/:id", animalsController.getAnimalById);
router.put("/:id", animalsController.updateAnimal);
router.delete("/:id", animalsController.deleteAnimal);

export default router;