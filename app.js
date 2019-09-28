'use strict'

// Dependencies
const express = require('express')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
app.use(helmet())

// Routes
const itemRoutes = require('./src/routes/item')

app.use('/items', itemRoutes)

// Set port
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`API running on PORT ${port}`))