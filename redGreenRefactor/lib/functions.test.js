const { 
  getName,
  copyAndPush,
  fetchQuote
} = require('./functions.js');


describe('getName function', () => {
  it('finds the object by its name', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});

describe('copyAndPush function', () => {
  it('copies original array and pushes new item onto copy', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);

    expect(newNumbers).toEqual([1, 2, 3, 4]);
  });
});

describe('copyAndPush non-mutating function', () => {
  it('should leave original array un-mutated', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);

    expect(newNumbers).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

