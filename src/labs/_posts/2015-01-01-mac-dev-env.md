---
layout: post
title: OSX Development Environment.
date: 2015-07-23
description: Set up an ideal mac development environment on a fresh install of OSX yosemite
permalink: /labs/osx-development-environment/

subheading: Set up an ideal mac development environment on a fresh install of OSX yosemite
heroText: true
heroClasses: grey-bg
image: null
download: http://github.com/kiriaze/mac-dev-env
tags: [code]
---

{:.text-align-center}
Get your development game on point with this automated script, or cherry pick through readme and script.
**Ideal for fresh installs of OSX yosemite**

{:.text-align-center}
[Get it here!]({{ page.download }}){: .btn}

---

### Self executing script v.1.

##### *Please read through script.*

~~~ bash
$ sh ./init.sh # wherever you've placed your script.
~~~

### General Notes

Assumes this is on a fresh install of Yosemite. If you already have an environment setup, dont run the init.sh script, rather comb through this and cherry pick. Hopefully you're not using mamp or the like.

All references to subl is for opening files within the Sublime Text editor, if you haven't heard of it, no worries, this setup will install it for you and set up an alias to use it with.

Make sure your bash scripts have had `chmod +x` ran on them; e.g. `chmod +x script.sh`, making the file executable by everyone.

Mac Dev Env Setup consists of:

~~~ html
homebrew
php 5.6
update mac unix tools
correct paths
git
ruby
mysql/mariadb
bash/zsh
node
nginx
composer
bower
bundler
grunt
gulp
cask - pretty much all your apps
mackup - keep your app settings in sync. wHAT?! word.
SublimeText3 / Chrome extensions
iTerm settings
~~~
