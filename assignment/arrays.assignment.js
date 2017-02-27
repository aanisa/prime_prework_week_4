/**
Array Review
**/

function createArray() {
var myArray = ['jk', 29, 'lol', 62, 9, 'haha'];
  return myArray;
}
console.log(createArray());



function loopArray(array) {
  var conString = '';
for (var i = 0; i <= 0; i++){
  conString += array;
}
  return conString;
}

function arrayReverser(arrayParam) {
 var reversedArray = [];
 for (var i = arrayParam.length-1; i >= 0; i--) {
   reversedArray.push(arrayParam[i]); }
   return reversedArray;
}


console.log(loopArray(createArray()));
console.log(arrayReverser(createArray()));

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
