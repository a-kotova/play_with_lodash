// Task 6:
// Create function which returns all non-unique subcategories.
// Items in returning collection should have only 3 properties:
// 'ruName', 'subcategoryPageRuHeading', 'path'
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function getNonUniqueSubCategories() {
  const categories = helpers.getArrayOfCategories();
  const allSubCategories = helpers.getAllSubCategories(categories);
  return _.map(_.filter(allSubCategories, (subCategory) => !subCategory.isUnique),
    (nonUniqueSubCategory) => _.pick(nonUniqueSubCategory, ['ruName', 'subcategoryPageRuHeading', 'path']));
}

console.log(getNonUniqueSubCategories());
