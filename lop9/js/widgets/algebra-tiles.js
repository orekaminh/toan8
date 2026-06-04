/* =======================================================================
   algebra-tiles.js — "Gạch đại số"
   Biểu diễn đơn thức/đa thức bằng các viên gạch:
     • x²  → ô vuông lớn (xanh dương)
     • x   → ô chữ nhật  (xanh ngọc)
     • 1   → ô vuông nhỏ  (cam)
   Gạch âm có màu tối hơn và mang dấu "−".
   Bấm nút → gom số hạng đồng dạng (và triệt tiêu cặp trái dấu nếu bật),
   rồi hiện đa thức thu gọn (render bằng KaTeX).
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  var LABEL = { x2: "x²", x: "x", "1": "1" };
  var ORDER = ["x2", "x", "1"];
  var TEX = { x2: "x^2", x: "x", "1": "" };

  function tileEl(type, sign) {
    var cls = "tile tile-" + type + (sign < 0 ? " tile-neg" : "");
    var t = MATH9.el("div", { class: cls });
    t.textContent = (sign < 0 ? "−" : "") + LABEL[type];
    return t;
  }

  // tạo chuỗi đa thức TeX từ {x2:n, x:n, "1":n}
  function polyTeX(net) {
    var parts = [];
    ORDER.forEach(function (type) {
      var c = net[type] || 0;
      if (c === 0) return;
      var sign = c > 0 ? "+" : "-";
      var mag = Math.abs(c);
      var coef = mag === 1 && type !== "1" ? "" : String(mag);
      parts.push({ sign: sign, body: coef + TEX[type] });
    });
    if (!parts.length) return "0";
    var s = (parts[0].sign === "-" ? "-" : "") + parts[0].body;
    for (var i = 1; i < parts.length; i++) s += " " + parts[i].sign + " " + parts[i].body;
    return s;
  }

  MATH9.Widgets["algebra-tiles"] = function (mount, cfg) {
    var tiles = cfg.tiles || []; // [{type, sign, count}]
    var combine = !!cfg.combine; // có triệt tiêu cặp trái dấu không
    var btnText = cfg.buttonText || "Gom số hạng đồng dạng";

    mount.innerHTML =
      '<p class="widget-hint">' +
      (cfg.caption ||
        "Mỗi viên gạch là một số hạng. Các gạch <b>cùng loại</b> (cùng phần biến) là " +
        "đồng dạng và có thể gộp lại. Bấm nút để xem kết quả thu gọn.") +
      "</p>" +
      '<div class="tiles-area" id="tl-pile"></div>' +
      '<div style="text-align:center"><button class="btn btn-hint" id="tl-btn">🧮 ' +
      btnText + "</button></div>" +
      '<div class="widget-result tiles-result" id="tl-res" style="display:none"></div>';

    var pile = mount.querySelector("#tl-pile");

    // vẽ đống gạch ban đầu (theo đúng thứ tự cấu hình)
    function renderPile(list) {
      pile.innerHTML = "";
      list.forEach(function (g) {
        for (var i = 0; i < g.count; i++) pile.appendChild(tileEl(g.type, g.sign));
      });
    }
    renderPile(tiles);
    MATH9.typeset(mount.querySelector(".widget-hint")); // chú thích có thể chứa công thức

    // tính hệ số net theo từng loại
    function computeNet() {
      var net = {};
      tiles.forEach(function (g) {
        net[g.type] = (net[g.type] || 0) + g.sign * g.count;
      });
      return net;
    }

    var done = false;
    mount.querySelector("#tl-btn").addEventListener("click", function () {
      if (done) return;
      done = true;
      var net = computeNet();

      // gom gạch: nhóm theo loại; nếu combine thì giữ |net| gạch theo dấu net
      var grouped = [];
      ORDER.forEach(function (type) {
        if (combine) {
          var c = net[type] || 0;
          if (c !== 0) grouped.push({ type: type, sign: c > 0 ? 1 : -1, count: Math.abs(c) });
        } else {
          // chỉ gom theo loại, giữ nguyên dấu gốc của số hạng (đa số cùng dấu)
          var totalCount = 0, sign = 1;
          tiles.forEach(function (g) {
            if (g.type === type) { totalCount += g.count; sign = g.sign; }
          });
          if (totalCount) grouped.push({ type: type, sign: sign, count: totalCount });
        }
      });
      renderPile(grouped);

      var res = mount.querySelector("#tl-res");
      res.innerHTML = "Thu gọn được: $" + polyTeX(net) + "$";
      res.style.display = "block";
      MATH9.typeset(res);

      this.textContent = "✓ Đã thu gọn";
      this.disabled = true;
    });
  };
})();
