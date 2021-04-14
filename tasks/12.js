// Task 12:
// Create function which returns categories ruNames (grouped by their uniqueness within shop categories)
// of given section
//
const data = require('../data/shop');
const _ = require('lodash');

function getUniqueCategories(shopSection) {
  return _.map(_.sortBy(_.values(data.sections[shopSection].categories), 'isUnique'), function(category) {
    return category.ruName;
  })
}

console.log(getUniqueCategories('beautyAndSport'));
