var config  = require('../config'),
	gulp 	= require('gulp'),
	ghPages = require('gulp-gh-pages');

var options = {
    remoteUrl: config.githubPages.remoteUrl,
    branch: config.githubPages.branch
};

gulp.task('gh-pages', function() {
	return gulp.src(config.githubPages.source)
		.pipe(ghPages(options));
});
