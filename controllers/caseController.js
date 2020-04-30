const express = require('express')
const caseModel = require('../models/caseModel.js')
const caseRouter = express.Router()

// get All
caseRouter.get('/', (req, res) =>{
    caseModel.getAllCases()
    .then((allCases) => {
        res.render('case/allCases.hbs', {allCases})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

//Go to Create new Case page
caseRouter.get('/new', (req, res) =>{
    res.render('case/createCase.hbs')
})

//Go To Edit Case Page
caseRouter.get('/:id/edit', (req, res) => {
    caseModel.getOneCase(req.params.id)
    .then((singleCase) => {
        res.render('case/editCase.hbs', {singleCase})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})


// get ONE
caseRouter.get('/:id', (req, res) => {
    caseModel.getOneCase(req.params.id)
    .then((singleCase) => {
        res.render('case/singleCase.hbs', {singleCase})
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// CREATE
caseRouter.post('/', (req, res) => {
    caseModel.createCase(req.body)
        .then(() => {
            res.redirect('/case')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//UPDATE
caseRouter.put('/:id', (req, res) => {
    caseModel.updateCase(req.params.id, req.body)
        .then(() => {
            res.redirect(`/case/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


//DELETE
caseRouter.delete('/:id', (req, res) => {
    caseModel.deleteCase(req.params.id)
        .then(() => {
            res.redirect('/case')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = caseRouter