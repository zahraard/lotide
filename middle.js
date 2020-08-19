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

const middle = function(array) {
  let arr = [];
  let len = array.length;
  if(len < 3){
    return arr;
  } 
  if(arrayEven(array)){
    arr.push(array[(len/2)-1]);
    arr.push(array[(len/2)]);
  } else {
    arr.push(array[(len-1)/2])
  }
  return arr;
}

const arrayEven = function(array){
  if(array.length % 2 === 0){
    return true;
  }
  return false;
}

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))
console.log(middle([1, 2]))