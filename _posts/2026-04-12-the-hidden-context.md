---
layout: default
title: "The Hidden Context"
type: post
navigation: false

date: 2026-04-12 08:00:00 -0700
excerpt: "What writing with an LLM actually looks like, and why the thing that matters most is the thing you'll never see."
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

I told you I'd come back to this.

In the [first post of this series]({% post_url 2026-04-09-we-need-to-talk-about-slop %}), I mentioned I'd been doing a lot of LLM-assisted writing, and promised to come back to what that actually looks like. This is that post.

## The Vending Machine Model

Most people picture something like a vending machine. You type a prompt. Text comes out. You copy it, maybe clean up a sentence or two, and publish. This happens constantly, and it produces semantic slop reliably. If this is your mental model of LLM-assisted writing, then yes, every criticism you've heard is fair.

But that's not how it works when it works well.

What it actually looks like is a long conversation. You bring a half-formed idea, the model offers a framing, and you push back on part of it. It tries again. Somewhere in the back-and-forth, you realize your original idea was wrong in a way you hadn't noticed. The model builds on the correction. You disagree with the next move. This goes on for a while, and eventually a piece of writing emerges that contains thinking neither you nor the model would have produced alone.

This is closer to working with a sharp colleague than to operating a vending machine. The colleague happens to write faster than any human and never gets annoyed when you change your mind for the fourth time. But the dynamic is collaborative, not generative. The output is a record of the thinking, not a substitute for it.

## The Disagreement Test

Here's the single most useful thing I can tell you about writing with an LLM: you should disagree with it. Regularly. If you never disagree, something is wrong.

The model is agreeable by default. It will accept your premises, build on your framings, and tell you your ideas are interesting. If you treat that agreeableness as validation, you'll produce confident-sounding text with no actual friction in it. That's how you get fluent semantic slop. The prose reads well. The ideas are hollow.

Here's what friction actually looks like. While outlining this series, the model kept framing the commons critics (the people worried about aggregate ecosystem effects from [post three]({% post_url 2026-04-11-we-lost-a-shortcut %})) as straightforwardly wrong. I kept pushing it back toward a real steelman. The version where I say their argument is serious and I might be wrong was the result of several rounds of "no, you're being too dismissive here." The model's instinct was to flatten the opposition. Mine was to take it seriously. That disagreement shaped the argument.

If the model produces a draft and you find yourself nodding along without wanting to change anything, that draft is probably semantic slop, regardless of how polished it sounds. Real collaboration leaves marks. The absence of marks is the warning sign.

This is where the hidden context gets its quality. The disagreements and corrections are what make the context window worth something. Without friction, the context is empty calories, and the output is fluent noise.

## Where Your Ideas Actually Live

This is the question that's been hanging since [post two]({% post_url 2026-04-10-what-syntactic-slop-actually-is %}). If the model is picking statistically likely tokens, how does your thinking get into the output? The tokens are predictable. The model is doing what models do. Where's the room for any individual contribution?

The answer is straightforward, once you see it.

The model isn't picking the most likely next token in the abstract. It's picking the most likely next token given the entire context window. Every message you've sent, every correction, every "no, try this angle instead" is sitting in that window when the model generates its next response. The probability distribution over the vocabulary is shaped by everything you put there.

Your thinking isn't fighting the model's determinism. Your thinking is what makes those particular tokens likely in the first place.

This is verifiable. You can take the published output, feed it through the same model, and recover the perplexity numbers from generation time. But only if you have the full context. Without the context, the perplexity score is recoverable but uninformative. The context is the thing that makes the tokens predictable. The context is where the ideas live.

## The Catch

And here's where it gets uncomfortable.

The reader of the published piece can't see the context. They see the output. The back-and-forth, the disagreements, the corrections, the thinking that shaped every token in the final draft: all of that has been compressed out of the artifact by the time it reaches them.

A piece written through twenty rounds of careful collaboration and a piece written through a single lazy prompt can produce outputs with the same statistical fingerprint. Same perplexity profile. Same surface features. The thing that distinguishes insight from slop (whether real thinking happened upstream) is not in the text the reader is holding. It's in a context window they will never see.

And even if they could see it, it wouldn't help. Twenty rounds of conversation is far more text than the resulting piece. Reading the context to verify the thinking would cost the reader more effort than just evaluating the ideas from scratch. Transparency isn't a solution. The compression is one-way. You can't reconstruct the source from the projection without exceeding the original cost.

## What This Means for the Fluency Tax

[Post three]({% post_url 2026-04-11-we-lost-a-shortcut %}) framed the fluency tax as "the cost of evaluation went up because the heuristic broke." That's true, but now we can sharpen it.

For LLM-assisted writing specifically, the cost of evaluation went up because the only thing that distinguishes insight from slop has been compressed out of the artifact you're evaluating. The old shortcut broke, and what replaced it admits no shortcut even in principle. The reader has to evaluate the ideas in the text on their own merits. There is no cheaper path. There never will be one. The compression is irreversible.

Which is, honestly, what evaluation should have always been. The pre-LLM heuristic was a labor-saving device, not a truth-tracking one. We're being forced to do the thing we should have been doing all along.

## What This Means for the Writer

It also puts a particular kind of responsibility on the writer. The writer is the only person who can know whether their LLM-assisted piece contains real thinking or not. The reader can't verify it, because the artifact doesn't carry that information.

This is uncomfortable. The trust between writer and reader is now genuinely unverifiable in a way it used to merely be hard to verify. The Every.to writer who worried readers would assume her em-dashes meant she "didn't come from a place of care" had it exactly right. There's no way to prove care happened. You can only do the work, ship the result, and hope the ideas hold up on their own.

The pragmatic version: write with LLMs the way you'd want others to. The work you do in the hidden context is the only thing standing between your output and the slop pile, and nobody but you will ever know whether you did it.

## On That Note

If you haven't guessed already, I used an LLM to help draft this series.

I realize that's roughly as surprising as a developer's blog in 2026 using a static site generator. But it's relevant, because the process was exactly what I've been describing. Not a prompt and a copy-paste. A long collaboration, across multiple sessions, with plenty of friction.

One more example. I had a section that tried to connect the fluency tax to Brandolini's law directly. The model pushed back, pointing out that Brandolini is about adversarial refutation and the fluency tax is about upstream evaluation. They're sibling observations, not the same claim. That distinction survived into the final draft because the model was right and I was wrong.

The thinking happened in the hidden context, and what you've been reading is the compressed output.

You've already evaluated it. You've either found these ideas worthwhile across four posts, or you haven't. Telling you the process doesn't change your verdict. And my comfort with that fact is, I think, the point.
