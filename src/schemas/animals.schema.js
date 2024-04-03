import joi from "joi";
import { animalTypes, statusOptions } from "../models/animals.model.js";

export const animalSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    type: joi.string().valid(...animalTypes).required(),
    breed: joi.string().min(3).max(30).required(),
    age: joi.number().integer().min(1).required(),
    status: joi.string().valid(...statusOptions).required(),
    description: joi.string().min(3).max(300),
});

export const updateSchema = joi.object({
    name: joi.string().min(3).max(30),
    type: joi.string().valid(...animalTypes),
    breed: joi.string().min(3).max(30),
    age: joi.number().integer().min(1),
    status: joi.string().valid(...statusOptions),
    description: joi.string().min(3).max(300),
})

