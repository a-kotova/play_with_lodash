// Task 10:
// Create a function which returns subcategories of given category
// sorted alphabetically by 'ruName' in given order.
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function getSortedSubCategories(givenCategory, sortingOrder = 'asc') {
  const categoriesPerSection = helpers.getCategoriesPerSection();
  const subCategoriesPerCategoryPerSection = helpers
    .getSubCategoriesPerCategoryPerSection(categoriesPerSection);
  const subCategoriesForGivenCategory = _.flatMap(subCategoriesPerCategoryPerSection,
    (sectionScope) => _.flatten(_.values(_.pick(sectionScope, givenCategory))));

  return _.orderBy(subCategoriesForGivenCategory, ['ruName'], [sortingOrder]);
}

console.log(getSortedSubCategories('CCTV', 'desc'));
