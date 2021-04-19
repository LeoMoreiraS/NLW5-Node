import express from "express";

const app = express();

app.listen(3333, ()=> console.log("Servidor rodando na porta 3333"));


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