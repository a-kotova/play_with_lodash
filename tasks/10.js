// Task 10:
// Create a function which returns subcategories of given category sorted alphabetically by 'ruName' in given order.
//
const data = require('../data/shop');
const _ = require('lodash');

function getSortedSubCategories(givenCategory, sortingOrder = 'asc') {
  const categoriesPerSection = _.flatMap(data.sections, function(shopSection) {
    return shopSection.categories
  });
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection, function(sectionScope) {
    return _.mapValues(sectionScope, function(category) {
      return _.values(category.subCategories)
    })
  });
  const subCategoriesForGivenCategory = _.flatMap(subCategoriesPerCategoryPerSection, function(sectionScope) {
    return _.flatten(_.values(_.pick(sectionScope, [givenCategory])))
  });

  return _.orderBy(subCategoriesForGivenCategory, ['ruName'], [sortingOrder]);
}

console.log(getSortedSubCategories('CCTV', 'desc'));
