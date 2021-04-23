// Task 3:
// Create a function which returns given amount of random subcategories of given section.
//
const _ = require('lodash');
const data = require('../data/shop');

function getSectionSubcategories(section, amount) {
  const subCategories = _.flatten(_.map(_.values(data.sections[section].categories),
    (sectionCategories) => _.values(sectionCategories.subCategories)));
  return _.sampleSize(subCategories, amount);
}

console.log(getSectionSubcategories('electronics', 2));
