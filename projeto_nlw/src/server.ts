import { http } from "./http";
import "./websockets/client"

http.listen(3333, ()=> console.log("Servidor rodando na porta 3333"));


/**
 * get = buscas
 * post = criação
 * put = alteração
 * delete = deletar
 * patch = alterar informação especifica
 */