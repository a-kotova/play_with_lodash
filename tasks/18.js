// Task 18:
// Create a function which returns category name of given subcategory name
//
const _ = require('lodash');
const data = require('../data/shop');

function getCategoryOfSubCategory(givenSubCategory) {
  const categoriesPerSection = _.flatMap(data.sections, (shopSection) => shopSection.categories);
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection,
    (sectionScope) => _.mapValues(sectionScope, (category) => category.subCategories));

  return _.compact(_.flatMap(subCategoriesPerCategoryPerSection,
    (section) => _.keys(_.pickBy(section, (category) => _.has(category, givenSubCategory)))));
}

console.log(getCategoryOfSubCategory('headphones'));
