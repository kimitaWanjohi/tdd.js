// string length

function stringLength(str) {
    if (str.length < 1 || str.length > 10) {
        throw new Error('string length must be between 1 and 10');
    }
    return str.length;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = {
    stringLength,
    reverseString,
    capitalize
};