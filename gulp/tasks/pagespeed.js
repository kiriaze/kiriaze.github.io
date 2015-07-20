var config      = require('../config'),
	gulp        = require('gulp'),
	pagespeed 	= require('psi');

// Run PageSpeed Insights
// http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
gulp.task('pagespeed', pagespeed.bind(null, {
	// By default, we use the PageSpeed Insights
	// free (no API key) tier. You can use a Google
	// Developer API key if you have one. See
	// http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
	url: config.URL,
	strategy: config.strategy
}));
