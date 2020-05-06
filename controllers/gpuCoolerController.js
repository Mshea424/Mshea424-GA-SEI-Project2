const express = require('express')
const gpuCoolerModel = require('../models/gpuCoolerModel.js')
const gpuCoolerRouter = express.Router()

// get All
gpuCoolerRouter.get('/', (req, res) =>{
    gpuCoolerModel.getAllGpuCoolers()
    .then((allGpuCoolers) => {
        res.render('gpuCooler/allGpuCoolers.hbs', {allGpuCoolers})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new GpuCooler page
gpuCoolerRouter.get('/new', (req, res) =>{
    res.render('gpuCooler/createGpuCooler.hbs')
})

//Go To Edit GpuCooler Page
gpuCoolerRouter.get('/:id/edit', (req, res) => {
    gpuCoolerModel.getOneGpuCooler(req.params.id)
    .then((singleGpuCooler) => {
        res.render('gpuCooler/editGpuCooler.hbs', {singleGpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
gpuCoolerRouter.get('/:id', (req, res) => {
    gpuCoolerModel.getOneGpuCooler(req.params.id)
    .then((singleGpuCooler) => {
        res.render('gpuCooler/singleGpuCooler.hbs', {singleGpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
gpuCoolerRouter.post('/', (req, res) => {
    gpuCoolerModel.createGpuCooler(req.body)
        .then(() => {
            res.redirect('/gpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
gpuCoolerRouter.put('/:id', (req, res) => {
    gpuCoolerModel.updateGpuCooler(req.params.id, req.body)
        .then(() => {
            res.redirect(`/gpucooler/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
gpuCoolerRouter.delete('/:id', (req, res) => {
    gpuCoolerModel.deleteGpuCooler(req.params.id)
        .then(() => {
            res.redirect('/gpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = gpuCoolerRouter