const express = require('express')
const ramModel = require('../models/ramModel.js')
const ramRouter = express.Router()

// get All
ramRouter.get('/', (req, res) =>{
    ramModel.getAllRams()
    .then((allRams) => {
        res.render('ram/allRams.hbs', {allRams})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Ram page
ramRouter.get('/new', (req, res) =>{
    res.render('ram/createRam.hbs')
})

//Go To Edit Ram Page
ramRouter.get('/:id/edit', (req, res) => {
    ramModel.getOneRam(req.params.id)
    .then((singleRam) => {
        res.render('ram/editRam.hbs', {singleRam})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
ramRouter.get('/:id', (req, res) => {
    ramModel.getOneRam(req.params.id)
    .then((singleRam) => {
        res.render('ram/singleRam.hbs', {singleRam})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
ramRouter.post('/', (req, res) => {
    ramModel.createRam(req.body)
        .then(() => {
            res.redirect('/ram')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
ramRouter.put('/:id', (req, res) => {
    ramModel.updateRam(req.params.id, req.body)
        .then(() => {
            res.redirect(`/ram/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
ramRouter.delete('/:id', (req, res) => {
    ramModel.deleteRam(req.params.id)
        .then(() => {
            res.redirect('/ram')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = ramRouter