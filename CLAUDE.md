# petersen.io - Personal Blog

This is Chris Petersen's personal blog, hosted on GitHub Pages using Jekyll.

## About the Author

Chris Petersen is a father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur, and technologist based in San Diego. He trains BJJ at Studio 540 in Solana Beach.

- Twitter/X: https://x.com/cpetersen
- GitHub: https://github.com/cpetersen

## Content Themes

The blog covers a mix of technical and personal content:

- **AI/LLM**: Deep technical content about how LLMs work (neural networks, embeddings, attention, transformers), vibe coding experiments
- **Technology**: Patents (blockchain/data verification), programming tutorials, tech industry observations
- **Professional**: Forbes Tech Council articles, awards, Scientist.com updates
- **Personal**: BJJ training, family activities, photography/timelapses, SpaceX launch observations
- **Video**: YouTube and Vimeo embeds for seminars, timelapses, and other media

## Post Structure

Posts use the following front matter format:

```yaml
---
layout: default
title: "Post Title"
type: post
navigation: false
date: YYYY-MM-DD HH:MM:SS -0700
excerpt: "Brief description"
categories:
  - Category1
  - Category2
gradient: 1-6  # Header gradient style
image: header-image.png
details: false
author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://x.com/cpetersen
github: https://github.com/cpetersen
---
```

## Media Includes

The blog has custom includes for embedding media:

- `{% include media-youtube.html file="URL" title="Title" caption="Caption" %}`
- `{% include media-vimeo.html file="URL" title="Title" %}`
- `{% include media-image.html file="filename.jpg" title="Title" caption="Caption" %}`
- `{% include media-audio.html ... %}`

Images are stored in `/images/` and other assets in `/assets/`.

## Categories Used

Common categories include: AI, LLM, Programming, Video, Technology, Life, BJJ

## Technical Stack

- Jekyll static site generator
- GitHub Pages hosting
- kramdown markdown processor
- Plugins: jekyll-paginate, jekyll-gist, jekyll-sitemap
- SASS for styling
- Google Analytics (UA-73229902-1)

## Build Commands

```bash
bundle install    # Install dependencies
bundle exec jekyll serve  # Run local development server
```
