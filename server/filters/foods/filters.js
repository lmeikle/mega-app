const fs = require('fs');
const path = require('path');
const filters = require('../filters');

filters.currentFilters['/api/foods/vegan'] = filterVeganFoods;

function filterVeganFoods(req, res) {
  filters.sendMessage(req, res, './foods/vegan.json');
}
