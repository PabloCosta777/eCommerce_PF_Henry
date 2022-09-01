const app = require('./app')
const db = require('./db')
require("dotenv").config();
const PORT =process.env.PORT
require('./Models/relations')

app.listen(PORT,()=>{
     db.sync({force:true})
    .then(console.log('Conectado a la BBDD'))
    .then(console.log(`Escuchando en el puerto ${PORT}`))
    .catch((e)=>console.log(e))
})


