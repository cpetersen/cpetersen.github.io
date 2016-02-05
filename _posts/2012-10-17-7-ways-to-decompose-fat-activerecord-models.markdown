---
layout:       post
title:        "7 Ways to Decompose Fat ActiveRecord Models"
date:         2012-10-17 10:16:36 -0700
original_url: http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/
categories:
  - Software
---

Great post on how you can refactor fat models in a sane way.

 > 
 > 
 > Early on, SRP is easier to apply. ActiveRecord classes handle persistence, associations and not much else. But bit-by-bit, they grow. Objects that are inherently responsible for persistence become the *de facto* owner of all business logic as well. And a year or two later you have a `User` class with over 500 lines of code, and hundreds of methods in it’s *public* interface. Callback hell ensues.
 > 
 > As you add more intrinsic complexity (read: features!) to your application, the goal is to spread it across a coordinated set of small, encapsulated objects (and, at a higher level, modules) just as you might spread cake batter across the bottom of a pan. Fat models are like the big clumps you get when you first pour the batter in. Refactor to break them down and spread out the logic evenly. Repeat this process and you’ll end up with a set of simple objects with well defined interfaces working together in a veritable symphony.
 > 
 > 
