import joi from "joi";

const adoptionSchema = joi.object({
    adopterName: joi.string().min(3).max(60).required(),
    animal: joi.string().min(24).max(24).required(),
    email: joi.string().email().required(),
});

export default adoptionSchema;