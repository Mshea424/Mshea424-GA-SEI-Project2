const express = require('express')
const mbModel = require('../models/mbModel.js')
const mbRouter = express.Router()

// get All
mbRouter.get('/', (req, res) =>{
    mbModel.getAllMbs()
    .then((allMbs) => {
        res.render('mb/allMbs.hbs', {allMbs})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Mb page
mbRouter.get('/new', (req, res) =>{
    res.render('mb/createMb.hbs')
})

//Go To Edit Mb Page
mbRouter.get('/:id/edit', (req, res) => {
    mbModel.getOneMb(req.params.id)
    .then((singleMb) => {
        res.render('mb/editMb.hbs', {singleMb})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
mbRouter.get('/:id', (req, res) => {
    mbModel.getOneMb(req.params.id)
    .then((singleMb) => {
        res.render('mb/singleMb.hbs', {singleMb})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
mbRouter.post('/', (req, res) => {
    mbModel.createMb(req.body)
        .then(() => {
            res.redirect('/mb')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
mbRouter.put('/:id', (req, res) => {
    mbModel.updateMb(req.params.id, req.body)
        .then(() => {
            res.redirect(`/mb/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
mbRouter.delete('/:id', (req, res) => {
    mbModel.deleteMb(req.params.id)
        .then(() => {
            res.redirect('/mb')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = mbRouter