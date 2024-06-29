const mongoose = require('mongoose')

const Tournament = new mongoose.Schema({
    name:String,
    playerperteam:Number,
    password:String
})

module.exports = mongoose.model('player',Tournament)