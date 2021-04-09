// Task 11:
// Create a function which returns array of sections names with modified case.
// Function should have option to transform case to upper / lower / capitalized case.
//
const data = require('../data/shop');
const _ = require('lodash');

function getCaseModifiedSections(requiredCase) {
  const sectionNames = _.keys(data.sections);
  return _.map(sectionNames, function (section) {
    if (requiredCase === 'upper') {
      return _.upperCase(section);
    } else if (requiredCase === 'lower') {
      return _.lowerCase(section);
    } else if (requiredCase === 'capitalized') {
      return _.capitalize(section);
    }
    return section;
  })
}

console.log(getCaseModifiedSections('upper'));
