// Task 19:
// Create a function which returns given amount of random subcategories of given section.
//
const data = require('../data/shop');
const _ = require('lodash');

function returnNSubcategoriesOfSection(section, amount) {
  let arr = _.map(data.sections[section].categories, function (category) {return category.subCategories})
  return _.sampleSize(_.assign(...arr), amount);
}

console.log(returnNSubcategoriesOfSection('electronics', 2));
