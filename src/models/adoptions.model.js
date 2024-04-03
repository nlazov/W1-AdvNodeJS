import { Schema, model } from "mongoose";

const adoptionSchema = new Schema({
    adopterName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60, 
    },
    animal: {
        type: Schema.Types.ObjectId,
        ref: "animals",
    },
    adoptionDate: { 
        type : Date,
        default: Date.now,
    },
},
{
    timestamps: true,
});

export const Adoption = model("adoptions", adoptionSchema);