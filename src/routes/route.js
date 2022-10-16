const express = require('express');
const lodash = require('lodash');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../logger')
const wel = require("../logger/logger");
const info = require("../util/helper");
const format = require("../validator/formatter");
//importing external package
//const underscore = require('underscore')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    //console.log("Calling my function ",xyz.myFunction())
    console.log(wel.welcome());
    console.log(info.printDate());
    console.log(info.printMonth());
    console.log(info.getBatchInfo());
    console.log(format.trim());
    console.log(format.changeToLowerCase());
    console.log(format.changeToUpperCase());

    const arr = [
        "January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December",
    ];
    
    console.log(lodash.chunk(arr, 4));

    const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(lodash.tail(oddNum, 9));

    const Num = [2, 5, 4, 2, 4, 7];
  console.log(lodash.union(Num));

  const keyValue = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];

  console.log(lodash.fromPairs(keyValue));

  
    
    //console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    //let myArray = ['Akash', 'Pritesh', 'Sabiha']
    //let result = underscore.first(myArray)
    //console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

