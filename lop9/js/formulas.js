/* =======================================================================
   formulas.js — Bảng công thức tổng hợp (tự gom mọi công thức trong phần
   "Kiến thức cần nhớ" của tất cả các bài, sắp theo chương).
   ======================================================================= */

(function () {
  "use strict";
  function clean(h) { return String(h || "").replace(/^\s*\d+\.\s*/, ""); }

  MATH9.renderFormulas = function () {
    var root = document.getElementById("cf-root");
    if (!root) return;
    var html = "", curChap = null, count = 0;

    Object.keys(MATH9.lessons).forEach(function (lid) {
      var L = MATH9.lessons[lid];
      var items = (L.theory || []).filter(function (t) { return t.formula; });
      if (!items.length) return;
      if (L.chapter !== curChap) {
        if (curChap) html += "</div>";
        curChap = L.chapter;
        html += '<h2 class="cf-chap">' + L.chapter + '</h2><div class="cf-chap-body">';
      }
      html += '<div class="cf-lesson"><a class="cf-title" href="bai.html?id=' + encodeURIComponent(lid) + '">' + L.title + "</a>";
      items.forEach(function (t) {
        count++;
        html += '<div class="cf-item"><div class="cf-name">' + clean(t.heading) + "</div>" +
          '<div class="formula-box">\\[' + t.formula + "\\]</div></div>";
      });
      html += "</div>";
    });
    if (curChap) html += "</div>";

    root.innerHTML = '<p style="color:#55617a">Tổng hợp <b>' + count + '</b> công thức/định lí chính của Toán 9, gom theo chương. Bấm tên bài để mở bài học đầy đủ.</p>' + html;
    MATH9.typeset(root);
  };
})();
