const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const caseSchema = new Schema({
    name: String,
    brand: String,
    size: String,
    viewPort: String,
    waterCool: String
    
})

const caseList = mongoose.model('case', caseSchema)

// get/read all
function getAllCases() {
    return caseList.find({})
}

// get/read one
function getOneCase(id) {
    return caseList.findById(id)
}

// post/create
function createCase(newCase) {
return caseList.create(newCase)
}

// put/update
function updateCase(id, newCase) {
    return caseList.findByIdAndUpdate(id, newCase)
}

// delete
function deleteCase(id) {
    return caseList.findByIdAndDelete(id)
}

module.exports = {
    getAllCases,
    getOneCase,
    createCase,
    updateCase,
    deleteCase
}