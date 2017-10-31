const Poromise = require('bluebird');
module.exports = function(clear) {
	return new Promise(function(resolve, reject) {
		if (clear !== false) {
			process.stdout.write('\033[2J');
		}
		process.stdout.write('\033[0f');
		resolve(true);
	});
};
