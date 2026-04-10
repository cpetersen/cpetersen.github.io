# Slop Series — Context, Phrases, and Concepts

Companion document to `slop-series-outline.md`. Hand both to the writing agent.

This document captures the key terms, coined phrases, framings, and stylistic decisions that emerged during outlining. The outline tells the agent *what* to write; this document tells it *how* the ideas should sound and which phrases are load-bearing.

---

## Coined phrases (use these verbatim)

These are phrases the author and I worked out together. They should appear in the drafts as written, not paraphrased. They're load-bearing for the argument.

### "The cost of writing fell. The cost of reading rose."
- The quotable line. The emotional landing of post 3.
- Should appear as a standalone beat — its own paragraph or pulled out as a callout. Let it breathe; don't bury it in surrounding prose.
- Pairs with the Fluency Tax definition below. Order matters: this line first (the *feeling* of the idea), then the named concept (the *label* for it).

### "The Fluency Tax: when generation is free, evaluation is expensive."
- The named concept. The intellectual landing of post 3.
- Introduce it immediately after "the cost of writing fell, the cost of reading rose" lands.
- Once introduced, it can be referenced as "the Fluency Tax" in later sentences without re-defining it.
- Do **not** capitalize as "The Fluency Tax" mid-sentence unless it's being formally named. After the introduction, lowercase "the fluency tax" is fine.

### "Reflexive dismissal" / "the reflexive dismissers"
- The term for the camp that uses any AI signature (em-dashes, the word "delve," tricolons) as automatic disqualification.
- This term came from Graham Dumpleton's piece (Feb 2026) — he wrote "healthy skepticism can tip over into reflexive dismissal" and that phrase captures the phenomenon precisely. Use it.
- The author wants this phrase in the *opening sentence* of post 1: something like "I've been doing a lot of LLM-assisted writing lately, both code and prose (more on that later), and I've noticed quite a bit of what can only be described as reflexive dismissal." This is the hook for the entire series.
- Pair it with "the commons critics" as the contrasting camp.

### "More on that later" (post 1 opener, planting post 4)
- The "(more on that later)" parenthetical in the opening sentence is doing real structural work. It plants post 4 from the very first paragraph and gives the series a self-referential frame: the author has been writing this way, and at the end they're going to show what that looks like.
- Post 4 should explicitly call back to this line. "I told you I'd come back to this."

### "The hidden context"
- The key phrase for post 4. The thing that makes LLM-assisted writing either insight or slop is the back-and-forth that happens before the artifact exists, and that back-and-forth has been compressed out by the time the reader sees the result.
- Use "hidden context" as a recurring term in post 4 once it's introduced. It's the post 4 equivalent of "Fluency Tax" — a label for a specific concept that gets referenced repeatedly.

### "The disagreement test"
- Post 4's load-bearing practical claim: if you never disagree with the LLM, something is wrong. This is the single most important rule in good LLM-assisted writing, and the post should treat it as such.
- The framing: agreeable LLMs produce fluent semantic slop unless the human introduces friction. The friction is the *signal* that real collaboration is happening.

### "The commons critics"
- The term for the more serious camp worried about aggregate ecosystem effects rather than individual pieces of text.
- Examples: arXiv moderators, the Reuters Institute experts, the "tragedy of the commons" framing in AI-assisted software development research.
- Their concern is *the flood*, not any individual piece. They think no filter can scale fast enough to keep up.

### "Prose engine, not an idea engine"
- Key framing for what LLMs actually do. Use this when distinguishing token-prediction from idea-generation.
- The conflation between these two is doing most of the work in the pessimist case, and naming them as separate things is part of how the argument lands.

### "Semantic slop" / "syntactic slop"
- The two-part taxonomy at the heart of post 1.
- **Semantic slop**: idea-level failure. Code that doesn't compile. Contradictory arguments. Stories whose plots fall apart on re-reading. Can't be fixed by editing because the *ideas* are wrong. Always bad.
- **Syntactic slop**: token-level failure. Em-dashes, tricolons, the word "delve," uniform smoothness. Can be fixed by editing because the ideas are fine. Bad in some contexts (poetry, literary fiction), fine in others (status updates, business email, routine explanations).
- These terms should be defined explicitly in post 1 and then reused throughout the series.

---

## The throughline of the series

The whole series is about **the limits of judging text by its surface**, in three different registers:

1. **Post 2** (technical register): perplexity is a measurable surface feature standing in for an unmeasurable deep property (quality of thinking). It's a lossy proxy. AI detectors work because the proxy correlates with what they're trying to measure, but the correlation is loose.

2. **Post 3** (cultural register): prose quality has been a perceived surface feature standing in for the same unmeasurable deep property. It's also a lossy proxy. It worked as a labor-saving heuristic for centuries, and LLMs just made it lossier.

3. **Post 4** (practical register): for LLM-assisted writing specifically, the thing you'd need to evaluate (the hidden context, the back-and-forth, the actual thinking) has been *compressed out* of the artifact by the time the reader sees it. There's no recovery procedure. Even transparency wouldn't help — reading the context would cost more than evaluating the artifact directly. The reader is forced to engage with the ideas on their own merits, which is what they should have been doing all along.

All three posts arrive at the same insight from different angles: cheap heuristics for expensive judgments are always lossy, and when the cheapness collapses (as it has for prose quality), the judgment falls back on the reader. Post 4 is the one that closes the loop by showing this isn't just a temporary discomfort — for LLM-assisted writing, no shortcut is possible *even in principle*.

This throughline should feel inevitable by the end of post 4. The reader should be able to look back and say "ah, the whole series was building to this."

---

## Stance and tone

### Persuasive, not even-handed
- The author chose persuasive over balanced. This means: take a position, defend it, don't hedge so much that the argument disappears.
- But persuasive ≠ combative. The argument is gentle and confident. It's not punching at opponents. It's saying "here's what I think is going on, here's why the standard reactions miss it."
- Avoid the gestural even-handedness move ("if you have other concerns I can understand that"). The earlier draft had this and the author decided to cut it. The steelman in post 3 does the work of acknowledging the other side honestly; the gesture isn't needed and reads as defensive.

### Honest about uncertainty
- The "I might be wrong" beat in post 3 (about whether discrimination can scale fast enough) is important. The author and I agreed that the honest version of the optimistic case is "I'm betting on adaptation, mostly because I don't see what else there is to bet on." Don't let the agent sand this down into confident prediction.
- Persuasive writing is allowed to admit uncertainty. In fact, it's stronger when it does, because it preempts the obvious objection.

### Concrete over abstract
- The author wants concrete examples wherever possible. The em-dash discourse, the arXiv moderators, code that doesn't compile, business emails — these are all the kind of grounding the prose should reach for.
- Avoid abstract restatements of the argument when a concrete example would do the same work in fewer words.

---

## Author's stylistic preferences

These are non-negotiable. The agent should respect them strictly.

- **No em-dashes.** This is doubly important given the subject matter — using em-dashes in a series about how em-dashes have become an AI tell would be embarrassing. Use periods, commas, colons, semicolons, or parentheses instead. If a sentence really wants an em-dash, restructure it.
- **Direct and precise.** No throat-clearing. No "in today's rapidly evolving landscape" openers. No "it's worth noting that." Get to the point.
- **Conversational but not casual.** The voice should sound like a smart person thinking out loud, not a LinkedIn thought-leadership post and not an academic paper. Closer to a good blog post by someone who knows the material.
- **The author writes about technical subjects for a mixed audience.** Assume some readers will know what a transformer is and some won't. Lead with the plain-language version, offer the technical version for readers who want it, don't condescend in either direction.

---

## Things to avoid

- **Don't oversell timelines.** The CAD analogy in post 3's close uses "eventually" deliberately — vague timeframes are defensible, specific ones ("in five years") become forecasts that can be wrong. Keep predictions vague.
- **Don't claim Brandolini's law applies directly.** The author and I went back and forth on this. The Fluency Tax is a *sibling* observation to Brandolini, not the same law. Brandolini is about refutation (adversarial); the Fluency Tax is about evaluation (the upstream judgment of whether something is worth attention). Mention Brandolini as a related observation about asymmetric costs in information environments, but don't claim equivalence.
- **Don't strawman the commons critics.** They're the steelman in post 3. They have peer-reviewed work behind them. Treat them as serious people with a real argument that the author partially agrees with and partially disagrees with.
- **Don't use "delve," "tapestry," "landscape" (as a metaphor), "testament," "vibrant," "pivotal," "navigate" (as a metaphor), "multifaceted," "nuanced" (unless actually meaning nuanced), or any of the other LLM tells.** Same logic as the em-dash rule — using AI-flagged vocabulary in a series about AI writing would undercut the argument. The author maintains a Claude Code skill specifically for eliminating these patterns; the agent should already know them.
- **Don't use the "rule of three" structurally.** Tricolons are one of the patterns flagged as AI-typical. Vary sentence structures. If the agent finds itself writing "X, Y, and Z" three times in a row, restructure.
- **Don't use the "not just X, but Y" cadence.** Same reason.

---

## Concrete examples and references the agent should know

These came up during research and outlining and are fair game for the drafts:

### The em-dash discourse
- The Washington Post wrote about em-dashes as the supposed "ChatGPT hyphen" tell.
- The Ringer published a defense of em-dashes against "AI-shaming."
- McSweeney's published a parody where the em dash itself responds to "the AI allegations."
- Every.to wrote about em-dash anxiety as fundamentally about *trust* — writers worrying readers will assume their work didn't come from a place of care.
- These pieces are all from 2025. The em-dash-as-AI-tell has become a well-documented phenomenon and readers will recognize it instantly.

### The reflexive dismissal phenomenon
- James Hamilton (Medium, March 2026) wrote about being accused of using ChatGPT based on an em-dash and an Americanized spelling, both of which had other explanations. He called it "a puritanical aversion to AI-generated content."
- Graham Dumpleton (Feb 2026) coined the "reflexive dismissal" framing. His piece distinguishes content "designed with a clear purpose, structured for a specific use case, and reviewed by someone who understands the domain" from genuine slop, and argues the line should be drawn at *intent and design*, not *whether AI was involved*.

### The commons critics
- The arXiv CS moderation policy change (late 2025) was driven by hundreds of monthly review and position papers that "appeared to be AI-generated slop" — essentially annotated bibliographies dressed as research.
- The Reuters Institute piece on AI slop in journalism framed the concern as flooding, not individual quality: "vague text, filled with buzzwords, with no real point."
- An arXiv paper titled "An Endless Stream of AI Slop" frames AI slop in software development as a tragedy of the commons — individual benefit, aggregate degradation of codebases, knowledge resources, reviewer capacity, and trust.

### The CAD analogy (post 3 close)
- The author's framing: people work with architects who use CAD; if you found an architect who refused to use CAD you'd run the other direction. LLMs will eventually be the same for writing.
- Important caveat the agent should know: CAD and LLMs aren't doing exactly the same kind of job. CAD replaced a manual process (drafting) with a faster version of the same process; the design always lived in the architect's head, not the lines. A skeptic will point out that in writing, the prose isn't *just* a transmission medium — writing is how you find out what you think. The analogy works as a forward-looking gesture about tool legitimacy, not as a tight argument about cognition.
- Use the analogy at the close of post 3, after the Fluency Tax material has done its work. By that point the author has already argued that prose and ideas are separable, so the analogy lands on the argument rather than having to make it.

---

## What's still missing (and what might no longer be missing)

The earlier version of this document flagged that post 3 needed a concrete example of LLM-assisted writing where the model helped get an idea across more clearly than the human could have alone. Post 4 now resolves this with the understated reveal at the close.

**DECIDED:** Post 4's ending uses a casual, confident tone rather than a dramatic reveal. The register is "if you haven't guessed already, I used an LLM to help draft this series" rather than a ta-da moment. This works because:
- The reader is smart; they've already guessed.
- It models the comfort-with-tools posture the series argues for.
- It avoids the self-congratulatory risk entirely.
- Specific disagreements from the writing process can appear as illustrations of the hidden context, framed as "yeah, this is how it works" rather than "look what I did."

Post 3 defers its concrete example to post 4. The agent should not silently fabricate an example. If this approach doesn't feel right during drafting, ask the author.

---

## One last thing

The author phrases requests as questions and expects the agent to exercise judgment, push back when something doesn't make sense, and ask clarifying questions when needed. This is not a "execute these instructions literally" job. It's a "help me write something good" job. The agent should feel free to flag places where the outline isn't quite working, suggest alternative framings, or ask which of several plausible directions the author wants. Drafts that come back with thoughtful questions attached are more valuable than drafts that come back as polished but unconsidered prose.
