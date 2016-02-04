---
layout: post
title:  "LaunchImage Names and Dimensions"
date:   2013-07-21 14:01:51 -0700
categories:
  - iOS
  - Software
  - Draft
---



### List Test

 This is a paragraph 

 1. Red
 1. Orange
 1. Yellow
 1. Green
    * Hunter Green
    * Lime Green
    * 
      1. Lime
      1. Lemon
      1. Orange
      1. Grape Fruit
    * Aqua Marine
 1. Blue
 1. Purple

 Many iOS apps use the LaunchImage functionality either in conjunction with a splash screen or to make the app appear to load quicker. Below is a list of all the filenames and dimensions for the various iOS devices. 

|__Device__|__Image Name__|__Dimensions__|
|---|---|---|
|Original iPhone|Default.png|320x480|
|iPhone 4 & 4s|Default@2x.png|640x960|
|iPhone 5|Default-568h@2x.png|640x1136|
|Original iPad|Default~ipad.png|768x1004|
|Original iPad Landscape|Default-Landscape~ipad.png|1024x748|
|iPad Retina|Default@2x~ipad.png|1536x2008|
|iPad Retina Landscape|Default-Landscape@2x~ipad.png|2048x1496|

### ImageMagick Resize and Crop Script

```
#!/bin/sh
convert original.png -resize "480x" -crop "320x480+80+0" Default.png
convert original.png -resize "960x" -crop "640x960+160+0" Default@2x.png
convert original.png -resize "1136x" -crop "640x1136+248+0" Default-568h@2x.png
convert original.png -resize "1004x" -crop "768x1004+118+0" Default~ipad.png
convert original.png -resize "1004x" -crop "768x1004+118+0" Default~ipad.png
convert original.png -resize "1024x" -crop "1024x748+0+138" Default-Landscape~ipad.png
convert original.png -resize "2008x" -crop "1536x2008+236+0" Default@2x~ipad.png
convert original.png -resize "2048x" -crop "2048x1496+0+276" Default-Landscape@2x~ipad.png
```

### Launch the RubyMotion Simulator in Different Configurations

```
#!/bin/sh
rake simulator device_family=iphone
rake simulator device_family=iphone retina=3.5 
rake simulator device_family=iphone retina=4
rake simulator device_family=ipad
rake simulator device_family=ipad retina=true
```

### Icon Sizes

|__Device__|__Image Name__|__Icon Size__|
|---|---|---|
|iPhone (iPod Touch)|Icon.png|57x57|
|iPhone (iPod Touch) - Retina|Icon@2x.png|114x114|
|iPad|Icon-72.png |72x72|
|iPad - Retina|Icon-72@2x.png |144x144|
|App Store|iTunesArtwork.png |512x512|
|App Store Retina|iTunesArtwork@2x.png |1024x1024|

### ImageMagick Resize Icon Script

```
#!/bin/sh
convert iTunesArtwork@2x.png -resize "512x" iTunesArtwork.png
convert iTunesArtwork@2x.png -resize "57x" Icon.png
convert iTunesArtwork@2x.png -resize "72x" Icon-72.png
convert iTunesArtwork@2x.png -resize "114x" Icon@2x.png
convert iTunesArtwork@2x.png -resize "144x" Icon-72@2x.png
```

 This is a `test this` is only a test 

```ruby
  def html(field)
    markdown = dynamic_fields(self.send(field))
    html = if markdown.present?
      redcarpet = Redcarpet::Markdown.new(HtmlWithAssetHost, :autolink => true, :space_after_headers => true, :tables => true)
      redcarpet.render(markdown).strip.html_safe
    else
      ""
    end
  end
```

 This is a test this is only a test

```
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 1a | Value 2a | Value 3a |
* This is a _test_
* This is **only** a test
```

 This is a test this is only a test

```
<table>
  <thead>
    <tr class="row">
      <th class="header">Column 1</th>
      <th class="header">Column 2</th>
      <th class="header">Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="row">
      <td class="cell">Value 1</td>
      <td class="cell">Value 2</td>
      <td class="cell">Value 3</td>
    </tr>
    <tr
 class="row">
      <td class="cell">Value 1a</td>
      <td class="cell">Value 2a</td>
      <td class="cell">Value 3a</td>
    </tr>
  </tbody>
</table>
```

  ==This ~~is~~  2^(nd)  test,  *this*  __is__  _only_ a test==. 

 I'm 'still testing', 'this' is "just a test" of some "quotes" 

 ﻿ 

 This is a test 
