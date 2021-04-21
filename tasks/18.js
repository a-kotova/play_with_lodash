// Task 18:
// Create a function which returns category name of given subcategory name
//
const data = require('../data/shop');
const _ = require('lodash');

function getCategoryOfSubCategory(givenSubCategory) {
  const categoriesPerSection = _.flatMap(data.sections, function (shopSection) {
    return shopSection.categories;
  });
  const subCategoriesPerCategoryPerSection = _.flatMap(categoriesPerSection, function (sectionScope) {
    return _.mapValues(sectionScope, function (category) {
      return category.subCategories;
    })
  });

 return _.compact(_.flatMap(subCategoriesPerCategoryPerSection, function(section) {
   return _.keys(_.pickBy(section, function(category) {
     return _.has(category, givenSubCategory);
   }))
 }));
}

console.log(getCategoryOfSubCategory('headphones'));
