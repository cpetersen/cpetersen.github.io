---
layout: default
title: "What Syntactic Slop Actually Is (A Short Detour Through Perplexity)"
type: post
navigation: false

date: 2026-04-10 08:00:00 -0700
excerpt: "AI detectors aren't magic. Once you see what they're actually measuring, you'll understand what 'soulless' means and why the complaint is narrower than people think."
categories:
  - AI
  - LLM

gradient: 2
details: false
author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://x.com/cpetersen
github: https://github.com/cpetersen
---

*This is post 2 of a four-part series. [Post 1]({% post_url 2026-04-09-we-need-to-talk-about-slop %}) introduced two kinds of slop. This one explains the machinery behind syntactic slop, and why what it measures is less than what people think.*

AI detectors are not magic. Once you see what they're actually doing (which is surprisingly simple), you'll understand exactly what people mean when they call AI prose "soulless," and why that complaint is narrower than it sounds.

Let's start with the trick.

## The Distribution

For each token it generates, a transformer computes a probability for every other token in its vocabulary. The result is a distribution: a few score high, most score near zero. If the model has written "it was a dark and stormy," its top guess for the next word is "night" and almost nothing else. But if it's written "she opened the door and saw," almost anything could come next. A garden, a stranger, nothing at all, a small dog wearing a hat. The probability is spread across thousands of possibilities.

Temperature is the knob that controls how often the model picks something other than its top guess. Low temperature: it almost always picks the most likely next word. High temperature: it rolls the dice on less likely options.

## The Technical Version (For Those Who Want It)

If the ranked-guess analogy is enough for you, skip ahead to "The Neat Fact." You won't miss anything structural. But if you want the real machinery, here it is.

A transformer's forward pass produces a probability distribution over the entire vocabulary at each position. Temperature is a parameter on the softmax function that sharpens or flattens that distribution before sampling. A temperature of zero would always pick the single highest-probability token. Higher values spread the probability more evenly, letting less likely tokens get chosen.

**Surprisal** is the formal measure of how unexpected a particular token was. It's defined as the negative log of the token's probability: −log(p). A token the model was confident about has low surprisal. A token it considered unlikely has high surprisal.

**Perplexity** is the exponential of the average surprisal across all tokens in a passage. Think of it as a summary statistic: how surprised was the model, on average, by what it was reading? Low perplexity means the model found the text predictable. High perplexity means it kept getting surprised.

**Burstiness** is the variance of surprisal across the passage. It captures how much the surprisal jumps around from token to token. Human writing tends to be bursty. It zigs and zags. A sentence of plain exposition is followed by an unexpected metaphor or a sudden pivot. LLM output, by contrast, tends to be smoother. The surprisal stays in a narrow band.

## The Neat Fact

Here's the part that makes AI detection possible: surprisal is recoverable.

Take any text from anywhere. Written by a human, a model, a particularly literate parrot. Feed it through a transformer, and you get a perplexity score for it. The model can "read" text the same way it generates it, computing at each position how likely it thinks the next token was.

And here's the part that does the actual work for AI detectors: if you happen to use the *same* model that generated the text, you get back the exact numbers from generation time. The text carries its own fingerprint, and the model that produced it can read that fingerprint.

This is the entire trick behind GPTZero and the rest. They are not detecting "AI-ness" in some mystical sense. They are computing perplexity and burstiness and noticing that LLM output tends to score lower on both than human writing does. That's the signal. That's all the signal there is.

## Why Some Domains Feel Less "Sloppy" Than Others

Different kinds of writing have different intrinsic entropy, which explains something people notice but rarely articulate: LLMs seem fine at some tasks and weirdly flat at others, and the difference isn't random.

**Code** is low-entropy. It has to conform to a grammar. There aren't many valid next tokens after `if (`. The model's ranked guess is tightly constrained by syntax, which means even a very confident (low-temperature) generation can produce correct, useful output. The text *should* be predictable. That's the whole point of a formal language.

**Legal writing** is low-entropy for a different reason. The genre constrains it. "The party of the first part," "notwithstanding the foregoing," "shall be deemed." These phrases exist because law values predictability over surprise. A lawyer who writes unpredictable prose is a bad lawyer.

**Poetry** is high-entropy. Surprise is the point. A predictable poem is a bad poem. When you read "I wandered lonely as a" and the next word is "cloud," that mild surprise (lonely as a cloud?) is doing real aesthetic work. An LLM, left to its own devices, will pick the most statistically comfortable completion. Comfortable and poetic are almost antonyms.

**Prose** sits in the middle and varies enormously by writer. Hemingway is lower entropy than Nabokov. Neither is bad. They're doing different things.

This is why AI-generated code can be excellent while AI-generated poetry almost always feels off. The detector is picking up on the same thing your ear is. In low-entropy domains, the model's tendency toward predictable tokens is a feature. In high-entropy domains, it's exactly the problem.

## The Payoff

Here's the sentence I've been working toward.

Low perplexity means the *tokens* are unsurprising. It does not mean the *ideas* are unsurprising.

When people say AI writing is flat, they are reacting to a real, measurable property of the text. The words are statistically predictable, the surprisal low, the burstiness muted. These features are genuinely detectable by the tools that look for them.

But people slide from "the words are predictable" to "the thinking is predictable," and those are not the same claim. You can have highly predictable tokens arranged around a genuinely surprising insight. You can also have wildly unpredictable tokens arranged around nothing at all (which is, incidentally, a decent description of a lot of avant-garde poetry).

That slide is easy to make, because in most of our experience flat writing *has* correlated with flat thinking. But that correlation is what LLMs broke. The prose engine generates tokens. It does not generate ideas. Confusing the two is how you end up trusting a bad argument because it was stylistically interesting.

## The Recursive Turn

There's one more thing worth sitting with before we leave perplexity behind.

Perplexity is itself a proxy. It's a measurable surface feature standing in for an unmeasurable deep property: quality of thinking. It works at all as an AI detector because the two correlate, loosely. Low perplexity correlates with LLM generation. LLM generation correlates (sometimes, in some contexts) with less original thinking. The chain of inference is real, but each link is loose. And as a measure of *quality*, perplexity falls apart, because the correlation is exactly that: loose. Plenty of excellent, carefully reasoned prose scores low on perplexity, because clear explanations of well-understood topics tend to be predictable at the token level. And plenty of high-perplexity text is incoherent rather than insightful.

This isn't a flaw in perplexity. It's the nature of any cheap heuristic for an expensive judgment. You want to know "is the thinking in this text any good?" That's expensive to evaluate. You'd have to read it carefully, check the claims, hold the argument in your head. So instead you measure a surface feature and use it as a stand-in. It's faster and cheaper. It's also lossy.

Hold that thought. It's going to come back in the next post, in a different form.

Because we have another lossy approximation that we've been using for a lot longer than we've had AI detectors. And LLMs just broke it.

*[Post 3]({% post_url 2026-04-11-we-lost-a-shortcut %}) is next.*
