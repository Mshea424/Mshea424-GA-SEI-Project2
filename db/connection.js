const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/pc-builder"

mongoose.connect(connectionString)
    .then(() =>{
        console.log('successfull connection to server')
    })
    .catch((err) => {
        console.log('---------------------------------------------')
        console.log('FAILED TO CONNECT TO MONGO')
        console.log(err)
        console.log('---------------------------------------------')
    })

    module.exports = mongoose