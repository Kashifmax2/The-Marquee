/* ===========================================================
   The Marquee, static build
   -----------------------------------------------------------
   Generates every page from the data in content.mjs.

     node build.mjs

   Output lands next to this file. No dependencies.
   =========================================================== */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTICLES } from "./content.mjs";

const OUT = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://the-marquee-indol.vercel.app";
const ISSUE = "Issue 04";
const DATE = "Wednesday 11 November 2026";

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" fill="#000000"/>' +
      '<path d="M11 48V16h8.4l12.6 18.4L44.6 16H53v32h-8.2V30.2L32 47.6 19.2 30.2V48z" fill="#00b4e6"/>' +
      "</svg>"
  );

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const byFile = (file) => ARTICLES.find((a) => a.file === file);

const KEYS = {
  film: "film.html",
  tv: "tv.html",
  reviews: "reviews.html",
  features: "features.html",
  about: "about.html"
};

const NAV = [
  ["film", "Film"],
  ["tv", "Television"],
  ["reviews", "Reviews"],
  ["features", "Features"],
  ["about", "About"]
];

function head({ title, desc, type = "website", jsonld = null, verify = false }) {
  return `<!doctype html>
<html lang="en">
<head>
${
  verify
    ? `<meta name="8456a5afda69844282de104441312d689ddfa44c" content="8456a5afda69844282de104441312d689ddfa44c" />
`
    : ""
}<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#000000">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="icon" href="${FAVICON}">
<link rel="apple-touch-icon" href="${FAVICON}">
<meta property="og:site_name" content="The Marquee">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">${
    jsonld
      ? `\n<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`
      : ""
  }
</head>`;
}

function header(active) {
  const nav = NAV.map(
    ([key, label]) =>
      `<a href="${KEYS[key]}"${
        active === key ? ' aria-current="page"' : ""
      }>${label}</a>`
  ).join("\n        ");

  return `<a class="skip" href="#main">Skip to content</a>
<header>
  <div class="utility">
    <div class="wrap utility__inner">
      <p class="utility__tag">Independent film &amp; television</p>
      <p class="utility__date">${DATE}</p>
      <div class="utility__links">
        <a href="about.html">About</a>
        <a href="advertise.html">Advertise</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </div>
  <div class="wrap nameplate">
    <p class="nameplate__side">Film, television<br>and the people who make them</p>
    <a class="wordmark" href="index.html">The Marquee</a>
    <p class="nameplate__side nameplate__side--end">${ISSUE}<br>November 2026</p>
  </div>
  <nav class="sections" aria-label="Sections">
    <div class="wrap sections__inner">
        ${nav}
        <a class="sections__cta" href="#newsletter">The newsletter</a>
    </div>
  </nav>
</header>`;
}

function footer() {
  const nav = (title, items) => `<nav aria-label="${title}">
      <h2>${title}</h2>
      <ul>
        ${items.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("\n        ")}
      </ul>
    </nav>`;

  return `<footer class="colophon">
  <div class="wrap colophon__grid">
    <div>
      <p class="colophon__mark">The Marquee</p>
      <p class="colophon__line">Film, television and the people who make them. An independent desk, published monthly.</p>
    </div>
    ${nav("Sections", [
      ["film.html", "Film"],
      ["tv.html", "Television"],
      ["reviews.html", "Reviews"],
      ["features.html", "Features &amp; craft"]
    ])}
    ${nav("The publication", [
      ["about.html", "About the desk"],
      ["about.html#standards", "Editorial standards"],
      ["advertise.html", "Advertise"],
      ["contact.html", "Contact"]
    ])}
    ${nav("Legal", [
      ["privacy.html", "Privacy"],
      ["privacy.html#cookies", "Cookies"],
      ["terms.html", "Terms of use"],
      ["contact.html#corrections", "Corrections"]
    ])}
    <p class="colophon__note">© 2026 The Marquee. All rights reserved. The Marquee is published independently and funded by advertising; paid placements are labelled and kept separate from editorial. Film and programme titles remain the property of their rights holders. The key art on this site is original typographic artwork commissioned by the desk, not studio material.</p>
  </div>
</footer>`;
}

/* Ad shell. Bands start hidden so an empty ads.js leaves no boxes behind. */

const adBand = (slot, size) => `<div class="ad" hidden>
      <div class="wrap ad__inner">
        <p class="ad__label">Advertisement</p>
        <div class="ad-slot" data-slot="${slot}" data-size="${size}"></div>
      </div>
    </div>`;

const railAd = (slot, size) => `<div class="ad" hidden>
        <div class="ad__inner">
          <div class="ad-slot" data-slot="${slot}" data-size="${size}"></div>
        </div>
      </div>`;

const adExtras = `<div class="ad-slot ad-slot-page" data-slot="native" aria-hidden="true"></div>
<div class="ad-slot ad-slot-page" data-slot="social" aria-hidden="true"></div>
<div class="ad-slot ad-slot-page" data-slot="pop" aria-hidden="true"></div>
<div class="anchor" id="anchor-ad" hidden>
  <button class="anchor__close" id="anchor-close" type="button" aria-label="Close advertisement">&#215;</button>
  <div class="anchor__inner">
    <div class="ad-slot" data-slot="anchor" data-size="anchor" id="anchor-slot"></div>
  </div>
</div>
<script src="ads.js"></script>
<script src="site.js"></script>`;

const newsletter = `<section class="newsletter" id="newsletter">
  <div class="wrap newsletter__inner">
    <div>
      <p class="kicker kicker--plain">The Marquee letter</p>
      <h2 class="newsletter__title">One email.<br>Every Friday.</h2>
      <p class="newsletter__dek">The week in film and television, one recommendation worth your evening, and the arguments we had in the office. No tracking pixels, no sponsored copy.</p>
    </div>
    <form data-endpoint="" data-fallback="Subscriptions open with our next issue. Write to letters@themarquee.example and we will add you by hand." novalidate>
      <label for="nl-email">Email address</label>
      <input id="nl-email" type="email" name="email" placeholder="you@example.com" autocomplete="email" required>
      <button type="submit">Sign up</button>
      <p class="form__status" data-form-status hidden></p>
    </form>
  </div>
</section>`;

/* ---------------------------------------------------------
   Cards
   --------------------------------------------------------- */

function art(a, extra = "", link = null) {
  const inner = `<span class="art__kicker">${a.kicker}</span><span class="art__title">${a.title}</span><span class="art__note">${a.note}</span>`;
  const cls = `art ${a.cls}${extra ? " " + extra : ""}`;
  return link
    ? `<a class="${cls}" href="${link}" tabindex="-1" aria-hidden="true">${inner}</a>`
    : `<div class="${cls}" aria-hidden="true">${inner}</div>`;
}

function card(a) {
  return `<article class="card">
        ${art(a.art, "", a.file)}
        <p class="kicker kicker--plain">${a.section}</p>
        <h3 class="card__title"><a href="${a.file}">${a.h1}</a></h3>
        <p class="card__dek">${a.desc}</p>
        <p class="card__meta">${a.byline} · ${a.read}</p>
      </article>`;
}

function brief(a) {
  return `<li>
          <p class="kicker kicker--plain">${a.section}</p>
          <h3><a href="${a.file}">${a.h1}</a></h3>
          <p class="byline">${a.byline} · ${a.date}</p>
        </li>`;
}

/* ---------------------------------------------------------
   Home
   --------------------------------------------------------- */

function pageHome() {
  const lead = byFile("parasite-review.html");

  const feed = [
    "in-the-mood-for-love-review.html",
    "spirited-away-review.html",
    "mad-max-fury-road-review.html",
    "aftersun-review.html",
    "heat-review.html",
    "the-bear-fishes.html"
  ]
    .map(byFile)
    .map(card)
    .join("\n        ");

  const latest = [
    "the-six-episode-season.html",
    "how-a-colour-grade-works.html",
    "the-ninety-minute-film.html",
    "succession-and-the-exit.html"
  ]
    .map(byFile)
    .map(brief)
    .join("\n        ");

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Marquee",
    description:
      "Film, television and the people who make them. Reviews, rewatches and reporting on the craft and business of the screen.",
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: "The Marquee",
      description:
        "An independent film and television publication funded by advertising."
    }
  };

  return `${head({
    title: "The Marquee — Film, television and the people who make them",
    desc: "Independent reviews, rewatches and reporting on film and television: the craft, the business and the arguments worth having.",
    jsonld,
    verify: true
  })}
<body>
${header("home")}

<main id="main">
  ${adBand("top", "leaderboard")}

  <div class="wrap">
    <div class="lead">
      <div class="lead__main">
        ${art(lead.art, "art--lead", lead.file)}
        <p class="kicker">${lead.kicker}</p>
        <h1 class="lead__title"><a href="${lead.file}">${lead.h1}</a></h1>
        <p class="lead__dek">${lead.desc}</p>
        <p class="byline">By ${lead.byline} · ${lead.date} · ${lead.read}</p>
      </div>
      <aside class="lead__rail" aria-label="The latest">
        <h2 class="rail__title">The latest</h2>
        <ul class="briefs">
        ${latest}
        </ul>
        ${railAd("side-1", "rectangle")}
      </aside>
    </div>
  </div>

  <section class="band">
    <div class="wrap">
      <div class="band-head">
        <h2>Latest reviews</h2>
        <a href="reviews.html">All reviews</a>
      </div>
      <div class="cards cards--3">
        ${feed}
      </div>
    </div>
  </section>

  ${adBand("inline-1", "rectangle")}

  <section class="band band--paper">
    <div class="wrap">
      <div class="band-head">
        <h2>Craft &amp; the business</h2>
        <a href="features.html">More features</a>
      </div>
      <div class="cards cards--2">
        ${card(byFile("how-a-colour-grade-works.html"))}
        ${card(byFile("the-ninety-minute-film.html"))}
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap">
      <div class="band-head">
        <h2>Television</h2>
        <a href="tv.html">All television</a>
      </div>
      <div class="cards cards--2">
        ${card(byFile("succession-and-the-exit.html"))}
        ${card(byFile("the-six-episode-season.html"))}
      </div>
    </div>
  </section>

  ${adBand("bottom", "leaderboard")}
</main>

${newsletter}
${footer()}

${adExtras}
</body>
</html>
`;
}

/* ---------------------------------------------------------
   Section pages
   --------------------------------------------------------- */

function sectionPage({ key, title, intro, files, eyebrow, note = "" }) {
  const items = files.map(byFile);
  const [first, ...rest] = items;

  const feature = `<div class="wrap">
    <div class="section-lead">
      ${art(first.art, "art--wide", first.file)}
      <div class="section-lead__body">
        <p class="kicker">${first.section} / ${first.kicker}</p>
        <h2><a href="${first.file}">${first.h1}</a></h2>
        <p class="section-lead__dek">${first.desc}</p>
        <p class="byline">By ${first.byline} · ${first.date} · ${first.read}</p>
      </div>
    </div>
  </div>`;

  return `${head({
    title: `${title} — The Marquee`,
    desc: intro
  })}
<body>
${header(key)}

<main id="main">
  ${adBand("top", "leaderboard")}

  <section class="section-hero">
    <div class="wrap">
      <p class="kicker">${eyebrow}</p>
      <h1>${esc(title)}</h1>
      <p class="section-hero__dek">${intro}</p>
    </div>
  </section>

  ${feature}

  ${adBand("inline-1", "rectangle")}

  <section class="band">
    <div class="wrap">
      <div class="cards cards--3">
        ${rest.map(card).join("\n        ")}
      </div>
      ${note ? `<p class="ad-note">${note}</p>` : ""}
    </div>
  </section>

  ${adBand("mid", "leaderboard")}
  ${adBand("bottom", "leaderboard")}
</main>

${newsletter}
${footer()}

${adExtras}
</body>
</html>
`;
}

/* ---------------------------------------------------------
   Article
   --------------------------------------------------------- */

function relatedFor(a, n = 3) {
  const same = ARTICLES.filter((x) => x !== a && x.section === a.section);
  const other = ARTICLES.filter((x) => x !== a && x.section !== a.section);
  return same.concat(other).slice(0, n);
}

function pageArticle(a) {
  const body = a.body.slice();
  const adBlock = `<div class="ad" hidden>
        <div class="ad__inner">
          <p class="ad__label">Advertisement</p>
          <div class="ad-slot" data-slot="inline-1" data-size="rectangle"></div>
        </div>
      </div>`;
  body.splice(Math.min(4, body.length), 0, adBlock);

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.h1,
    description: a.desc,
    datePublished: a.iso,
    dateModified: a.iso,
    articleSection: a.section,
    inLanguage: "en-GB",
    author: { "@type": "Person", name: a.byline },
    publisher: { "@type": "Organization", name: "The Marquee" }
  };

  const tags = a.tags
    .map((tag) => `<li><a href="reviews.html">${tag}</a></li>`)
    .join("\n          ");

  const related = relatedFor(a)
    .map((r) => `<li><a href="${r.file}">${r.h1}</a></li>`)
    .join("\n          ");

  return `${head({
    title: `${a.h1} — The Marquee`,
    desc: a.desc,
    type: "article",
    jsonld
  })}
<body>
${header(a.section === "TV" ? "tv" : a.section === "Craft" ? "features" : "film")}

<main id="main">
  ${adBand("top", "leaderboard")}

  <div class="wrap">
    <article>
      <header class="article-head">
        <p class="kicker">${a.section} / ${a.kicker}</p>
        <h1>${a.h1}</h1>
        <p class="article-head__stand">${a.stand}</p>
        <p class="byline">By ${a.byline} · ${a.date} · ${a.read}</p>
      </header>

      <div class="article-layout">
        <div class="article-body">
          <div class="article-art">
            ${art(a.art, "art--wide")}
          </div>
          <p class="caption">Key art: <em>${a.art.title}</em>. The Marquee commissions typographic artwork rather than reproducing studio stills.</p>

          ${body.join("\n          ")}

          ${
            a.score
              ? `<div class="score">
            <span class="score__value">${a.score}</span>
            <span class="score__label">${a.section === "TV" ? "Season rating" : "Rating"}<br>The Marquee, out of five</span>
          </div>`
              : ""
          }

          <ul class="tags" aria-label="Filed under">
          ${tags}
          </ul>
        </div>

        <aside class="rail" aria-label="More from the desk">
          <div>
            <h2 class="rail__head">More from the desk</h2>
            <ul class="related">
          ${related}
            </ul>
          </div>
          ${railAd("side-1", "rectangle")}
          ${railAd("side-2", "halfpage")}
        </aside>
      </div>
    </article>
  </div>

  ${adBand("bottom", "leaderboard")}
</main>

${newsletter}
${footer()}

${adExtras}
</body>
</html>
`;
}

/* ---------------------------------------------------------
   Standing pages
   --------------------------------------------------------- */

function pageSimple({ key, file, title, desc, eyebrow, h1, stand, body }) {
  return `${head({ title: `${title} — The Marquee`, desc })}
<body>
${header(key)}

<main id="main">
  ${adBand("top", "leaderboard")}

  <section class="section-hero">
    <div class="wrap">
      <p class="kicker">${eyebrow}</p>
      <h1>${h1}</h1>
      <p class="section-hero__dek">${stand}</p>
    </div>
  </section>

  <div class="wrap">
    <div class="article-layout article-layout--page">
      <div class="article-body">
        ${body}
      </div>
      <aside class="rail rail--page">
        <div class="rail__aside">
          <h2 class="rail__head">At a glance</h2>
          <ul class="related">
            <li><a href="about.html">About the desk</a></li>
            <li><a href="advertise.html">Advertise with us</a></li>
            <li><a href="privacy.html">Privacy and cookies</a></li>
            <li><a href="terms.html">Terms of use</a></li>
            <li><a href="contact.html">Contact and corrections</a></li>
          </ul>
        </div>
        ${railAd("side-1", "rectangle")}
      </aside>
    </div>
  </div>

  ${adBand("mid", "leaderboard")}
  ${adBand("bottom", "leaderboard")}
</main>

${newsletter}
${footer()}

${adExtras}
</body>
</html>
`;
}

const p = (t) => `<p>${t}</p>`;
const h2 = (t) => `<h2>${t}</h2>`;
const li = (t) => `<li>${t}</li>`;
const ul = (items) => `<ul>\n          ${items.map(li).join("\n          ")}\n        </ul>`;

/* ---------------------------------------------------------
   Page copy
   --------------------------------------------------------- */

const ABOUT_BODY = [
  h2("Who we are"),
  p(
    "The Marquee is an independent film and television publication. We publish reviews, rewatches and reported pieces about how the screen actually gets made: the running time, the colour grade, the season order, the money."
  ),
  p(
    "The desk is small by design. Four editors, a group of regular contributors and a rule that we only review what we have watched from beginning to end. That rule costs us screenings and it is the reason readers trust the scores."
  ),
  p(
    "We started in 2023 because the conversation about film and television had split into two rooms: one full of release-date news, the other full of academic jargon. We wanted a third room, with better lighting, where a person who loves <em>Heat</em> can also read about how a colourist finishes a shot."
  ),
  h2("How we are funded"),
  p(
    "The Marquee is funded by advertising. Display placements are sold directly and through advertising partners, and every paid placement on the site is labelled and visually separated from editorial."
  ),
  p(
    "Advertisers have no input into what we cover, how we score a film, or which shows we choose to write about. If a commercial partner appears in a piece, that relationship is disclosed in the piece itself. We do not publish sponsored reviews, and we do not sell placement inside an article's body copy."
  ),
  `<h2 id="standards">Editorial standards</h2>`,
  p(
    "Reviews are written after a full viewing. Where a piece discusses a twist or an ending, we say so before the spoiler. Scores are given out of five and are awarded on craft, not on budget or marketing."
  ),
  p(
    "We publish corrections rather than quietly editing. If we get a fact wrong, the correction is appended to the piece with the date. Contact details for corrections are on the <a href=\"contact.html#corrections\">contact page</a>."
  ),
  p(
    "Quotes are checked against recordings or transcripts. Where we could not obtain a recording, the piece says how the quote was sourced. We do not use unattributed quotes to make a story feel bigger."
  ),
  h2("The desk"),
  `<ul class="people">
          <li><strong>Mara Ellison</strong><span>Editor</span></li>
          <li><strong>Nadia Okonjo</strong><span>Deputy editor, craft</span></li>
          <li><strong>Dev Shah</strong><span>Film editor</span></li>
          <li><strong>Jonas Reed</strong><span>Television editor</span></li>
        </ul>`,
  p(
    "The Marquee is published from the United Kingdom and read wherever the internet reaches. Our correspondence address and editorial inbox are listed on the contact page."
  ),
  h2("Artwork"),
  p(
    "We do not reproduce film stills or poster art. Every image on this site is typographic artwork drawn by the desk, which keeps the page fast, the licensing clean and the focus on the writing."
  )
].join("\n        ");

const ADVERTISE_BODY = [
  p(
    "The Marquee reaches readers who finish things: people who watch a film to the credits, argue about a season order and read a 2,000-word piece about colour grading on a phone. They are an engaged audience for streaming services, cinema releases, festivals, books, audio and consumer technology."
  ),
  h2("Who reads us"),
  p(
    "Our readers are concentrated in the UK, the United States, Canada and Australia, with a long tail across Europe and South Asia. They arrive from search, from newsletters and from other readers sending them a link, which is the only traffic we particularly care about."
  ),
  p(
    "We do not publish inflated audience numbers. If you need current monthly figures, sessions by territory and viewability data for a campaign, ask and we will send the export from our advertising partners."
  ),
  h2("Formats"),
  `<ul class="formats">
          <li><strong>Leaderboard</strong><span>728 × 90, above the fold and between sections.</span></li>
          <li><strong>Medium rectangle</strong><span>300 × 250, in the article rail.</span></li>
          <li><strong>Half page</strong><span>160 × 600, rail, long-form pages.</span></li>
          <li><strong>Mobile banner</strong><span>320 × 50, sticky anchor, dismissible.</span></li>
        </ul>`,
  p(
    "Display inventory is sold on a monthly flight. Native and newsletter placements are booked separately and are always labelled. We do not accept pop-ups that cover the article, auto-playing audio, or creative that impersonates editorial."
  ),
  h2("How booking works"),
  p(
    "Send the campaign dates, the formats you want and the creative to <a href=\"contact.html\">the advertising desk</a>. We will confirm availability within two working days, and we need finished creative three working days before the flight starts."
  ),
  p(
    "We check every creative against our own standards before it runs: no misleading claims, no auto-download, no fake close buttons. If a creative is rejected we will say why and hold the slot while you replace it."
  ),
  h2("What we will not run"),
  p(
    "We do not run advertising for tobacco, unlicensed gambling, counterfeit goods, or anything that promises a financial return. We also decline political advertising. These rules apply to every partner, including programmatic."
  ),
  h2("Contact"),
  p(
    "Advertising: <a href=\"mailto:ads@themarquee.example\">ads@themarquee.example</a>. For everything else, use the <a href=\"contact.html\">contact page</a>."
  )
].join("\n        ");

const PRIVACY_BODY = [
  p(
    "This page explains what The Marquee collects, why, and what you can do about it. It is written to be read, not to be survived."
  ),
  h2("What we collect"),
  p(
    "We do not run a third-party analytics package and we do not build reader profiles. Our host records standard server logs, including your IP address, the page requested and your browser's user agent. Those logs exist to keep the site online and to spot abuse, and they are retained for a short period before being deleted."
  ),
  p(
    "If you email us, we keep the message and your address so that we can reply. If you sign up to the newsletter, we keep the address you gave us until you ask us to remove it."
  ),
  h2("Cookies"),
  `<h3 id="cookies">Cookies and advertising</h3>`,
  p(
    "The Marquee itself does not set advertising cookies. Advertising on this site is delivered by third-party ad networks and their partners. Those companies may set cookies or use similar technologies to measure impressions, limit how often you see the same creative, and, where you have consented, personalise advertising."
  ),
  p(
    "We do not control those cookies and we do not receive the personal data they collect. You can opt out of personalised advertising from many networks through <a href=\"https://www.youronlinechoices.com\" rel=\"nofollow noopener\" target=\"_blank\">Your Online Choices</a> in the UK and EU, or <a href=\"https://optout.aboutads.info\" rel=\"nofollow noopener\" target=\"_blank\">About Ads</a> in the United States. Blocking cookies does not stop advertising appearing; it stops it being personalised."
  ),
  p(
    "Your browser also lets you block third-party cookies entirely, and most browsers now offer a tracking-prevention setting. The site works without advertising cookies."
  ),
  h2("Fonts and third parties"),
  p(
    "We load typefaces from Google Fonts. That request shares your IP address with Google. If you prefer to avoid it, the site remains readable with your system fonts."
  ),
  p(
    "Advertising partners receive the page URL, your approximate location derived from your IP address, and technical information about your device. We do not pass them your name or email address. Some formats also open a new tab when you click a link; that tab is served by the partner and stays outside our control."
  ),
  h2("Your rights"),
  p(
    "Depending on where you live, you may have the right to ask what personal data we hold about you, to have it corrected or deleted, and to object to processing. Write to <a href=\"mailto:privacy@themarquee.example\">privacy@themarquee.example</a> and we will respond within the period the law requires."
  ),
  p(
    "If you are in the UK or EU and are not satisfied with our response, you can complain to your national data protection authority."
  ),
  h2("Children"),
  p(
    "The Marquee is not directed at children and we do not knowingly collect their personal data. If you believe a child has sent us personal information, contact us and we will delete it."
  ),
  h2("Changes"),
  p(
    "If this policy changes in a way that affects you, we will note the change at the top of this page with the date. Last updated 11 November 2026."
  )
].join("\n        ");

const TERMS_BODY = [
  p(
    "By using The Marquee you agree to these terms. They are deliberately short."
  ),
  h2("Our content"),
  p(
    "Everything we publish, including text, typographic artwork and page design, belongs to The Marquee or is used with permission. You may quote a short extract with a link back and credit. You may not republish a piece in full, scrape the site to train a model, or present our work as yours."
  ),
  h2("Reviews and opinion"),
  p(
    "Our reviews are opinion, offered in good faith after a full viewing. Scores are editorial judgements, not statements of fact. We are not liable if you disagree, or if you rent a film on our recommendation and dislike it."
  ),
  h2("Third-party links and advertising"),
  p(
    "We link to other sites and we display advertising sold by third parties. We are not responsible for the content, products or privacy practices of those sites. A paid placement is labelled; the presence of an advertisement is not an endorsement."
  ),
  p(
    "Some advertising formats open a new browser tab when you click on this site. Those tabs are served by our advertising partners and are outside our control. Closing one does not affect the page you were reading."
  ),
  h2("Availability"),
  p(
    "We try to keep the site online and accurate, but we do not promise uninterrupted access. We may change, archive or remove material at any time. Where a piece is corrected, we say so in the piece."
  ),
  h2("Liability"),
  p(
    "To the extent the law allows, The Marquee is not liable for indirect or consequential loss arising from your use of the site. Nothing in these terms limits liability that cannot be limited by law, including for fraud or death or personal injury caused by negligence."
  ),
  h2("Governing law"),
  p(
    "These terms are governed by the law of England and Wales. If you are a consumer, you keep the protections of the law in the country where you live."
  ),
  h2("Contact"),
  p(
    "Questions about these terms: <a href=\"mailto:legal@themarquee.example\">legal@themarquee.example</a>. Last updated 11 November 2026."
  )
].join("\n        ");

const CONTACT_BODY = [
  p(
    "One inbox, read by a person. We answer story tips, corrections and advertising enquiries, usually within two working days."
  ),
  h2("Where to write"),
  ul([
    "Editorial and story tips: <a href=\"mailto:desk@themarquee.example\">desk@themarquee.example</a>",
    "Corrections: <a href=\"mailto:corrections@themarquee.example\">corrections@themarquee.example</a>",
    "Advertising and partnerships: <a href=\"mailto:ads@themarquee.example\">ads@themarquee.example</a>",
    "Privacy requests: <a href=\"mailto:privacy@themarquee.example\">privacy@themarquee.example</a>"
  ]),
  h2("Send a message"),
  p(
    "The form below is for readers who would rather not open a mail client. Include a link if you are writing about a specific piece."
  ),
  `<form class="form" data-endpoint="" data-fallback="Our form is between mail systems this week. Please email desk@themarquee.example and we will pick it up there." novalidate>
          <div class="field">
            <label for="c-name">Name</label>
            <input id="c-name" name="name" type="text" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="c-email">Email</label>
            <input id="c-email" name="email" type="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="c-topic">What is this about</label>
            <select id="c-topic" name="topic">
              <option>Story tip</option>
              <option>Correction</option>
              <option>Advertising</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="field">
            <label for="c-message">Message</label>
            <textarea id="c-message" name="message" required></textarea>
          </div>
          <p class="form__note">We keep messages only as long as it takes to answer them. See the <a href="privacy.html">privacy page</a>.</p>
          <button type="submit">Send</button>
          <p class="form__status" data-form-status hidden></p>
        </form>`,
  `<h2 id="corrections">Corrections</h2>`,
  p(
    "We correct errors in the piece, at the bottom, with the date. If a correction changes the argument rather than a detail, we say that too. Send the piece, the sentence and the source to <a href=\"mailto:corrections@themarquee.example\">corrections@themarquee.example</a>."
  ),
  p(
    "The Marquee is published from the United Kingdom. Postal address available on request for legal correspondence."
  )
].join("\n        ");

/* ---------------------------------------------------------
   Write
   --------------------------------------------------------- */

const pages = [
  ["index.html", pageHome()],
  [
    "film.html",
    sectionPage({
      key: "film",
      title: "Film",
      eyebrow: "The film desk",
      intro:
        "Reviews, rewatches and the craft of the feature. We write about films that repay a second look, and about the people who build them: the editor, the colourist, the producer who found the money.",
      files: [
        "parasite-review.html",
        "in-the-mood-for-love-review.html",
        "spirited-away-review.html",
        "mad-max-fury-road-review.html",
        "aftersun-review.html",
        "heat-review.html",
        "the-ninety-minute-film.html"
      ],
      note: "Scores are out of five and are given only to films watched to the end."
    })
  ],
  [
    "tv.html",
    sectionPage({
      key: "tv",
      title: "Television",
      eyebrow: "The television desk",
      intro:
        "Seasons, rooms and finales. How television is written, ordered, paid for and remembered, from the six-episode drama to the dinner that goes wrong.",
      files: [
        "the-six-episode-season.html",
        "succession-and-the-exit.html",
        "the-bear-fishes.html"
      ]
    })
  ],
  [
    "reviews.html",
    sectionPage({
      key: "reviews",
      title: "Reviews",
      eyebrow: "Every review",
      intro:
        "Everything we have scored, in one place. We review only what we have watched from beginning to end, and we tell you when a piece gives away an ending.",
      files: [
        "parasite-review.html",
        "in-the-mood-for-love-review.html",
        "spirited-away-review.html",
        "mad-max-fury-road-review.html",
        "aftersun-review.html",
        "heat-review.html"
      ],
      note: "Scores are out of five. They are editorial judgements, not statements of fact."
    })
  ],
  [
    "features.html",
    sectionPage({
      key: "features",
      title: "Features & craft",
      eyebrow: "Longer reads",
      intro:
        "Running times, colour grades, season orders and the money underneath them. Reporting on how the work gets made, and why it looks the way it does.",
      files: [
        "the-ninety-minute-film.html",
        "how-a-colour-grade-works.html",
        "the-six-episode-season.html"
      ]
    })
  ],
  [
    "about.html",
    pageSimple({
      key: "about",
      file: "about.html",
      title: "About the desk",
      desc: "The Marquee is an independent film and television publication funded by advertising, with no advertiser input into editorial.",
      eyebrow: "The publication",
      h1: "About the desk",
      stand:
        "An independent film and television publication, funded by advertising, edited by people who watch to the end of the credits.",
      body: ABOUT_BODY
    })
  ],
  [
    "advertise.html",
    pageSimple({
      key: "advertise",
      file: "advertise.html",
      title: "Advertise",
      desc: "Display, native and newsletter placements on The Marquee, an independent film and television publication.",
      eyebrow: "Media kit",
      h1: "Advertise with us",
      stand:
        "An engaged audience for cinema, streaming, festivals, books and technology, in a clean editorial environment.",
      body: ADVERTISE_BODY
    })
  ],
  [
    "privacy.html",
    pageSimple({
      key: "privacy",
      file: "privacy.html",
      title: "Privacy and cookies",
      desc: "What The Marquee collects, how advertising cookies work on this site, and the choices available to readers.",
      eyebrow: "Legal",
      h1: "Privacy &amp; cookies",
      stand:
        "What we collect, why we collect it, and how to turn off personalised advertising.",
      body: PRIVACY_BODY
    })
  ],
  [
    "terms.html",
    pageSimple({
      key: "terms",
      file: "terms.html",
      title: "Terms of use",
      desc: "The terms that apply when you read The Marquee, including content use, advertising and liability.",
      eyebrow: "Legal",
      h1: "Terms of use",
      stand: "Short, plain and governing your use of this site.",
      body: TERMS_BODY
    })
  ],
  [
    "contact.html",
    pageSimple({
      key: "contact",
      file: "contact.html",
      title: "Contact",
      desc: "Contact the editors of The Marquee: story tips, corrections, advertising and privacy requests.",
      eyebrow: "The desk",
      h1: "Contact",
      stand:
        "Story tips, corrections, advertising and privacy requests, all read by a person.",
      body: CONTACT_BODY
    })
  ]
];

for (const a of ARTICLES) {
  pages.push([a.file, pageArticle(a)]);
}

for (const [file, html] of pages) {
  const url = SITE_URL + "/" + (file === "index.html" ? "" : file);
  const withUrl = html.replace(
    '<meta property="og:site_name" content="The Marquee">',
    '<meta property="og:site_name" content="The Marquee">\n' +
      `<meta property="og:url" content="${url}">\n` +
      `<link rel="canonical" href="${url}">`
  );
  writeFileSync(join(OUT, file), withUrl, "utf8");
}

writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(([file]) => {
    const url = SITE_URL + "/" + (file === "index.html" ? "" : file);
    return `  <url><loc>${url}</loc></url>`;
  })
  .join("\n")}
</urlset>
`,
  "utf8"
);

writeFileSync(
  join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  "utf8"
);

console.log(`Wrote ${pages.length} pages to ${OUT}`);
