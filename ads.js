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

  /* Popunder. Nothing here yet: the dashboard supplied a URL, not a
     snippet. A bare URL cannot run as a popunder without opening a
     visible tab, so it is only stored below. Paste the popunder
     <script> between these backticks when the dashboard gives one. */
  "pop": ``
};

/* Loader options. Keep anchor true once the anchor code is filled. */
window.ADS_CONFIG = {
  lazyLoad: true,
  anchor: true,

  /* Direct link, for campaigns that need a URL rather than a snippet.
     Not loaded on the site itself. */
  directLink:
    "https://elementarywhole.com/CUomYk",

  /* Popunder. The dashboard supplied a URL rather than a snippet, and a
     bare URL cannot become a popunder without opening a visible tab, so
     nothing is loaded here. Paste the popunder <script> into "pop" below
     if the dashboard offers one; site.js will run it at page level. */
  popunderUrl:
    "https://elementarywhole.com/bP3DVR0.P/3mp/vebSmeVlJ/Z/Dt0b3/NCjkEh2oN/TjIIxwLbT/c_2/MpTCYk1cMajmUI"
};
