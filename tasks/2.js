// Task 2:
// Create function which returns object containing names of categories as keys
// and count of subcategories inside of category as a value.
//
const _ = require('lodash');
const data = require('../data/shop');

function countSubCategories() {
  const categoriesPerSection = _.flatMap(data.sections, (shopSection) => (
    _.toArray(_.pick(shopSection, ['categories']))
  ));
  return _.fromPairs(_.flatMap(categoriesPerSection, (sectionScope) => (
    _.toPairs(_.mapValues(sectionScope, (sectionCategory) => (
      _.keys(sectionCategory.subCategories).length
    )))
  )));
}

console.log(countSubCategories());
