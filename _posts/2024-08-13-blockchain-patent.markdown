---
layout: default
title: "Blockchain Patent"
type: post
navigation: false

date: 2024-08-13 11:27:00 -0700
excerpt: "My blockchain related patent just issued."
categories:
  - Technology

gradient: 2
image: blockchain.webp
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://x.com/cpetersen
github: https://github.com/cpetersen
---

Back in 2018 I started the process of patenting an idea I had regarding the blockchain. The idea was to be able to prove that a piece of arbitrary data had not been tampered with. This has numerous applications, but the one that I find most captivating is FDA submissions. Electronic submissions to the FDA are governed by CFR21 Part 11 which basically says that all electronic files and signatures have to be as tamper resistent as paper documents. In a world where digital files can be changed by flipping bits, this has resulted in very process driven procedures. Lots of logging of changes and restrictions to who can change what information. It's like a chain of custody where to prove that nothing changed, you need to account for the entire lifetime of that piece of data.

Alternatively, if you could technically prove it didn't change, you could ditch all of those processes. That's where the blockchain comes in.

The idea is, if you have a piece of information you want to verify later, for instance some data related to a clinical trial, you could take a hash of the data, or at least the subset that you want to verify, put that hash on a blockchain (or THE Blockchain), then later on when presented with that same file and a claim that it hadn't changed, you could take the hash of that data (or the same subset) and look for it on the blockchain. If you find it, you know that that data hasn't changed since at least the timestamp you found on the blockchain.

There are other nuances, what happens if the data you want to verify contains PII that you need to scrub? We'll you take a second hash and add it at a later date or, as in the case of PII, if you know this is a risk, you can hash your data multiple times with different types of scrubbing right up front.

I think it's a good use of the blockchain technology and I'm excite the patent final issued. 

That patent is titled _Decentralized Data Verification_ and you can find it on the [USPTO's website](https://ppubs.uspto.gov/pubwebapp/static/pages/ppubsbasic.html) as patent 12,063,309. I've also got the full text [here](/assets/12063309.pdf). 

I'll update this page when [Google Patents](https://patents.google.com) indexes it.
