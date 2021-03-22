// Task 18:
// Create function which returns object containing names of categories as keys
// and count of subcategories inside of category as a value.
//
const data = require('../data/shop');
const _ = require('lodash');

function countSubCategories(data) {
  let allCategories = _.map(data.sections, function(storeSections) { return storeSections.categories});
  return _.mapValues(_.assign(...allCategories), function(category) { return _.keys(category.subCategories).length });
}

console.log(countSubCategories(data));
