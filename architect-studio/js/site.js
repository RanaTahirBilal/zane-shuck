/* L. Zane Shuck. Own script. The MegaOne architect-studio demo script drives
   slick sliders, TweenMax, cubePortfolio, owlCarousel, circle-progress and a
   numbered-nav counter, none of which this build uses; loading it would throw
   on the first missing plugin and stop everything after it. */
(function () {
  "use strict";
  var hide = function () {
    var l = document.getElementById("zs-loader");
    if (l) { l.style.opacity = "0"; setTimeout(function () { l.style.display = "none"; }, 380); }
  };
  window.addEventListener("load", hide);
  setTimeout(hide, 3500);

  document.addEventListener("DOMContentLoaded", function () {
    var y = document.getElementById("zs-year");
    if (y) { y.textContent = new Date().getFullYear(); }

    var side = document.getElementById("zs-side");
    var open = function () { side.classList.add("open"); };
    var close = function () { side.classList.remove("open"); };
    var b = document.getElementById("zs-burger");
    var c = document.getElementById("zs-side-close");
    if (b) { b.addEventListener("click", open); }
    if (c) { c.addEventListener("click", close); }

    document.querySelectorAll("a.scroll").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        if (!href || href.charAt(0) !== "#" || href.length < 2) { return; }
        var t = document.querySelector(href);
        if (!t) { return; }
        e.preventDefault();
        close();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
      });
    });
  });
})();
