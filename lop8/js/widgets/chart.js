/* =======================================================================
   chart.js — Biểu diễn dữ liệu: cùng một bộ số liệu xem ở 3 dạng
   Bảng · Biểu đồ cột · Biểu đồ hình quạt tròn (bấm nút để chuyển).
   cfg: { labels:[...], values:[...], unit:"", views:["table","bar","pie"] }
   Vẽ bằng SVG/HTML thuần, chạy offline.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH8 = window.MATH8 || {};
  MATH8.Widgets = MATH8.Widgets || {};

  var COLORS = ["#2563eb", "#0ea5a4", "#f59e0b", "#dc2626", "#8b5cf6", "#16a34a", "#db2777", "#0891b2"];
  var VIEW_LABEL = { table: "Bảng", bar: "Biểu đồ cột", pie: "Biểu đồ tròn" };

  MATH8.Widgets["chart"] = function (mount, cfg) {
    var labels = cfg.labels || [], values = cfg.values || [];
    var unit = cfg.unit || "";
    var views = cfg.views || ["table", "bar", "pie"];
    var cur = views[0];
    var total = values.reduce(function (a, b) { return a + b; }, 0);

    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Cùng một bộ số liệu có thể trình bày theo nhiều cách. Bấm để chuyển giữa <b>bảng</b>, " +
        "<b>biểu đồ cột</b> và <b>biểu đồ tròn</b> — chọn dạng phù hợp với điều cần thể hiện.") + "</p>" +
      '<div class="widget-controls" id="ch-btns" style="gap:8px"></div>' +
      (cfg.title ? '<div style="text-align:center;font-weight:700;margin:4px 0">' + cfg.title + "</div>" : "") +
      '<div id="ch-view"></div>';
    MATH8.typeset(mount.querySelector(".widget-hint"));

    var btns = mount.querySelector("#ch-btns"), viewBox = mount.querySelector("#ch-view");
    views.forEach(function (v) {
      var b = MATH8.el("button", { class: "btn" });
      b.textContent = VIEW_LABEL[v] || v;
      b.setAttribute("data-v", v);
      b.addEventListener("click", function () { cur = v; render(); });
      btns.appendChild(b);
    });

    function render() {
      // tô đậm nút đang chọn
      btns.querySelectorAll("button").forEach(function (b) {
        b.style.background = b.getAttribute("data-v") === cur ? "var(--c-primary-soft)" : "#fff";
        b.style.borderColor = b.getAttribute("data-v") === cur ? "var(--c-primary)" : "var(--c-line)";
      });
      if (cur === "table") viewBox.innerHTML = tableHTML();
      else if (cur === "pie") viewBox.innerHTML = pieHTML();
      else viewBox.innerHTML = barHTML();
    }

    function tableHTML() {
      var h = '<table style="margin:8px auto;border-collapse:collapse;font-size:15.5px">';
      h += '<tr><th style="border:1px solid #cdd6e6;padding:6px 14px;background:#eef3fb">Loại</th>' +
        '<th style="border:1px solid #cdd6e6;padding:6px 14px;background:#eef3fb">Số liệu' + (unit ? " (" + unit + ")" : "") + "</th></tr>";
      labels.forEach(function (l, i) {
        h += '<tr><td style="border:1px solid #cdd6e6;padding:6px 14px">' + l +
          '</td><td style="border:1px solid #cdd6e6;padding:6px 14px;text-align:center;font-weight:700">' + values[i] + "</td></tr>";
      });
      h += '<tr><td style="border:1px solid #cdd6e6;padding:6px 14px;font-weight:700">Tổng</td>' +
        '<td style="border:1px solid #cdd6e6;padding:6px 14px;text-align:center;font-weight:700">' + total + "</td></tr></table>";
      return h;
    }

    function barHTML() {
      var maxV = Math.max.apply(null, values) || 1;
      var n = values.length, bw = 46, gap = 26, padL = 36, padB = 40, padT = 16, H = 180;
      var W = padL + n * bw + (n - 1) * gap + 20;
      var s = '<svg viewBox="0 0 ' + W + " " + (H + padB + padT) + '" width="' + Math.min(W, 420) + '">';
      // trục
      s += '<line x1="' + padL + '" y1="' + (padT + H) + '" x2="' + (W - 6) + '" y2="' + (padT + H) + '" stroke="#1f2733" stroke-width="1.5"/>';
      s += '<line x1="' + padL + '" y1="' + padT + '" x2="' + padL + '" y2="' + (padT + H) + '" stroke="#1f2733" stroke-width="1.5"/>';
      values.forEach(function (v, i) {
        var bh = Math.round(v / maxV * (H - 10));
        var x = padL + 14 + i * (bw + gap), y = padT + H - bh;
        s += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="3" fill="' + COLORS[i % COLORS.length] + '"/>';
        s += '<text x="' + (x + bw / 2) + '" y="' + (y - 5) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2733">' + v + "</text>";
        s += '<text x="' + (x + bw / 2) + '" y="' + (padT + H + 16) + '" text-anchor="middle" font-size="12" fill="#1f2733">' + labels[i] + "</text>";
      });
      s += "</svg>";
      return s;
    }

    function pieHTML() {
      var cx = 110, cy = 110, r = 95, a0 = -Math.PI / 2, s = '<svg viewBox="0 0 320 220" width="320">';
      values.forEach(function (v, i) {
        var frac = total ? v / total : 0, a1 = a0 + frac * 2 * Math.PI;
        var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
        var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
        var large = frac > 0.5 ? 1 : 0;
        if (frac > 0.9999) { // cả vòng tròn
          s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + COLORS[i % COLORS.length] + '"/>';
        } else {
          s += '<path d="M ' + cx + " " + cy + " L " + x0.toFixed(1) + " " + y0.toFixed(1) +
            " A " + r + " " + r + " 0 " + large + " 1 " + x1.toFixed(1) + " " + y1.toFixed(1) +
            ' Z" fill="' + COLORS[i % COLORS.length] + '" stroke="#fff" stroke-width="1.5"/>';
        }
        var am = (a0 + a1) / 2, lx = cx + r * 0.62 * Math.cos(am), ly = cy + r * 0.62 * Math.sin(am);
        if (frac > 0.05) s += '<text x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">' + Math.round(frac * 100) + "%</text>";
        a0 = a1;
      });
      // chú giải
      labels.forEach(function (l, i) {
        var ly = 24 + i * 22;
        s += '<rect x="232" y="' + (ly - 10) + '" width="13" height="13" rx="2" fill="' + COLORS[i % COLORS.length] + '"/>';
        s += '<text x="250" y="' + (ly + 1) + '" font-size="12" fill="#1f2733">' + l + "</text>";
      });
      s += "</svg>";
      return s;
    }

    render();
  };
})();
