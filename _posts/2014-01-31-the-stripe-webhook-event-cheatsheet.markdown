---
layout: default
title: "The Stripe Webhook Event Cheatsheet"
type: post
navigation: false

date: 2014-01-31 09:07:02 -0800
excerpt: "Very nice cheat sheet for  Stripe  webhooks. Ne..."
categories:
  - Software

gradient: 1
image: header-4.jpg
details: false

author: Chris Petersen
bio: Professional Guy Behind the Guy
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

original_url: https://www.petekeen.net/stripe-webhook-event-cheatsheet
---


 Very nice cheat sheet for  [Stripe ](http://stripe.com) webhooks. Next Stripe integration I do, I’ll definitely be referring to this. Below is a very small sample of the cheat sheet. 

 >  
 > 
 > ### Simple One-off Purchases with Charges
 > 
 >  
 > 
 > #### 1. Customer successfully purchases a single one-off item
 > 
 >  
 > 
 > The simplest possible starting point. A single one-off purchase.
 > 
 >   `charge.succeeded` ( [Charge](https://stripe.com/docs/api#charges) ) 
 > 
 > #### 2. Customer's card is declined
 > 
 >  
 > 
 > This event also describes other failure modes, like an invalid expiration date or a failed CVC check if you have the option turned on to decline on a failed check.
 > 
 >   `charge.failed` ( [Charge](https://stripe.com/docs/api#charges) )

