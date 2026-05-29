/* =======================================================================
   probability.js — Mô phỏng phép thử ngẫu nhiên (xúc xắc / đồng xu)
   Tung nhiều lần, đếm tần số mỗi kết quả, tính xác suất THỰC NGHIỆM của
   một biến cố và so với xác suất LÍ THUYẾT (càng nhiều lần càng gần nhau).
   cfg: { outcomes:[...], favorable:[...], favLabel:"...", theory:"\\frac{1}{2}" }
   ======================================================================= */

(function () {
  "use strict";
  window.MATH8 = window.MATH8 || {};
  MATH8.Widgets = MATH8.Widgets || {};

  function r3(v) { return Math.round(v * 1000) / 1000; }

  MATH8.Widgets["probability"] = function (mount, cfg) {
    var outs = cfg.outcomes || ["1", "2", "3", "4", "5", "6"];
    var favSet = {}; (cfg.favorable || []).forEach(function (f) { favSet[String(f)] = true; });
    var favLabel = cfg.favLabel || "biến cố";
    var theoryNum = (cfg.favorable || []).length / outs.length;
    var counts = outs.map(function () { return 0; }), N = 0, fav = 0;

    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Bấm để 'tung' và quan sát. Khi số lần tung càng lớn, <b>xác suất thực nghiệm</b> của biến cố " +
        "<b>" + favLabel + "</b> càng tiến gần <b>xác suất lí thuyết</b>.") + "</p>" +
      '<div id="pr-svg"></div>' +
      '<div style="text-align:center;margin:8px 0;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
      '  <button class="btn btn-hint" id="pr-1">🎲 Tung 1 lần</button>' +
      '  <button class="btn btn-hint" id="pr-50">⏩ Tung +50</button>' +
      '  <button class="btn" id="pr-reset">↺ Đặt lại</button></div>' +
      '<div class="widget-result" id="pr-res"></div>';
    MATH8.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#pr-svg"), resBox = mount.querySelector("#pr-res");

    function trial() {
      var i = Math.floor(Math.random() * outs.length);
      counts[i]++; N++;
      if (favSet[String(outs[i])]) fav++;
    }

    function draw() {
      var maxC = Math.max(1, Math.max.apply(null, counts));
      var n = outs.length, bw = 40, gap = 16, padL = 20, H = 120, padB = 26, padT = 14;
      var W = padL * 2 + n * bw + (n - 1) * gap;
      var s = '<svg viewBox="0 0 ' + W + " " + (H + padB + padT) + '" width="' + Math.min(W, 420) + '">';
      s += '<line x1="' + (padL - 4) + '" y1="' + (padT + H) + '" x2="' + (W - padL + 4) + '" y2="' + (padT + H) + '" stroke="#1f2733" stroke-width="1.3"/>';
      outs.forEach(function (o, i) {
        var bh = Math.round(counts[i] / maxC * (H - 8));
        var x = padL + i * (bw + gap), y = padT + H - bh;
        var color = favSet[String(o)] ? "#16a34a" : "#94a3b8";
        s += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="3" fill="' + color + '"/>';
        s += '<text x="' + (x + bw / 2) + '" y="' + (y - 4) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2733">' + counts[i] + "</text>";
        s += '<text x="' + (x + bw / 2) + '" y="' + (padT + H + 16) + '" text-anchor="middle" font-size="12" fill="#1f2733">' + o + "</text>";
      });
      s += "</svg>";
      box.innerHTML = s;

      var expStr = N === 0 ? "—" : r3(fav / N) + " (= " + fav + "/" + N + ")";
      resBox.innerHTML =
        "<div style='font-size:14.5px'>Tổng số lần tung: <b>" + N + "</b> &nbsp;·&nbsp; số lần <b>" + favLabel +
        "</b>: <b>" + fav + "</b></div>" +
        "<div style='font-size:15.5px'>Xác suất <b>thực nghiệm</b> = " + expStr + "</div>" +
        "<div style='font-size:15.5px'>Xác suất <b>lí thuyết</b> $= " + (cfg.theory || r3(theoryNum)) +
        "$ $\\approx " + r3(theoryNum) + "$</div>" +
        "<div style='font-size:12.5px;color:#55617a'>(Cột xanh lá = kết quả thuận lợi cho biến cố)</div>";
      MATH8.typeset(resBox);
    }

    mount.querySelector("#pr-1").addEventListener("click", function () { trial(); draw(); });
    mount.querySelector("#pr-50").addEventListener("click", function () { for (var i = 0; i < 50; i++) trial(); draw(); });
    mount.querySelector("#pr-reset").addEventListener("click", function () {
      counts = outs.map(function () { return 0; }); N = 0; fav = 0; draw();
    });
    draw();
  };
})();
