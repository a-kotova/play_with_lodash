// Task 1:
// Create a function which return the number of all subcategories in the shop
//
const data = require('../data/shop');
const _ = require('lodash');

function getNumberOfSubCategories() {
  let categories = _.map(data.sections, function(section) { return section.categories});
  return (_.flatten(_.map(_.assign(...categories), function(category) { return _.keys(category.subCategories) }))).length;
}

console.log(getNumberOfSubCategories());
