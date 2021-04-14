// Task 12:
// Create a function which returns array of shop section names modified by given algorithm.
// Algorithm should be provided during function invocation.
//
const data = require('../data/shop');
const _ = require('lodash');

function getModifiedSectionNames(givenAlgorithm) {
  return _.map(_.keys(data.sections), function(sectionName) {
    return givenAlgorithm(sectionName);
  });
}

function getStringAcronym(string) {
  return _.toUpper(string.slice(0,4));
}

console.log(getModifiedSectionNames(getStringAcronym));
