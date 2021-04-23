// Task 15:
// Create a function which returns array of shop section names modified by given algorithm.
// Algorithm should be provided during function invocation.
//
const _ = require('lodash');
const data = require('../data/shop');

function getModifiedSectionNames(givenAlgorithm) {
  return _.map(_.keys(data.sections), (sectionName) => givenAlgorithm(sectionName));
}

function getStringAcronym(string) {
  return _.toUpper(string.slice(0, 4));
}

console.log(getModifiedSectionNames(getStringAcronym));
