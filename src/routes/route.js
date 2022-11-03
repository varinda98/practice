const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.get("/getBooksData", bookController.getBooksData)

router.post("/createBook", bookController.createBook  )
router.post("/createAuthor", bookController.createAuthor  )
router.post("/createPublisher", bookController.createPublisher  )
router.get("/getBooksWithDetails", bookController.getBooksWithDetails)
router.put("/putbook", bookController.putbook)


module.exports = router;