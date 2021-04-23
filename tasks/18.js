// Task 18:
// Create a function which returns category name of given subcategory name
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function getCategoryOfSubCategory(givenSubCategory) {
  const categoriesPerSection = helpers.getCategoriesPerSection();
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection,
    (sectionScope) => _.mapValues(sectionScope, (category) => category.subCategories));

  return _.compact(_.flatMap(subCategoriesPerCategoryPerSection,
    (section) => _.keys(_.pickBy(section, (category) => _.has(category, givenSubCategory)))));
}

console.log(getCategoryOfSubCategory('headphones'));
