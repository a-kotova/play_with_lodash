// Task 18:
// Create function which returns object containing names of categories as keys
// and count of subcategories inside of category as a value.
//
const data = require('../data/shop');
const _ = require('lodash');

function countSubCategories(data) {
  return _.mapValues(data.sections, function(section) { return _.keys(section.categories).length })
}

console.log(countSubCategories(data));
