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

let without = function(source, itemsToRemove){
  let arr = source.slice(0);
  for (let i=0; i< arr.length; i++){
    for (let item of itemsToRemove){
      if(item === arr[i]){
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

module.exports = without;
