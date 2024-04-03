import AdoptionService from "../services/adoptions.service.js";
import adoptionSchema from "../schemas/adoptions.schema.js";

export default class AdoptionsController {
    static async createAdoption(req, res){
        try {
            await adoptionSchema.validateAsync(req.body, {
                abortEarly: false
            });
            const newAdoption = await AdoptionService.createAdoption(req.body);
            res.send(newAdoption);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async getAllAdoptions(req, res){
        try {
            const adoptions = await AdoptionService.getAllAdoptions();
            res.send(adoptions);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}