---
layout: default
title: "More Git and GitHub Secrets"
type: post
navigation: false

date: 2013-07-28 23:45:56 -0700
excerpt: "Zach Holman  gives more Git and GitHub tricks i..."
categories:
  - Software
  - Git

gradient: 2
image: header-5.jpg
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://twitter.com/cpetersen
github: https://github.com/cpetersen

---

<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fspeakerdeck.com%2Fplayer%2F70964630d6e201303b270ade81771009&url=https%3A%2F%2Fspeakerdeck.com%2Fholman%2Fmore-git-and-github-secrets&image=https%3A%2F%2Fspeakerd.s3.amazonaws.com%2Fpresentations%2F70964630d6e201303b270ade81771009%2Fslide_0.jpg&key=d815972c91e546edb5d2d02e509f8b1c&type=text%2Fhtml&schema=speakerdeck" width="450" height="316" scrolling="no" frameborder="0" allowfullscreen></iframe>

  [Zach Holman](http://zachholman.com/)  gives more Git and GitHub tricks in this presentation, it's worth the read if for nothing other than the patience merge strategy on slide 23. If you want to set that as a global option, you can use the following command: 

  `git config --global diff.algorithm patience`  

 Other gems include, not using less as your default diff viewer (use cat and you get emoji!). Here's the command to set that globally: 

  `git config --global core.pager cat`  

 
