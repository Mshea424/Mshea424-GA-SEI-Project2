const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const fanSchema = new Schema({
    brand: String,
    size: String,
    quantity: Number,
    wcRad: String
})

const fanList = mongoose.model('fan', fanSchema)

// get/read all
function getAllFans() {
    return fanList.find({})
}

// get/read one
function getOneFan(id) {
    return fanList.findById(id)
}

// post/create
function createFan(newFan) {
return fanList.create(newFan)
}

// put/update
function updateFan(id, newFan) {
    return fanList.findByIdAndUpdate(id, newFan)
}

// delete
function deleteFan(id) {
    return fanList.findByIdAndDelete(id)
}

module.exports = {
    getAllFans,
    getOneFan,
    createFan,
    updateFan,
    deleteFan
}