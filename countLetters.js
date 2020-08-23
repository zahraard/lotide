const assertEqual = function(actual, expected) {
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if (actual === expected) { 
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(str){
  let results = {};
  for(let letter of str){
    if(letter !== ' '){
      if(results[letter]){
        results[letter]++;
      } else {
      results[letter] = 1;
      }
    }
  }
  return results;
}

module.exports = countLetters;
