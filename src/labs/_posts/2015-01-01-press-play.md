---
layout: post
title: Press Play.
date: 2015-08-03
description: Composer backed boilerplate project for dope as fuck WordPress sites.
permalink: /labs/press-play/

subheading: Composer backed boilerplate project for dope as fuck WordPress sites.
heroText: true
heroClasses: grey-bg
image: null

download: http://github.com/kiriaze/PressPlay

tags: [code, wordpress]
---

{:.text-align-center}
Composer backed project for easy WordPress sites using the [Simple Framework](http://github.com/kiriaze/simple-framework). Aimed at making efficient sites, that are as sexy on the outside as they are inside. And hella fast. Hella.

{:.text-align-center}
[Get it here!]({{ page.download }}){: .btn}

---

## About
Learn more about Simple and its components

- [Simple Framework](https://github.com/kiriaze/simple-framework) ( parent framework )
- [Simple Child](https://github.com/kiriaze/simple-child) ( child framework )
- [VVV Simple](https://github.com/kiriaze/vvv-simple) ( an alternative to PressPlay, if you have vagrant setup, run this instead, a one click solution so to speak )
- [Simple Grid](https://github.com/kiriaze/Simple-Grid) ( and stupid simple grid thats semantic, extendable, and actually makes sense )
- [Simple Anchors](https://github.com/kiriaze/SimpleAnchors) ( a data attr scrolling plugin with some awesomeness baked in )
- [Animate Scss](https://github.com/kiriaze/animate.scss) ( fork of Dan Edens Animate.css )

---

## Requirements
- [Composer](http://getcomposer.org/)
- [Git/Brews](http://brew.sh/)
- [Skills](http://bringvictory.com/)
- Open Mind. It's hella opinionated, cuz its awesome. Get with it already.

---

## Optional ( But highly encouraged.. )
Want your mac to dev fly shit all day? [check it homie.](https://github.com/kiriaze/mac-dev-env)

---

## Assumptions

You have a similar setup to the link above. OSX. Codekit. SequelPro.

Currently depends on Codekit for theme dev right out the box, cuz it just works like butter. Its possible to work with guard if you dont wanna deal with having a carefree life, but gets messy if both are used in a team environment. Guard shits on grunt, gulps alright too - but codekit takes the gold.

And if you're using a wysiwyg editor or mamp or a bloated ide like coda, **_go back to school, kid._**

---

## Consists of

1. Latest WP from
2. Composer
	1. themes
		1. simple framework
		2. simple parent framework
		3. simple child theme
	2. plugins
		1. See full list within composer.json file.
	3. [.htaccess](https://gist.github.com/kiriaze/89799d8a31a8084920bc) ( Currently ignored from repo )
		1. permalinks
		2. media redirection to remote
	4. project repo should also house a db dump

---

## Installation

1. Clone repo and run composer.

~~~ bash
$ git clone https://raw.github.com/kiriaze/PressPlay {Project-Name}
$ cd {Project-Name}
$ composer install
~~~

2. Run [ghost](https://github.com/kiriaze/ghost). ( Follow instructions through cli )

~~~ bash
curl -s https://raw.githubusercontent.com/kiriaze/ghost/master/ghost.sh > /tmp; bash /tmp/ghost
~~~

3. Create your database. ( Will move this into ghost.sh soon )

~~~ bash
# Default
$ mysql -u {username} -p {password} -e "create database {databasename};"
# If dev env setup with mac-dev-env/homebrew, use the line below instead
$ mysql -u root -p  -e "create database foo;"
~~~

4. Update git remote in root of project and subsequent files.

~~~ bash
# Remove git from root of your project
$ rm -rf {Project-Name}/.git
# Add your new remote to the root of your project
$ git remote add origin https://path-to-repo.com/repo.git
# Remove git from project theme
$ rm -rf {Project-Name}/wp-content/themes/{project-theme}/.git
~~~

5. Update Naming Conventions

	1. Rename Simple-child to {Project-Name} ( Or Simple-Framwork depending on which you choose to use )
	2. Update wp-content/themes/{Project-Name}/style.css naming refs, and should reflect the code block below.

~~~ css
/*
Theme Name:   Project Name
Theme URI:    http://projectname.com
Author:       Project Author
Author URI:   http://projectauthor.com
Description:      An awesome description.
Template:       simple
Version:          1.0.0
License:      GNU General Public License v2 or later
License URI:  http://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  simple
*/
~~~

	3. Update wp-content/themes/{Project-Name}/assets/js/app.js naming refs

~~~ js
# Update all THEMENAME/SHORTNAME refs within file
# THEMENAME is the full name of your project, e.g. MyAwesomeProject
# SHORTNAME is the acronym of the THEMENAME, e.g. MAP
var SHORTNAME = window.THEMENAME; // example before
var MAP = window.MyAwesomeProject; // example after
~~~

6. Set permissions to project directory ( WP Updates Specific )

~~~ bash
$ sudo chown -R _www {Project-Name}
$ sudo chmod -R g+w {Project-Name}
~~~

7. Update wp-config.php credentials to connect to your db.
8. Direct browser to {Project-Name}.dev/wp/wp-admin
9. Activate Project Theme.
10. Update Site URL in WP Admin. ( And other settings through theme options )
11. Drag your project Theme into codekit. ( comes with preconfigured codekit.conf )
12. Make dope shit yo.

---

## Notes:

1. When updating gitignore, run `$ git rm -r --cached .` then re add/commit
2. Add acf-pro license into wp admin.
3. If you add other plugins to your project, you have two options to keep them in sync.

	1. Exclude from .gitignore with `!wp-content/plugins/{plugin-name}`
	2. Add plugin to composer.json and run `composer update`

4. DB search/replace mysql query { When importing/exporting local/remote dbs }

~~~ sql
update wp_posts set guid = replace(guid, "OLD", "NEW");
update wp_options set option_value = replace(option_value, "OLD", "NEW");
update wp_posts set post_content = replace(post_content, "OLD", "NEW");
update wp_postmeta set meta_value = replace(meta_value, "OLD", "NEW");
~~~

---

## To Do:

1. Add mysql db creation to ghost.sh
2. Write db creds to wp-config.php from ghost.sh
3. Convert ghost.sh to ruby script
4. Integrate bower within simple-html
5. Debug wp-setup within theme options on activation
