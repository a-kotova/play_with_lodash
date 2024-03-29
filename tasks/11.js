// Task 11:
// Create function which returns specified amount of subcategories of given category.
// Handle possible exceptions.
//
const _ = require('lodash');
const data = require('../data/shop');

function getSubCategories(givenSection, givenCategory, subCategoriesNumber) {
  if (_.has(data.sections, givenSection)) {
    const sectionCategories = data.sections[givenSection].categories;
    if (_.has(sectionCategories, givenCategory)) {
      return _.sampleSize(_.values(sectionCategories[givenCategory].subCategories),
        subCategoriesNumber);
    } throw new ReferenceError(`Given "${givenCategory}" category does not exist within given "${givenSection}" section`);
  } else throw new ReferenceError(`Given "${givenSection}" section does not exist.`);
}

console.log(getSubCategories('electronics', 'televisionAnDVideo', 7));
