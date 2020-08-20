const assertEqual = function(actual, expected) {
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if (actual === expected) { 
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(list, value){
  for(let item in list){
    if(list[item] === value){
      return item;
    }
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);