const whatColourIs = require('./game');

test('the colour should be red', () => {
    const colour = 'red'
    expect(whatColourIs(colour)).toEqual('Congratulations! :) Your favourite color is red and should be red');
});