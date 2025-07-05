const express = require('express');
const corsConfig = require('./config/corsConfig');
require('dotenv').config()
const businessRoutes = require("./routes/businessRoutes")

const app = express()
app.use(corsConfig) // define cors to give access to the frontend requests
app.use(express.json())

app.use('/',businessRoutes)
app.get('/', (req, res) => {
    res.send("Welcome to GrowthProAI Backend!") // for checking purpose
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})