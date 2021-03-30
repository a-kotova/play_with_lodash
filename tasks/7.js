// Task 4:
// Create function which returns an array of subcategories names
// which have the same 'ruName' and 'subcategoryPageRuHeading'
// and 'path' containing query params
//
const data = require('../data/shop');
const _ = require('lodash');

function getTargetSubCategories() {
  const allCategories =  _.flatMap(data.sections, function (shopSection) {
    return _.values(shopSection.categories);
  });
  const allSubCategoriesPerCategory = _.flatMap(allCategories, function(category) {
    return _.toArray(_.pick(category, ['subCategories']));
  });
  let allSubCategories = _.flatMap(allSubCategoriesPerCategory, function(categoryScope) {
    return _.toPairs(_.mapValues(categoryScope, function (subCategory) {
      return subCategory.ruName === subCategory.subcategoryPageRuHeading && _.includes(subCategory.path, '?');
    }));
  });
  return _.flatMap(_.filter(allSubCategories, function(subCategory) {return subCategory[1]}), function(targetSubCategory) {return targetSubCategory[0]});
}

console.log(getTargetSubCategories());
