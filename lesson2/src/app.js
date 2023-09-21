const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const {compile} = require('morgan')
const morgan = require('morgan')
const app = express()

// init middlewares
// app.use(morgan('dev'))
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())

// init db

//handling error

// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'hello many friend'
    return res.status(200).json({
        message: 'wELCOME FantipJS!',
        metadata: strCompress.repeat(10000)
    })
})

module.exports = app
