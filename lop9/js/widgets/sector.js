/* =======================================================================
   sector.js — Độ dài cung & diện tích hình quạt tròn (Chương V, Bài 15)
   Trượt R và n° → l = πRn/180 ; S = πR²n/360.
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  MATH9.Widgets["sector"] = function (mount, cfg) {
    var cx = 130, cy = 140;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Trượt bán kính $R$ và số đo cung $n^\\circ$. Độ dài cung $l = \\dfrac{\\pi R n}{180}$; " +
        "diện tích hình quạt $S = \\dfrac{\\pi R^2 n}{360}$.") + "</p>" +
      '<div class="widget-controls">' +
      '<div class="slider-group"><label>R =</label><input type="range" id="se-r" min="1" max="6" step="1" value="3"><span class="slider-val" id="se-r-v">3</span></div>' +
      '<div class="slider-group"><label>n° =</label><input type="range" id="se-n" min="30" max="330" step="15" value="120"><span class="slider-val" id="se-n-v">120</span></div>' +
      "</div><div id=\"se-svg\"></div><div class=\"widget-result\" id=\"se-res\"></div>";
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#se-svg"), res = mount.querySelector("#se-res");
    var rIn = mount.querySelector("#se-r"), nIn = mount.querySelector("#se-n");
    function r2(v) { return Math.round(v * 100) / 100; }
    function draw() {
      var R = +rIn.value, n = +nIn.value, U = 18, rad = R * U;
      mount.querySelector("#se-r-v").textContent = R;
      mount.querySelector("#se-n-v").textContent = n;
      var a0 = 0, a1 = n * Math.PI / 180;
      var x0 = cx + rad * Math.cos(a0), y0 = cy - rad * Math.sin(a0);
      var x1 = cx + rad * Math.cos(a1), y1 = cy - rad * Math.sin(a1);
      var large = n > 180 ? 1 : 0;
      var s = '<svg viewBox="0 0 260 280" width="260">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rad + '" fill="none" stroke="#cbd5e0" stroke-width="1.5" stroke-dasharray="4 3"/>';
      s += '<path d="M' + cx + "," + cy + " L" + x0.toFixed(1) + "," + y0.toFixed(1) +
        " A" + rad + "," + rad + " 0 " + large + " 0 " + x1.toFixed(1) + "," + y1.toFixed(1) +
        ' Z" fill="#fff0c2" stroke="#f59e0b" stroke-width="2"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="#1f2733"/><text x="' + (cx - 14) + '" y="' + (cy + 14) + '" font-size="12" font-weight="700">O</text>';
      s += "</svg>";
      box.innerHTML = s;
      var l = Math.PI * R * n / 180, S = Math.PI * R * R * n / 360;
      res.innerHTML =
        "<div style='font-size:15px'>$l = \\dfrac{\\pi \\cdot " + R + " \\cdot " + n + "}{180} \\approx " + r2(l) + "$</div>" +
        "<div style='font-size:15px'>$S = \\dfrac{\\pi \\cdot " + R + "^2 \\cdot " + n + "}{360} \\approx " + r2(S) + "$</div>";
      MATH9.typeset(res);
    }
    rIn.addEventListener("input", draw); nIn.addEventListener("input", draw); draw();
  };
})();
