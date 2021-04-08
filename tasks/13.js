// Task 10:
// Create function which returns the latest category of given section.
// Append property 'receiveAt' to returning category
// Property should have value of current time in format "Sunday, February 14th 2010, 3:25:50 pm"
//
const data = require('../data/shop');
const _ = require('lodash');

function calculateReceiveAt() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const timeNow = new Date();
  const monthIndex = timeNow.getMonth();
  const dayIndex = timeNow.getDay();
  return `${days[dayIndex]}, ${months[monthIndex]} ${timeNow.getDate()}th ${timeNow.getFullYear()}, ${timeNow.toLocaleTimeString('en-US')}`;
}

function getLatestCategory(givenShopSection) {
  const lastCategory = _.last(_.values(data.sections[givenShopSection].categories));
  let returnedLastCategory = JSON.parse(JSON.stringify(lastCategory));

  returnedLastCategory.receiveAt = calculateReceiveAt();

  return returnedLastCategory;
}

console.log(getLatestCategory('electronics'));
