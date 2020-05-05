const express = require('express')
const cpuCoolerModel = require('../models/cpuCoolerModel.js')
const cpuCoolerRouter = express.Router()

// get All
cpuCoolerRouter.get('/', (req, res) =>{
    cpuCoolerModel.getAllCpuCoolers()
    .then((allCpuCoolers) => {
        res.render('cpuCooler/allCpuCoolers.hbs', {allCpuCoolers})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new CpuCooler page
cpuCoolerRouter.get('/new', (req, res) =>{
    res.render('cpuCooler/createCpuCooler.hbs')
})

//Go To Edit CpuCooler Page
cpuCoolerRouter.get('/:id/edit', (req, res) => {
    cpuCoolerModel.getOneCpuCooler(req.params.id)
    .then((singleCpuCooler) => {
        res.render('cpuCooler/editCpuCooler.hbs', {singleCpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
cpuCoolerRouter.get('/:id', (req, res) => {
    cpuCoolerModel.getOneCpuCooler(req.params.id)
    .then((singleCpuCooler) => {
        res.render('cpuCooler/singleCpuCooler.hbs', {singleCpuCooler})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
cpuCoolerRouter.post('/', (req, res) => {
    cpuCoolerModel.createCpuCooler(req.body)
        .then(() => {
            res.redirect('/cpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
cpuCoolerRouter.put('/:id', (req, res) => {
    cpuCoolerModel.updateCpuCooler(req.params.id, req.body)
        .then(() => {
            res.redirect(`/cpucooler/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
cpuCoolerRouter.delete('/:id', (req, res) => {
    cpuCoolerModel.deleteCpuCooler(req.params.id)
        .then(() => {
            res.redirect('/cpucooler')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = cpuCoolerRouter