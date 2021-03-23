// Task 2:
// Create function checking whether given subcategory is unique in the shop
//
const data = require('../data/shop');
const _ = require('lodash');

function isSubCategoryUnique(subCategoryRuName) {
  const categories = _.flatten(_.map(data.sections, function(section) { return _.values(section.categories) }));
  const allSubCategories = _.flatten(_.map(categories, function(category) { return _.values(category.subCategories) }));
  const givenSubCategoryAmount = (_.filter(allSubCategories, function(subCategory) { return subCategory.ruName === subCategoryRuName })).length;
  if (givenSubCategoryAmount === 1) {
    return true
  } else if (givenSubCategoryAmount > 1) {
    return false
  } else {
    return 'Given subcategory was not found'
  }
}

console.log(isSubCategoryUnique('Антивирусы и безопасность'));
