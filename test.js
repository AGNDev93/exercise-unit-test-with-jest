// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('Convert 10 dollars to yen', () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1463.55, 2); 
});

test('Convert 10 euros to dollars', () => {
    expect(fromEuroToDollar(10)).toBeCloseTo(10.7, 2); 
});

test('Convert 1000 yen to pounds', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.55, 2); 
});

