let tail = function(arr) {
  const result = [];
  arr.forEach((element, index)=>{
    if (index !== 0) {
      result.push(element);
    }
  });
  return result;
};

module.exports = tail;
 
