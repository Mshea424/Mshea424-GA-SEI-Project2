const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const ramSchema = new Schema({
    brand: String,
    memory: String,
    ddr: String,
    frequency: String
    
})

const ramList = mongoose.model('ram', ramSchema)

// get/read all
function getAllRams() {
    return ramList.find({})
}

// get/read one
function getOneRam(id) {
    return ramList.findById(id)
}

// post/create
function createRam(newRam) {
return ramList.create(newRam)
}

// put/update
function updateRam(id, newRam) {
    return ramList.findByIdAndUpdate(id, newRam)
}

// delete
function deleteRam(id) {
    return ramList.findByIdAndDelete(id)
}

module.exports = {
    getAllRams,
    getOneRam,
    createRam,
    updateRam,
    deleteRam
}