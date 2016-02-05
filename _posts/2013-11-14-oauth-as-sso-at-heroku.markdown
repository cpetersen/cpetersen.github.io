---
layout:       post
title:        "OAuth as SSO at Heroku"
date:         2013-11-14 07:51:46 -0800
original_url: https://blog.heroku.com/archives/2013/11/14/oauth-sso
categories:
  - Software
---

 A while back,  [Heroku](https://www.heroku.com/)  moved a hosting different functions on different apps/subdomains ( [https://postgres.heroku.com](https://postgres.heroku.com)  and  [https://addons.heroku.com](https://addons.heroku.com/)   for example). Now they are open sourcing their  [library that handles Single Sign On](https://github.com/heroku/identity)  between them, using OAuth as the backbone. 

 I'm excited to see where this goes. 

  *While OAuth was originally designed to allow service providers to delegate some access on behalf of a customer to a third party, and we do use it that way too, Heroku also uses OAuth for SSO. We'd like to take this opportunity to provide a technical overview.* 

 
