---
title: Help! Sass errors crash Gulp!
date: 2015-07-23
description: Prevent gulp from crashing when an scss error pops up.
heroClasses: grey-bg
tags: [sass, gulp, help]
---

Gulp is awesome, obviously. However there are some issues, and the one which drove me <span class="giflinks" data-src="/assets/images/gifs/monkey-bars-crazy-dance.gif">nuts</span> from the get-go is that syntax issues in your sass break your build stream. Unfortunately, the advice on the internetz didn't help much. In this article, we’ll look at a <span class="giflinks" data-src="/assets/images/gifs/popcorn_the_it_crowd.gif">quick and easy fix</span> for this problem.

### Let’s Break Things
First, traverse into your project directory, open the project in sublime, and start gulp. ( Default task is run )

~~~ bash
$ cd Project
$ subl .
$ gulp
~~~

With the server now running, we can start to edit our files and make any changes we want. For our example, we’re going to break gulp. We’ll include a mixin that has yet to be defined inside our body tag.

~~~ css
body {
	@include randomMixin();
}
~~~

We’ve forgotten to define the mixin above, which will cause a syntax error and print out this error in our console.

~~~ js
stream.js:94
      throw er; // Unhandled stream error in pipe.
            ^
Error: mixin randomMixin undefined.
~~~

So let’s go back and define that mixin. Once we have, we can save the file and expect gulp to compile the Sass, but in this case, it won’t compile. The syntax error will completely break the gulp build stream. This can be a huge time waster and cause massive headaches when developing your website.

### Luckily, there's an easy fix.
To fix the problem, we can open up our gulpfile CSS task and pass in an option.

~~~ js
gulp.task('css', function(){
	return gulp.src('PATH/TO/SRC')
			.pipe(sass({
				errLogToConsole: true // this doesnt seem to work
			}))
			.on('error', onError)
		.pipe(gulp.dest('PATH/TO/DEST'))
});

function onError(err) {
	console.log(err);
	this.emit('end');
}
~~~

`{errLogToConsole: true}` didnt seem to prevent gulp from crashing our build stream, as advised by others. However, adding `.on('error', onError)` to the CSS method allowed us to continue working with our SASS files, be notified of any syntax errors, and keep our server from breaking. Hopefully this helps anybody out there that encounters a similar issue!
