const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 120
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    isAdm: {
        type: Boolean,
        required: true
    },
    createdOn: String,
    updatedOn: String,
    uuid: String
})


module.exports = mongoose.model("users", userSchema)