const router = require("express").Router()
const Controller = require("../controllers/Controller")

//STATICS
router.get("/map", Controller.getMap)
router.post("/", Controller.post)
router.put("/:id", Controller.put)
router.delete("/:id", Controller.del)

//DYNAMICS
router.get("/:id?", Controller.get)


module.exports = router