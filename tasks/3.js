// Task 19:
// Create a function which returns given amount of random subcategories of given section.
//
const data = require('../data/shop');
const _ = require('lodash');

function getSectionSubcategories(section, amount) {
  const subCategories = _.flatten(_.map(_.values(data.sections[section].categories), function(sectionCategories) { return _.values(sectionCategories.subCategories) }));
  return _.sampleSize(subCategories, amount);
}

console.log(getSectionSubcategories('electronics', 2));
