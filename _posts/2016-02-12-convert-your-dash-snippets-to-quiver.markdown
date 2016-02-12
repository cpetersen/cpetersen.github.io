---
layout: default
title: "Convert Your Dash Snippets to Quiver"
type: post
navigation: false

date: 2016-02-12 09:30:00 -0700
excerpt: "Convert <a href='https://kapeli.com/dash'>Dash's</a> sqlite database to the directory structure expected by <a href='http://happenapps.com/#quiver'>Quiver</a>."
categories:
  - Programming

gradient: 1
image: header-1.jpg
details: false

author: Chris Petersen
bio: Father, husband, CIO and cofounder of Assay Depot, developer, entrepreneur and technologist.
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

---

I've been using [Dash](https://kapeli.com/dash) for quite sometime and have a few hundred snippets captured. However, something about it's keybindings always felt "off" to me and the search capability has been sorely lacking.

This week I discovered [Quiver](http://happenapps.com/#quiver), I'm still testing it out, but so far I like it. However, to really test it, I need my snippets, and it was unfortunately missing an imported for Dash.

So I wrote one. Luckily Dash using sqlite, so finding it's structure was easy. Quiver uses JSON and particular file structure, which they [document well](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format).

Just copy or `ln -s` your `Snippets.dash` into the same directory as the code below. Out will come a Quiver Notebook which can be easily imported.

{% gist cpetersen/7144eb25fecd3093d7b5 %}
