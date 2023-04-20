//In charge to connect with the dB
import { Types } from "mongoose";
import { Ticket } from "../interfaces/ticket.interface";
import LocalizacionModel from "../models/localizacion";
import { Localizacion } from "../interfaces/localizacion.interface";

const insertLocalizacion= async(item: Localizacion) => {
    const responseInsert = await LocalizacionModel.create(item);
    return responseInsert;
};

const getLocalizaciones = async() => {
    const responseItem = await LocalizacionModel.find({});
    return responseItem;
};

const getLocalizacion = async(id: string) => {
    const responseItem = await LocalizacionModel.findOne({_id: id});
    return responseItem;
};

const updateLocalizacion = async(id: string, data: Ticket) => {
    const responseItem = await LocalizacionModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteLocalizacion = async(id: string) => {
    const responseItem = await LocalizacionModel.findOneAndRemove({_id: id});
    return responseItem;
}

const getTicketLocalizacion = async(id: string) => {
    const responseItem = await LocalizacionModel.findOne({_id: id}).populate("ticket");
    return responseItem;
};

const insertTicketToLocalizacion = async(idLocalizacion: string, idTicket: string) => {
    const responseItem = await LocalizacionModel.findOneAndUpdate({_id:idLocalizacion},
        {$addToSet: {ticket: new Types.ObjectId(idTicket)}},
        {new: true}).populate('ticket');
    console.log(responseItem);
    return responseItem;
}


export {insertLocalizacion, getLocalizaciones, getLocalizacion, updateLocalizacion, deleteLocalizacion, getTicketLocalizacion, insertTicketToLocalizacion};