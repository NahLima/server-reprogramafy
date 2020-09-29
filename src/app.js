const express = require("express")
const app = express()


//rotas
const router = require("./routes/musicasRoute")

app.use("/", router)


module.exports = app // o app indica as rotas raizes

