---
layout: post
title: Simple Flickr.
date: 2015-08-01
description: A simple flickr plugin that pulls in your flickr feed as a widget and a shortcode.
permalink: /labs/simple-flickr/

subheading: A simple flickr plugin that pulls in your flickr feed as a widget and a shortcode.
heroText: true
heroClasses: grey-bg
image: null

tags: [code, wordpress]
---

A simple flickr plugin that pulls in your flickr feed as a widget and a shortcode. Requires flickr ID. [Get it here!](http://github.com/kiriaze/simple-flickr)

Widget options: Title, id ( idgettr ), type ( user/group ), and display ( random/latest ).

Shortcode Params: `[flickr before='' after='' wrapper='' class='']`

## Todo:

Add `Simple_Flickr_Widget::display_cached_content();` function for shortcode to pull from.
