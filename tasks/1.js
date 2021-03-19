// Task 17:
// Create function which returns array of all section names.
//

const data = require('../data/shop');
const _ = require('lodash');

function returnArrayOfSectionNames(data) {
  return _.keys(data.sections);
}

console.log(returnArrayOfSectionNames(data));
