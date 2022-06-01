const router = require("express").Router()
const Controller = require("../controllers/Controller")

        //STATICS
//USER
router.post("/user", Controller.addNewUser)
router.get("/user", Controller.getUser)

//MAP
router.get("/map", Controller.getAllLocations)
router.post("/map", Controller.addNewLocation)

module.exports = router 