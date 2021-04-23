// Task 8:
// Create function which returns collection of all tiles in the shop
//
const _ = require('lodash');
const data = require('../data/shop');

function getAllShopTiles() {
  return _.concat(data.mainTiles, _.flatMap(data.sections, (shopSection) => shopSection.tiles));
}

console.log(getAllShopTiles());
