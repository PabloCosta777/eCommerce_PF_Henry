const app = require('./app')
const db = require('./db')
require("dotenv").config();
const {PORT} =process.env
require('./Models/relations')
const chargeDB = require("./Controllers/ProductChargeDB.js")

app.listen(PORT,()=>{
     db.sync({force:true})
    .then(()=>chargeDB())
    .then(console.log('Conectado a la BBDD'))
    .then(console.log(`Escuchando en el puerto ${PORT}`))
    .catch((e)=>console.log(e))
})


