const middle = require('../middle')
const assert = require('chai').assert;

describe('#middle', ()=>{
  it('returns [3] for [1, 2, 3, 4, 5]', ()=>{
    let inputValue = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(inputValue), [3])
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    let inputValue = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(inputValue), [3, 4]); 
  });
})