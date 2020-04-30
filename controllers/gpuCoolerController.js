const express = require('express')
const gpucoolerModel = require('../models/gpucoolerModel.js')
const gpucoolerRouter = express.Router()

// get All
gpucoolerRouter.get('/', (req, res) =>{
    gpucoolerModel.getAllGpuCoolers()
    .then((allGpuCoolers) => {
        res.render('gpucooler/allGpuCoolers.hbs', {allGpuCoolers})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new GpuCooler page
gpucoolerRouter.get('/new', (req, res) =>{
    res.render('gpucooler/createGpuCooler.hbs')
})

//Go To Edit GpuCooler Page
gpucoolerRouter.get('/:id/edit', (req, res) => {
    gpucoolerModel.getOneGpuCooler(req.params.id)
    .then((singleGpuCooler) => {
        res.render('gpucooler/editGpuCooler.hbs', {singleGpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
gpucoolerRouter.get('/:id', (req, res) => {
    gpucoolerModel.getOneGpuCooler(req.params.id)
    .then((singleGpuCooler) => {
        res.render('gpucooler/singleGpuCooler.hbs', {singleGpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
gpucoolerRouter.post('/', (req, res) => {
    gpucoolerModel.createGpuCooler(req.body)
        .then(() => {
            res.redirect('/gpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
gpucoolerRouter.put('/:id', (req, res) => {
    gpucoolerModel.updateGpuCooler(req.params.id, req.body)
        .then(() => {
            res.redirect(`/gpucooler/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
gpucoolerRouter.delete('/:id', (req, res) => {
    gpucoolerModel.deleteGpuCooler(req.params.id)
        .then(() => {
            res.redirect('/gpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = gpucoolerRouter