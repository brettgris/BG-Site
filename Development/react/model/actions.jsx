var Reflux = require('reflux');

var Actions = Reflux.createActions([
	'getProjects',
	'updateFilter',
	'updateCurrent'
]);

module.exports = Actions;