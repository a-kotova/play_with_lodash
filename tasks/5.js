// Task 5:
// Create function checking whether given subcategory is unique in the shop
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function isSubCategoryUnique(subCategoryRuName) {
  const categories = helpers.getArrayOfCategories();
  const allSubCategories = helpers.getAllSubCategories(categories);
  const givenSubCategoryAmount = (_.filter(allSubCategories,
    (subCategory) => subCategory.ruName === subCategoryRuName)).length;
  if (givenSubCategoryAmount === 1) {
    return true;
  } if (givenSubCategoryAmount > 1) {
    return false;
  }
  return 'Given subcategory was not found';
}

console.log(isSubCategoryUnique('Антивирусы и безопасность'));
