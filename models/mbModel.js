const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const mbSchema = new Schema({
    brand: String,
    class: String,
    socketType: String
})

const mbList = mongoose.model('mb', mbSchema)

// get/read all
function getAllMbs() {
    return mbList.find({})
}

// get/read one
function getOneMb(id) {
    return mbList.findById(id)
}

// post/create
function createMb(newMb) {
return mbList.create(newMb)
}

// put/update
function updateMb(id, newMb) {
    return mbList.findByIdAndUpdate(id, newMb)
}

// delete
function deleteMb(id) {
    return mbList.findByIdAndDelete(id)
}

module.exports = {
    getAllMbs,
    getOneMb,
    createMb,
    updateMb,
    deleteMb
}