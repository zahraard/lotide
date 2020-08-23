const head = require('../head')
const assert = require('chai').assert;

describe('#head', ()=>{
  it('returns 1 for [1, 2, 3]', ()=>{
    let inputValue = [1, 2, 3];
    assert.equal(head(inputValue), 1)
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
})