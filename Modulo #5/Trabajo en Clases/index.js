const express = require("express")
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express()
const port = 3000

app.use(express.json())

const whileList = ['http://localhost:8080', 'https://myapp.com', 'http://127.0.0.1:5500']
const options = {
    origin: (origin, callback) => {
        if(whileList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('No es permitido'))
        }
    }
}

app.use(cors(options))

// Routing Express.js
// Endpoint
app.get("/", (req, res) => {
    res.send("Mi tienda en Express Pagina Inicial")
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log("Mi puerto es: " + port)
})
