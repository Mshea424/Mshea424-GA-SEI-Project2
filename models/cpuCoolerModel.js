const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const cpucoolerSchema = new Schema({
    name: String,
    brand: String,
    type: String,    
})

const cpucoolerList = mongoose.model('cpucooler', cpucoolerSchema)

// get/read all
function getAllCpuCoolers() {
    return cpucoolerList.find({})
}

// get/read one
function getOneCpuCooler(id) {
    return cpucoolerList.findById(id)
}

// post/create
function createCpuCooler(newCpuCooler) {
return cpucoolerList.create(newCpuCooler)
}

// put/update
function updateCpuCooler(id, newCpuCooler) {
    return cpucoolerList.findByIdAndUpdate(id, newCpuCooler)
}

// delete
function deleteCpuCooler(id) {
    return cpucoolerList.findByIdAndDelete(id)
}

module.exports = {
    getAllCpuCoolers,
    getOneCpuCooler,
    createCpuCooler,
    updateCpuCooler,
    deleteCpuCooler
}