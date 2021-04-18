// Task 14:
// Create a function which asserts whether every main tile has following subcategory or not.
// Function should logs results into console.
//
const data = require('../data/shop');
const _ = require('lodash');

function ifMainTileHasSubCategory(givenCategory, givenSubCategory) {
  const allCategoriesPerSection =  _.flatMap(data.sections, function (shopSection) {
    return shopSection.categories;
  });
  const givenSubCategoryPath = _.compact(_.map(allCategoriesPerSection, function(sectionScope) {
    if(_.has(sectionScope, givenCategory)) {
      try {
        return sectionScope[givenCategory].subCategories[givenSubCategory].path;
      } catch(e) {
        throw `Given "${givenSubCategory}" subCategory is not part of given "${givenCategory}" category`
      }
    }
  }));

  if (givenSubCategoryPath.length === 1) {
    _.forEach(data.mainTiles, function(tile) {
      console.log(`${tile.ruName}: ${_.includes(tile.path, givenSubCategoryPath[0])}`)
    })
  } else throw new Error(`Given "${givenCategory}" category does not exist`)
}

ifMainTileHasSubCategory('tourismAndCamping','thermosesAndThermomugs');
