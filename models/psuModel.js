const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const psuSchema = new Schema({
    brand: String,
    watts: String,
    efficiency: String,
    modularity: String
})

const psuList = mongoose.model('psu', psuSchema)

// get/read all
function getAllPsus() {
    return psuList.find({})
}

// get/read one
function getOnePsu(id) {
    return psuList.findById(id)
}

// post/create
function createPsu(newPsu) {
return psuList.create(newPsu)
}

// put/update
function updatePsu(id, newPsu) {
    return psuList.findByIdAndUpdate(id, newPsu)
}

// delete
function deletePsu(id) {
    return psuList.findByIdAndDelete(id)
}

module.exports = {
    getAllPsus,
    getOnePsu,
    createPsu,
    updatePsu,
    deletePsu
}