const User = require("../models/User")

async function addNewUser(req, res) {
    const { name, email, password } = req.body

    await User.create({
        name,
        email,
        password
    })
        .then(() => res.send("User created!"))
        .catch(error => res.send(`ERROR: ${error}`))
}
async function getUser(req, res) {
    const { name, email, password } = req.body

    const user = 
        (await User.findAll({ where: {name, password} }))
        ||
        (await User.findAll({ where: {email, password} }))
        ||
        ""

    res.send(user)
}

module.exports = {
    addNewUser,
    getUser,
}