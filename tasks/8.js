// Task 5:
// Create function which returns collection of all tiles in the shop
//
const data = require('../data/shop');
const _ = require('lodash');

function getAllShopTiles() {
  return _.concat(data.mainTiles, _.flatMap(data.sections, function(shopSection) { return shopSection.tiles }));
}

console.log(getAllShopTiles());
