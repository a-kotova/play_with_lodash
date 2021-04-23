// Task 7:
// Create function which returns an array of subcategories names
// which have the same 'ruName' and 'subcategoryPageRuHeading'
// and 'path' containing query params
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function getTargetSubCategories() {
  const allCategories = helpers.getArrayOfCategories();
  const allSubCategoriesPerCategory = _.flatMap(allCategories,
    (category) => _.toArray(_.pick(category, ['subCategories'])));
  const allSubCategories = _.flatMap(allSubCategoriesPerCategory,
    (categoryScope) => _.toPairs(_.mapValues(categoryScope,
      (subCategory) => subCategory.ruName === subCategory.subcategoryPageRuHeading && _.includes(subCategory.path, '?'))));
  return _.flatMap(_.filter(allSubCategories, (subCategory) => subCategory[1]),
    (targetSubCategory) => targetSubCategory[0]);
}

console.log(getTargetSubCategories());
