// Task 13:
// Create function which returns the latest category of given section.
// Append property 'receivedAt' to returning category
// Property should have value of current time in format "Sunday, February 14th 2010, 3:25:50 pm"
//
const moment = require('moment');
const _ = require('lodash');
const data = require('../data/shop');

function getLatestCategory(givenShopSection) {
  const lastCategory = _.last(_.values(data.sections[givenShopSection].categories));
  const returnedLastCategory = _.clone(lastCategory);

  returnedLastCategory.receivedAt = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  return returnedLastCategory;
}

console.log(getLatestCategory('electronics'));
