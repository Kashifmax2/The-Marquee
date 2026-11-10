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

   Keys without a size in the markup (native, pop, social) are
   injected directly, for networks that must run their script in
   the page itself.
   =========================================================== */

window.AD_CODES = {
  "top": ``,
  "mid": ``,
  "side-1": ``,
  "side-2": ``,
  "bottom": ``,
  "anchor": ``,
  "native": ``,
  "pop": ``,
  "social": ``
};

/* Loader options. Keep anchor true once the anchor code is filled. */
window.ADS_CONFIG = {
  lazyLoad: true,
  anchor: true
};
