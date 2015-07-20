'use strict';

var config      = require('../config'),
	gulp        = require('gulp'),
	browserSync = require('browser-sync');

// Initialize browser-sync which starts a static server also allows for browsers to reload on filesave. Wait for jekyll and css build before building server.
gulp.task('browser-sync', ['css', 'jekyll'], function() {
	browserSync({
		server: {
			baseDir: config.dist.root
		},
		port: config.serverport
		// Can't have both server and proxy, pick one.
		// proxy: {
		// 	target: 'http://site.dev'
		// }
	});
});
