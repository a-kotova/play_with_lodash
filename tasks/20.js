// Task 20:
// Create a function which returns mutated initial shop objects:
// - 'sections' should be an array
// - 'categories' of each section should be an array
// - 'subcategories' of each category should be an array
//
const data = require('../data/shop');
const _ = require('lodash');

function getMutatedObject() {
  let dataCopy = _.cloneDeep(data);
  const sectionsWithModifiedSubCategories = _.forEach(dataCopy.sections, function(shopSection) {
    return _.forEach(shopSection.categories, function(category) {
      category.subCategories = _.toArray(category.subCategories);
    });
  });
  const sectionsWithModifiedCategories = _.forEach(sectionsWithModifiedSubCategories, function(shopSection) {
    shopSection.categories = _.toArray(shopSection.categories);
  });
  dataCopy.sections = _.toArray(sectionsWithModifiedCategories);
  return dataCopy;
}

console.log(getMutatedObject());
