const express = require('express')
const app = express()
const port = process.env.PORT || 3500

const routes = require('./api/routes')
routes(app)

app.listen(port)

console.log("Node application running on port " + port)
