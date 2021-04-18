// Task 14:
// Create a function which asserts whether every main tile has following subcategory or not.
// Function should logs results into console.
//
const data = require('../data/shop');
const _ = require('lodash');

function ifMainTileHasSubCategory(givenSubCategory) {
  const allCategories =  _.flatMap(data.sections, function (shopSection) {
    return _.values(shopSection.categories);
  });
  const allSubCategoriesPerCategory = _.flatMap(allCategories, function(category) {
    return _.toArray(_.pick(category, ['subCategories']));
  });
  const givenSubCategoryPath = _.compact(_.map(allSubCategoriesPerCategory, function(categoryScope) {
    if(_.has(categoryScope, givenSubCategory)) {
      return categoryScope[givenSubCategory].path;
    }
  }))[0];

  _.forEach(data.mainTiles, function(tile) {
    console.log(`${tile.ruName}: ${_.includes(tile.path, givenSubCategoryPath)}`)
  })
}

ifMainTileHasSubCategory('thermosesAndThermomugs');
