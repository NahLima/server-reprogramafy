//const { response } = require("express")
const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function (request,response) {
    console.log("O Nosso app esta rodando na porta " + PORT)

})

