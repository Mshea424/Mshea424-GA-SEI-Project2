const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const gpuSchema = new Schema({
    brand: String,
    series: String,
    memory: String,
    ddr: String
    
})

const gpuList = mongoose.model('gpu', gpuSchema)

// get/read all
function getAllGpus() {
    return gpuList.find({})
}

// get/read one
function getOneGpu(id) {
    return gpuList.findById(id)
}

// post/create
function createGpu(newGpu) {
return gpuList.create(newGpu)
}

// put/update
function updateGpu(id, newGpu) {
    return gpuList.findByIdAndUpdate(id, newGpu)
}

// delete
function deleteGpu(id) {
    return gpuList.findByIdAndDelete(id)
}

module.exports = {
    getAllGpus,
    getOneGpu,
    createGpu,
    updateGpu,
    deleteGpu
}