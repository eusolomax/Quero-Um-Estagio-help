const db = require("../database/db")

class Map {
    constructor(data) {
        this.data = data
    }
 
    async registerLocation() {
        const sql = `
            INSERT INTO locations (
                name,
                latitude,
                longitude
            )
            VALUES (
                "${this.data.name}",
                ${this.data.latitude},
                ${this.data.longitude}
            )
        `

        return db.promise().query(sql)
            .then(([rows]) => rows)
            .catch(error => {
                throw error
            })
    }

    async getAllLocations() {
        const sql = "SELECT * FROM locations"

        return db.promise().query(sql)
            .then(([rows]) => rows)
            .catch(error => {
                throw error
            })
    } 
}
 
module.exports = Map