const today = new Date()
const day = today.getDate()
const month = today.getMonth()
const getInfo = {
    name: "Lithium",
    week: "W3D5",
    topic: "the topic for today is Nodejs module system",
  };
  

function printDate(){
    console.log("today's date is : ", day);
}

function printMonth(){
    console.log("Current month is : ", month);
}

function getBatchInfo(){
    console.log(
        `The batch is ${getInfo.name}, current week and day is ${getInfo.week}, and ${getInfo.topic}`
    );
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;



  