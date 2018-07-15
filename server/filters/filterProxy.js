const filters = require('./filters');

module.exports = function filterProxy(req, res, next) {
	const path = req.originalUrl.split('?')[0];
	const filterFunction = filters.currentFilters[path];

	if (filterFunction === undefined)
	{
		return next();
	}

	filterFunction(req, res, next);
};
