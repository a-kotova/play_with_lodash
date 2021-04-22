// Task 5:
// Create function checking whether given subcategory is unique in the shop
//
const _ = require('lodash');
const data = require('../data/shop');

function isSubCategoryUnique(subCategoryRuName) {
  const categories = _.flatten(_.map(data.sections, (section) => _.values(section.categories)));
  const allSubCategories = _.flatten(_.map(categories, (category) => {
    _.values(category.subCategories);
  }));
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
