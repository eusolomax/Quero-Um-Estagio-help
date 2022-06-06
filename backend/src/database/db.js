require("dotenv").config()
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: 3306
    }
)

if(sequelize) console.log(`DB connected. HOST: ${process.env.DB_HOST}. DATABASE: ${process.env.DB_NAME}`)

async function initDB() {
    const User = require("./models/User")

    await sequelize.sync()
}

module.exports = {
    sequelize, 
    initDB
}