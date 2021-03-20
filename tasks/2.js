// Task 18:
// Create function which returns object containing names of categories as keys
// and count of subcategories inside of category as a value.
//
const data = require('../data/shop');
const _ = require('lodash');

function countSubCategories(data) {
  let all = _.map(data.sections, function(section) { return section.categories});
  return _.mapValues(_.assign(...all), function(category) { return _.keys(category.subCategories).length });
}

console.log(countSubCategories(data));

