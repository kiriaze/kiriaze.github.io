var config      = require('../config'),
	gulp        = require('gulp')
	request 	= require('request');

// seo - google ping
gulp.task('seo', function(cb) {
	request('http://www.google.com/webmasters/tools/ping?sitemap="'+ config.sitemapURL +'"');
	request('http://www.bing.com/webmaster/ping.aspx?siteMap="'+ config.sitemapURL +'"');
	cb();
});
