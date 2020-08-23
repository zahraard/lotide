let eqArrays = require('./eqArrays')

let assertArraysEqual = function(actual, expected){
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if(eqArrays(actual, expected)){
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); 