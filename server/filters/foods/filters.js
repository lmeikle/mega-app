const fs = require('fs');
const path = require('path');
const filters = require('../filters');

// make a request with fetch('/api/foods/vegan') and this filter will be used
filters.currentFilters['/api/foods/vegan'] = filterVeganFoods;

function filterVeganFoods(req, res) {
  filters.sendMessage(req, res, './foods/vegan.json');
}
