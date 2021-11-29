var uniqueRandomArray = require('unique-random-array');
var starWarNames = require('./startwars-names.json');

module.exports = {
    all: starWarNames,
    random: uniqueRandomArray(starWarNames)
};