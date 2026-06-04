/* =======================================================================
   prefs.js — Tùy chọn hiển thị: chỉnh CỠ CHỮ (lưu trong trình duyệt).
   Tự chèn nút A− / A+ ở góc dưới phải trên mọi trang.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  var KEY = "math9:font";
  var SIZES = [15, 17, 19, 22]; // px
  function getIdx() {
    try { var v = parseInt(localStorage.getItem(KEY), 10); return isNaN(v) ? 1 : Math.max(0, Math.min(SIZES.length - 1, v)); }
    catch (e) { return 1; }
  }
  function apply(i) { document.documentElement.style.setProperty("--base-font", SIZES[i] + "px"); }
  var cur = getIdx();
  apply(cur);
  function setIdx(i) { cur = Math.max(0, Math.min(SIZES.length - 1, i)); try { localStorage.setItem(KEY, cur); } catch (e) {} apply(cur); }

  function inject() {
    if (document.querySelector(".font-control")) return;
    var bar = document.createElement("div");
    bar.className = "font-control";
    bar.innerHTML = '<button type="button" data-d="-1" aria-label="Chữ nhỏ hơn">A−</button>' +
      "<span>Cỡ chữ</span>" +
      '<button type="button" data-d="1" aria-label="Chữ lớn hơn">A+</button>';
    document.body.appendChild(bar);
    bar.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { setIdx(cur + parseInt(b.getAttribute("data-d"), 10)); });
    });
  }
  if (document.body) inject(); else document.addEventListener("DOMContentLoaded", inject);
})();
