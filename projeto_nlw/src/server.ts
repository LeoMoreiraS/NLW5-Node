import express from "express";
import "./database";
const app = express();
import {routes} from "./routes";

app.use(express.json());
app.use(routes);


/**
 * get = buscas
 * post = criação
 * put = alteração
 * delete = deletar
 * patch = alterar informação especifica
 */


app.get("/",(req,res)=>{
    
    //return res.send("Olá Next Level Week 5");
    return res.json({
        message:"Olá NLW 05!"
    });
});

app.post("/", (req,res)=>{
    return res.json({ 
        message:"Usúario salvo com sucesso!",
    })
})
app.listen(3333, ()=> console.log("Servidor rodando na porta 3333"));