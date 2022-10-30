// const { count } = require("console")
// const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
    // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

// ============================================================================================


const { count } = require("console") 
const BookModel= require("../models/bookModel") 
const authorModel = require("../models/authorModel"); 
 
const createBook= async function (req, res) { 
    let data= req.body 
    let savedData= await BookModel.create(data) 
    res.send({msg: savedData}) 
} 
 
const createAuthor= async function (req, res) { 
    let data= req.body 
    let authorData= await authorModel.create(data) 
    res.send({msg: authorData}) 
} 
 
 
const chetanbhagatbyid = async function(req, res){ 
    let databycb = await  authorModel.findOne({author_name : "Chetan Bhagat"}) 
    chetanid = databycb.author_id 
    listofcbid = await BookModel.find({ author_id : chetanid}) 
    res.send({msg : listofcbid}) 
} 
 
const twostatesdata = async function(req,res){ 
    const bookDetails = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100, age:24}}, {new:true}) 
     
    const autotrId = bookDetails.author_id 
     
    const author = await authorModel.findOne({author_id: autotrId }) 
     
    res.send({authorName: author.author_name, price: bookDetails.price}) 
     
    } 
 
 

 
    const getbook50100 = async function(req,res){ 
        const bookDetails = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100, age:24}}, {new:true}) 
         
        const autotrId = bookDetails.author_id
         
        const author = await authorModel.findOne({author_id: autotrId }) 
         
        res.send({authorName: author.author_name, price: bookDetails.price}) 
         
        } 
 
    module.exports.createBook= createBook 
    module.exports.createAuthor= createAuthor 
    module.exports.twostatesdata =twostatesdata 
  module.exports.chetanbhagatbyid =chetanbhagatbyid 
  module.exports.getbook50100 =getbook50100