// Task 16:
// Create function which returns copy of 'shop' object
//
const _ = require('lodash');
const data = require('../data/shop');

function getCopiedObject(objectToCopy) {
  return _.cloneDeep(objectToCopy);
}

console.log(getCopiedObject(data));
