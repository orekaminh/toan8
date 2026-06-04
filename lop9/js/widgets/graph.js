/* =======================================================================
   graph.js — Đồ thị hàm số bậc nhất y = ax + b
   Trượt thanh a, b để thấy đường thẳng, giao với trục tung (0; b),
   và tính đồng biến / nghịch biến. Vẽ lưới toạ độ bằng SVG, chạy offline.
   cfg: { a, b, aMin, aMax, bMin, bMax, slope:true|false }
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  MATH9.Widgets["graph"] = function (mount, cfg) {
    var a = cfg.a != null ? cfg.a : 1, b = cfg.b != null ? cfg.b : 1;
    var aMin = cfg.aMin != null ? cfg.aMin : -3, aMax = cfg.aMax != null ? cfg.aMax : 3;
    var bMin = cfg.bMin != null ? cfg.bMin : -4, bMax = cfg.bMax != null ? cfg.bMax : 4;
    var R = 5, U = 24, pad = 22;          // cửa sổ [-5,5] x [-5,5], 24px/đơn vị
    var span = 2 * R, ox = pad + R * U, oy = pad + R * U, sz = span * U + pad * 2;

    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Đồ thị hàm số bậc nhất $y = ax + b$ là một <b>đường thẳng</b>. Trượt thanh để đổi $a$ (độ dốc) " +
        "và $b$ (giao với trục tung). Điểm $(0; b)$ luôn nằm trên trục $Oy$.") + "</p>" +
      '<div class="widget-controls">' +
      '  <div class="slider-group"><label>a =</label><input type="range" id="g-a" min="' + aMin + '" max="' + aMax + '" step="1" value="' + a + '"><span class="slider-val" id="g-a-v">' + a + '</span></div>' +
      '  <div class="slider-group"><label>b =</label><input type="range" id="g-b" min="' + bMin + '" max="' + bMax + '" step="1" value="' + b + '"><span class="slider-val" id="g-b-v">' + b + '</span></div>' +
      '</div><div id="g-svg"></div><div class="widget-result" id="g-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#g-svg"), resBox = mount.querySelector("#g-res");
    var aIn = mount.querySelector("#g-a"), bIn = mount.querySelector("#g-b");
    function PX(x) { return ox + x * U; }
    function PY(y) { return oy - y * U; }

    function draw() {
      a = +aIn.value; b = +bIn.value;
      mount.querySelector("#g-a-v").textContent = a;
      mount.querySelector("#g-b-v").textContent = b;
      var s = '<svg viewBox="0 0 ' + sz + " " + sz + '" width="' + Math.min(sz, 340) + '">';
      // lưới
      var i;
      for (i = -R; i <= R; i++) {
        s += '<line x1="' + PX(i) + '" y1="' + PY(-R) + '" x2="' + PX(i) + '" y2="' + PY(R) + '" stroke="#e3e8f0" stroke-width="1"/>';
        s += '<line x1="' + PX(-R) + '" y1="' + PY(i) + '" x2="' + PX(R) + '" y2="' + PY(i) + '" stroke="#e3e8f0" stroke-width="1"/>';
      }
      // trục
      s += '<line x1="' + PX(-R) + '" y1="' + PY(0) + '" x2="' + PX(R) + '" y2="' + PY(0) + '" stroke="#1f2733" stroke-width="1.6"/>';
      s += '<line x1="' + PX(0) + '" y1="' + PY(-R) + '" x2="' + PX(0) + '" y2="' + PY(R) + '" stroke="#1f2733" stroke-width="1.6"/>';
      s += '<text x="' + (PX(R) - 2) + '" y="' + (PY(0) - 6) + '" font-size="12" fill="#1f2733">x</text>';
      s += '<text x="' + (PX(0) + 6) + '" y="' + (PY(R) + 10) + '" font-size="12" fill="#1f2733">y</text>';
      s += '<text x="' + (PX(0) - 10) + '" y="' + (PY(0) + 13) + '" font-size="11" fill="#55617a">O</text>';
      // nhãn vài mốc
      [-4, -2, 2, 4].forEach(function (n) {
        s += '<text x="' + (PX(n) - 3) + '" y="' + (PY(0) + 13) + '" font-size="10" fill="#55617a">' + n + '</text>';
        s += '<text x="' + (PX(0) + 5) + '" y="' + (PY(n) + 3) + '" font-size="10" fill="#55617a">' + n + '</text>';
      });
      // đường thẳng y=ax+b (cắt theo khung)
      s += '<line x1="' + PX(-R) + '" y1="' + PY(a * -R + b) + '" x2="' + PX(R) + '" y2="' + PY(a * R + b) + '" stroke="#2563eb" stroke-width="2.6"/>';
      // điểm (0; b)
      if (b >= -R && b <= R) {
        s += '<circle cx="' + PX(0) + '" cy="' + PY(b) + '" r="4" fill="#dc2626"/>';
        s += '<text x="' + (PX(0) + 7) + '" y="' + (PY(b) - 6) + '" font-size="11" font-weight="700" fill="#dc2626">(0; ' + b + ')</text>';
      }
      s += "</svg>";
      box.innerHTML = s;

      var bsign = b >= 0 ? "+ " + b : "- " + (-b);
      var eqn = "y = " + (a === 1 ? "x" : a === -1 ? "-x" : a + "x") + " " + bsign;
      if (a === 0) eqn = "y = " + b;
      var trend = a > 0 ? "Hàm số <b>đồng biến</b> (vì $a>0$ — đồ thị đi lên)."
        : a < 0 ? "Hàm số <b>nghịch biến</b> (vì $a<0$ — đồ thị đi xuống)."
        : "Khi $a=0$ thì $y=b$ là <b>hàm hằng</b> (đường nằm ngang).";
      var extra = cfg.slope && a !== 0 ? " Hệ số góc của đường thẳng là $a = " + a + "$." : "";
      resBox.innerHTML = "<div style='font-size:17px'>$" + eqn + "$</div><div style='font-size:14.5px'>" + trend + extra + "</div>";
      MATH9.typeset(resBox);
    }
    aIn.addEventListener("input", draw);
    bIn.addEventListener("input", draw);
    draw();
  };
})();
