---
layout: default
title: "The &quot;Right&quot; way to Sort by Rating and Recency"
type: post
navigation: false

date: 2013-03-26 09:58:49 -0700
excerpt: "Let's say you have a website with user generate..."
categories:
  - Web
  - Software

gradient: 2
image: header-0.jpg
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://twitter.com/cpetersen
github: https://github.com/cpetersen

original_url: http://www.evanmiller.org/how-not-to-sort-by-average-rating.html
---


  ![](/assets/import/286d3b2264f6c700c1eab7b6f52c89e7.png)

 Let's say you have a website with user generated ratings. You might think that sorting items by rating would be an easy feature to implement. Well, depending on your definition of easy, you'd likely be wrong. The crux of the issue is, what happens when you have an item that has a single 5 star rating and another that has 1000 ratings with an average of 4.5 stars?

 The equation above is from  [this article](http://www.evanmiller.org/how-not-to-sort-by-average-rating.html)  and results in:

 >  Given the ratings I have, there is a 95% chance that the "real" fraction of positive ratings is at least what?

 The article makes a strong case that this is the "right" way to sort by rating. Read  [the article](http://www.evanmiller.org/how-not-to-sort-by-average-rating.html)  for implementation details.

### Combining Recency and Rating

 Another not obvious sorting problem is how to combine recency with rating.  [This article](http://amix.dk/blog/post/19574)  describes how  [Hacker News](https://news.ycombinator.com/)  does it.

 Essentially, they add a time factor after the number of votes. This time factor is: 1/(T+2)^G

 Where T is the time in hours and G is a configurable "Gravity". The following graph shows how the algorithm treats three different scores over time.

 ![score_24_hours.gif](/assets/import/8d65e532307459bdbcb9db784c3cb7cd.gif)

 These two methods could be combined, but I'll leave that as an exercise for the reader.
