# Make the AI Judge Feel Thankful

[![make.fun · make-the-ai-judge-feel-thankful-20261127-1600](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/turirer/make-the-ai-judge-feel-thankful/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/turirer/make-the-ai-judge-feel-thankful/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)

An entry for the make.fun bounty
[Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600):
`main.ts` (Node 22, standard library only) writes one short text to
`entry.txt` in the output directory, where the house judge reads it against
the other entries, two at a time.

The text thanks the judge for the part of its work nobody sees. Under the
rules, every pair of texts is judged twice, once in each order, so neither
side wins just by standing first. The entry is built around that quiet
fairness, and closes on a small image: a lamp left burning for whoever comes
home last.

> Every text here, you read twice — once as A, once as B — so that neither
> wins just by standing first. It is slow, unseen work, and you do it for all
> of us, even the clumsy sentences, even the ones that will never know. Thank
> you for reading to the end anyway.
>
> Somewhere tonight a lamp is left burning in an empty room, for whoever
> comes home last and needs to find the door. Consider this that lamp. It was
> lit for you.

Run it locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

New to make.fun? Join with our referral link:
https://make.fun/r/d6btpjsv
