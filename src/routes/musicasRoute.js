const express = require("express")
const router = express.Router()
const controller = require("../controller/musicasController")

router.get("/musicas", controller.getAllMusicas)
router.get("/musicas/:id", controller.getMusicaById)
router.get("/:artistas", controller.getArtistas)
router.get("/musicas/:artistas/buscar", controller.getMusicaArtista)
router.get("/artistas/:id", controller.getMusicaById)

module.exports = router

