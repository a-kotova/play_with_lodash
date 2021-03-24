// Task 3:
// Create function which returns all non-unique subcategories.
// Items in returning collection should have only 3 properties: 'ruName', 'subcategoryPageRuHeading', 'path'
//
const data = require('../data/shop');
const _ = require('lodash');

function getNonUniqueSubCategories() {
  const categories = _.flatten(_.map(data.sections, function(section) { return _.values(section.categories) }));
  const allSubCategories = _.flatten(_.map(categories, function(category) { return _.values(category.subCategories) }));
  return _.map(_.filter(allSubCategories, function(subCategory) { return !subCategory.isUnique }),
    function(nonUniqueSubCategory) { return _.pick(nonUniqueSubCategory, ['ruName', 'subcategoryPageRuHeading', 'path']) });
}

console.log(getNonUniqueSubCategories());
