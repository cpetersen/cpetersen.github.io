---
layout: default
title: "Jeb's Emails"
type: post
navigation: false

date: 2015-02-20 15:50:00 -0700
excerpt: "TL;DR A Markov bot trained using Jeb Bush's emails is tweeting at <a href='https://twitter.com/jebsemails'>@jebsemails</a>. The code is <a href='https://github.com/cpetersen/jebsemails'>open source</a>."
categories:
  - Software

gradient: 4
image: header-3.jpg
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://x.com/cpetersen
github: https://github.com/cpetersen

---

# TL;DR

 A Markov bot trained using Jeb Bush's emails is tweeting at [@jebsemails](https://twitter.com/jebsemails). The code is [open source](https://github.com/cpetersen/jebsemails).

# What is this?

One night I was bored. So, like any intellectually curious, red blooded American, I thought to myself

 > What's Jeb Bush up to?

Well, it turns out, quite a lot. Did you know [he might run for president](http://www.huffingtonpost.com/2015/02/10/jeb-bush-emails_n_6655504.html)? He's also [published all of his emails online](http://jebbushemails.com/home).

So I thought, why not use the resulting text to train a Markov bot and put it online? This is the code that generated the content which is being [posted on Twitter](https://twitter.com/jebsemails).

I asked the bot if it had any plans to run for president, it replied (emphasis added):

 > HURRICANE FLOYD!

 So, as you can see, it's keeping it's options open.

## How do I use it

You'll need Scala and Ruby. You'll also need to download and unpack [the pst files from Jeb's website](http://jebbushemails.com/email/search).

### Building the Scala Library

Scala is used to parse the pst files and output a text file. To build the jar file use the following command:

{% highlight sh %}
sbt assembly
{% endhighlight %}

This project uses ruby, so you'll need to bundle:

{% highlight sh %}
bundle install
{% endhighlight %}

### Running

You interact with the library using a command line application (Thor app).

You can find all the from addresses in the pst files using the following command:

{% highlight sh %}
bundle exec ./bin/markov from > output/from.txt
{% endhighlight %}

If you want to find the most email addresses that appear the most frequently in the from address, use the following command:

{% highlight sh %}
sort output/from.txt | uniq -c | sort -r > output/unique_from.txt
head -3 output/unique_from.txt
{% endhighlight %}

Now, it extract the bodies, use the following command:

{% highlight sh %}
bundle exec ./bin/markov bodies --emails /O=BUSH-BROGAN\ 2002/OU=FIRST\ ADMINISTRATIVE\ GROUP/CN=RECIPIENTS/CN=JEB /O=JEB\ BUSH/OU=FIRST\ ADMINISTRATIVE\ GROUP/CN=RECIPIENTS/CN=JEB jeb@jeb.org > output/bodies.txt
{% endhighlight %}

Next, you can build the model:

{% highlight sh %}
bundle exec ./bin/markov build --content output/bodies.txt
{% endhighlight %}

And finally, you can generate some sentences:

{% highlight sh %}
bundle exec ./bin/markov generate --count 5 > output/sentences.txt
{% endhighlight %}

### Buffer your responses

I use [buffer](https://bufferapp.com) to post to twitter at regular intervals. You will need your buffer token, which is left as an excercise for the user.

First, you can get the profile ids of the accounts you'd like to post to:

{% highlight sh %}
bundle exec markov buffer_profiles --token $BUFFER_TOKEN
{% endhighlight %}

Next, given the `sentences.txt` file we generated before, buffer those sentences to two buffer profiles:

{% highlight sh %}
bundle exec markov buffer output/sentences.txt --token $BUFFER_TOKEN --profiles PROFILE_ID1 PROFILE_ID2
{% endhighlight %}

That's it, you're Markov bot is now live.
