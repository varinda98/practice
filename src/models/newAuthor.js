const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId



const authorSchema = new mongoose.Schema({
    authorName:{
        type:String,
        unique:true,
        required:true
    },
    age:Number,
    address:String,
    rating:Number
}, { timestamps: true });

module.exports = mongoose.model('authorsName', authorSchema)