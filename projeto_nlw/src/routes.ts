import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

import "./database";

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
const usersController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();
const routes = Router();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username",settingsController.findByUsername);
routes.put("/settings/:username",settingsController.update)

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
