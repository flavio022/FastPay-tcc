//Invoca o modulo express
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Olá Mundo!");
});
//Inicia o servidor e escuta na porta 300
app.listen(3000,()=>{
    console.log("Servidor API FastPay iniciado na porta 3000");
});
