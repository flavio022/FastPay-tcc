const app = require('../fastPay.Api/bin/express');

const variables = require('../fastPay.Api/bin/variables');

app.listen(variables.Api.port,()=>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});