import { Animal } from "../models/animals.model.js";
export default class AnimalsService {
    static getAllAnimals({status}){
        if (status){
            return Animal.find({status});
        }
        return Animal.find({});
    }

    static getAnimalById(animalId){
        return Animal.findById(animalId);
    }

    static async addNewAnimal(animal){
        const newAnimal = new Animal(animal);
        return newAnimal.save();
    }

    static async updateAnimal(animalId, updatedBody){
        const existingAnimal = await Animal.findById(animalId);
        if (!existingAnimal) {
            throw new Error("No such animal")
        }
        return Animal.findByIdAndUpdate(animalId, updatedBody, {new: true});
    }
    
    static async deleteAnimal(animalId){
        const existingAnimal = await Animal.findById(animalId);
        if (!existingAnimal) {
            throw new Error("No such animal")
        }
        return Animal.findByIdAndDelete(animalId);
    }
}