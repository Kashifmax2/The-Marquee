/* ===========================================================
   The Marquee, ad codes
   -----------------------------------------------------------
   One key per slot. Paste the network snippet between the
   backticks. Anything left empty is removed from the page:
   no empty boxes, no console errors.

   Display sizes already wired in site.js:
     leaderboard  728 x 90
     rectangle    300 x 250
     halfpage     160 x 600
     wide         468 x 60
     anchor       728 x 90 (sticky, mobile scales it down)

   Keys without a size in the markup (native, social) are page
   level formats: they are injected once, directly into the
   document, because they position themselves.
   =========================================================== */

window.AD_CODES = {
  /* Leaderboards. No 728x90 creative supplied yet. */
  "top": ``,
  "mid": ``,
  "bottom": ``,

  /* 300x250 banner, article rail and home rail. */
  "side-1": `<script>
(function(nokzd){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = nokzd || {};
s.src = "\/\/conventionalresponse.com\/b_XAVCsYd.GblX0\/YRWCcj\/Velmm9\/uPZwUxluk\/PCTqcy2-MFTRY\/1LM\/DrUCtdN\/zOYHxGNqjjUuwnOEQv";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`,

  /* 300x250 MultiTag banner, top of the rail and section pages. */
  "inline-1": `<script>
(function(noewh){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = noewh || {};
s.src = "\/\/conventionalresponse.com\/bLX.VasDdQGMlu0\/YMW-cQ\/YeLmp9WuVZ\/U-lSkFPvTjc\/2eMwTIYO1BMUD\/UjtONRz\/YPxcNbj\/Upw\/OAQk";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`,

  /* 160x600 half page. Empty. */
  "side-2": ``,

  /* Sticky anchor. Empty. */
  "anchor": ``,

  /* In-page push. */
  "native": `<script>
(function(hrysk){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = hrysk || {};
s.src = "\/\/conventionalresponse.com\/bIXAV.s\/dpGulS0kY_Weck\/Peqm-9\/uMZzUAlGkFP\/T\/cC2MMUTaY\/1AMtzKc_ttNJzNYpxxN\/jPUe0yM\/QW";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`,

  /* Video slider. */
  "social": `<script>
(function(umxk){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = umxk || {};
s.src = "\/\/conventionalresponse.com\/bBX.VjsZdeGrls0xYoW\/co\/PevmI9\/uWZvUflyk\/P\/TicE2aMlTPYk1gNlTUMTtlNdzPY\/xUNMj-Um1JNHwo";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})
</script>`,

  /* Popunder. Loads the network's own initialiser, which carries the
     full placement config and opens at most five tabs an hour. The
     script is skipped on file:// pages so local previews stay quiet. */
  "pop": `<script src="https://sneakyseries.com/c-Do9-6Db.2Y5/lSSxWYQg9oN/ztY/xSNYj/U-ynM/SG0j3ONjjhEn2/NATJIq1T" async referrerpolicy="no-referrer-when-downgrade"></script>`
};

/* Loader options. Keep anchor true once the anchor code is filled. */
window.ADS_CONFIG = {
  lazyLoad: true,
  anchor: true,

  /* Set false to hold the popunder back without touching its code. */
  popunder: true,

  /* Direct link, for campaigns that need a URL rather than a snippet.
     Not loaded on the site itself. */
  directLink:
    "https://elementarywhole.com/CUomYk",

  /* Popunder landing URL, kept for reference only. The live format
     loads the network script in the "pop" slot above; a bare URL can
     only open a visible tab, so it is not used by the loader. */
  popunderUrl:
    "https://elementarywhole.com/bP3DVR0.P/3mp/vebSmeVlJ/Z/Dt0b3/NCjkEh2oN/TjIIxwLbT/c_2/MpTCYk1cMajmUI"
};
