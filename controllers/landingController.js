const express = require('express')
const landingRouter = express.Router()

// get Landing Page
landingRouter.get('/', (req, res) =>{
        res.render('landing.hbs')
    })

module.exports = landingRouter