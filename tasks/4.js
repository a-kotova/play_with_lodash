// Task 1:
// Create a function which return the number of all subcategories in the shop
//
const data = require('../data/shop');
const _ = require('lodash');

function getNumberOfSubCategories() {
  const arrayOfCategories = _.flatten(_.map(data.sections, function(section) { return _.values(section.categories) }));
  return _.flatten(_.map(arrayOfCategories, function(category) { return _.keys(category.subCategories) })).length;
}

console.log(getNumberOfSubCategories());
