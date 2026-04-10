---
layout: default
title: "We Lost a Shortcut, and We're Mad About It"
type: post
navigation: false

date: 2026-04-11 08:00:00 -0700
excerpt: "The prose-quality heuristic is broken. What we're really grieving, and what it costs us now."
categories:
  - AI
  - LLM

gradient: 3
details: false

author: Chris Petersen
bio: Father, husband, CTO and cofounder of Scientist.com, developer, entrepreneur and technologist.
twitter: https://x.com/cpetersen
github: https://github.com/cpetersen
---

*This is part three of a four-part series on AI "slop." [Part one]({% post_url 2026-04-09-we-need-to-talk-about-slop %}) introduced the taxonomy. [Part two]({% post_url 2026-04-10-what-syntactic-slop-actually-is %}) explained the mechanism. This is the argument.*

---

Here's a trick that worked for centuries. If a piece of writing was clumsy and poorly organized, you could safely assume the thinking behind it was equally rough. And if the writing was clear, precise, well-structured, you could relax a little. Not because good prose guaranteed good ideas, but because the correlation was strong enough to be useful. It was a shortcut. A labor-saving device. You didn't have to evaluate every claim from scratch; you could let the surface of the text do some of the work for you.

The shortcut was never perfect. Con artists have always written well. Demagogues, too. And on the other side, plenty of genuine insight has been dismissed because its author couldn't string together a clean sentence. The proxy was lossy. Everyone who's read a confidently-written and completely wrong magazine essay knows this. Everyone who's struggled through a badly-formatted forum post and found the one person who actually solved the problem knows it from the other direction.

But it was *our* hack, and it mostly worked. For most of literate history, producing polished prose required enough effort that the effort itself carried information. If someone had labored over their sentences, they had probably also labored over their ideas. Probably. Often enough to make the bet worthwhile.

That bet no longer pays out the way it used to.

## The proxy breaks

An LLM can produce arbitrarily polished prose around arbitrarily bad ideas. This is not a theoretical concern. It's the default behavior. Ask a model to explain something it doesn't have a coherent model of, and you'll get back paragraphs that read beautifully and collapse on inspection. The sentences are careful. The reasoning is not.

Post two showed the technical version of this: low perplexity (unsurprising tokens) doesn't mean unsurprising ideas. Here's the cultural version: polished prose no longer implies careful thinking. The cue we relied on stopped carrying the signal it used to.

This is genuinely disorienting, and I think the "slop" discourse is, at least partly, the sound of people grieving the loss of this proxy without quite knowing that's what they're grieving. The complaints about em-dashes and tricolons are real. But they're also a displacement. The deeper complaint is *I can no longer tell at a glance whether to trust this*, and that's a much harder thing to say out loud than "I hate em-dashes."

## Two camps, one broken heuristic

When a heuristic that everyone relied on stops working, people react in different ways. The "slop" discourse contains at least two distinct reactions, and they're worth pulling apart because they're often treated as a single camp when they're really not.

**The reflexive dismissers** are the people who, having lost the prose-quality heuristic, reach for whatever cheap replacement is available. Em-dashes. Tricolons. The word "delve." The faint, uniform smoothness that makes you think "an LLM wrote this" before you can articulate why. They use these surface features as the new disqualifier. Spotted an em-dash? Must be AI. Ignore it.

They're not wrong that these features correlate with LLM output. They're wrong that the correlation is strong enough to use as a filter, and they're wrong that LLM involvement is itself disqualifying. They've replaced one lossy heuristic with an even lossier one and called it quality control.

**The commons critics** are different. They're not reacting at the level of any individual piece of text. They're reacting at the level of the ecosystem. Their argument runs roughly like this: we trained these models on the human-written commons, we're now flooding that same commons with cheap fluent text at a rate it has never had to absorb, and the aggregate effect on shared information environments is degradation faster than any filter can keep up with. The arXiv moderators dealing with hundreds of fluent annotated bibliographies dressed as research papers aren't worried about any single paper. They're worried that the signal-to-noise ratio of the whole environment is collapsing.

These two reactions look like the same complaint. They're not. The dismissers want a new cheap filter. The commons critics think no filter can scale fast enough to matter.

## What the commons critics get right

I want to be careful here, because the commons critics deserve a real hearing. They have peer-reviewed work behind them. There's an arXiv paper titled "An Endless Stream of AI Slop" that frames the problem in software development as a tragedy of the commons: individual benefit, aggregate degradation of codebases, reviewer capacity, and trust. The Reuters Institute has documented the pattern in journalism. These aren't cranks. They're people looking at institutional-scale problems with institutional-scale evidence.

The commons critics and I are looking at the same shift from opposite ends. We both think the prose-quality heuristic is broken. We both think evaluation is now harder than it used to be. Where we disagree is whether discernment (at the individual level and in aggregate) can scale fast enough to keep the commons functional.

I'm betting it can. Mostly because I don't see what else there is to bet on, and because every previous information-technology shift has produced exactly this pattern: a flood of low-quality content, a period of confusion, then the development of new filtering norms and institutions. Printing did it. So did radio. The web and social media repeated the cycle in compressed form. The pattern isn't comforting, exactly, but it's consistent.

They might be right that I'm wrong. The honest version of this argument is that we don't know yet, and the people predicting collapse and the people predicting adaptation are both reasoning from priors more than evidence. I should say that out loud rather than pretend my optimism is justified by anything firmer than temperament.

## The conflation that does the heavy lifting

One thing I do want to say firmly: the conflation between *token prediction* and *idea generation* is doing most of the work in the pessimist case, even at the ecosystem level.

Producing actually insightful long-form work with an LLM is hard. Semantic slop is the default output. Insight is the exception, and it requires a human who knows what they're trying to say. The LLM is a prose engine, not an idea engine. It is spectacularly good at arranging words into fluent sequences. It has no idea whether those sequences are true or worth your time.

Some of what's flooding the commons is genuine slop. Some of it is fluent prose around real ideas. The flood contains both, and the response to a flood is filtering, not banning the water supply.

## The Fluency Tax

Both reactions are responses to the same underlying shift.

You may know Brandolini's law: the amount of energy needed to refute bullshit is an order of magnitude more than the energy needed to produce it. There's a related asymmetry at work now, but not the same one. Brandolini is about refutation, an adversarial act. This is about *evaluation*: the upstream judgment of "is this person actually thinking, is this worth my attention." That judgment used to be cheap, because the prose-quality heuristic did most of the work for you.

Now it's expensive.

The cost of writing fell. The cost of reading rose.

Call it the **Fluency Tax**: when generation is free, evaluation is expensive.

The fluency tax operates at two levels at once.

At the individual level, it's the work each reader now has to do per piece. Actually engaging with the ideas instead of using surface polish as a shortcut. The reflexive dismissers are reacting to this version of the tax. They don't want to pay it, so they're reaching for a cheap replacement filter.

At the ecosystem level, it's the work whole institutions have to do to keep their information environments functional. Moderation. Peer review. Code review. Editorial judgment. The commons critics are reacting to this version. They're worried the aggregate tax exceeds what the institutions can pay.

The dismissers and the commons critics aren't really on opposite sides of my argument. They're seeing the same problem from opposite ends. The dismissers see it locally and over-correct. The commons critics see it globally and (I think) over-despair. Both reactions are wrong in their conclusions but right in their diagnosis: the heuristic broke, and now somebody has to pay for the evaluation it used to do for free.

People worry that LLMs will atrophy our critical thinking. I'd bet on the opposite. The work the heuristic used to do for us is now ours to do. That's the whole adjustment.

## The CAD question

I keep thinking about architects and CAD software. If you were hiring an architect today and discovered they refused to use CAD, you wouldn't admire their commitment to craft. You'd find a different architect. The design lives in the architect's head, not in the drafting tool. CAD made the transmission faster. Nobody serious argues it made the thinking worse.

We're in the awkward middle period with writing and LLMs. People still ask whether using an LLM to write is legitimate. Eventually that question will invert. A writer who refuses these tools will look the way an architect who refuses CAD looks now. Not principled. Just slow.

I don't know how long the awkward period lasts. I do know the question will flip.

---

One last thing, and it's the practical one. If the prose-quality heuristic is broken and the work falls back on the reader, what does that mean for people who actually *write* with LLMs? What does good practice look like? And there's the puzzle that's been hanging since post two: if the model is picking statistically likely tokens, where do *your* ideas come into it?

That's [next]({% post_url 2026-04-12-the-hidden-context %}).
