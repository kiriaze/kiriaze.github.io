# Juice
A simple, flexible and easy-to-customise front-end boilerplate and workflow system for deploying awesome web experiences quickly and efficiently.

Built with Gulp, Bower & NPM to preprocess, optimize, preview and deploy as effeciently as possible.

It currently supports Chrome, Firefox, Safari, Opera & IE 9+, also supports major phone devices too.

Features:

	Blazing Fast
	Built in server
	Live browser reloading
	Cross Device Sync ( BrowserSync )
	Autoprefixer
	Notifications
	Deployment (server and gh-pages)
	Sourcemaps
	Pagespeed
	SEO
	Structure Partioned
		Sass
		HTML Partials
	Performance Optimized
		Gzip
		Concat/Minify Everything (css/js/html)
		Clean up unused css
		Image Optimazation ( All types )
		Fonts
	Powered by Gulp, Bower & NPM


## Get started
It's easy to get started. Just follow the steps below.


### Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.


### 1. Clone/Download

Clone or Download Juice into directory.

	$ git clone git@github.com:kiriaze/juice.git .


### 2. Install

Run Bower Package Manager to install all bower dependencies.

	$  npm install -g bower && bower install

Run Node Package Manager

	$ npm install --global gulp && npm install

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*


### 3. Configure

Set your grid values you wish to your variables in your _settings.scss file. Done!

Classes are by default, .container, .row, .columns.

	$gutter: 			3% !default;
	$docWidth: 			100% !default;

	// this sets your class names
	$container-class:	"container" !default; // optional
	$row-class:			"row" !default;
	$column-class:		"columns" !default;
	$max-columns:		12 !default;

	// Grid check
	$gridDebug:			false !default; // If true, styles grid/columns for easy visibily while testing


### 4. Build

Run Gulp

	$ gulp


## Basic usage

This is the default usage. The grid is calculated and classes are generated for you to get building quickly.

### Syntax
1. Class Syntax
```
.columns-{percentage, double digit} for mixed columns
	.columns-70, .columns-30 = totaling to 100

.columns-{single digit number} for equal coloumns
	.columns-1
	.columns-2, .columns-2
	.columns-4, .columns-4, .columns-4, .columns-4
```

2. Gutter Classes

```
.no-gutter {
	@include set-gutter(0);
}
.reset-gutter {
	@include set-gutter($gutter);
}
```

	<section>

        <div class="container">

            <div class="row">

                <div class="columns-2">

                    A column with a width of 50%. Fixed to 2 columns.

                </div>

                <div class="columns-2">

                    A column with a width of 50%. Fixed to 2 columns.

                </div>

            </div>

            <div class="row">

                <div class="columns-50">

                    An alternate method for a column with 50% width. This should be used for multiple columns with different widths, all equaling to 100%.

                </div>

                <div class="columns-30">

                    A column with 30% width.

                </div>

                <div class="columns-20">

                    A column with 20% width.

                </div>

            </div>

        </div>

	</section>

	<div class="container"> // optional - for fixed with breakpoints

		<div class="row"> // required

			<div class="columns-2">

	        	<div class="row">  // Nesting

					<div class="columns-2">

					</div>

	                <div class="columns-2">

	                </div>

			    </div>

	        </div>

			<div class="columns-2">

			</div>

		</div>

	</div>


## Advanced usage

By setting the $advanced-usage variable in your _settings.scss to 'true' you can work with Juice more semantically.

	# For mixed widths, percentage based

	<div class="row">

		<div class="columns-30"> // default classes

		</div>

		<div class="customClass-4"> // custom classes

		</div>

		<div data-columns=".3"> // Using data attributes

		</div>

	</div>

	# For equal widths

	<div class="row">
		<div class="columns-3"> // default classes

		</div>

		<div class="customClass-3"> // custom classes

		</div>

		<div data-columns="3"> // Using data attributes

		</div>

	</div>

	# Scss
	# @include container-fixed($gutter: $gutter, $padded: false);
	# @include columns($num, $display: float, $gutter: $gutter);
	# @include grid($display: float, $gutter: $gutter);

	.example-wrapper {
		@include grid();
		.example-column {
			// note: including columns within breakpoint mixin is required.
			@include breakpoint($small) {
	    		@include columns(2);
	    	}
		}
	}


## License

Juice is licensed under the GPL v2 license. (http://opensource.org/licenses/GPL-2.0)
