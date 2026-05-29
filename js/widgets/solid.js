/* =======================================================================
   solid.js — Hình chóp đều (Chương X)
     kind "triangle" : hình chóp tam giác đều (đáy tam giác đều)
     kind "square"   : hình chóp tứ giác đều (đáy hình vuông)
   Vẽ hình chóp 3D giả lập (phép chiếu xiên), trượt thanh cạnh đáy a, trung
   đoạn d, chiều cao h → tính diện tích xung quanh và thể tích.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH8 = window.MATH8 || {};
  MATH8.Widgets = MATH8.Widgets || {};

  function L(a, b, attr) { return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" ' + attr + "/>"; }
  function T(x, y, t, attr) { return '<text x="' + x + '" y="' + y + '" ' + attr + ">" + t + "</text>"; }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  function r2(v) { return Number.isInteger(v) ? String(v) : (Math.round(v * 100) / 100).toString(); }
  var SOLID = 'stroke="#1f2733" stroke-width="2" fill="none"';
  var DASH = 'stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4" fill="none"';
  var EDGE = 'stroke="#2563eb" stroke-width="2" fill="none"';
  var SLANT = 'stroke="#dc2626" stroke-width="2"';

  MATH8.Widgets["solid"] = function (mount, cfg) {
    var kind = cfg.kind === "triangle" ? "triangle" : "square";
    var n = kind === "triangle" ? 3 : 4;

    mount.innerHTML =
      '<p class="widget-hint">Hình chóp ' + (kind === "triangle" ? "tam giác đều (đáy tam giác đều)" : "tứ giác đều (đáy hình vuông)") +
      '. Trượt <b>a</b> (cạnh đáy), <b>d</b> (trung đoạn), <b>h</b> (chiều cao) để xem diện tích xung quanh và thể tích thay đổi.</p>' +
      '<div class="widget-controls">' +
      '  <div class="slider-group"><label>a =</label><input type="range" id="so-a" min="2" max="8" value="4"><span class="slider-val" id="so-a-v">4</span></div>' +
      '  <div class="slider-group"><label>d =</label><input type="range" id="so-d" min="3" max="9" value="5"><span class="slider-val" id="so-d-v">5</span></div>' +
      '  <div class="slider-group"><label>h =</label><input type="range" id="so-h" min="2" max="8" value="6"><span class="slider-val" id="so-h-v">6</span></div>' +
      '</div><div id="so-svg"></div><div class="widget-result" id="so-res"></div>';

    var box = mount.querySelector("#so-svg"), resBox = mount.querySelector("#so-res");
    var aIn = mount.querySelector("#so-a"), dIn = mount.querySelector("#so-d"), hIn = mount.querySelector("#so-h");

    function draw() {
      var a = +aIn.value, d = +dIn.value, h = +hIn.value;
      mount.querySelector("#so-a-v").textContent = a;
      mount.querySelector("#so-d-v").textContent = d;
      mount.querySelector("#so-h-v").textContent = h;

      var cx = 150, baseY = 215, aw = a * 16, hv = h * 12 + 24;
      var s = '<svg viewBox="0 0 320 260" width="320">', S, O, A, B, C, D, Mfront;

      if (kind === "square") {
        var dep = 40, depY = 22;
        A = { x: cx - aw / 2, y: baseY }; B = { x: cx + aw / 2, y: baseY };
        C = { x: B.x + dep, y: B.y - depY }; D = { x: A.x + dep, y: A.y - depY };
        O = mid(A, C); S = { x: O.x, y: O.y - hv };
        // base
        s += L(A, B, SOLID) + L(B, C, SOLID) + L(C, D, DASH) + L(D, A, DASH);
        // edges
        s += L(S, A, EDGE) + L(S, B, EDGE) + L(S, C, EDGE) + L(S, D, DASH);
        Mfront = mid(A, B);
      } else {
        var depYt = 34;
        A = { x: cx - aw / 2, y: baseY }; B = { x: cx + aw / 2, y: baseY };
        C = { x: cx + 6, y: baseY - depYt };
        O = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
        S = { x: O.x, y: O.y - hv };
        s += L(A, B, SOLID) + L(B, C, DASH) + L(C, A, DASH);
        s += L(S, A, EDGE) + L(S, B, EDGE) + L(S, C, DASH);
        Mfront = mid(A, B);
      }
      // chiều cao h (đỉnh xuống tâm đáy)
      s += L(S, O, DASH);
      s += '<circle cx="' + O.x + '" cy="' + O.y + '" r="2.5" fill="#94a3b8"/>';
      s += T(S.x + 5, mid(S, O).y, "h", 'font-size="13" font-weight="700" fill="#55617a"');
      // trung đoạn d (đỉnh xuống trung điểm cạnh đáy trước)
      s += L(S, Mfront, SLANT);
      s += T(mid(S, Mfront).x + 6, mid(S, Mfront).y, "d", 'font-size="13" font-weight="700" fill="#dc2626"');
      // cạnh đáy a
      s += T(mid(A, B).x, baseY + 18, "a", 'font-size="13" font-weight="700" fill="#1f2733" text-anchor="middle"');
      // đỉnh
      s += '<circle cx="' + S.x + '" cy="' + S.y + '" r="3" fill="#2563eb"/>' + T(S.x - 6, S.y - 6, "S", 'font-size="13" font-weight="700" fill="#2563eb"');
      s += "</svg>";
      box.innerHTML = s;

      var C_chuvi = n * a;
      var Sxq = 0.5 * C_chuvi * d;
      var Sday = kind === "square" ? a * a : Math.sqrt(3) / 4 * a * a;
      var V = Sday / 3 * h;
      resBox.innerHTML =
        "<div style='font-size:14.5px'>Chu vi đáy $C = " + n + " \\cdot " + a + " = " + C_chuvi + "$" +
        "; diện tích đáy $S \\approx " + r2(Sday) + "$</div>" +
        "<div style='font-size:16px'>$S_{xq} = \\dfrac{1}{2} \\cdot C \\cdot d = \\dfrac{1}{2} \\cdot " + C_chuvi + " \\cdot " + d + " = " + r2(Sxq) + "$</div>" +
        "<div style='font-size:16px'>$V = \\dfrac{1}{3} \\cdot S \\cdot h = \\dfrac{1}{3} \\cdot " + r2(Sday) + " \\cdot " + h + " \\approx " + r2(V) + "$</div>";
      MATH8.typeset(resBox);
    }
    aIn.addEventListener("input", draw); dIn.addEventListener("input", draw); hIn.addEventListener("input", draw);
    draw();
  };
})();
