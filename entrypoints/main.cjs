'use strict';
module.exports = require('../lib/worker/main.cjs');
module.exports.registerCompletionHandler
	= require('../lib/worker/completion-handlers.js').registerCompletionHandler;
