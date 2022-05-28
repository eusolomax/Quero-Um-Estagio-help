const User = require("../models/User") 
const Map = require("../models/Map") 

async function get(req, res) {
    res.send("FUNÇÃO GET_ALL");
}

async function getMap(req, res) {
    const map = new Map()
    
    await map.getAllLocations()
        .then(result => res.send(result))
        .catch(err => res.send(`Failed to load locations - ERROR: ${err}`))
}

async function post(req, res) {
    const data = req.body
    let user = new User(data)
    
    user = await user.registerUser()
        .then(() => res.send("User registered successfully!"))
        .catch(err => res.send(`Failed to register user - ERROR: ${err}`))
}

async function put(req, res) {
    res.send("FUNÇÃO PUT")
}

async function del(req, res) {
    res.send("FUNÇÃO DELETE")
}

module.exports = {
    get, getMap,
    post,
    put,
    del
}
