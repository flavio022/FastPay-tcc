//Invoca o modulo express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




let pessoas =[];
//Crud

//C - Create
app.post('/',(req,res)=>{
    console.log("Corpo:",req.body);
    pessoas.push(req.body);

    res.status(201).send(req.body);
});
//R - Read
app.get('/',(req,res)=>{
    res.status(200).send(pessoas);
});

//U - Update
app.put("/:id",(req,res)=>{
    let pessoasEncontrada = pessoas.filter(pes =>{return pes.id == req.params.id});
    pessoasEncontrada = req.body;
    res.status(202).send(pessoasEncontrada);
});
//D - Delete
app.delete("/:id",(req,res)=>{
    for(let index = 0;index < pessoas.length; index++){
        const pessoa = pessoas[index];
        if(pessoa.id == req.params.id){
            pessoas.splice(index,1);
        }
    }
    
    res.status(204).send();
});

//400 - bad request

//500 - internal server erro

//401 - não autorizado


//Inicia o servidor e escuta na porta 300
app.listen(3000,()=>{
    console.log("Servidor API FastPay iniciado na porta 3000");
});
