const { stringLength, reverseString } = require('./app.js');
const Calculator = require('./calc.js');

console.log(stringLength('hello'));

describe('stringLength', () => {
    test('returns the length of a string', () => {
        // arrange
        const arg = 'hello';
        // act
        const result = stringLength(arg);
        // assert
        expect(result).toBe(5);
    });
    test('throws an error if the string is too short', () => {
        // arrange
        const arg = '';
        // act
        const result = () => stringLength(arg);
        // assert
        expect(result).toThrow();
    });
});

describe('reverseString', () => {
    test('reverses a string', () => {
        // arrange
        const arg = 'hello';
        // act
        const result = reverseString(arg);
        // assert
        expect(result).toBe('olleh');
    });
});

// test calc add

describe('Calculator', () => {
    let calc;
    beforeEach(() => {
        calc = new Calculator();
    });
    test('add', () => {
        // arrange
        const arg = 5;
        // act
        calc.add(arg);
        // assert
        expect(calc.value).toBe(5);
    });
    test('subtract', () => {
        // arrange
        const arg = 5;
        // act
        calc.subtract(arg);
        // assert
        expect(calc.value).toBe(-5);
    });
    test('multiply', () => {
        // arrange
        const arg = 5;
        // act
        calc.multiply(arg);
        // assert
        expect(calc.value).toBe(0);
    });
    test('divide', () => {
        // arrange
        const arg = 5;
        // act
        calc.divide(arg);
        // assert
        expect(calc.value).toBe(0);
    });
});