---
layout: post
title:  "Complexity and Resiliency"
date:   2013-05-31 12:05:59 -0700
categories:
  - Software
  - Technology
  - Ops
---

<blockquote class="twitter-tweet"><p>Until you attempt to internalize some of this, you forfeit credibility in commenting on large-scale outages: <a href="http://t.co/wZNXX4IdOP" title="http://programming.oreilly.com/2013/05/what-is-the-risk-that-amazon-will-go-down-again.html">programming.oreilly.com/2013/05/what-i…</a> #devops</p>&mdash; John Allspaw (@allspaw) <a href="https://twitter.com/allspaw/status/340521535318151169">May 31, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I saw this tweet from  [@allspaw](https://twitter.com/allspaw)  who always shares good stuff about Ops. The  [linked article](http://programming.oreilly.com/2013/05/what-is-the-risk-that-amazon-will-go-down-again.html)  has some great points. For me the most important one is:

 > ...the risk of Amazon going down is mitigated by building a system of redundant barriers (several server centers, backup, active fire extinguishing, etc.). This might seem like a tidy solution, but here we run into two problems with this probabilistic approach to risk: the view of the human operating the system and the increased complexity that comes as a result of introducing more and more barriers. 

 Basically, protecting against failure increases system complexity and can in turn lead to more failures. Building resilient systems isn't about finding all risks and protecting against all possible scenarios, it's  about understanding your risks as well as the trade-offs in protecting against them. 

 
