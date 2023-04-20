import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertLocalizacion, getLocalizaciones, getLocalizacion, updateLocalizacion, deleteLocalizacion, getTicketLocalizacion, insertTicketToLocalizacion } from "../services/localizacion";

const get_Localizacion=async({params}:Request,res:Response)=>{
    try{
        const {idLocalizacion}=params;
        const response=await getLocalizacion(idLocalizacion);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKET");
    }
};

const get_Localizaciones=async(req:Request,res:Response)=>{
    try{
        const response=await getLocalizaciones();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKETS");
    }
};


const create_Localizacion=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertLocalizacion(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_CREATE_TICKET");
    }
};


const delete_Localizacion=async ({params}:Request,res:Response)=>{
    try{
        const {idLocalizacion}=params;
        const response=await deleteLocalizacion(idLocalizacion);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_TICKET");
    }
};

const update_Localizacion=async ({params,body}:Request,res:Response)=>{
    try{
        const {idLocalizacion}=params;
        const response=await updateLocalizacion(idLocalizacion,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_USER");
    }
};

const get_ticket_localizacion=async({params}:Request,res:Response)=>{
    try{
        const {idLocalizacion}=params;
        const response=await getTicketLocalizacion(idLocalizacion);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_PRODUCTOS_TICKET");
    }
};

const insert_TicketToLocalizacion=async ({body}:Request,res:Response)=>{
    try{
        const { idLocalizacion, idTicket  } = body;
        console.log(idLocalizacion, idTicket)
        const response=await insertTicketToLocalizacion(idLocalizacion, idTicket);
        res.send(response);
        console.log("al controller llega")
        console.log(response)
    } catch(e){
        handleHttp(res,"ERROR_INSERT_INTO_TICKET");
    }
};


export{get_Localizacion, get_Localizaciones, create_Localizacion, delete_Localizacion, update_Localizacion, get_ticket_localizacion, insert_TicketToLocalizacion};