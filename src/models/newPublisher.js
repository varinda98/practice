const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const newPublisher  = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    headQuarter:String
}, { timestamps: true });

module.exports = mongoose.model('publisher Name', newPublisher)