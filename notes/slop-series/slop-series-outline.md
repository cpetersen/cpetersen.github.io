# The Slop Series — Outline

A four-post series on AI "slop": what the word actually means, what's happening mechanically, why we're so disoriented by it, and what good LLM-assisted writing actually looks like in practice.

**Throughline:** The series is about the limits of judging text by its surface. Post 1 makes the taxonomy. Post 2 shows the technical heuristic (perplexity) is a lossy proxy for quality. Post 3 shows the cultural heuristic (prose quality) is a lossy proxy for thinking, and now lossier than ever. Post 4 closes the loop: for LLM-assisted writing specifically, the thing you'd need to evaluate has been compressed out of the artifact, and the only honest move is to engage with the ideas directly.

**Stance:** Persuasive, not even-handed. The argument is that "slop" conflates two different things, that one of them is mostly an aesthetic complaint, that the real disorientation is about a broken heuristic, and that the practical response is to write *with* LLMs in a way that puts real thinking into the hidden context.

---

## Post 1 — We Need to Talk About Slop

**Job of this post:** Plant flags. Introduce the taxonomy. Earn the right to make the technical and cultural arguments in posts 2 and 3.

**Length:** Short. This is the setup, not the payoff.

### Open (the personal hook)
- Open in the author's voice, something like: *I've been doing a lot of LLM-assisted writing lately, both code and prose (more on that later), and I've noticed quite a bit of what can only be described as reflexive dismissal.*
- The "more on that later" line is doing real work. It plants post 4 from the very first paragraph. The reader knows from sentence one that this isn't going to be a generic anti-slop or pro-AI piece — it's going to land somewhere personal and practical.
- From the personal hook, pivot to the diagnosis: the word "slop" is doing too much work. It shows up in every LinkedIn thread about AI writing, everyone nods, no one defines it. It's become a thought-terminating cliché, the kind of word that ends conversations instead of starting them.
- Claim: there are at least two very different things people mean when they say "slop," and treating them as the same thing is how the discourse got dumb.

### Semantic slop — define with a concrete example
- Code that doesn't compile. An argument that contradicts itself two paragraphs later. A story whose plot falls apart on the second read. A "explanation" of a concept that sounds right until you actually know the concept.
- The defining property: you can't fix it by editing. The *ideas* are wrong. Polishing the prose just makes the broken thinking more presentable.
- This is what happens when an LLM produces fluent text about something it doesn't actually have a coherent model of. It's the failure mode that matters.

### Syntactic slop — define with a concrete example
- The em-dashes. The "it's not just X — it's Y" cadence. The tricolons. The tells that GPTZero hunts for. The faint, uniform smoothness that makes you go "an LLM wrote this" before you can say why.
- The defining property: you *can* fix it by editing, because the ideas are fine. It just sounds like a robot wrote it — because a robot did.
- This is what people mean when they say AI prose is "soulless" or "flat" or "sanded down." It's a real, measurable property of the text. (Post 2 is about exactly what that property is.)

### The claim
- Semantic slop is always a problem, because broken ideas are broken ideas, and no amount of editing fixes them.
- Syntactic slop is a problem in some contexts and a non-problem in others. It's bad in poetry, mostly bad in literary fiction, bad anywhere surprise is part of what you're paying for. It's basically fine in a status update, a meeting summary, a clear explanation of a routine concept, a business email nobody wanted to read in the first place.
- Treating these two things as the same thing — which the word "slop" encourages — is how you end up with a discourse that can't distinguish "this LLM produced contradictory nonsense" from "this LLM produced clear competent prose I find aesthetically displeasing."

### Tease posts 2, 3, and 4
- Next post: what syntactic slop actually *is*, mechanically. A short detour through how language models work, why AI detectors can spot them, and what people are really reacting to when they say AI prose is flat.
- Post after that: the deeper thing. Why we're so mad about prose getting cheap, even when the prose is fine.
- And the last one: what writing with an LLM actually looks like in practice — the "more on that later" from the opening — and why the difference between insight and slop turns out to live somewhere the reader will never see.

---

## Post 2 — What Syntactic Slop Actually Is (A Short Detour Through Perplexity)

**Job of this post:** Explain the mechanism. Give the reader a real model of what's happening at the token level, so the cultural argument in post 3 has something to stand on. End by showing the technical heuristic is itself a lossy proxy — which mirrors and sets up post 3.

**Length:** Medium. The technical material needs room to breathe but not a textbook.

**Audience problem:** Some readers will follow "probability distribution over the vocabulary," some will glaze. Lead with an analogy, then offer the real version for readers who want it. Anyone can drop off after the analogy and still get the rest of the post.

### Open
- AI detectors aren't magic. Once you see what they're doing, you'll understand exactly what people mean when they call AI prose "soulless" — and also why that complaint is narrower than people think.

### The mechanism, in plain language
- At every step of generating text, the model has a ranked guess about what word comes next. Some guesses are very confident — "the cat sat on the ___" — and some are wide open — "she opened the door and saw ___."
- Temperature is the knob that controls how often the model picks something other than its top guess. Low temperature: it almost always picks the most likely next word. High temperature: it'll roll the dice on less likely options.
- That's the entire trick. Everything else is bookkeeping.

### The technical version, for readers who want it
- A transformer's forward pass produces a probability distribution over the entire vocabulary at each step. Temperature is a parameter on the softmax that flattens or sharpens that distribution before sampling.
- *Surprisal* of a token is −log(p) — how unlikely the model thought the chosen token was. Low probability, high surprisal.
- *Perplexity* of a passage is the exponential of the average surprisal across its tokens. Roughly: how surprised the model is, on average, by what it's reading.
- *Burstiness* is the variance of surprisal across the passage — how much the surprisal jumps around from token to token.

### The neat fact that makes detection possible
- Surprisal is recoverable. Take any text from anywhere — written by a human, a model, a parrot — feed it through a transformer, and you get a perplexity score for it.
- And here's the part that does the actual work for AI detectors: if you happen to use the *same* model that generated the text, you get back the exact numbers from generation time. The text carries its own fingerprint, and the model that made it can read that fingerprint.
- This is the entire trick behind GPTZero and the rest. They're not detecting "AI-ness" in some mystical sense. They're computing perplexity and burstiness and noticing that LLM output tends to score lower on both than human writing does.

### Why some domains feel less "sloppy" than others
- Different kinds of writing have different intrinsic entropy.
- **Code** is low-entropy. It has to conform to a grammar. There aren't many valid next tokens after `if (`.
- **Legal writing** is low-entropy. The genre constrains it. "The party of the first part," "notwithstanding the foregoing," "shall be deemed." These phrases exist *because* law values predictability over surprise.
- **Poetry** is high-entropy. Surprise *is* the point. A predictable poem is a bad poem.
- **Prose** sits in the middle and varies enormously by writer. Hemingway is lower entropy than Nabokov. Neither is bad. They're doing different things.
- LLMs do well in low-entropy domains and worse — or at least more obviously — in high-entropy ones. This is why AI-generated code can be excellent while AI-generated poetry almost always feels off. The detector is picking up on the same thing your ear is.

### The payoff sentence (and the bridge to post 3)
- Low perplexity means the *tokens* are unsurprising. It does not mean the *ideas* are unsurprising.
- When people say AI writing is flat, they are reacting to a real, measurable property of the text. But they are then sliding from "the words are predictable" to "the thinking is predictable," and those are not the same claim.

### The recursive turn
- And here's the thing worth sitting with: perplexity is itself a proxy. It's a measurable surface feature standing in for an unmeasurable deep property — quality of thinking. The reason it works at all as a detector is that the two correlate, loosely. The reason it's a bad measure of quality is that the correlation is loose.
- This isn't a flaw in perplexity. It's the nature of any cheap heuristic for an expensive judgment. The technical heuristic for "is this AI" turns out to be a lossy approximation of something deeper.
- Hold that thought. It's going to come back in the next post, in a different form.

### Tease post 3
- Because we have *another* lossy approximation that we've been using forever, and LLMs just broke it.

---

## Post 3 — We Lost a Shortcut, and We're Mad About It

**Job of this post:** The actual argument. Posts 1 and 2 were earning the right to make this one. This is the post you actually want to write.

**Length:** Medium-long. This one gets to breathe.

### Open with the shortcut
- For most of literate history, prose quality was a usable proxy for thinking quality. Not a perfect one — con artists and demagogues have always exploited the gap between *sounds smart* and *is smart* — but usable enough that most people, most of the time, could let their guard down when something was well-written and tighten it when something was sloppy.
- The proxy was a hack. But it was *our* hack and it mostly worked. It was a labor-saving device. It let you triage, decide what to read carefully and what to dismiss, without having to evaluate every claim from scratch.

### The proxy is broken now
- LLMs can produce arbitrarily polished prose around arbitrarily bad ideas. The cue we relied on no longer carries the signal it used to.
- This is genuinely disorienting. The "slop" discourse is — at least partly — the sound of people grieving the loss of the proxy without quite knowing that's what they're grieving.
- The complaints about em-dashes and tricolons are real. But they're also a displacement. The deeper complaint is *I can no longer tell at a glance whether to trust this*, and that's a much harder thing to say out loud than "I hate em-dashes."

### Two reactions to the broken proxy
- When a heuristic that everyone relied on stops working, people react in different ways. The "slop" discourse contains at least two distinct reactions, and they're worth pulling apart because they're often treated as the same camp when they're really not.
- **Reaction one: the reflexive dismissers.** These are the people who, having lost the prose-quality heuristic, reach for whatever cheap replacement is available — em-dashes, tricolons, the word "delve," the faint smoothness — and use *those* as the new disqualifier. "It has em-dashes, must be AI, ignore." This is the camp the series has been arguing against from the start. They're not wrong that these features correlate with LLM output. They're wrong that the correlation is strong enough to use as a filter, and they're wrong that LLM involvement is itself disqualifying.
- **Reaction two: the commons critics.** These are smarter and more serious. They're not reacting at the level of any individual piece of text. They're reacting at the level of the *ecosystem*. Their argument is roughly: we trained these models on the human-written commons, we're now flooding that same commons with cheap fluent text at a rate the commons has never had to absorb, and the aggregate effect on shared information environments — academic publishing, code repositories, search results, public discourse — is degradation faster than any filter can keep up with. The arXiv moderators drowning in fluent annotated bibliographies aren't worried about any individual paper. They're worried that the *signal-to-noise ratio of the whole environment* is collapsing.
- These two reactions look like the same complaint and they're not. The dismissers want a new cheap filter. The commons critics think no filter can scale fast enough to matter.

### What the commons critics get right (and where I disagree)
- The commons critics and I are looking at the same shift from opposite ends. Both of us think the prose-quality heuristic has broken. Both of us think evaluation is now harder than it used to be. We disagree about whether discrimination — at the individual level and in aggregate — can scale fast enough to keep the commons functional.
- I'm betting it can. Mostly because I don't see what else there is to bet on, and because every previous information-technology shift has produced exactly this pattern: a flood of low-quality content, a period of confusion, then the development of new filtering norms and institutions.
- They might be right that I'm wrong. The honest version of this argument is that we don't know yet, and the people predicting collapse and the people predicting adaptation are both reasoning from priors more than evidence. I should say that out loud rather than pretend my optimism is justified by anything firmer than temperament.
- One thing I do want to say firmly: the conflation between *token prediction* and *idea generation* is still doing a lot of work in the pessimist case, even at the commons level. Producing actually-insightful long-form work with an LLM is *hard*. Semantic slop is the default. Insight is the exception, and it requires a human who knows what they're trying to say. The LLM is a prose engine, not an idea engine. Some of what's flooding the commons is genuine slop. Some of it is fluent prose around real ideas. The flood contains both, and the response to a flood is filtering, not banning the source.
- *(Concrete example slot: a real instance where an LLM helped get an idea across more clearly than I could have alone. Without it, this paragraph is just an assertion.)*

### The Fluency Tax, at two levels
- Both reactions — the reflexive dismissers and the commons critics — are responses to the same underlying shift, and it's worth naming the shift directly.
- Brandolini's law observes that refuting bullshit costs an order of magnitude more than producing it. There's a related asymmetry at work now, but it's not the same one. It's not about refutation. Most AI-assisted writing isn't making false claims you need to fight. It's about *evaluation* — the upstream judgment of "is this person actually thinking, is this worth my attention." That judgment used to be cheap, because the prose-quality heuristic did most of the work for you. Now it's expensive.
- **The cost of writing fell. The cost of reading rose.**
- *(Let this line breathe. Then name the concept.)*
- Call it the **Fluency Tax: when generation is free, evaluation is expensive.**
- And here's the move: the Fluency Tax operates at two levels at once.
  - **At the individual level**, it's the work each reader now has to do per piece — actually engaging with the ideas instead of using surface polish as a shortcut. The reflexive dismissers are reacting to this version of the tax. They don't want to pay it, so they're reaching for a cheap replacement filter.
  - **At the ecosystem level**, it's the work whole institutions have to do to keep their information environments functional — moderation, peer review, code review, editorial judgment. The commons critics are reacting to this version. They're worried the aggregate tax exceeds what the institutions can pay.
- The reflexive dismissers and the commons critics aren't really on opposite sides of my argument. They're seeing the same problem from opposite ends. The dismissers see it locally and over-correct. The commons critics see it globally and despair. I think both reactions are wrong in their conclusions but right in their diagnosis: the heuristic broke, evaluation got expensive, and somebody has to pay.

### The heuristic was never perfect
- Worth saying explicitly: the prose-quality shortcut was always lossy. Plenty of garbage slipped through before — anyone who's read a confidently-written and completely wrong magazine essay knows this. Plenty of insight was dismissed because its author couldn't write a clean sentence. The shortcut was a cheap approximation, not a law of nature.
- LLMs didn't break a perfect heuristic. They made an already-imperfect one cheaper still. The signal was always noisy. Now it's noisier.
- And — this matters — that does not mean all generative AI content is bad. Most of it isn't trying to fool you. Most of it isn't even an adversary. It's just *more text*, much of it fluent, some of it insightful, much of it not, and the work of telling them apart now falls back on the reader in a way it didn't before.

### Close
- People worry LLMs will atrophy our critical thinking. The opposite pressure seems more likely to me. The people who develop the discrimination to sort insight from fluent nonsense will do well. The people who don't will be at the mercy of whoever writes the most fluent garbage. And the institutions that develop new filtering norms — better moderation, better peer review, better editorial judgment — will keep their commons functional. The ones that don't, won't.
- This will be unequally distributed, like everything else. Both at the individual level and the institutional one. That's uncomfortable but it's not new. It's the same shape as every previous information-technology shift — printing, radio, the web, social media — just compressed into a shorter timeframe.
- The work the heuristic used to do for us is now ours to do. That's the whole adjustment.
- *(Optional landing beat: the CAD analogy. We're in the awkward phase. People still ask whether using an LLM to write is legitimate, the same way people once asked whether using CAD to draft was legitimate. Eventually the question will invert. A writer who refuses these tools will look the way an architect who refuses CAD looks now — not principled, just slow. Keep "eventually" vague; don't put a number on it.)*

### Tease post 4
- One last thing, and it's the practical one. If the prose-quality heuristic is broken and the work falls back on the reader, what does that mean for people who actually write with LLMs? What does good practice look like? And — the puzzle that's been hanging since post 2 — if the model is picking statistically likely tokens, where do *your* ideas come into it? Next post.

---

## Post 4 — What It's Actually Like to Write With an LLM

**Job of this post:** Close the loop. The series has spent three posts arguing that LLMs *can* be used well. This is the post where the author shows what that looks like, and where the perplexity puzzle from post 2 finally gets resolved. It's also the post that retroactively justifies the "more on that later" hook from post 1.

**Length:** Medium. Long enough to do the practical material justice and land the perplexity turn, but not so long it becomes a how-to guide. The series isn't a manual.

### Open
- Callback to the opening of post 1: "I told you I'd come back to this." The author has been doing a lot of LLM-assisted writing. Here's what it actually looks like, because the popular image of it — type a prompt, copy the output, publish — is wrong, and the wrongness matters for everything the series has been arguing.

### What people imagine vs. what it actually is
- The popular image: prompt in, text out, copy-paste, ship. This is real, it happens constantly, and it produces semantic slop reliably. If this is your model of "writing with AI," then yes, the criticism is fair, and yes, the result will be slop more often than not.
- What it actually looks like when it works: a long back-and-forth. You bring an idea, half-formed. The LLM offers a framing. You push back on part of it. It offers a better framing. You realize your original idea was wrong in a specific way you hadn't seen, and you say so. It builds on the correction. You disagree with the next move. And so on, for a while. Eventually a piece of writing emerges that contains thinking neither you nor the LLM would have produced alone.
- This is closer to working with a sharp colleague or a patient tutor than to operating a vending machine. The output is a *record* of the thinking, not a substitute for it.

### The disagreement test (load-bearing)
- The single most important rule: **you should disagree with the LLM at some points.** If you never disagree, something is wrong.
- This is where most LLM-assisted writing falls down. The model is agreeable by default. It will accept your premises, build on your framings, and tell you your ideas are interesting. If you treat that as validation, you'll produce confident-sounding text that contains no actual friction. That's how you get fluent semantic slop.
- The fix is to introspect when the conversation feels frictionless. Are you not disagreeing because the model is right? Or are you not disagreeing because you're not bringing enough of your own perspective to push back from? The second case is the failure mode. If you can't remember the last time you said "no, that's not right" in a conversation with an LLM, the conversation is doing nothing for you.
- Concrete tell: if the LLM produces a draft and you find yourself nodding along without changing anything, that draft is probably semantic slop, regardless of how good it sounds. Real collaboration leaves marks. The absence of marks is the warning sign.

### The perplexity puzzle, finally
- Here's the question that's been hanging since post 2: if the LLM is picking the most likely next token, how does *your* thinking get into the output? The tokens are statistically predictable, the model is doing what models do, where's the room for any individual contribution?
- *(Optional: gesture at the free-will-vs-determinism framing here as a hook. "You might think this raises a free-will-style puzzle about where the ideas come from." Don't build the section around it — it's a one-sentence rhetorical move, not a structural pillar. Drop it in final drafting if it doesn't earn its place.)*
- The technical answer is mundane: the model isn't picking the most likely next token *in the abstract*. It's picking the most likely next token *given the entire context window*. Every message you've sent, every pushback, every "no, try this angle" is in that context. The probability distribution over the next token is shaped by everything you put there. Your thinking isn't fighting the determinism; your thinking is *what makes those particular tokens likely in the first place*.
- This is verifiable: you can take the published output, run it through the same model, and recover the exact perplexity numbers from generation time — but only if you have the full context. Without the context, the perplexity score is recoverable but uninformative. With the context, the score is exact. The context is what makes the tokens predictable.

### The catch (this is the new move)
- And here's where it gets uncomfortable. The reader of the published piece can't see the context. They see the output. The context — the back-and-forth, the disagreements, the corrections, the thinking — has been compressed out of the artifact by the time it reaches them.
- A piece written through twenty rounds of careful collaboration and a piece written through a single lazy prompt produce outputs with the *same statistical fingerprint*. Same perplexity profile. Same em-dashes. Same AI tells. The thing that distinguishes insight from slop — whether real thinking happened upstream — is not in the text the reader is holding. It's in a context window they will never see.
- And — this is the part that resolves the whole series — even if they could see the context, it wouldn't help. Twenty rounds of conversation is far more text than the resulting piece. Reading the context to verify the thinking would cost the reader more than just doing the thinking themselves from scratch. *Transparency isn't a solution.* The compression is one-way. There's no way to reconstruct the source from the projection without exceeding the original cost.

### What this means for the Fluency Tax
- Post 3 framed the Fluency Tax as "the cost of evaluation went up because the heuristic broke." Post 4 sharpens it: for LLM-assisted writing specifically, the cost of evaluation went up because *the only thing that distinguishes insight from slop has been compressed out of the artifact you're evaluating.*
- This is a stronger claim than "develop your discrimination muscles." It's saying: the old shortcut isn't just broken, it's been replaced by a situation where no shortcut is possible *even in principle*. The reader has to evaluate the ideas in the text on their own merits. There is no cheaper path. There never will be one. The compression is irreversible.
- Which is, honestly, what evaluation should have always been. The pre-LLM heuristic was a labor-saving device, not a truth-tracking one. We're being forced to do the thing we should have been doing all along.

### What this means for the writer
- It also puts a particular kind of responsibility on the writer that pre-LLM writers didn't carry in quite the same way. The writer is the *only* person who can know whether their LLM-assisted piece contains real thinking or not. The reader can't verify it. The artifact doesn't carry that information.
- This is uncomfortable. It means the trust between writer and reader is now genuinely unverifiable in a way it used to merely be hard to verify. The Every.to writer who worried readers would assume her em-dashes meant she "didn't come from a place of care" had it right. There's no way to prove care happened. You can only do the work, ship the result, and hope the ideas hold up on their own.
- The pragmatic version: write with LLMs the way you'd want others to. Bring real thinking to the context. Disagree when something is wrong. Don't ship the first draft. The work you do in the hidden context is the only thing standing between your output and the slop pile, and nobody but you will ever know whether you did it.

### Close (the understated reveal)
- The ending should be casual and confident, not a dramatic reveal. Something in the register of "if you haven't guessed already, I used an LLM to help draft this series." The reader is smart; of course they've guessed. A series about LLM-assisted writing, on a developer's blog, in 2026? Treating it as obvious rather than confessional is the move.
- This tone models the confidence the series is arguing for. The author isn't confessing, isn't performing transparency. Just mentioning it because it's relevant and not shameful.
- One or two specific disagreements from the writing process can appear as concrete illustrations of the hidden context, but framed as illustrative rather than impressive. The tone is "yeah, this is how it works" not "look what I did."
- The reader has already evaluated the ideas across four posts. They've either found them worthwhile or they haven't. The casual mention of the process reinforces the Fluency Tax argument by demonstration: telling the reader the process doesn't change their verdict, and the author's comfort with that fact is the point.
- That's the cleanest possible landing for a series whose central argument is that readers now have to evaluate ideas on their own merits. The writer hands the reader the ideas and steps back.

---

## Open questions / things to decide before drafting

1. **The concrete example in post 3 may now be resolved by post 4.** If post 4 ends with the worked-example move (the series itself as the demonstration), post 3 doesn't need its own concrete example — the demonstration is just deferred. Alternatively, post 3 still gets an example and post 4's ending becomes a different move. Decide which is cleaner once a draft of post 4 exists.

2. **How explicitly to name the two camps in post 1.** Post 3 now does the heavy lifting on the dismissers-vs-commons-critics distinction, but post 1 might want a brief nod to the fact that the slop discourse contains multiple kinds of objection, not just multiple kinds of slop. A single sentence might be enough — "and we'll see in post 3 that the people complaining about slop aren't all complaining about the same thing." Or you can let post 1 stay focused on the output-level taxonomy and let post 3 spring the camps reframe as a surprise. Both work.

3. **Order of post 2's technical section.** Plain-language version first, technical version second. If the LinkedIn audience leans more technical than I'm assuming, you might want to flip them. Worth a gut check.

4. **How hard to lean on the recursive "perplexity is also a proxy" turn at the end of post 2.** It's the smartest thing in the technical post and it earns the bridge to post 3, but it adds a beat to a post already doing a lot of work. If post 2 starts feeling long, this is the section to compress, not cut.

5. **Whether to keep the free-will gesture in post 4.** It's currently flagged as optional. The author wants to keep it for now but isn't sure it'll survive final drafting. The post works without it; it's a rhetorical hook, not a structural pillar. Decide during drafting.

6. **The worked-example ending in post 4.** DECIDED: Use the understated, casual approach. "If you haven't guessed already..." rather than a dramatic reveal. Models the confidence the series argues for. Avoids self-congratulatory risk entirely.

7. **Titles.** The current working titles are descriptive (post 1 is now "We Need to Talk About Slop," which the author chose). The Fluency Tax phrase might want to surface in the title of post 3. Post 4 needs a working title — something like "The Hidden Context" or "Where the Ideas Come From" or just "How I Actually Write With an LLM." Decide once drafts exist.

8. **The em-dash material in post 1 is solidly supported.** Web research turned up extensive recent writing on the em-dash-as-AI-tell phenomenon (Washington Post, The Ringer, McSweeney's, Every.to, multiple Medium pieces). Readers will recognize it instantly. Use it as the main concrete example for syntactic-slop-as-dismissal-trigger.
