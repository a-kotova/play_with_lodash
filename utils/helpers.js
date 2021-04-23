const _ = require('lodash');
const data = require('../data/shop');

module.exports = {
  getArrayOfCategories: () => (
    _.flatten(_.map(data.sections, (section) => _.values(section.categories)))
  ),
  getAllSubCategories: (categories) => (
    _.flatten(_.map(categories, (category) => _.values(category.subCategories)))
  ),
  getCategoriesPerSection: () => (
    _.flatMap(data.sections, (shopSection) => shopSection.categories)
  ),
  getSubCategoriesPerCategoryPerSection: (categoriesPerSection) => (
    _.flatMap(categoriesPerSection,
      (sectionScope) => _.mapValues(sectionScope, (category) => _.values(category.subCategories)))
  ),
};
