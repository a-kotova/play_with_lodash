// Task 9:
// Create a function which returns the most frequently used word in subcategories 'ruName'
// with length more than 5 characters
//
const data = require('../data/shop');
const _ = require('lodash');

function getFrequentRuNameWordForSubCategoriesLongerThan5() {
  const allCategories =  _.flatMap(data.sections, function (shopSection) {
    return _.values(shopSection.categories);
  });
  const allSubCategories = _.flatMap(allCategories, function(category) {
    return _.values(category.subCategories);
  });
  const subCategoriesRuNames = _.map(allSubCategories, function(subCategory) {
    return subCategory.ruName
  });
  const wordsInRuNames = _.flatMap(subCategoriesRuNames, function(ruName) {
    return _.split(ruName, ' ');
  });
  const wordsInRuNamesLongerThan5 = _.filter(wordsInRuNames, function(word) {
    return word.length > 5;
  });
  const longWordsUsage = _.toPairs(_.countBy(wordsInRuNamesLongerThan5, function(word) { return word }));

  return _.last(_.sortBy(longWordsUsage, [function(word) { return word[1] }]))[0];
}

console.log(getFrequentRuNameWordForSubCategoriesLongerThan5());
