import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

import "./database"

/**
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => {
 *  "name" = body.name
 * }
 * 
*/
const settingsController = new SettingsController();
const routes = Router();
routes.post("/settings",settingsController.create)

export {routes};