// Task 14:
// Create a function which asserts whether every main tile has following subcategory or not.
// Function should logs results into console.
//
const data = require('../data/shop');
const _ = require('lodash');

function ifTileHasSubCategory() {
  const allCategories = _.flatMap(data.sections, function(shopSection) {
    return _.values(shopSection.categories);
  });
  const allSubCategories = _.flatMap(allCategories, function(category) {
    return _.values(category.subCategories);
  });
  const allSubCategoriesPaths = _.uniq(_.map(allSubCategories, function(subCategory) {
    return subCategory.path;
  }));

  _.forEach(data.mainTiles, function(tile) {
    const ifContainsSubCategory = _.some(allSubCategoriesPaths, function(subCategoryPath) {
      return _.includes(tile.path, subCategoryPath);
    });
    console.log(`${tile.ruName}: ${ifContainsSubCategory}`);
  });
}

ifTileHasSubCategory();
