---
title:  Styleguides
date: 2016-01-24
published: true
description: Styleguides in a WordPress project builds
image: /assets/images/projects/p2.jpg
tags: [code, styleguides, wordpress, git]
---

I've been a big advocate of styleguides and properly abstracted code for sustainability, maintainability and a sane life for quite some time now. But up until recently, I've had them housed separately - both locally and in their respective repositories online - although the latter has obvious advantages, the former is a real bitch to deal with.

In a recent WordPress project, I setup a remote repo for the WP code base (using my [PressPlay](http://github.com/kiriaze/PressPlay) system) with a webhook for automated deployments on my custom server stack ( which I'll be offering hopefully soon ) based on the git workflow I've talked about [before](/blog/git-workflow) and everything was running smoothly as always...that is, until I had to integrate the assets of the styleguide build into the project.

What happens when the assets required are located locally outside the WordPress build? You might think to reference the remote assets say from styleguide.domain.com or wherever we're currently hosting it, but thats just incredibly inefficient while building or debugging the app, not to mention the styleguide would have to be on the same domain remotely or then we're dealing with CORS headers and what not.

So what do we do?

Rather than adding more build logic into Gulp thats completely use case, since this is a pluggable framework, I wanted something that would work with relative ease on everyones part - and as long as the workflow below is followed, then all is good. Ofcourse, we could add some yaml params and have gulp read that conditionally, but again, just trying to keep it simple, and definitely trying to avoid any server side builds.

I added the styleguide to the WP project build repo as a submodule, although some shutter at the thought of submodules, I've had good results. I do have one grind, it's nessecary for the styleguide repo to include the formerly excluded dist directory in order for both local and remote builds to properly enqueue the processed assets - kinda making the styleguide repo a bit bloated.

##### Workflow

1. Install Prerequisites

	- [Node.js](https://nodejs.org)
			*Bring up a terminal and type `node --version`.
			Node should respond with a version at or above 0.10.x.
			If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.*

2. Clone repo ( with submods if present ), install dependencies and run package managers.

		$ git clone --recursive {ProjectPath} {Project-Name}
		$ cd {Project-Name}
		$ composer install
		$ cd styleguide
		$ npm install -g bower && bower install
		$ npm install --global gulp && npm install

3. Git Add/Commit/Pull/Push from styleguide first, then from WordPress project directory.
	• You should have two windows open in your CLI, one for the styleguide and the other for the WordPress repo.
	• The order is crucial to prevent conflicts between users, repos, and servers.
	• It's recommended to `git pull --rebase {remote} {branch}` to keep your branch current.

___If repo was cloned without the --recursive option, then run `$ git submodule update --init --recursive` to correctly setup submods.___

Anyways, just my 2 cents, maybe I'm the only one that's encountered this and perhaps theres a simpler solution. What do you guys think? How do you deal with this?
