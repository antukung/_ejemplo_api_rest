import express from "express";
import cors from "cors";

const app = express();


app.listen(4000, () =>{
    console.log("Servidor activo");
})

app.use(express.json());
app.use(cors())
/*
app.use((req,res)=>{
    res.send("<h1>SOLO SE QUE NO SE NADA</h1>")
})
*/

app.get("",(req,res)=>{
    res.send("<h1>SOLO SE QUE NO SE NADA</h1>");
})

app.get("/mal/",(req,res)=>{
    console.log(req.query);
    res.send(`<h1>Al final simplemente te mueres y YA  ${req.query.param3} </h1>`);
})

app.get("/mal/:id",(req,res)=>{
    console.log(req.params);
    res.send(`<h1>No se si te va a gustas  ${req.params.id}</h1>`);
});

app.post("/mal",(req,res)=>{
    console.log(req.body)
    res.status(201).send(`<h1>POST ${req.body[0]}</h1>`)
});

app.listen( process.env.PORT || 4000,()=>{
    console.log(process.env.PORT || 4000)
    res.status(201).send(`<h1>POST</h1`,process.env.PORT || 4000)
});