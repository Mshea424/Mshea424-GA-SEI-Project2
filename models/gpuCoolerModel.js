const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const gpucoolerSchema = new Schema({
    brand: String,
    type: String,
})

const gpucoolerList = mongoose.model('gpucooler', gpucoolerSchema)

// get/read all
function getAllGpuCoolers() {
    return gpucoolerList.find({})
}

// get/read one
function getOneGpuCooler(id) {
    return gpucoolerList.findById(id)
}

// post/create
function createGpuCooler(newGpuCooler) {
return gpucoolerList.create(newGpuCooler)
}

// put/update
function updateGpuCooler(id, newGpuCooler) {
    return gpucoolerList.findByIdAndUpdate(id, newGpuCooler)
}

// delete
function deleteGpuCooler(id) {
    return gpucoolerList.findByIdAndDelete(id)
}

module.exports = {
    getAllGpuCoolers,
    getOneGpuCooler,
    createGpuCooler,
    updateGpuCooler,
    deleteGpuCooler
}