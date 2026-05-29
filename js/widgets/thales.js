/* =======================================================================
   thales.js — Widget hình học tam giác (Chương IV. Định lí Thalès)
     • "thales"     : trượt đường $DE \parallel BC$ → ba tỉ số bằng nhau
     • "midsegment" : đường trung bình $DE = \tfrac12 BC$ và $DE \parallel BC$
     • "bisector"   : phân giác $AD$ → $BD/DC = AB/AC$
   Vẽ bằng SVG thuần, chạy offline.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH8 = window.MATH8 || {};
  MATH8.Widgets = MATH8.Widgets || {};

  function L(a, b, attr) { return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" ' + attr + "/>"; }
  function T(x, y, txt, attr) { return '<text x="' + x + '" y="' + y + '" ' + attr + ">" + txt + "</text>"; }
  function d(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  function lerp(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function chevron(P, Q, color) {
    var m = mid(P, Q), dx = Q.x - P.x, dy = Q.y - P.y, dd = Math.hypot(dx, dy) || 1;
    var u = { x: dx / dd, y: dy / dd }, pr = { x: -u.y, y: u.x };
    var tip = { x: m.x + u.x * 6, y: m.y + u.y * 6 };
    return L({ x: m.x - pr.x * 5, y: m.y - pr.y * 5 }, tip, 'stroke="' + color + '" stroke-width="2"') +
      L({ x: m.x + pr.x * 5, y: m.y + pr.y * 5 }, tip, 'stroke="' + color + '" stroke-width="2"');
  }
  var TRI = 'fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"';
  var SEG = 'stroke="#dc2626" stroke-width="2.5"';
  var BIS = 'stroke="#16a34a" stroke-width="2.5"';
  function vtx(p, txt, dx, dy) { return '<circle cx="' + p.x + '" cy="' + p.y + '" r="3.5" fill="#1f2733"/>' + T(p.x + dx, p.y + dy, txt, 'font-size="14" font-weight="700" fill="#1f2733"'); }

  MATH8.Widgets["thales"] = function (mount, cfg) {
    var kind = cfg.kind || "thales";
    var A0 = { x: 150, y: 40 }, B = { x: 55, y: 215 }, C = { x: 305, y: 215 };

    var slider, hint;
    if (kind === "thales") { slider = { id: "t", label: "vị trí DE (%)", min: 25, max: 75, val: 50 };
      hint = "Đường thẳng $DE \\parallel BC$ cắt hai cạnh $AB, AC$. Trượt thanh để di chuyển $DE$. " +
        "Dù ở vị trí nào, ba tỉ số $\\dfrac{AD}{AB},\\ \\dfrac{AE}{AC},\\ \\dfrac{DE}{BC}$ <b>luôn bằng nhau</b>."; }
    else if (kind === "midsegment") { slider = { id: "x", label: "đỉnh A", min: 70, max: 230, val: 150 };
      hint = "$D, E$ là <b>trung điểm</b> của $AB, AC$ nên $DE$ là <b>đường trung bình</b>. Trượt để đổi tam giác: " +
        "luôn có $DE \\parallel BC$ và $DE = \\tfrac{1}{2}BC$."; }
    else { slider = { id: "x", label: "đỉnh A", min: 70, max: 230, val: 175 };
      hint = "$AD$ là <b>tia phân giác</b> của góc $A$. Trượt để đổi tam giác: tỉ số $\\dfrac{BD}{DC}$ luôn bằng $\\dfrac{AB}{AC}$."; }

    mount.innerHTML =
      '<p class="widget-hint">' + hint + "</p>" +
      '<div class="widget-controls"><div class="slider-group"><label>' + slider.label + '</label>' +
      '<input type="range" id="th-s" min="' + slider.min + '" max="' + slider.max + '" value="' + slider.val + '">' +
      '<span class="slider-val" id="th-s-v">' + slider.val + '</span></div></div>' +
      '<div id="th-svg"></div><div class="widget-result" id="th-res"></div>';
    MATH8.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#th-svg"), resBox = mount.querySelector("#th-res");
    var sIn = mount.querySelector("#th-s");

    function draw() {
      var v = +sIn.value;
      mount.querySelector("#th-s-v").textContent = v;
      var A = { x: A0.x, y: A0.y }, s = '<svg viewBox="0 0 360 260" width="360">', res = "";

      if (kind === "thales") {
        var t = v / 100;
        var D = lerp(A, B, t), E = lerp(A, C, t);
        s += '<polygon points="' + A.x + "," + A.y + " " + B.x + "," + B.y + " " + C.x + "," + C.y + '" ' + TRI + "/>";
        s += L(D, E, SEG) + chevron(D, E, "#dc2626") + chevron(B, C, "#dc2626");
        s += vtx(A, "A", -6, -8) + vtx(B, "B", -14, 6) + vtx(C, "C", 8, 6) + vtx(D, "D", -16, 4) + vtx(E, "E", 8, 4);
        res = "$\\dfrac{AD}{AB} = \\dfrac{AE}{AC} = \\dfrac{DE}{BC} = " + r2(t) + "$";
      } else if (kind === "midsegment") {
        A.x = v;
        var D = mid(A, B), E = mid(A, C);
        s += '<polygon points="' + A.x + "," + A.y + " " + B.x + "," + B.y + " " + C.x + "," + C.y + '" ' + TRI + "/>";
        s += L(D, E, SEG) + chevron(D, E, "#dc2626") + chevron(B, C, "#dc2626");
        s += vtx(A, "A", -6, -8) + vtx(B, "B", -14, 6) + vtx(C, "C", 8, 6) + vtx(D, "D", -16, 4) + vtx(E, "E", 8, 4);
        var DE = d(D, E) / 30, BC = d(B, C) / 30;
        res = "$DE = " + r2(DE) + "$ ; $BC = " + r2(BC) + "$ &nbsp;→&nbsp; $DE = \\tfrac{1}{2}BC$ ✓";
      } else {
        A.x = v;
        var AB = d(A, B), AC = d(A, C);
        var bd = AB / (AB + AC);            // BD / BC
        var D = lerp(B, C, bd);
        s += '<polygon points="' + A.x + "," + A.y + " " + B.x + "," + B.y + " " + C.x + "," + C.y + '" ' + TRI + "/>";
        s += L(A, D, BIS);
        s += vtx(A, "A", -6, -8) + vtx(B, "B", -14, 6) + vtx(C, "C", 8, 6) + vtx(D, "D", -4, 18);
        var BD = d(B, D) / 30, DC = d(D, C) / 30;
        res = "$AB = " + r2(AB / 30) + "$, $AC = " + r2(AC / 30) + "$ ; $\\dfrac{BD}{DC} = " + r2(BD / DC) +
          " = \\dfrac{AB}{AC} = " + r2(AB / AC) + "$";
      }
      s += "</svg>";
      box.innerHTML = s;
      resBox.innerHTML = res;
      MATH8.typeset(resBox);
    }
    sIn.addEventListener("input", draw);
    draw();
  };
})();
