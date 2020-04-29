const express = require('express')
const cpuModel = require('../models/cpuModel.js')
const cpuRouter = express.Router()

// get All
cpuRouter.get('/', (req, res) =>{
    cpuModel.getAllCpus()
    .then((allCpus) => {
        res.render('cpu/allCpus.hbs', {allCpus})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Cpu page
cpuRouter.get('/new', (req, res) =>{
    res.render('cpu/createCpu.hbs')
})

//Go To Edit Cpu Page
cpuRouter.get('/:id/edit', (req, res) => {
    cpuModel.getOneCpu(req.params.id)
    .then((singleCpu) => {
        res.render('cpu/editCpu.hbs', {singleCpu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
cpuRouter.get('/:id', (req, res) => {
    cpuModel.getOneCpu(req.params.id)
    .then((singleCpu) => {
        res.render('cpu/singleCpu.hbs', {singleCpu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
cpuRouter.post('/', (req, res) => {
    cpuModel.createCpu(req.body)
        .then(() => {
            res.redirect('/cpu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
cpuRouter.put('/:id', (req, res) => {
    cpuModel.updateCpu(req.params.id, req.body)
        .then(() => {
            res.redirect(`/cpu/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
cpuRouter.delete('/:id', (req, res) => {
    cpuModel.deleteCpu(req.params.id)
        .then(() => {
            res.redirect('/cpu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = cpuRouter