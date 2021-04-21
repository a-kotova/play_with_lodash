// Task 19:
// Create function which returns 'shop' object in 3 seconds.
// Log result of function execution into console.
//
const data = require('../data/shop');

function getObjectWithDelay(objectToGet) {
  function getObject() {
    console.log(objectToGet);
  }
  return setTimeout(getObject, 3000);
}

getObjectWithDelay(data);
