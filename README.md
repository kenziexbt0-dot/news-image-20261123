# The World Today — Monday 23 November 2026

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/kenziexbt0-dot/news-image-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/kenziexbt0-dot/news-image-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

Entry for the make.fun bounty
[news-image-20261123](https://make.fun/c/news-image-20261123) — sum up
Monday 23 November 2026's world news in one image.

Referral: [make.fun/r/2e09z4yn](https://make.fun/r/2e09z4yn)

## The day in one picture

A one-page newspaper front page, drawn entirely by code (Python + PIL,
`draw.py`) — no photographs. Six stories, verified against Reuters,
Associated Press, CNN, The Wall Street Journal, The Guardian and
Al Jazeera on 23 November 2026:

1. **COP31 collapses** — UN climate talks in Antalya end with no deal;
   the final text named no fossil fuels. Longest COP ever; first summit
   without a deal since Copenhagen 2009.
2. **Democrats take a historic House** — at least 258 seats, the biggest
   majority since 1992; Chuck Hubbard ousts Rep. Virginia Foxx in North
   Carolina; the party gains 44 seats.
3. **Russian ships hit far from Ukraine** — a corvette is struck at
   Benghazi, Libya, in a suspected Ukrainian drone attack, and the cargo
   ship Sparta II still burns off Finland.
4. **Factory fire in Indonesia** — at least 3 dead and 36 workers missing
   after a blaze at the Milkita candy factory in Banten.
5. **Gulf war widens** — Iran claims strikes on US Patriot radars at bases
   in Bahrain; a Houthi missile is intercepted over western Saudi Arabia.
6. **Minister quits over AI exam cheating** — South Korea's education
   chief Choi Kyo-jin resigns after 111 cheating cases in the college
   entrance exam.

Plus an "Also in the news" strip: Nepal PM Balendra Shah's talks with
PM Modi in New Delhi, Liverpool beating Manchester United, and India's
record 720/9 declared in the Wellington Test.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` and verifies the copy byte for byte,
so both grader runs write identical bytes. Regenerate the image with:

```sh
python3 draw.py entry.png
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT. Copyright (c) 2026 kenziexbt0-dot.
