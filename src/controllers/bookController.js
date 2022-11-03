const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const newAuthor = require("../models/newAuthor")
const newPublisher = require("../models/newPublisher")
const newBook = require("../models/newBook")


const createBook = async function (req, res) {
    let book = req.body
    let { author, publisher } = book
    if (!author) {
        res.send("Author_Id is not Available")
    } else if (!publisher) {
        res.send("Publisher_Id is not Available")
    } else {
        let authorevalid = await newAuthor.find().select({ _id: 1 })
        let validateauthore = authorevalid.map(obb => obb._id.toString())
        let validAuthor = validateauthore.includes(author)
        // console.log(validAuthor)
        let publishervalid = await newPublisher.find().select({ _id: 1 })
        let validatepublisher = publishervalid.map(obbpublish => obbpublish._id.toString())
        let validPublisher = validatepublisher.includes(publisher)


        if (!validAuthor){
            res.send("Author_id is Invalid")
        } else if (!validPublisher) {
            res.send("publisher is Invalid")
        } else {
            let bookCreated = await newBook.create(book)
            res.send({ data: bookCreated })
        }
    }
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

const getBooksWithDetails = async function (req, res) {
    let specificBook = await newBook.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}



const createAuthor = async function (req, res) {
    let Author = req.body
    let AuthorCreated = await newAuthor.create(Author)
    res.send({ data: AuthorCreated })
}


const createPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisher.create(publisher)
    res.send({ data: publisherCreated })
}



const putbook = async function(req,res){ 
        let publish = await newPublisher.find({name:{$in:["Penguin", "HarperCollins"]}}).select({_id:1}) 
        const publishid =[] 
        for (let i = 0; i < publish.length; i++){ 
            publishid.push(publish[i]._id) 
        } 
        let updatehardcover = await newBook.updateMany({publisher:{ $in : publishid}},{Hardcover : true},{new:true},) 
        res.send({status: true, HardCover: updatehardcover}) 
     
    }  


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.getBooksWithDetails = getBooksWithDetails
module.exports.putbook = putbook



// module.exports.getBooksData= getBooksData