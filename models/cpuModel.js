const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const cpuSchema = new Schema({
    name: String,
    brand: String,
    cores: String,
    frequency: String,
    hyperthreading: String
})

const cpuList = mongoose.model('cpu', cpuSchema)

// get/read all
function getAllCpus() {
    return cpuList.find({})
}

// get/read one
function getOneCpu(id) {
    return cpuList.findById(id)
}

// post/create
function createCpu(newCpu) {
return cpuList.create(newCpu)
}

// put/update
function updateCpu(id, newCpu) {
    return cpuList.findByIdAndUpdate(id, newCpu)
}

// delete
function deleteCpu(id) {
    return cpuList.findByIdAndDelete(id)
}

module.exports = {
    getAllCpus,
    getOneCpu,
    createCpu,
    updateCpu,
    deleteCpu
}