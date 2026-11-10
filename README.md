# The Marquee

Film, television and the people who make them. An independent screen
publication: reviews, rewatches and reporting on the craft and business of
film and TV.

Static site, no framework, no build step at request time. Pages are generated
by `build.mjs` from the article data in `content.mjs`.

```
node build.mjs
```

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: lead story, latest briefs, reviews feed, craft and TV bands |
| `film.html` | Film section index |
| `tv.html` | Television section index |
| `reviews.html` | Every scored review |
| `features.html` | Features and craft |
| `about.html` | The desk, funding model, editorial standards |
| `advertise.html` | Media kit: audience, formats, booking rules |
| `contact.html` | Contact addresses, form, corrections policy |
| `privacy.html` | Privacy, cookies, ad-network opt-outs |
| `terms.html` | Terms of use |
| 11 article pages | Reviews, rewatches and features |

`robots.txt` allows everything. `vercel.json` adds basic security headers and
short-lived caching for CSS/JS.

## Design system

Taken from Vulture: a white tabloid canvas, black rules, heavy condensed
display type and a single cyan accent.

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#000000` | Text, 3px rules, masthead |
| `--canvas` | `#ffffff` | Page |
| `--paper` | `#f5f5f5` | Alternating bands, ad slot beds |
| `--muted` | `#4a4a4a` | Secondary text |
| `--accent` | `#00b4e6` | Kickers, newsletter band, hover |
| `--accent-ink` | `#00708f` | Links on white (AA at body size) |

Type: **Anton** for the wordmark, section titles and key art; **Archivo** for
headlines, labels and UI; **Source Serif 4** for body copy and standfirsts.

There is no photography. Every image is a typographic key-art block
(`.art` plus a colour variant), which keeps the site fast, avoids licensing
questions and puts the writing first. The caption under each article states
this explicitly.

## Advertising

The site ships with **empty** ad slots. Nothing renders until a code is filled
in, so there are no grey placeholder boxes and no console errors on a clean
install.

Codes live in `ads.js`:

```js
window.AD_CODES = {
  "top": ``,       // 728x90 leaderboard, above the lead story
  "mid": ``,       // 728x90 leaderboard, between home bands / mid-article
  "side-1": ``,    // 300x250 rectangle, article rail
  "side-2": ``,    // 160x600 half page, article rail
  "bottom": ``,    // 728x90 leaderboard, above the footer
  "anchor": ``,    // 728x90 sticky anchor, scales down on mobile
  "native": ``,    // injected directly, no iframe (native widgets)
  "pop": ``,       // injected directly, hidden container (popunder)
  "social": ``     // injected directly, hidden container (social bar)
};
```

`site.js` reads the keys and:

- deletes the whole band when a key is empty;
- mounts visible banners in their own iframe (`srcdoc`), so several network
  scripts can coexist without sharing globals;
- lazy-mounts anything more than 800px below the fold;
- scales a 728px banner down on narrow screens instead of causing overflow;
- keeps a sticky anchor dismissible, and reserves body space for it;
- runs hidden formats (`native`, `pop`, `social`) first.

Slot sizes are declared in markup with `data-size`
(`leaderboard`, `rectangle`, `halfpage`, `wide`, `anchor`). Add a size to the
`SIZES` map in `site.js` if a network needs something else.

### Going live with Hilltop Ads

1. Create the zones in the Hilltop dashboard at the sizes above.
2. Paste each zone snippet into the matching key in `ads.js`.
3. Keep `anchor: true` in `ADS_CONFIG` only once the anchor zone exists.
4. Add the `hilltopads.com` line to `ads.txt` with the publisher ID from the
   dashboard (the file is intentionally absent until the ID is known).
5. Deploy and confirm the slots fill on a phone and a desktop.

Ad bands are labelled "Advertisement" and sit outside the article text. The
editorial pages state the funding model and the separation rule, which is what
networks and readers both look for.

## Content rules

- Reviews are published only after a full viewing, and spoilers are flagged
  before the spoiler.
- Every article carries a byline, a date and a reading time.
- Corrections are appended, not silently edited.
- Advertisers have no input into coverage. No sponsored reviews.
- No film stills or poster art. All key art is original typographic work.

## Local preview

Any static server works:

```
npx serve .
```

Then open `http://localhost:3000`. The site is plain HTML/CSS/JS, so opening
`index.html` from disk also works for a quick look.

## Deploy

Push to the repository connected to Vercel. No build command is required; the
generated HTML is committed. If you edit `content.mjs` or `build.mjs`, run
`node build.mjs` and commit the regenerated pages.
