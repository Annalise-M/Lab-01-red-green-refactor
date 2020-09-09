const { 
  getName
} = require('./functions.js');


describe('getName', () => {
  it('finds the object by its name', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});


