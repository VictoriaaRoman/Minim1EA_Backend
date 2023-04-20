import { ObjectId } from "mongoose";

export interface Localizacion {
    name: string;
    localizacion: string;
    veces: number;
    ticket?: ObjectId[];
}