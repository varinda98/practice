const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const newBook  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true},
    author:{
        type:ObjectId,
        required:true,
        ref:"authorsName"},
    price:Number,
    ratings:Number,
    publisher:{
        type:ObjectId,
        required:true,
        ref:"publisher Name"},
    isHardCover:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('Book Name', newBook)