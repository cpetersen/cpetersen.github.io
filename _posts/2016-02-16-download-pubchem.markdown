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

{% highlight ruby %}
require 'net/ftp'

Net::FTP.open('ftp.ncbi.nlm.nih.gov') do |ftp|
  ftp.passive = true
  ftp.login
  ftp.chdir('/pubchem/Compound/CURRENT-Full/SDF')
  files = ftp.list('*')
  total = 0
  sdf_files = files.select { |f| f.match(/\.sdf\.gz$/) }
  sdf_files.each_with_index do |file, index|
    tokens = file.split(/\s+/)
    size = tokens[4].to_i
    total += size
    filename = tokens.last
    puts "Getting [#{filename}] [#{size}] [#{index} of #{sdf_files.count}]"
    ftp.getbinaryfile(filename, filename, 1024)
  end
  puts "#{total} :: #{total.to_f/(1024*1024*1024).to_f}"
end; nil
{% endhighlight %}

You can then unzip these using:

{% highlight sh %}
gunzip *.gz
{% endhighlight %}

(expect it to take a while)
