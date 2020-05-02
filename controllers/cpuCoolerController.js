const express = require('express')
const cpucoolerModel = require('../models/cpuCoolerModel.js')
const cpucoolerRouter = express.Router()

// get All
cpucoolerRouter.get('/', (req, res) =>{
    cpucoolerModel.getAllCpuCoolers()
    .then((allCpuCoolers) => {
        res.render('cpucooler/allCpuCoolers.hbs', {allCpuCoolers})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new CpuCooler page
cpucoolerRouter.get('/new', (req, res) =>{
    res.render('cpucooler/createCpuCooler.hbs')
})

//Go To Edit CpuCooler Page
cpucoolerRouter.get('/:id/edit', (req, res) => {
    cpucoolerModel.getOneCpuCooler(req.params.id)
    .then((singleCpuCooler) => {
        res.render('cpucooler/editCpuCooler.hbs', {singleCpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
cpucoolerRouter.get('/:id', (req, res) => {
    cpucoolerModel.getOneCpuCooler(req.params.id)
    .then((singleCpuCooler) => {
        res.render('cpucooler/singleCpuCooler.hbs', {singleCpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
cpucoolerRouter.post('/', (req, res) => {
    cpucoolerModel.createCpuCooler(req.body)
        .then(() => {
            res.redirect('/cpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
cpucoolerRouter.put('/:id', (req, res) => {
    cpucoolerModel.updateCpuCooler(req.params.id, req.body)
        .then(() => {
            res.redirect(`/cpucooler/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
cpucoolerRouter.delete('/:id', (req, res) => {
    cpucoolerModel.deleteCpuCooler(req.params.id)
        .then(() => {
            res.redirect('/cpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = cpucoolerRouter