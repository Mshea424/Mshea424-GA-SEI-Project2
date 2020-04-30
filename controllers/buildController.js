const express = require('express')
const buildModel = require('../models/buildModel.js')
const buildRouter = express.Router()

// get All
buildRouter.get('/', (req, res) =>{
    buildModel.getAllBuilds()
    .then((allBuilds) => {
        res.render('build/allBuilds.hbs', {allBuilds})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Build page
buildRouter.get('/new', (req, res) =>{
    res.render('build/createBuild.hbs')
})

//Go To Edit Build Page
buildRouter.get('/:id/edit', (req, res) => {
    buildModel.getOneBuild(req.params.id)
    .then((singleBuild) => {
        res.render('build/editBuild.hbs', {singleBuild})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
buildRouter.get('/:id', (req, res) => {
    buildModel.getOneBuild(req.params.id)
    .then((singleBuild) => {
        res.render('build/singleBuild.hbs', {singleBuild})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
buildRouter.post('/', (req, res) => {
    buildModel.createBuild(req.body)
        .then(() => {
            res.redirect('/build')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
buildRouter.put('/:id', (req, res) => {
    buildModel.updateBuild(req.params.id, req.body)
        .then(() => {
            res.redirect(`/build/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
buildRouter.delete('/:id', (req, res) => {
    buildModel.deleteBuild(req.params.id)
        .then(() => {
            res.redirect('/build')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = buildRouter