/* =======================================================================
   inscribed.js — Góc nội tiếp & góc ở tâm (Chương IX, Bài 27)
   A, B cố định trên đường tròn; trượt để di chuyển C trên cung lớn.
   Góc nội tiếp ACB luôn bằng nửa góc ở tâm AOB (cùng chắn cung AB).
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  MATH9.Widgets["inscribed"] = function (mount, cfg) {
    var cx = 160, cy = 140, R = 100;
    var Adeg = 200, Bdeg = 340;
    function P(deg) { var t = deg * Math.PI / 180; return { x: cx + R * Math.cos(t), y: cy - R * Math.sin(t) }; }
    var A = P(Adeg), B = P(Bdeg);
    var central = Math.abs(Bdeg - Adeg); if (central > 180) central = 360 - central;

    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Góc ở tâm $\\widehat{AOB}$ (xanh) và góc nội tiếp $\\widehat{ACB}$ (đỏ) cùng chắn cung $AB$. " +
        "Trượt để di chuyển điểm $C$ trên cung lớn — góc nội tiếp <b>luôn bằng nửa</b> góc ở tâm.") + "</p>" +
      '<div class="widget-controls"><div class="slider-group"><label>Vị trí C</label>' +
      '<input type="range" id="in-c" min="20" max="160" step="5" value="90"><span class="slider-val" id="in-c-v">90°</span></div></div>' +
      '<div id="in-svg"></div><div class="widget-result" id="in-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#in-svg"), res = mount.querySelector("#in-res"), cIn = mount.querySelector("#in-c");

    function line(a, b, c, w) { return '<line x1="' + a.x.toFixed(1) + '" y1="' + a.y.toFixed(1) + '" x2="' + b.x.toFixed(1) + '" y2="' + b.y.toFixed(1) + '" stroke="' + c + '" stroke-width="' + w + '"/>'; }
    function dot(p, t, dx, dy, color) { return '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="3" fill="' + (color || "#1f2733") + '"/><text x="' + (p.x + dx).toFixed(1) + '" y="' + (p.y + dy).toFixed(1) + '" font-size="13" font-weight="700" fill="' + (color || "#1f2733") + '">' + t + "</text>"; }

    function draw() {
      var cdeg = +cIn.value; mount.querySelector("#in-c-v").textContent = cdeg + "°";
      var O = { x: cx, y: cy }, C = P(cdeg);
      var s = '<svg viewBox="0 0 320 280" width="320">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>';
      s += line(O, A, "#2563eb", 2) + line(O, B, "#2563eb", 2);
      s += line(C, A, "#dc2626", 2) + line(C, B, "#dc2626", 2);
      s += dot(O, "O", -14, 4) + dot(A, "A", -14, 6) + dot(B, "B", 6, 6) + dot(C, "C", -4, -8, "#dc2626");
      s += "</svg>";
      box.innerHTML = s;
      res.innerHTML = "<div style='font-size:15.5px'>Góc ở tâm $\\widehat{AOB} = " + central +
        "^\\circ$ &nbsp;·&nbsp; góc nội tiếp $\\widehat{ACB} = " + (central / 2) +
        "^\\circ = \\dfrac{1}{2}\\,\\widehat{AOB}$</div>";
      MATH9.typeset(res);
    }
    cIn.addEventListener("input", draw); draw();
  };
})();
