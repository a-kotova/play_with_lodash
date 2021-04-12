// Task 13:
// Create function which returns copy of 'shop' object
//
const data = require('../data/shop');
const _ = require('lodash');

function getCopiedObject(objectToCopy) {
  return _.cloneDeep(objectToCopy);
}

console.log(getCopiedObject(data));
