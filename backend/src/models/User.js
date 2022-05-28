const db = require("../database/db")

class User {
    constructor(data) {
        this.data = data
    }

    async registerUser() {
        const d = new Date()

        const sql = `
            INSERT INTO users(
                user,
                email,
                password,
                register_date
            ) 
            VALUES(
                '${this.data.user}',
                '${this.data.email}',
                '${this.data.password}',
                '${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}'
            )
        `

        return await db.execute(sql)
    }
}

module.exports = User