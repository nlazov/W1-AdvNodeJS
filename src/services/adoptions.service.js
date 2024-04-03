import { Adoption } from "../models/adoptions.model.js";
import { Animal } from "../models/animals.model.js";

export default class AdoptionService {
    static async createAdoption(newAdoption){
        const addAdoption = new Adoption(newAdoption);
        const animalId = newAdoption.animal;
        const animalToBeAdopted = await Animal.findById(animalId);
        if (!animalToBeAdopted) throw new Error("No such animal");
        if (animalToBeAdopted.status === "Adopted") throw new Error("This animal is already adopted");
        animalToBeAdopted.status = "Adopted";
        await Animal.findByIdAndUpdate(animalId, animalToBeAdopted)

        return addAdoption.save()
    }

    static async getAllAdoptions(){
        return Adoption.find({}).populate("animal");
    }
}