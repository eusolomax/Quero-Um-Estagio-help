const { Op } = require("sequelize")
const User = require("../models/User")

async function addNewUser(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await User.findOne({ where: {[Op.or]: [{name}, {email}]} })
        
        if(user.name === name) res.send("Name already taken!")
        if(user.email === email) res.send("Email already registered!")
    }
    catch {
        await User.create({
            name,
            email,
            password
        })
            .then(() => res.send("User created!"))
            .catch(error => res.send(`ERROR: ${error}`))
    }
}
async function getUser(req, res) {
    const { login, password } = req.body

    try {
        const user = await User.findOne({where: { 
            password,
            [Op.or]: [{name: login}, {email: login}]
        }})

        res.send(user)
    } 
    catch {
        res.send("User not found!")
    }
}

module.exports = {
    addNewUser,
    getUser,
}