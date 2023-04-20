import {  Schema, Types, model, Model } from "mongoose";
import { Localizacion } from "../interfaces/localizacion.interface";

const LocalizacionSchema = new Schema<Localizacion>(
    {
        name:{
            type: String,
            required: false,
        },

        localizacion:{
            type: String,
            required: false,
        },

        veces:{
            type: Number,
            required: false,
        },

        ticket:{
            type: [Schema.Types.ObjectId],
            ref:'ticket',
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const LocalizacionModel = model('ticket', LocalizacionSchema);

export default LocalizacionModel;