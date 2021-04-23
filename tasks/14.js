// Task 14:
// Create a function which returns array of sections names with modified case.
// Function should have option to transform case to upper / lower / capitalized case.
//
const _ = require('lodash');
const data = require('../data/shop');

function getCaseModifiedSections(requiredCase) {
  const sectionNames = _.keys(data.sections);
  return _.map(sectionNames, (section) => {
    switch (requiredCase) {
      case 'upper':
        return _.upperCase(section);
      case 'lower':
        return _.lowerCase(section);
      case 'capitalized':
        return _.capitalize(section);
      default: return section;
    }
  });
}

console.log(getCaseModifiedSections('upper'));
