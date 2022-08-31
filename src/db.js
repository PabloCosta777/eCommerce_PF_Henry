require ('dotenv').config()
const {Sequelize} =require ('sequelize')

// Credenciales //
const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_NAME
} = process.env

//Conexion  a la Base de Datos

const DB = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,{
    logging: false,
    native: false,
    define: {
    timestamps: false
}})

module.exports = DB

