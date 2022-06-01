const router = require("express").Router()
const ControllerUser = require("../controllers/User")

        //STATICS
//USER
router.get("/user", ControllerUser.getUser)
router.post("/user", ControllerUser.addNewUser)

//MAP
//router.get("/map", Controller.getAllLocations)
//router.post("/map", Controller.addNewLocation)

module.exports = router 