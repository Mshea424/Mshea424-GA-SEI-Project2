const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const gpuCoolerSchema = new Schema({
    name: String,
    brand: String,
    type: String,
})

const gpuCoolerList = mongoose.model('gpucooler', gpuCoolerSchema)

// get/read all
function getAllGpuCoolers() {
    return gpuCoolerList.find({})
}

// get/read one
function getOneGpuCooler(id) {
    return gpuCoolerList.findById(id)
}

// post/create
function createGpuCooler(newGpuCooler) {
return gpuCoolerList.create(newGpuCooler)
}

// put/update
function updateGpuCooler(id, newGpuCooler) {
    return gpuCoolerList.findByIdAndUpdate(id, newGpuCooler)
}

// delete
function deleteGpuCooler(id) {
    return gpuCoolerList.findByIdAndDelete(id)
}

module.exports = {
    getAllGpuCoolers,
    getOneGpuCooler,
    createGpuCooler,
    updateGpuCooler,
    deleteGpuCooler
}