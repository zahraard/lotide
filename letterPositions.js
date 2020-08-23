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

let assertArraysEqual = function(arr1, arr2){
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if(eqArrays(arr1, arr2)){
    return `${passEmoji}${passEmoji}${passEmoji} Arrays are equal.`
  } else {
    return `${failEmoji}${failEmoji}${failEmoji} Arrays are not equal.`
  }
}

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for(let letter of sentence){
    if(letter !== ' '){
      results[letter] = [];
    }
  }
  for(let letter of sentence){
    if(letter !== ' '){
      results[letter].push(i);
    }
      i++;
  }
  return results;
};

module.exports = letterPositions;

// let res = letterPositions("hello")
// console.log(assertArraysEqual(res['h'], [0])); 