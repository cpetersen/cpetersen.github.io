---
layout:       post
title:        "The Stripe Webhook Event Cheatsheet"
date:         2014-01-31 09:07:02 -0800
original_url: https://www.petekeen.net/stripe-webhook-event-cheatsheet
categories:
  - Software
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

