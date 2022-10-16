const str = "   FunctionUp   ";

function trim() {
    console.log(str.trim());
   }

function changeToLowerCase(){
      console.log(str.toLowerCase());
}

function changeToUpperCase(){
    console.log(str.toUpperCase());
}
  
  module.exports.trim = trim;
  module.exports.changeToLowerCase = changeToLowerCase;
  module.exports.changeToUpperCase = changeToUpperCase;

  