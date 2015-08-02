'use strict';

var config         = require('../config'),
	gulp           = require('gulp'),
	// gulp-load-plugins will only load plugins prefixed with gulp
	plugins		   = require('gulp-load-plugins')(),
	browserSync    = require('browser-sync'),
	mainBowerFiles = require('main-bower-files');

// minify, sourcemap, autoprefix, rename CSS
gulp.task('css', function(){

	var files = mainBowerFiles('**/*.css');
	console.log('css bower files: ', files);

	// targets single file instead of dir since gulp runs better
	files.push(config.styles.src + '/main.scss');

	return gulp.src(files)
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass())
			.on('error', onError)
			.pipe(plugins.csso())
			.pipe(plugins.autoprefixer('last 2 versions'))
			.pipe(plugins.concat('main.css'))
			.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.sourcemaps.write('./')) // writing relative to gulp.dest path
		.pipe(gulp.dest(config.styles.dest))
		.pipe(plugins.filter('**/*.css')) // filters out css so browsersync css injection can work with sourcemaps
		.pipe(browserSync.reload({stream:true}))
});

function onError(err) {
	console.log(err);
	this.emit('end');
}
