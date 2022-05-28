require("dotenv").config()
const mysql = require("mysql2")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

if(pool) console.log(`DB connected. HOST: ${process.env.DB_HOST}. DATABASE: ${process.env.DB_NAME}`)

module.exports = pool