const express = require('express');
const bodyParser = require('body-parser');

//Conexão com o mongoDB
const mongoose = require('mongoose');
const variables = require('../bin/variables');
mongoose.connect(variables.DataBase.connection);

//routers
const categoriaRouters = require('../routers/categoria-routes');
const produtoRouters = require('../routers/produto-routes');

//Criando/invocando a Api/Server Web do Express
const app = express();


//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Configurando as rotas
app.use('/api/categorias',categoriaRouters);
app.use('/api/produtos',produtoRouters);

app.use(categoriaRouters);

//exportando nossa API
module.exports = app;