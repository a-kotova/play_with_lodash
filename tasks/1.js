// Task 1:
// Create function which returns array of all section names.
//

const data = require('../data/shop');
const _ = require('lodash');

function getSectionNames(data) {
  return _.keys(data.sections);
}

console.log(getSectionNames(data));
