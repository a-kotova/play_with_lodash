// Task 18:
// Create function which returns object containing names of categories as keys
// and count of subcategories inside of category as a value.
//
const data = require('../data/shop');
const _ = require('lodash');

function countSubCategories() {
 const categoriesPerSection =  _.flatMap(data.sections, function(shopSection) { return _.toArray(_.pick(shopSection, ['categories'])) });
 return _.fromPairs(_.flatMap(categoriesPerSection, function(sectionScope) { return _.toPairs(_.mapValues(sectionScope, function(sectionCategory) { return _.keys(sectionCategory.subCategories).length })) }));
}

console.log(countSubCategories());
