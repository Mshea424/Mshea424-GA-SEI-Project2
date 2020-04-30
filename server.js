const express = require('express')

const cpuRouter = require('./controllers/cpuController.js')
const mbRouter = require('./controllers/mbController.js')
const psuRouter = require('./controllers/psuController.js')
const ramRouter = require('./controllers/ramController.js')
const buildRouter = require('./controllers/buildController.js')
const caseRouter = require('./controllers/caseController.js')
const cpuCoolerRouter = require('./controllers/cpuCoolerController.js')

const methodOverride = require('method-override')

const server = express()
const port = 3000

server.set('view engine', 'hbs')

server.use(methodOverride('_method'))
server.use(express.urlencoded())
server.use(express.json())
server.use(express.static(__dirname + '/public'))

server.get('/', (req, res) => {
    res.json('ok')
})

server.use('/cpu', cpuRouter)
server.use('/mb', mbRouter)
server.use('/psu', psuRouter)
server.use('/ram', ramRouter)
server.use('/build', buildRouter)
server.use('/case', caseRouter)
server.use('/cpuCooler', cpuCoolerRouter)

server.listen(port, () => {
    console.log(`server started on ${port}`)
})