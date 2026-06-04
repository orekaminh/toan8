/* =======================================================================
   solid9.js — Hình trụ · hình nón · hình cầu (Chương X)
   cfg: { kinds: ["cylinder","cone","sphere"], hint }
   Bấm nút chọn loại; trượt r, h (hoặc R) → diện tích & thể tích.
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};
  var KL = { cylinder: "Hình trụ", cone: "Hình nón", sphere: "Hình cầu" };

  MATH9.Widgets["solid9"] = function (mount, cfg) {
    var kinds = cfg.kinds || ["cylinder", "cone", "sphere"];
    var cur = kinds[0];
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Trượt các kích thước để xem diện tích và thể tích thay đổi.") + "</p>" +
      '<div class="widget-controls" id="s9-btns" style="gap:8px"></div>' +
      '<div class="widget-controls" id="s9-sliders"></div>' +
      '<div id="s9-svg"></div><div class="widget-result" id="s9-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var btns = mount.querySelector("#s9-btns"), sliders = mount.querySelector("#s9-sliders");
    var box = mount.querySelector("#s9-svg"), res = mount.querySelector("#s9-res");

    if (kinds.length > 1) {
      kinds.forEach(function (k) {
        var b = MATH9.el("button", { class: "btn" });
        b.textContent = KL[k]; b.setAttribute("data-k", k);
        b.addEventListener("click", function () { cur = k; build(); });
        btns.appendChild(b);
      });
    }
    function slider(id, label, min, max, val) {
      return '<div class="slider-group"><label>' + label + "</label>" +
        '<input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="1" value="' + val + '">' +
        '<span class="slider-val" id="' + id + '-v">' + val + "</span></div>";
    }
    function pi(v) { return "\\approx " + (Math.round(v * 100) / 100); }

    function build() {
      btns.querySelectorAll("button").forEach(function (b) {
        var on = b.getAttribute("data-k") === cur;
        b.style.background = on ? "var(--c-primary-soft)" : "#fff";
        b.style.borderColor = on ? "var(--c-primary)" : "var(--c-line)";
      });
      if (cur === "sphere") sliders.innerHTML = slider("s9-R", "R =", 1, 6, 3);
      else sliders.innerHTML = slider("s9-r", "r =", 1, 5, 3) + slider("s9-h", "h =", 2, 7, 4);
      sliders.querySelectorAll("input").forEach(function (el) { el.addEventListener("input", draw); });
      draw();
    }
    function draw() {
      if (cur === "sphere") { var R = +mount.querySelector("#s9-R").value; mount.querySelector("#s9-R-v").textContent = R; drawSphere(R); return; }
      var r = +mount.querySelector("#s9-r").value, h = +mount.querySelector("#s9-h").value;
      mount.querySelector("#s9-r-v").textContent = r; mount.querySelector("#s9-h-v").textContent = h;
      if (cur === "cylinder") drawCyl(r, h); else drawCone(r, h);
    }
    function drawCyl(r, h) {
      var u = 16, rx = r * u, ry = Math.max(8, r * 5), hh = h * u + 10, cx = 140, top = 36;
      var bot = top + hh;
      var s = '<svg viewBox="0 0 280 220" width="280">';
      s += '<path d="M' + (cx - rx) + "," + top + " L" + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 0 " + (cx + rx) + "," + bot + " L" + (cx + rx) + "," + top + ' Z" fill="#e8f0fe" stroke="none"/>';
      s += '<path d="M' + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 1 " + (cx + rx) + "," + bot + '" fill="none" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="4 3"/>';
      s += '<path d="M' + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 0 " + (cx + rx) + "," + bot + '" fill="none" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + (cx - rx) + '" y1="' + top + '" x2="' + (cx - rx) + '" y2="' + bot + '" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + (cx + rx) + '" y1="' + top + '" x2="' + (cx + rx) + '" y2="' + bot + '" stroke="#2563eb" stroke-width="2"/>';
      s += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + rx + '" ry="' + ry + '" fill="#d1fae5" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + top + '" x2="' + (cx + rx) + '" y2="' + top + '" stroke="#dc2626" stroke-width="1.6"/><text x="' + (cx + rx / 2 - 3) + '" y="' + (top - 5) + '" font-size="11" fill="#dc2626" font-weight="700">r</text>';
      s += '<line x1="' + (cx + rx + 12) + '" y1="' + top + '" x2="' + (cx + rx + 12) + '" y2="' + bot + '" stroke="#0ea5a4" stroke-width="1.4"/><text x="' + (cx + rx + 15) + '" y="' + (top + hh / 2) + '" font-size="11" fill="#0ea5a4" font-weight="700">h</text>';
      s += "</svg>"; box.innerHTML = s;
      var Sxq = Math.PI * 2 * r * h, V = Math.PI * r * r * h;
      res.innerHTML =
        "<div style='font-size:15px'>$S_{xq} = 2\\pi r h = 2\\pi \\cdot " + r + " \\cdot " + h + " " + pi(Sxq) + "$</div>" +
        "<div style='font-size:15px'>$V = \\pi r^2 h = \\pi \\cdot " + r + "^2 \\cdot " + h + " " + pi(V) + "$</div>";
      MATH9.typeset(res);
    }
    function drawCone(r, h) {
      var u = 16, rx = r * u, ry = Math.max(8, r * 5), hh = h * u + 10, cx = 140, top = 36, bot = top + hh;
      var s = '<svg viewBox="0 0 280 220" width="280">';
      s += '<path d="M' + cx + "," + top + " L" + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 0 " + (cx + rx) + "," + bot + ' Z" fill="#e8f0fe" stroke="none"/>';
      s += '<path d="M' + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 1 " + (cx + rx) + "," + bot + '" fill="none" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="4 3"/>';
      s += '<path d="M' + (cx - rx) + "," + bot + " A" + rx + "," + ry + " 0 0 0 " + (cx + rx) + "," + bot + '" fill="none" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + top + '" x2="' + (cx - rx) + '" y2="' + bot + '" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + top + '" x2="' + (cx + rx) + '" y2="' + bot + '" stroke="#2563eb" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + top + '" x2="' + cx + '" y2="' + bot + '" stroke="#0ea5a4" stroke-width="1.3" stroke-dasharray="4 3"/><text x="' + (cx + 4) + '" y="' + (top + hh / 2) + '" font-size="11" fill="#0ea5a4" font-weight="700">h</text>';
      s += '<line x1="' + cx + '" y1="' + bot + '" x2="' + (cx + rx) + '" y2="' + bot + '" stroke="#dc2626" stroke-width="1.6"/><text x="' + (cx + rx / 2 - 3) + '" y="' + (bot + 14) + '" font-size="11" fill="#dc2626" font-weight="700">r</text>';
      s += "</svg>"; box.innerHTML = s;
      var l = Math.sqrt(r * r + h * h), Sxq = Math.PI * r * l, V = Math.PI * r * r * h / 3;
      res.innerHTML =
        "<div style='font-size:14.5px'>Đường sinh $l = \\sqrt{r^2 + h^2} = \\sqrt{" + (r * r) + " + " + (h * h) + "} " + pi(l) + "$</div>" +
        "<div style='font-size:15px'>$S_{xq} = \\pi r l " + pi(Sxq) + "$ &nbsp; $V = \\dfrac{1}{3}\\pi r^2 h " + pi(V) + "$</div>";
      MATH9.typeset(res);
    }
    function drawSphere(R) {
      var u = 16, rad = R * u + 6, cx = 140, cy = 110;
      var s = '<svg viewBox="0 0 280 220" width="280">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rad + '" fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"/>';
      s += '<path d="M' + (cx - rad) + "," + cy + " A" + rad + "," + (rad * 0.32).toFixed(1) + " 0 0 1 " + (cx + rad) + "," + cy + '" fill="none" stroke="#2563eb" stroke-width="1.3" stroke-dasharray="4 3"/>';
      s += '<path d="M' + (cx - rad) + "," + cy + " A" + rad + "," + (rad * 0.32).toFixed(1) + " 0 0 0 " + (cx + rad) + "," + cy + '" fill="none" stroke="#2563eb" stroke-width="2"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="#1f2733"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + rad) + '" y2="' + cy + '" stroke="#dc2626" stroke-width="1.6"/><text x="' + (cx + rad / 2 - 3) + '" y="' + (cy - 5) + '" font-size="11" fill="#dc2626" font-weight="700">R</text>';
      s += "</svg>"; box.innerHTML = s;
      var S = 4 * Math.PI * R * R, V = 4 / 3 * Math.PI * R * R * R;
      res.innerHTML =
        "<div style='font-size:15px'>$S = 4\\pi R^2 = 4\\pi \\cdot " + R + "^2 " + pi(S) + "$</div>" +
        "<div style='font-size:15px'>$V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot " + R + "^3 " + pi(V) + "$</div>";
      MATH9.typeset(res);
    }
    build();
  };
})();
