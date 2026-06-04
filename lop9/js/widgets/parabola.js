/* =======================================================================
   parabola.js — Widget cho Chương VI
     "parabola"  : đồ thị y = ax² (trượt a, xem bề lõm & trục đối xứng)
     "quadratic" : đồ thị y = ax²+bx+c, hiển thị Δ và nghiệm (giao Ox)
   Vẽ lưới toạ độ bằng SVG, chạy offline.
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  var R = 5, U = 24, pad = 22;
  var ox = pad + R * U, oy = pad + R * U, sz = 2 * R * U + pad * 2;
  function PX(x) { return ox + x * U; }
  function PY(y) { return oy - y * U; }
  function r2(v) { return Number.isInteger(v) ? String(v) : (Math.round(v * 100) / 100); }

  function grid() {
    var s = "", i;
    for (i = -R; i <= R; i++) {
      s += '<line x1="' + PX(i) + '" y1="' + PY(-R) + '" x2="' + PX(i) + '" y2="' + PY(R) + '" stroke="#e3e8f0" stroke-width="1"/>';
      s += '<line x1="' + PX(-R) + '" y1="' + PY(i) + '" x2="' + PX(R) + '" y2="' + PY(i) + '" stroke="#e3e8f0" stroke-width="1"/>';
    }
    s += '<line x1="' + PX(-R) + '" y1="' + PY(0) + '" x2="' + PX(R) + '" y2="' + PY(0) + '" stroke="#1f2733" stroke-width="1.6"/>';
    s += '<line x1="' + PX(0) + '" y1="' + PY(-R) + '" x2="' + PX(0) + '" y2="' + PY(R) + '" stroke="#1f2733" stroke-width="1.6"/>';
    s += '<text x="' + (PX(R) - 2) + '" y="' + (PY(0) - 6) + '" font-size="12" fill="#1f2733">x</text>';
    s += '<text x="' + (PX(0) + 6) + '" y="' + (PY(R) + 10) + '" font-size="12" fill="#1f2733">y</text>';
    s += '<text x="' + (PX(0) - 10) + '" y="' + (PY(0) + 13) + '" font-size="11" fill="#55617a">O</text>';
    [-4, -2, 2, 4].forEach(function (n) {
      s += '<text x="' + (PX(n) - 3) + '" y="' + (PY(0) + 13) + '" font-size="10" fill="#55617a">' + n + "</text>";
      s += '<text x="' + (PX(0) + 5) + '" y="' + (PY(n) + 3) + '" font-size="10" fill="#55617a">' + n + "</text>";
    });
    return s;
  }

  function curve(f, color) {
    var s = "", run = [], x, y;
    function flush() { if (run.length > 1) s += '<polyline points="' + run.join(" ") + '" fill="none" stroke="' + color + '" stroke-width="2.6"/>'; run = []; }
    for (x = -R; x <= R + 1e-9; x += 0.1) {
      y = f(x);
      if (y >= -R && y <= R) run.push(PX(x).toFixed(1) + "," + PY(y).toFixed(1));
      else flush();
    }
    flush();
    return s;
  }

  MATH9.Widgets["parabola"] = function (mount, cfg) {
    var aMin = cfg.aMin != null ? cfg.aMin : -2, aMax = cfg.aMax != null ? cfg.aMax : 2;
    var a = cfg.a != null ? cfg.a : 1;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Đồ thị hàm số $y = ax^2$ là một <b>parabol</b> đỉnh $O(0;0)$, nhận trục $Oy$ làm trục đối xứng. " +
        "Trượt $a$ để xem bề lõm (lên/xuống) và độ rộng – hẹp của parabol.") + "</p>" +
      '<div class="widget-controls"><div class="slider-group"><label>a =</label>' +
      '<input type="range" id="pb-a" min="' + aMin + '" max="' + aMax + '" step="0.5" value="' + a + '">' +
      '<span class="slider-val" id="pb-a-v">' + a + "</span></div></div>" +
      '<div id="pb-svg"></div><div class="widget-result" id="pb-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#pb-svg"), res = mount.querySelector("#pb-res"), aIn = mount.querySelector("#pb-a");
    function draw() {
      a = +aIn.value;
      if (a === 0) { a = 0.5; aIn.value = 0.5; }
      mount.querySelector("#pb-a-v").textContent = a;
      var s = '<svg viewBox="0 0 ' + sz + " " + sz + '" width="' + Math.min(sz, 340) + '">';
      s += grid();
      s += '<line x1="' + PX(0) + '" y1="' + PY(-R) + '" x2="' + PX(0) + '" y2="' + PY(R) + '" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/>';
      s += curve(function (x) { return a * x * x; }, "#2563eb");
      s += '<circle cx="' + PX(0) + '" cy="' + PY(0) + '" r="4" fill="#dc2626"/>';
      s += "</svg>";
      box.innerHTML = s;
      var trend = a > 0
        ? "Bề lõm hướng <b>lên</b>, $O$ là điểm <b>thấp nhất</b>. Hàm số nghịch biến khi $x<0$, đồng biến khi $x>0$."
        : "Bề lõm hướng <b>xuống</b>, $O$ là điểm <b>cao nhất</b>. Hàm số đồng biến khi $x<0$, nghịch biến khi $x>0$.";
      var ac = a === 1 ? "" : a === -1 ? "-" : a;
      res.innerHTML = "<div style='font-size:17px'>$y = " + ac + "x^2$</div><div style='font-size:14.5px'>" + trend + "</div>";
      MATH9.typeset(res);
    }
    aIn.addEventListener("input", draw);
    draw();
  };

  MATH9.Widgets["quadratic"] = function (mount, cfg) {
    var a = cfg.a != null ? cfg.a : 1, b = cfg.b != null ? cfg.b : -1, c = cfg.c != null ? cfg.c : -2;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Đồ thị $y = ax^2 + bx + c$ cắt trục $Ox$ tại các <b>nghiệm</b> của phương trình $ax^2 + bx + c = 0$. " +
        "Số giao điểm phụ thuộc dấu của $\\Delta = b^2 - 4ac$. Trượt $a, b, c$ để quan sát.") + "</p>" +
      '<div class="widget-controls">' +
      '<div class="slider-group"><label>a =</label><input type="range" id="q-a" min="-2" max="2" step="1" value="' + a + '"><span class="slider-val" id="q-a-v">' + a + "</span></div>" +
      '<div class="slider-group"><label>b =</label><input type="range" id="q-b" min="-4" max="4" step="1" value="' + b + '"><span class="slider-val" id="q-b-v">' + b + "</span></div>" +
      '<div class="slider-group"><label>c =</label><input type="range" id="q-c" min="-4" max="4" step="1" value="' + c + '"><span class="slider-val" id="q-c-v">' + c + "</span></div>" +
      "</div><div id=\"q-svg\"></div><div class=\"widget-result\" id=\"q-res\"></div>";
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#q-svg"), res = mount.querySelector("#q-res");
    var aIn = mount.querySelector("#q-a"), bIn = mount.querySelector("#q-b"), cIn = mount.querySelector("#q-c");
    function fmt(a, b, c) {
      var s = (a === 1 ? "" : a === -1 ? "-" : a) + "x^2";
      if (b !== 0) s += (b > 0 ? " + " : " - ") + (Math.abs(b) === 1 ? "" : Math.abs(b)) + "x";
      if (c !== 0) s += (c > 0 ? " + " : " - ") + Math.abs(c);
      return s;
    }
    function draw() {
      a = +aIn.value; b = +bIn.value; c = +cIn.value;
      if (a === 0) { a = 1; aIn.value = 1; }
      mount.querySelector("#q-a-v").textContent = a;
      mount.querySelector("#q-b-v").textContent = b;
      mount.querySelector("#q-c-v").textContent = c;
      var s = '<svg viewBox="0 0 ' + sz + " " + sz + '" width="' + Math.min(sz, 340) + '">';
      s += grid();
      s += curve(function (x) { return a * x * x + b * x + c; }, "#2563eb");
      var D = b * b - 4 * a * c, roots = [];
      if (D >= 0) { var sq = Math.sqrt(D); roots = [(-b - sq) / (2 * a), (-b + sq) / (2 * a)]; }
      roots.forEach(function (rt) { if (rt >= -R && rt <= R) s += '<circle cx="' + PX(rt) + '" cy="' + PY(0) + '" r="4.5" fill="#dc2626"/>'; });
      s += "</svg>";
      box.innerHTML = s;
      var msg;
      if (D > 0) msg = "$\\Delta = " + D + " > 0$: hai nghiệm phân biệt $x_1 = " + r2(roots[0]) + ",\\ x_2 = " + r2(roots[1]) + "$.";
      else if (D === 0) msg = "$\\Delta = 0$: nghiệm kép $x = " + r2(-b / (2 * a)) + "$.";
      else msg = "$\\Delta = " + D + " < 0$: phương trình <b>vô nghiệm</b> (parabol không cắt trục $Ox$).";
      res.innerHTML = "<div style='font-size:15.5px'>$y = " + fmt(a, b, c) + "$</div><div style='font-size:14.5px'>" + msg + "</div>";
      MATH9.typeset(res);
    }
    [aIn, bIn, cIn].forEach(function (el) { el.addEventListener("input", draw); });
    draw();
  };
})();
