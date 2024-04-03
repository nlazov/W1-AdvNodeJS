import {Schema, model} from "mongoose";

export const animalTypes = ["Dog", "Cat"];
export const statusOptions = ["Available", "Adopted"];

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
		maxlength: 30,
    },
    type: {
        type: String,
        required: true,
        enum: animalTypes,
    },
    breed: {
        type: String,
        required: true,
        minlength: 3,
		maxlength: 30,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
    status: {
        type: String,
        required: true,
        enum: statusOptions,
    },
    description: {
        type: String,
        minlength: 1,
		maxlength: 300,
    }
},
{
    timestamps: true,
});

export const Animal = model("animals", animalSchema);