---
layout: default
title: "Convert Your Dash Snippets to Quiver"
type: post
navigation: false

date: 2016-02-12 09:30:00 -0700
excerpt: "Convert <a href='https://kapeli.com/dash'>Dash's</a> sqlite database to the directory structure expected by <a href='http://happenapps.com/#quiver'>Quiver</a>."
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

I've been using [Dash](https://kapeli.com/dash) for quite sometime and have a few hundred snippets captured. However, something about it's keybindings always felt "off" to me and the search capability has been sorely lacking.

This week I discovered [Quiver](http://happenapps.com/#quiver), I'm still testing it out, but so far I like it. However, to really test it, I need my snippets, and it was unfortunately missing an imported for Dash.

So I wrote one. Luckily Dash using sqlite, so finding it's structure was easy. Quiver uses JSON and particular file structure, which they [document well](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format).

Just copy or `ln -s` your `Snippets.dash` into the same directory as the code below. Out will come a Quiver Notebook which can be easily imported.

{% highlight ruby %}
require "json"
require "sqlite3"
require "fileutils"

notebook_name = "Snippets.qvnotebook"
notebook_uuid = SecureRandom.uuid
FileUtils::mkdir_p(notebook_name)
notebook_meta = {
  name: "Imported from Dash",
  uuid: notebook_uuid
}
File.open("#{notebook_name}/meta.json", "w") { |f| f.puts notebook_meta.to_json }

db = SQLite3::Database.new("Snippets.dash")
db.execute("select sid, title, body, syntax from snippets") do |note_row|
  tags = []
  db.execute("select t.tag from tags t, tagsIndex ti where t.tid = ti.tid AND ti.sid = ?", note_row.first) do |tag_row|
    tags << tag_row.first
  end
  note_syntax = case note_row[3]
  when "Shell"
    "sh"
  else
    note_row[3].downcase
  end
  note_uuid = SecureRandom.uuid
  FileUtils::mkdir_p("#{notebook_name}/#{note_uuid}.qvnote")
  note_meta = {
    created_at: Time.now.to_i,
    updated_at: Time.now.to_i,
    tags: tags,
    title: note_row[1],
    uuid: note_uuid
  }
  File.open("#{notebook_name}/#{note_uuid}.qvnote/meta.json", "w") { |f| f.puts note_meta.to_json }

  note_content = {
    title: note_row[1],
    cells: [
      {
        type: "code",
        language: note_syntax,
        data: note_row[2]
      }
    ]
  }
  File.open("#{notebook_name}/#{note_uuid}.qvnote/content.json", "w") { |f| f.puts note_content.to_json }
end
{% endhighlight %}
