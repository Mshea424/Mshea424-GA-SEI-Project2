const express = require('express')
const psuModel = require('../models/psuModel.js')
const psuRouter = express.Router()

// get All
psuRouter.get('/', (req, res) =>{
    psuModel.getAllPsus()
    .then((allPsus) => {
        res.render('psu/allPsus.hbs', {allPsus})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Psu page
psuRouter.get('/new', (req, res) =>{
    res.render('psu/createPsu.hbs')
})

//Go To Edit Psu Page
psuRouter.get('/:id/edit', (req, res) => {
    psuModel.getOnePsu(req.params.id)
    .then((singlePsu) => {
        res.render('psu/editPsu.hbs', {singlePsu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
psuRouter.get('/:id', (req, res) => {
    psuModel.getOnePsu(req.params.id)
    .then((singlePsu) => {
        res.render('psu/singlePsu.hbs', {singlePsu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
psuRouter.post('/', (req, res) => {
    psuModel.createPsu(req.body)
        .then(() => {
            res.redirect('/psu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
psuRouter.put('/:id', (req, res) => {
    psuModel.updatePsu(req.params.id, req.body)
        .then(() => {
            res.redirect(`/psu/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
psuRouter.delete('/:id', (req, res) => {
    psuModel.deletePsu(req.params.id)
        .then(() => {
            res.redirect('/psu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = psuRouter