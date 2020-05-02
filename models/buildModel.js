const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const buildSchema = new Schema({
    name: String,
    mbId: String,
    cpuId: String,
    ramId: String,
    gpuId: String,
    psuId: String,
    cpuCoolerId: String,
    gpuCoolerId: String,
    caseId: String,
    fanId: String
})

const buildList = mongoose.model('build', buildSchema)

// get/read all
function getAllBuilds() {
    return buildList.find({})
}

// get/read one
function getOneBuild(id) {
    return buildList.findById(id)
}

// post/create
function createBuild(newBuild) {
return buildList.create(newBuild)
}

// put/update
function updateBuild(id, newBuild) {
    return buildList.findByIdAndUpdate(id, newBuild)
}

// delete
function deleteBuild(id) {
    return buildList.findByIdAndDelete(id)
}

module.exports = {
    getAllBuilds,
    getOneBuild,
    createBuild,
    updateBuild,
    deleteBuild
}