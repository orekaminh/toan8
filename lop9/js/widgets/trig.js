/* =======================================================================
   trig.js — Tỉ số lượng giác của góc nhọn (Chương IV, Bài 11)
   Tam giác vuông, trượt góc nhọn α → xem cạnh đối/kề/huyền và sin, cos, tan.
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  MATH9.Widgets["trig"] = function (mount, cfg) {
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Tam giác vuông với cạnh huyền cố định. Trượt góc nhọn $\\alpha$ để xem cạnh đối, cạnh kề và " +
        "các tỉ số $\\sin\\alpha, \\cos\\alpha, \\tan\\alpha$ thay đổi.") + "</p>" +
      '<div class="widget-controls"><div class="slider-group"><label>α =</label>' +
      '<input type="range" id="tg-a" min="15" max="75" step="5" value="35"><span class="slider-val" id="tg-a-v">35°</span></div></div>' +
      '<div id="tg-svg"></div><div class="widget-result" id="tg-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#tg-svg"), res = mount.querySelector("#tg-res"), aIn = mount.querySelector("#tg-a");
    function r2(v) { return Math.round(v * 100) / 100; }
    function draw() {
      var deg = +aIn.value; mount.querySelector("#tg-a-v").textContent = deg + "°";
      var rad = deg * Math.PI / 180, hyp = 200;
      var Bx = 60, By = 210;
      var adj = hyp * Math.cos(rad), opp = hyp * Math.sin(rad);
      var Ax = Bx + adj, Ay = By, Cx = Bx, Cy = By - opp;
      var s = '<svg viewBox="0 0 320 250" width="320">';
      s += '<polygon points="' + Bx + "," + By + " " + Ax.toFixed(1) + "," + Ay + " " + Cx + "," + Cy.toFixed(1) + '" fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"/>';
      s += '<path d="M' + Bx + "," + (By - 16) + " L" + (Bx + 16) + "," + (By - 16) + " L" + (Bx + 16) + "," + By + '" fill="none" stroke="#1f2733" stroke-width="1.4"/>';
      s += '<text x="' + (Ax - 32).toFixed(1) + '" y="' + (Ay - 6) + '" font-size="14" font-weight="700" fill="#dc2626">α</text>';
      s += '<text x="' + (Bx - 30) + '" y="' + ((By + Cy) / 2).toFixed(1) + '" font-size="12" fill="#0ea5a4" font-weight="700">đối</text>';
      s += '<text x="' + ((Bx + Ax) / 2 - 8).toFixed(1) + '" y="' + (By + 18) + '" font-size="12" fill="#0ea5a4" font-weight="700">kề</text>';
      s += '<text x="' + ((Ax + Cx) / 2 + 4).toFixed(1) + '" y="' + ((Ay + Cy) / 2 - 6).toFixed(1) + '" font-size="12" fill="#2563eb" font-weight="700">huyền</text>';
      s += '<text x="' + Bx + '" y="' + (By + 18) + '" font-size="12" font-weight="700">B</text>';
      s += '<text x="' + (Ax + 4).toFixed(1) + '" y="' + (Ay + 14) + '" font-size="12" font-weight="700">A</text>';
      s += '<text x="' + (Cx - 16) + '" y="' + (Cy - 2).toFixed(1) + '" font-size="12" font-weight="700">C</text>';
      s += "</svg>";
      box.innerHTML = s;
      var sin = Math.sin(rad), cos = Math.cos(rad), tan = Math.tan(rad);
      res.innerHTML =
        "<div style='font-size:15px'>$\\sin\\alpha = " + r2(sin) + "$ &nbsp; $\\cos\\alpha = " + r2(cos) + "$ &nbsp; $\\tan\\alpha = " + r2(tan) + "$</div>" +
        "<div style='font-size:13px;color:#55617a'>(với $\\alpha = " + deg + "^\\circ$, góc $A = \\alpha$, góc vuông tại $B$)</div>";
      MATH9.typeset(res);
    }
    aIn.addEventListener("input", draw); draw();
  };
})();
