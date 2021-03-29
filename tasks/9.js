// Task 6:
// Create a function which returns the most frequently used word in subcategories names
// with length more than 5 characters
//
const data = require('../data/shop');
const _ = require('lodash');

function getFrequentSubCategoryLongerThan5() {
  const allCategories =  _.flatMap(data.sections, function (shopSection) {
    return _.values(shopSection.categories);
  });
  const allSubCategoriesPerCategory = _.flatMap(allCategories, function(category) {
    return _.toArray(_.pick(category, ['subCategories']));
  });
  const allSubCategories = _.flatMap(allSubCategoriesPerCategory, function(categoryScope) {
    return _.keys(categoryScope)
  });
  const subCategoriesLongerThan5 = _.filter(allSubCategories, function(subCategory) { return subCategory.length > 5 });
  const subCategoriesUsage = _.toPairs(_.countBy(subCategoriesLongerThan5, function(subCategory) { return subCategory }));
  return _.last(_.sortBy(subCategoriesUsage, [function(subCategory) { return subCategory[1] }]))[0];

}

console.log(getFrequentSubCategoryLongerThan5());
