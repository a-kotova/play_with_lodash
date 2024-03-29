// Task 9:
// Create a function which returns the most frequently used word in subcategories 'ruName'
// with length more than 5 characters
//
const _ = require('lodash');
const helpers = require('../utils/helpers');

function getFrequentRuNameWordForSubCategoriesLongerThan5() {
  const allCategories = helpers.getArrayOfCategories();
  const allSubCategories = helpers.getAllSubCategories(allCategories);
  const subCategoriesRuNames = _.map(allSubCategories, (subCategory) => subCategory.ruName);
  const wordsInRuNames = _.flatMap(subCategoriesRuNames, (ruName) => _.split(ruName, ' '));
  const wordsInRuNamesLongerThan5 = _.filter(wordsInRuNames, (word) => word.length > 5);
  const longWordsUsage = _.toPairs(_.countBy(wordsInRuNamesLongerThan5, (word) => word));

  return _.last(_.sortBy(longWordsUsage, [(word) => word[1]]))[0];
}

console.log(getFrequentRuNameWordForSubCategoriesLongerThan5());
