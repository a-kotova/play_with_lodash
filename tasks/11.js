// Task 8:
// Create function which returns specified amount of subcategories of given category.
// Handle possible exceptions.
//
const data = require('../data/shop');
const _ = require('lodash');

function getSubCategories(givenCategory, subCategoriesNumber) {
  const categoriesPerSection = _.flatMap(data.sections, function(shopSection) {
    return shopSection.categories
  });
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection, function(sectionScope) {
    return _.mapValues(sectionScope, function(category) {
      return _.values(category.subCategories)
    })
  });

  if (_.some(_.map(subCategoriesPerCategoryPerSection, function(shopSection) { return _.has(shopSection, givenCategory) }))) {
    const subCategoriesForGivenCategory = _.flatMap(subCategoriesPerCategoryPerSection, function(sectionScope) {
      return _.flatten(_.values(_.pick(sectionScope, givenCategory)))
    });

    return _.sampleSize(subCategoriesForGivenCategory, subCategoriesNumber);
  } else {
    throw 'Given category does not exist'
  }
}

console.log(getSubCategories('CCTV', 1));
