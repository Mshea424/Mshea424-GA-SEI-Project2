const express = require('express')

const landingRouter = require('./controllers/landingController.js')
const cpuRouter = require('./controllers/cpuController.js')
const mbRouter = require('./controllers/mbController.js')
const psuRouter = require('./controllers/psuController.js')
const ramRouter = require('./controllers/ramController.js')
const buildRouter = require('./controllers/buildController.js')
const caseRouter = require('./controllers/caseController.js')
const cpuCoolerRouter = require('./controllers/cpuCoolerController.js')
const fanRouter = require('./controllers/fanController.js')
const gpuRouter = require('./controllers/gpuController.js')
const gpuCoolerRouter = require('./controllers/gpuCoolerController.js')

const methodOverride = require('method-override')

const server = express()
const port = 3000

server.set('view engine', 'hbs')

server.use(methodOverride('_method'))
server.use(express.urlencoded())
server.use(express.json())
server.use(express.static(__dirname + '/public'))


server.use('/home', landingRouter)
server.use('/cpu', cpuRouter)
server.use('/mb', mbRouter)
server.use('/psu', psuRouter)
server.use('/ram', ramRouter)
server.use('/build', buildRouter)
server.use('/case', caseRouter)
server.use('/cpuCooler', cpuCoolerRouter)
server.use('/fan', fanRouter)
server.use('/gpu', gpuRouter)
server.use('/gpuCooler', gpuCoolerRouter)

server.listen(port, () => {
    console.log(`server started on ${port}`)
})