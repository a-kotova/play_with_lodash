// Task 2:
// Create function checking whether given subcategory is unique in the shop
//
const data = require('../data/shop');
const _ = require('lodash');

function checkIfSubCategoryUnique(givenSubCategory) {
  const categories = _.map(data.sections, function(section) { return section.categories});
  const subCategories = _.flatten(_.map(_.assign(...categories), function(category) { return _.keys(category.subCategories) }));
  const givenSubCategoryAmount = (_.filter(subCategories, function(subCategory) { return subCategory === givenSubCategory })).length;
  if (givenSubCategoryAmount === 1) {
    return true
  } else if (givenSubCategoryAmount > 1) {
    return false
  } else {
    return 'Given subcategory was not found'
  }
}

console.log(checkIfSubCategoryUnique('chargers'));
