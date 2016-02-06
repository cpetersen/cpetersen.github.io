---
layout: default
title: "How We Built Deferred Deep Links"
type: post
navigation: false

date: 2014-01-28 14:27:45 -0800
excerpt: "What tap stream has done with Deferred Deep Lin..."
categories:
  - iOS
  - Software

gradient: 3
image: header-8.jpg
details: false

author: Chris Petersen
bio: Father, husband, CIO and cofounder of Assay Depot, developer, entrepreneur and technologist.
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

original_url: http://blog.tapstream.com/post/74394304157/how-we-built-deferred-deep-links
---


What tap stream has done with Deferred Deep Links is really pretty cool. Gathering intelligence on where your installs come from is way harder than it should be. This could go a long way toward fixing that.

 >  
 > 
 > When promoting their app, developers use Tapstream’s taps.io shortlinks as their ad destination URLs. When a visitor taps on one of these shortlinks, Tapstream records a snapshot of their shortlink session, including the ad’s source and their intended deep link destination.
 > 
 >  
 > 
 > Then, the taps.io redirect handler attempts to send the user to the deep link destination. If this fails, it means the app is not present on the user’s device; the user is then redirected to the app store but the actual deep link is stored on our servers.
 > 
 >  
 > 
 > Once the user installs and runs the app for the first time, the Tapstream SDK sends an installation event to the Tapstream event API. This tells our attribution engine to find a mate for the SDK session among the pool of eligible shortlink sessions.
 > 
 >  
 > 
 > When the attribution engine mates the shortlink session to the SDK session, we credit the shortlink with a conversion.
 > 
 > 
 via  [@marco](http://www.marco.org/2014/01/28/sponsor-tapstream11). 
