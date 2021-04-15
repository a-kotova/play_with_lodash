// Task 16:
// Create function which returns 'shop' object in 3 seconds.
// Log result of function execution into console.
//
const data = require('../data/shop');

function getObjectWithDelay(objectToGet, delay) {
  function getObject() {
    console.log(objectToGet);
  }
  return setTimeout(getObject, delay);
}

getObjectWithDelay(data, 3000);
