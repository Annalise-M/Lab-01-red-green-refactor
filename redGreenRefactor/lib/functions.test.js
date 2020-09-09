const { 
  getName,
  copyAndPush,
  capitalizeAndFilter,
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

describe('capitalizeAndFilter function', () => {
  it('filters letter f, while capitalizing all strings', () => {
    const strings = ['make', 'this', 'uppercase', 'for-real'];
    const result = capitalizeAndFilter(strings);

    expect(result).toEqual(['MAKE', 'THIS', 'UPPERCASE']);
  });
});


describe('fetchQuote function', () => {
  it('fetches quote from futurama api', async() => {
    const object = await fetchQuote();
    
    expect(object).toMatchObject({
      image: expect.any(String),
      name: expect.any(String),
      text: expect.any(String)
    });
  });
});
