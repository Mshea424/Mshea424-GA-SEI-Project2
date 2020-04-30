const express = require('express')
const fanModel = require('../models/fanModel.js')
const fanRouter = express.Router()

// get All
fanRouter.get('/', (req, res) =>{
    fanModel.getAllFans()
    .then((allFans) => {
        res.render('fan/allFans.hbs', {allFans})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Fan page
fanRouter.get('/new', (req, res) =>{
    res.render('fan/createFan.hbs')
})

//Go To Edit Fan Page
fanRouter.get('/:id/edit', (req, res) => {
    fanModel.getOneFan(req.params.id)
    .then((singleFan) => {
        res.render('fan/editFan.hbs', {singleFan})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
fanRouter.get('/:id', (req, res) => {
    fanModel.getOneFan(req.params.id)
    .then((singleFan) => {
        res.render('fan/singleFan.hbs', {singleFan})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
fanRouter.post('/', (req, res) => {
    fanModel.createFan(req.body)
        .then(() => {
            res.redirect('/fan')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
fanRouter.put('/:id', (req, res) => {
    fanModel.updateFan(req.params.id, req.body)
        .then(() => {
            res.redirect(`/fan/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
fanRouter.delete('/:id', (req, res) => {
    fanModel.deleteFan(req.params.id)
        .then(() => {
            res.redirect('/fan')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = fanRouter