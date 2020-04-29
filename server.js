const express = require('express')
const cpuRouter = require('./controllers/cpuController.js')
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

server.listen(port, () => {
    console.log(`server started on ${port}`)
})