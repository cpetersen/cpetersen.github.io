---
layout: default
title: "Download PubChem"
type: post
navigation: false

date: 2016-02-16 10:30:00 -0700
excerpt: "Download all of <a href='https://pubchem.ncbi.nlm.nih.gov'>PubChem</a>... in case you need half a terabyte of SDfiles."
categories:
  - Programming

gradient: 1
image: header-1.jpg
details: false

author: Chris Petersen
bio: Father, husband, CIO and cofounder of Assay Depot, developer, entrepreneur and technologist.
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

---

[PubChem](https://pubchem.ncbi.nlm.nih.gov) offers an FTP site. This script will download all of the gzipped [SDfiles](https://en.wikipedia.org/wiki/Chemical_table_file) to a local directory. There are about 58GBs of zipped data and 535GBs of unzipped data.

{% gist cpetersen/ea4ed11b22faf3387436 %}

You can then unzip these using:

{% highlight sh %}
gunzip *.gz
{% endhighlight %}

(expect it to take a while)
