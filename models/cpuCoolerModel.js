const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const cpuCoolerSchema = new Schema({
    name: String,
    brand: String,
    type: String,    
})

const cpuCoolerList = mongoose.model('cpucooler', cpuCoolerSchema)

// get/read all
function getAllCpuCoolers() {
    return cpuCoolerList.find({})
}

// get/read one
function getOneCpuCooler(id) {
    return cpuCoolerList.findById(id)
}

// post/create
function createCpuCooler(newCpuCooler) {
return cpuCoolerList.create(newCpuCooler)
}

// put/update
function updateCpuCooler(id, newCpuCooler) {
    return cpuCoolerList.findByIdAndUpdate(id, newCpuCooler)
}

// delete
function deleteCpuCooler(id) {
    return cpuCoolerList.findByIdAndDelete(id)
}

module.exports = {
    getAllCpuCoolers,
    getOneCpuCooler,
    createCpuCooler,
    updateCpuCooler,
    deleteCpuCooler
}