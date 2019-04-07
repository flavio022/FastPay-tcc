const variables = {
    Api:{
        port:process.env.port || 3000
    },
    DataBase:{
        connection: process.env.connection || 'mongodb+srv://flavio:aline022@cluster0-b1xpp.mongodb.net/test?retryWrites=true'
        
    }
}

module.exports = variables;