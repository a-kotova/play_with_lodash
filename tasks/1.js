// Task 1:
// Create function which returns array of all section names.
//

const _ = require('lodash');
const data = require('../data/shop');

function getSectionNames(object) {
  return _.keys(object.sections);
}

console.log(getSectionNames(data));
