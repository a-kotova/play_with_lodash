// Task 12:
// Create function which returns categories ruNames
// (grouped by their uniqueness within shop categories)
// of given section
//
const _ = require('lodash');
const data = require('../data/shop');

function getUniqueCategories(shopSection) {
  return _.map(_.sortBy(_.values(data.sections[shopSection].categories), 'isUnique'), (category) => category.ruName);
}

console.log(getUniqueCategories('beautyAndSport'));
