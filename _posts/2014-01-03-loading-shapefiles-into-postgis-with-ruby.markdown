---
layout: default
title: "Loading Shapefiles into PostGIS with Ruby"
type: post
navigation: false

date: 2014-01-03 15:05:13 -0800
excerpt: "I found shape files here:  http://www.naturalea..."
categories:
  - Software
  - Draft

gradient: 1
image: header-1.jpg
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: http://twitter.com/cpetersen
github: http://github.com/cpetersen

---


 I found shape files here:  [http://www.naturalearthdata.com/features/](http://www.naturalearthdata.com/features/) 

  [http://dazuma.github.io/rgeo-shapefile/](http://dazuma.github.io/rgeo-shapefile/) 

```ruby
RGeo::Shapefile::Reader.open('spec/fixtures/countries.shp') do |file|
  puts "File contains #{file.num_records} records."
  file.each do |record|
    puts "Record number #{record.index}:"
    puts "  Geometry: #{record.geometry.as_text}"
    puts "  Attributes: #{record.attributes.inspect}"
  end
  file.rewind
  record = file.next
  puts "First record geometry was: #{record.geometry.as_text}"
end
```

 The first error I got was: 

```lua
Errno::ENOENT: No such file or directory - spec/fixtures/countries.shx
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:227:in `initialize'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:227:in `open'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:227:in `initialize'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:204:in `new'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:204:in `open'
     from (irb):107
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands/console.rb:90:in `start'
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands/console.rb:9:in `start'
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands.rb:64:in `<top (required)>'
     from./bin/rails:4:in `require'
     from./bin/rails:4:in `<main>'
```

 Turns out, you need the `SHX` file in addition to the `SHP` file. So I added the appropriate files and reran the code. This time I got the following error. 

```
File contains 255 records.
RGeo::Error::RGeoError: GEOS is not available, but is required for correct interpretation of polygons in shapefiles.
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:623:in `_read_polygon'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:453:in `_read_next_record'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:406:in `each'
     from (irb):98:in `block in irb_binding'
     from /opt/boxen/rbenv/versions/2.0.0-p247/lib/ruby/gems/2.0.0/gems/rgeo-shapefile-0.2.3/lib/rgeo/shapefile/reader.rb:207:in `open'
     from (irb):96
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands/console.rb:90:in `start'
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands/console.rb:9:in `start'
     from /opt/boxen/rbenv/versions/2.0.0-p0/lib/ruby/gems/2.0.0/gems/railties-4.0.0/lib/rails/commands.rb:64:in `<top (required)>'
     from./bin/rails:4:in `require'
     from./bin/rails:4:in `<main>'
```

 You can check if geos is installed and functioning properly with this method: `RGeo::Geos.supported?` mine returned `false`.   

 After reading some code, I found the following segment in the  `rgeo`  library. 

  [https://github.com/dazuma/rgeo-shapefile/blob/master/lib/rgeo/shapefile/reader.rb#L191](https://github.com/dazuma/rgeo-shapefile/blob/master/lib/rgeo/shapefile/reader.rb#L191) 

```ruby
RGeo::Shapefile::Reader.open('spec/fixtures/countries.shp', :assume_inner_follows_outer => true) do |file|
  puts "File contains #{file.num_records} records."
  file.each do |record|
    puts "Record number #{record.index}:"
    puts "  Geometry: #{record.geometry.as_text}"
    puts "  Attributes: #{record.attributes.inspect}"
  end
  file.rewind
  record = file.next
  puts "First record geometry was: #{record.geometry.as_text}"
end
```

 What I found was, you need to set `assume_inner_follows_outer` to true. This relaxes the parser, but also slows down the processing of the file. 

 As an added bonus, geos is not supported on  [Heroku](http://heroku.com)  either, so this trick also allowed my code to run there. 

 PS, if you need to convert those shape files to geojson for visualization (either on GitHub or directly in MapBox in my case), you can use gdal, found  [here](http://ben.balter.com/2013/06/26/how-to-convert-shapefiles-to-geojson-for-use-on-github/) : 

```shell
brew update
brew install gdal
ogr2ogr -f GeoJSON -t_srs crs:84 -s_srs EPSG:4326 states.geojson states.shp 
```

 The End 
