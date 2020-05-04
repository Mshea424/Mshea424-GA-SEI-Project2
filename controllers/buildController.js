const express = require('express')
const buildModel = require('../models/buildModel.js')
const buildRouter = express.Router()
const mbModel = require('../models/mbModel.js')
const cpuModel = require('../models/cpuModel.js')
const ramModel = require('../models/ramModel.js')
const gpuModel = require('../models/gpuModel.js')
const psuModel = require('../models/psuModel.js')
const cpuCoolerModel = require('../models/cpuCoolerModel.js')
const gpuCoolerModel = require('../models/gpuCoolerModel.js')
const caseModel = require('../models/caseModel.js')
const fanModel = require('../models/fanModel.js')

// get All
buildRouter.get('/', (req, res) => {
    buildModel.getAllBuilds()
        .then((allBuilds) => {
            res.render('build/allBuilds.hbs', { allBuilds })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//Go to Create new Build page
buildRouter.get('/new', async (req, res) => {
    const allMbs = await mbModel.getAllMbs()
    const allCpus = await cpuModel.getAllCpus()
    const allRams = await ramModel.getAllRams()
    const allGpus = await gpuModel.getAllGpus()
    const allPsus = await psuModel.getAllPsus()
    const allCpuCoolers = await cpuCoolerModel.getAllCpuCoolers()
    const allGpuCoolers = await gpuCoolerModel.getAllGpuCoolers()
    const allCases = await caseModel.getAllCases()
    const allFans = await fanModel.getAllFans()
    res.render('build/createBuild.hbs', { allMbs, allCpus, allRams, allGpus, allPsus, allCpuCoolers, allGpuCoolers, allCases, allFans })
})

//Go To Edit Build Page
buildRouter.get('/:id/edit', async (req, res) => {
    try {
        const allMbs = await mbModel.getAllMbs()
        const allCpus = await cpuModel.getAllCpus()
        const allRams = await ramModel.getAllRams()
        const allGpus = await gpuModel.getAllGpus()
        const allPsus = await psuModel.getAllPsus()
        const allCpuCoolers = await cpuCoolerModel.getAllCpuCoolers()
        const allGpuCoolers = await gpuCoolerModel.getAllGpuCoolers()
        const allCases = await caseModel.getAllCases()
        const allFans = await fanModel.getAllFans()
        const singleBuild = await buildModel.getOneBuild(req.params.id)
        res.render('build/editBuild.hbs', { singleBuild, allMbs, allCpus, allRams, allGpus, allPsus, allCpuCoolers, allGpuCoolers, allCases, allFans })

    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// get ONE
buildRouter.get('/:id', async (req, res) => {
    try {
        const singleBuild = await buildModel.getOneBuild(req.params.id)
        const singleMb = await mbModel.getOneMb(singleBuild.mbId)
        const singleCpu = await cpuModel.getOneCpu(singleBuild.cpuId)
        const singleRam = await ramModel.getOneRam(singleBuild.ramId)
        const singleGpu = await gpuModel.getOneGpu(singleBuild.gpuId)
        const singlePsu = await psuModel.getOnePsu(singleBuild.psuId)
        const singleCpuCooler = await cpuCoolerModel.getOneCpuCooler(singleBuild.cpuCoolerId)
        const singleGpuCooler = await gpuCoolerModel.getOneGpuCooler(singleBuild.gpuCoolerId)
        const singleCase = await caseModel.getOneCase(singleBuild.caseId)
        const singleFan = await fanModel.getOneFan(singleBuild.fanId)

        res.render('build/singleBuild.hbs', { singleBuild, singleMb, singleCpu, singleRam, singleGpu, singlePsu, singleCpuCooler, singleGpuCooler, singleCase, singleFan })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
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