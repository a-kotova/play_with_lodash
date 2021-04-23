// Task 10:
// Create a function which returns subcategories of given category
// sorted alphabetically by 'ruName' in given order.
//
const _ = require('lodash');
const data = require('../data/shop');

function getSortedSubCategories(givenCategory, sortingOrder = 'asc') {
  const categoriesPerSection = _.flatMap(data.sections, (shopSection) => shopSection.categories);
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection,
    (sectionScope) => _.mapValues(sectionScope, (category) => _.values(category.subCategories)));
  const subCategoriesForGivenCategory = _.flatMap(subCategoriesPerCategoryPerSection,
    (sectionScope) => _.flatten(_.values(_.pick(sectionScope, givenCategory))));

  return _.orderBy(subCategoriesForGivenCategory, ['ruName'], [sortingOrder]);
}

console.log(getSortedSubCategories('CCTV', 'desc'));
