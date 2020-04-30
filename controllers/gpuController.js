const express = require('express')
const gpuModel = require('../models/gpuModel.js')
const gpuRouter = express.Router()

// get All
gpuRouter.get('/', (req, res) =>{
    gpuModel.getAllGpus()
    .then((allGpus) => {
        res.render('gpu/allGpus.hbs', {allGpus})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Gpu page
gpuRouter.get('/new', (req, res) =>{
    res.render('gpu/createGpu.hbs')
})

//Go To Edit Gpu Page
gpuRouter.get('/:id/edit', (req, res) => {
    gpuModel.getOneGpu(req.params.id)
    .then((singleGpu) => {
        res.render('gpu/editGpu.hbs', {singleGpu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
gpuRouter.get('/:id', (req, res) => {
    gpuModel.getOneGpu(req.params.id)
    .then((singleGpu) => {
        res.render('gpu/singleGpu.hbs', {singleGpu})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
gpuRouter.post('/', (req, res) => {
    gpuModel.createGpu(req.body)
        .then(() => {
            res.redirect('/gpu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
gpuRouter.put('/:id', (req, res) => {
    gpuModel.updateGpu(req.params.id, req.body)
        .then(() => {
            res.redirect(`/gpu/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
gpuRouter.delete('/:id', (req, res) => {
    gpuModel.deleteGpu(req.params.id)
        .then(() => {
            res.redirect('/gpu')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = gpuRouter