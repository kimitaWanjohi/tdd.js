const stringLength = require('./app.js');

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
