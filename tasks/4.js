// Task 4:
// Create a function which return the number of all subcategories in the shop
//
const _ = require('lodash');
const data = require('../data/shop');

function getNumberOfSubCategories() {
  const arrayOfCategories = _.flatten(_.map(data.sections, (section) => {
    _.values(section.categories);
  }));
  return _.flatten(_.map(arrayOfCategories, (category) => _.keys(category.subCategories))).length;
}

console.log(getNumberOfSubCategories());
