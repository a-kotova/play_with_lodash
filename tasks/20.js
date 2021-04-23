// Task 20:
// Create a function which returns mutated initial shop objects:
// - 'sections' should be an array
// - 'categories' of each section should be an array
// - 'subcategories' of each category should be an array
//
const _ = require('lodash');
const data = require('../data/shop');

function getMutatedObject() {
  const dataCopy = _.cloneDeep(data);
  const sectionsWithModifiedSubCategories = _.forEach(dataCopy.sections,
    (shopSection) => _.forEach(shopSection.categories,
      (category) => category.subCategories = _.toArray(category.subCategories)));
  const sectionsWithModifiedCategories = _.forEach(sectionsWithModifiedSubCategories,
    (shopSection) => shopSection.categories = _.toArray(shopSection.categories));
  dataCopy.sections = _.toArray(sectionsWithModifiedCategories);
  return dataCopy;
}

console.log(getMutatedObject());
