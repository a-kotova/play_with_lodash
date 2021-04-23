// Task 4:
// Create a function which return the number of all subcategories in the shop
//

const _ = require('lodash');
const helpers = require('../utils/helpers');

function getNumberOfSubCategories() {
  const arrayOfCategories = helpers.getArrayOfCategories();
  return _.flatten(_.map(arrayOfCategories, (category) => _.keys(category.subCategories))).length;
}

console.log(getNumberOfSubCategories());
