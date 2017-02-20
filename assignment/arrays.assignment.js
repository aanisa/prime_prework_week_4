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
  var reversedArray = '';
for (var i = 0; i <= arrayParam.length; i++) {
  reversedArray[i - 1] = arrayParam[arrayParam.length - i];
}
  return reversedArray[i];
}


console.log(loopArray(createArray()));
console.log(arrayReverser(createArray()));

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
