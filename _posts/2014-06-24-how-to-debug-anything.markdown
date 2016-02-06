---
layout: default
title: "How to Debug Anything"
type: post
navigation: false

date: 2014-06-24 14:10:06 -0700
excerpt: "James Golick  of  PackageCould.io  tells us how..."
categories:
  - Software
  - Ops

gradient: 1
image: header-1.jpg
details: false

author: Chris Petersen
bio: Father, husband, CIO and cofounder of Assay Depot, developer, entrepreneur and technologist.
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

---

<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.slideshare.net%2Fslideshow%2Fembed_code%2Fkey%2F6qeHnY8U8Sr3nL&url=http%3A%2F%2Fwww.slideshare.net%2Fjamesgolick%2Fhow-to-debug-anything&image=http%3A%2F%2Fcdn.slidesharecdn.com%2Fss_thumbnails%2Fhow-to-debug-anything-140623121820-phpapp01-thumbnail-4.jpg%3Fcb%3D1405934598&key=d815972c91e546edb5d2d02e509f8b1c&type=text%2Fhtml&schema=slideshare" width="425" height="355" scrolling="no" frameborder="0" allowfullscreen></iframe>

 [James Golick](https://twitter.com/jamesgolick)  of  [PackageCould.io](https://packagecloud.io)  tells us how to debug anything. I probably should have been more familiar with `strace` , but the presentation is worth it just for the following command: 

  `sudo strace -ff -s 2048 -p <PID>`  

 Bonus, package cloud looks pretty cool. 
