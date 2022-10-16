const lodash = require('lodash');
const arr = [
    "January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December",
];

console.log(lodash.chunk(arr, 4));
let oddNumbers = 1;
while(oddNumbers < 20){
    console.log(oddNumbers);
    oddNumbers = oddNumbers + 2;
} 


