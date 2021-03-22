// Task 19:
// Create a function which returns given amount of random subcategories of given section.
//
const data = require('../data/shop');
const _ = require('lodash');

function getNSubcategoriesOfSection(section, amount) {
  const arrayOfSubCategories = _.flatten(_.map(_.values(data.sections[section].categories), function(category) { return _.values(category.subCategories) }));
  return _.sampleSize(arrayOfSubCategories, amount);
}

console.log(getNSubcategoriesOfSection('electronics', 2));
