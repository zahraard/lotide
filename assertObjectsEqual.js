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

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for(let obj in object1){
    if(Array.isArray(object1[obj]) && Array.isArray(object2[obj])){
      if(!eqArrays(object1[obj], object2[obj])){
        return false;
      }  
    } else {
      if(object1[obj] !== object2[obj]){
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if(eqObjects(actual, expected)){
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`) 
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

