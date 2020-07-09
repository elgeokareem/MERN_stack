const express = require("express")
const path = require("path")

//inicializaciones
const app = express()

//constantes
app.set("port", process.env.PORT || 3000)

//middlewares

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")))

//servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto ${app.get("port")}`);
})