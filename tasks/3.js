// Task 19:
// Create a function which returns given amount of random subcategories of given section.
//
const data = require('../data/shop');
const _ = require('lodash');

function returnNSubcategoriesOfSection (section, amount) {
  let obj = _.find(data.sections,function(el) { return _.has(el.categories, section) });
  return _.sampleSize(obj.categories[section].subCategories, amount);
}

console.log(returnNSubcategoriesOfSection('audio', 2));
