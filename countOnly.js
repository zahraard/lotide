const assertEqual = function(actual, expected) {
  let failEmoji = String.fromCodePoint(0x1F534);
  let passEmoji = String.fromCodePoint(0x2705);
  if (actual === expected) { 
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for(let name of allItems){
    if(itemsToCount[name]){
      if(results[name]){
        results[name]++;
      } else {
      results[name] = 1;
      }
    }
  }
  return results;
}

module.exports = countOnly;
