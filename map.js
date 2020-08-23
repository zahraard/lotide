let eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  } else {
    for(let i=0; i< arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  }
}

let assertArraysEqual = function(actual, expected){
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if(eqArrays(actual, expected)){
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
}

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

