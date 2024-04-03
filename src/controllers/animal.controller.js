import AnimalsService from "../services/animals.service.js";
import {animalSchema, updateSchema} from "../schemas/animals.schema.js";

export default class animalsController {
    static async getAllAnimals (req, res){
        try {
            const animals = await AnimalsService.getAllAnimals()
            res.send(animals)
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async getAnimalById(req, res){
        try {
            const singleAnimal = await AnimalsService.getAnimalById(req.params.id);
            res.send(singleAnimal);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async addNewAnimal(req, res){
        try {
            await animalSchema.validateAsync(req.body, {
                abortEarly: false,
            })
            const newAnimal = await AnimalsService.addNewAnimal(req.body);
            res.send(newAnimal);

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async updateAnimal(req, res){
        try {
            await updateSchema.validateAsync(req.body, {
                abortEarly: false,
            });
            const updatedAnimal = await AnimalsService.updateAnimal(req.params.id, req.body);
            res.send(updatedAnimal);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async deleteAnimal(req, res){
        try {
            await AnimalsService.deleteAnimal(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ msg: error.message });
        } 
    }
}