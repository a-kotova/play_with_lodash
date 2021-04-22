// Task 6:
// Create function which returns all non-unique subcategories.
// Items in returning collection should have only 3 properties:
// 'ruName', 'subcategoryPageRuHeading', 'path'
//
const _ = require('lodash');
const data = require('../data/shop');

function getNonUniqueSubCategories() {
  const categories = _.flatten(_.map(data.sections, (section) => _.values(section.categories)));
  const allSubCategories = _.flatten(_.map(categories,
    (category) => _.values(category.subCategories)));
  return _.map(_.filter(allSubCategories, (subCategory) => !subCategory.isUnique),
    (nonUniqueSubCategory) => _.pick(nonUniqueSubCategory, ['ruName', 'subcategoryPageRuHeading', 'path']));
}

console.log(getNonUniqueSubCategories());
