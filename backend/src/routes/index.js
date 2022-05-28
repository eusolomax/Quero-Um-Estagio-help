const router = require("express").Router()
const Controller = require("../controllers/Controller")

router.get("/:id?", Controller.get)
router.post("/", Controller.post)
router.put("/:id", Controller.put)
router.delete("/:id", Controller.del)

//MAP
router.get("/", Controller.getMap)

module.exports = router