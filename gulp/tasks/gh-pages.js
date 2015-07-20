var config  = require('../config'),
	gulp 	= require('gulp'),
	ghPages = require('gulp-gh-pages');

var options = {
    remoteUrl: config.remoteUrl,
    branch: config.branch
};

gulp.task('gh-pages', function() {
	return gulp.src(config.dist.root + '/**/*.*')
		.pipe(ghPages(options));
});
