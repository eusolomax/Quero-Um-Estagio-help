//IMPORTING
const express = require("express"), app = express()
const cors = require("cors")
require("dotenv").config()

const db = require("./database/db")
const routes = require("./routes/index")

//ENABLING SERVER TO RECEIVE JSON DATA VIA POST METHOD
app.use(express.json())

//DEFINING ROUTES
app.use("/", routes)

//SETTING DB
db.pool

//SETTING CORS
const allowedOrigins = [
    "http://", //actual online url
    "http://localhost:3000", "http://localhost:5500" //test servers
]
app.use(cors({
    origin: (origin, callback) => {
        let allowed = true

        if(!origin) allowed = true //mobile apps
        if(!allowedOrigins.includes(origin)) allowed = false //servers

        callback(null, allowed)
    }
}))

//SETTING SERVER
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server on. Port: ${port}`))