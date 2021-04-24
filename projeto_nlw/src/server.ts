import { http } from "./http";
import "./websockets/client";
import "./websockets/admin";

http.listen(3333, ()=> console.log("Porta rodando em http://localhost:3333/settings/admin"));


/**
 * get = buscas
 * post = criação
 * put = alteração
 * delete = deletar
 * patch = alterar informação especifica
 */