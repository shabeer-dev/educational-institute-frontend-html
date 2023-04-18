function setREVStartSize(e) {
  //window.requestAnimationFrame(function() {
  window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
  window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
  try {
    var pw = document.getElementById(e.c).parentNode.offsetWidth,
      newh;
    pw =
      pw === 0 || isNaN(pw) || e.l == "fullwidth" || e.layout == "fullwidth"
        ? window.RSIW
        : pw;
    e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
    e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
    e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
    e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
    e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
    e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
    e.mh =
      e.mh === undefined || e.mh == "" || e.mh === "auto"
        ? 0
        : parseInt(e.mh, 0);
    if (e.layout === "fullscreen" || e.l === "fullscreen")
      newh = Math.max(e.mh, window.RSIH);
    else {
      e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
      for (var i in e.rl)
        if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
      e.gh =
        e.el === undefined ||
        e.el === "" ||
        (Array.isArray(e.el) && e.el.length == 0)
          ? e.gh
          : e.el;
      e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
      for (var i in e.rl)
        if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

      var nl = new Array(e.rl.length),
        ix = 0,
        sl;
      e.tabw = e.tabhide >= pw ? 0 : e.tabw;
      e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
      e.tabh = e.tabhide >= pw ? 0 : e.tabh;
      e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
      for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
      sl = nl[0];
      for (var i in nl)
        if (sl > nl[i] && nl[i] > 0) {
          sl = nl[i];
          ix = i;
        }
      var m =
        pw > e.gw[ix] + e.tabw + e.thumbw
          ? 1
          : (pw - (e.tabw + e.thumbw)) / e.gw[ix];
      newh = e.gh[ix] * m + (e.tabh + e.thumbh);
    }
    var el = document.getElementById(e.c);
    if (el !== null && el) el.style.height = newh + "px";
    el = document.getElementById(e.c + "_wrapper");
    if (el !== null && el) {
      el.style.height = newh + "px";
      el.style.display = "block";
    }
  } catch (e) {
    console.log("Failure at Presize of Slider:" + e);
  }
  //});
}

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("set", "linker", { domains: ["irez.in"] });
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "UA-109996091-1", { anonymize_ip: true });
gtag("config", "G-BGN3Z34040");

if (typeof ajaxurl === "undefined") {
  /* <![CDATA[ */
  var ajaxurl = "wp-admin/admin-ajax.html";
  /* ]]> */
}

/* <![CDATA[ */
var userSettings = { url: "/", uid: "0", time: "1676961398", secure: "1" };
/* ]]> */

if (!window._buttonizer) {
  window._buttonizer = {};
}
var _buttonizer_page_data = { language: "en" };
window._buttonizer.data = {
  ..._buttonizer_page_data,
  ...window._buttonizer.data,
};

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-BGN3Z34040");
function tc_insert_internal_css(css) {
  var tc_style = document.createElement("style");
  tc_style.type = "text/css";
  tc_style.setAttribute("data-type", "tc-internal-css");
  var tc_style_content = document.createTextNode(css);
  tc_style.appendChild(tc_style_content);
  document.head.appendChild(tc_style);
}
