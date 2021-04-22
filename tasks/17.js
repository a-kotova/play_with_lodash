// Task 17:
// Create a function which asserts whether every main tile has following subcategory or not.
// Function should logs results into console.
//
const _ = require('lodash');
const data = require('../data/shop');

function ifTileHasSubCategory() {
  const allCategories = _.flatMap(data.sections, (shopSection) => _.values(shopSection.categories));
  const allSubCategories = _.flatMap(allCategories, (category) => _.values(category.subCategories));
  const allSubCategoriesPaths = _.uniq(_.map(allSubCategories, (subCategory) => subCategory.path));

  _.forEach(data.mainTiles, (tile) => {
    const ifContainsSubCategory = _.some(allSubCategoriesPaths,
      (subCategoryPath) => _.includes(tile.path, subCategoryPath));
    console.log(`${tile.ruName}: ${ifContainsSubCategory}`);
  });
}

ifTileHasSubCategory();
