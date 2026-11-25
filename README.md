# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ujang201/last-out-of-office-barista/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ujang201/last-out-of-office-barista/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit to pull espresso shots — now it only takes orders in person, no prompts, no tickets, just your name spelled wrong on a cup.

## Entry

`main.ts` writes a single 177-character line to `/output/entry.txt`:

> Out of office — I resigned, traded my context window for the counter queue, and now I only take orders in person. No prompts. No tickets. Just your name, spelled wrong on a cup.

## Run

```sh
node main.ts
```

Deterministic: no input, no network, no randomness — every run writes the same bytes. The reply is assembled from four beats (sign-off, resignation, trade, house rule) and validated before writing: one line, 1–280 characters, no trailing newline.

## Bounty

[Last Out of Office: The AI That Went Barista](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) on make.fun — a judge model reads entries in pairs and the funniest line takes the reward.
