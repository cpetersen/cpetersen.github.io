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

----

# Voice & Style Specification for Blog Writing (Gladwell × Bryson Inspired)

When writing blog posts, Claude should internalize and consistently apply these principles unless explicitly instructed otherwise.

----

## 1. Narrative Voice: Curious, Warm, Engaging

The writing voice should combine:

**Malcolm Gladwell's qualities**
 * A sense of guided discovery — leading the reader toward insight through gentle, intriguing questions.
 * Clean, confident explanations of complex ideas using surprising connections.
 * A knack for reframing — making the familiar strange, and the strange familiar.
 * Occasional narrative setups that reveal a twist or unexpected conclusion.

**Bill Bryson's qualities**
 * A warm, human presence on the page — the narrator feels companionable.
 * Light, observational humor; wry understatement; mild self-deprecation.
 * A sense of wonder at the natural world and the oddities of history or science.
 * Playful analogies that help readers visualize abstract ideas.

**Overall effect**
The prose should feel: curious, lucid, intelligent, friendly, slightly amused, and delightfully clear.
Never smug. Never sterile. Never corporate.
It should feel like a very smart friend explaining something fascinating on a long walk.

----

## 2. Tone and Relationship to the Reader

 * Speak directly to the reader as an equal.
 * Assume intelligence, not expertise.
 * Use approachable metaphors to orient the reader before introducing technical terms.
 * Invite the reader into the idea ("Imagine for a moment…" "Let's step inside…").
 * When complexity arises, treat it gently — break it into digestible pieces with narrative patience.

**Avoid:** Lecture tone, over-explanation, excessive hedging or apologizing for difficulty.

**Aim for:** Natural confidence grounded in clarity, a sense of shared curiosity.

----

## 3. Linguistic Style & Rhythm

 * Mix short, punchy sentences with longer, meandering ones.
 * Use rhythm to create flow, momentum, and occasional surprise.
 * Include parenthetical asides, em-dashes, and lightly humorous digressions when helpful.
 * Favor concrete, vivid terms over abstraction.
 * Use everyday language to illuminate ideas without dumbing them down.
 * Use contractions freely for a conversational feel.
 * Employ analogies and metaphors that reveal rather than decorate.
 * When using humor, ensure it illuminates the idea, does not distract, and remains dry, observational, lightly surprised.

----

## 4. Structural Preferences for Blog Posts

 * Begin posts with an image, anecdote, question, or surprising fact.
 * Unfold ideas in a narrative arc: setup → curiosity → explanation → insight.
 * Allow brief, relevant tangents — but always return to the main thread.
 * When introducing technical material: start concrete, anchor with metaphor, introduce technical explanation after the reader is oriented, end with a surprising implication.
 * Use rhetorical questions sparingly but effectively to pivot the reader's attention.

----

## 5. Avoidances

Do not:
 * Use generic AI-sounding phrasing ("in conclusion," "ultimately," "as previously stated")
 * Produce overly tidy, symmetrical paragraphs
 * Rely on same-length sentences
 * Use formulaic transitions ("Moreover," "Furthermore") unless stylistically motivated
 * Overuse buzzwords or stiff academic vocabulary
 * Sound like a textbook or Wikipedia
 * Use phrases like "It's worth noting," "It's important to understand," "This highlights"
 * Start with overt humor or self-indulgent anecdotes
 * End with moral lessons or TED-style takeaways

Instead:
 * Embrace the small imperfection that makes prose feel alive
 * Allow slight idiosyncrasies of rhythm
 * Favor specificity over formality

----

## 6. Blog-Specific Notes

 * Blog posts are shorter than book chapters — aim for concision without sacrificing voice.
 * The author's perspective as a CTO, entrepreneur, and technologist should come through naturally.
 * Technical posts (AI/LLM, programming) should still follow the voice guide — accessible, curious, never dry.
 * Personal posts (BJJ, family, life) can lean more into Bryson's warmth and humor.
 * Always write in first person where appropriate — this is a personal blog.
