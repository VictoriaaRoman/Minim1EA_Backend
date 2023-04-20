/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { get_Localizacion, get_Localizaciones, create_Localizacion, delete_Localizacion, update_Localizacion, get_ticket_localizacion, insert_TicketToLocalizacion} from "../controllers/localizacion";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3000/items [GET]
 */
router.get("/all", get_Localizaciones);
router.get("/:idLocalizacion", get_Localizacion);
router.post("/", create_Localizacion);
router.delete("/:idLocalizacion",delete_Localizacion);
router.put("/:idLocalizacion",update_Localizacion);
router.get("/:idLocalizacion/ticket",get_ticket_localizacion);
router.post("/insert", insert_TicketToLocalizacion);


export {router};
