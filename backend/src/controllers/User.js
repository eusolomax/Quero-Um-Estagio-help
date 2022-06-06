const { Op } = require("sequelize")
const User = require("../models/User")

async function addNewUser(req, res) {
    const { name, email, password } = req.body
    let user

    try {
        user = await User.findOne({ where: {[Op.or]: [{name}, {email}]} })

        if(user.name === name) res.send("Este nome já foi registrado!")
        if(user.email === email) res.send("Este email já foi registrado!")
    
        await User.create({
            name,
            email,
            password
        })
            .then(() => res.send("Usuário criado!"))
            .catch(error => res.send(`ERROR: ${error}`))
    }
    catch(e) {
        res.send(`CATCH ERROR: ${e}`)
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