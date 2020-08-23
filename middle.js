const middle = function(array) {
  let arr = [];
  let len = array.length;
  if(len < 3){
    return arr;
  } 
  if(array.length % 2 === 0){
    arr.push(array[(len/2)-1]);
    arr.push(array[(len/2)]);
  } else {
    arr.push(array[(len-1)/2])
  }
  return arr;
}

module.exports = middle;

