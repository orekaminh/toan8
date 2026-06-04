/* =======================================================================
   geometry.js — Widget hình học tương tác (Chương III. Tứ giác)
   Vẽ bằng SVG thuần, chạy offline. Các loại (cfg.kind):
     • "angle-sum"     : kéo 4 đỉnh → tổng 4 góc luôn = 360°
     • "parallelogram" : hình bình hành (trượt thanh) — cạnh đối, đường chéo
     • "rectangle"     : hình chữ nhật — 4 góc vuông, 2 đường chéo bằng nhau
     • "rhombus"       : hình thoi — 4 cạnh bằng, 2 đường chéo vuông góc
     • "trapezoid"     : hình thang cân — 2 cạnh bên & 2 đường chéo bằng nhau
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  // ----- tiện ích SVG -----
  function L(x1, y1, x2, y2, attr) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' + (attr || "") + "/>";
  }
  function T(x, y, txt, attr) {
    return '<text x="' + x + '" y="' + y + '" ' + (attr || "") + ">" + txt + "</text>";
  }
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  function norm(vx, vy) { var d = Math.hypot(vx, vy) || 1; return { x: vx / d, y: vy / d }; }

  // dấu gạch bằng nhau trên cạnh PQ (n gạch nhỏ vuông góc giữa cạnh)
  function ticks(P, Q, n, color) {
    var m = mid(P, Q);
    var u = norm(Q.x - P.x, Q.y - P.y);          // dọc cạnh
    var pr = { x: -u.y, y: u.x };                  // vuông góc
    var s = "";
    for (var i = 0; i < n; i++) {
      var off = (i - (n - 1) / 2) * 6;
      var c = { x: m.x + u.x * off, y: m.y + u.y * off };
      s += L(c.x - pr.x * 6, c.y - pr.y * 6, c.x + pr.x * 6, c.y + pr.y * 6,
        'stroke="' + (color || "#dc2626") + '" stroke-width="2"');
    }
    return s;
  }
  // mũi tên chỉ hai cạnh song song (chevron giữa cạnh)
  function chevron(P, Q, n, color) {
    var m = mid(P, Q);
    var u = norm(Q.x - P.x, Q.y - P.y);
    var pr = { x: -u.y, y: u.x };
    var s = "";
    for (var i = 0; i < n; i++) {
      var bx = m.x + u.x * (i * 7 - 3), by = m.y + u.y * (i * 7 - 3);
      var tip = { x: bx + u.x * 6, y: by + u.y * 6 };
      s += L(bx - pr.x * 5, by - pr.y * 5, tip.x, tip.y, 'stroke="' + (color || "#0ea5a4") + '" stroke-width="2"');
      s += L(bx + pr.x * 5, by + pr.y * 5, tip.x, tip.y, 'stroke="' + (color || "#0ea5a4") + '" stroke-width="2"');
    }
    return s;
  }
  // ô vuông góc nhỏ tại đỉnh C, giữa hai tia tới A và B
  function rightAngle(C, A, B, size, color) {
    var u = norm(A.x - C.x, A.y - C.y), v = norm(B.x - C.x, B.y - C.y);
    var s = size || 12;
    var p1 = { x: C.x + u.x * s, y: C.y + u.y * s };
    var p2 = { x: C.x + u.x * s + v.x * s, y: C.y + u.y * s + v.y * s };
    var p3 = { x: C.x + v.x * s, y: C.y + v.y * s };
    return '<polyline points="' + p1.x + "," + p1.y + " " + p2.x + "," + p2.y + " " + p3.x + "," + p3.y +
      '" fill="none" stroke="' + (color || "#1f2733") + '" stroke-width="1.5"/>';
  }
  function vlabel(P, C, txt) {
    // đặt nhãn đỉnh hơi lệch ra ngoài (xa tâm C)
    var u = norm(P.x - C.x, P.y - C.y);
    return T(P.x + u.x * 16, P.y + u.y * 16 + 5, txt, 'font-size="15" font-weight="700" fill="#1f2733" text-anchor="middle"');
  }

  // =====================================================================
  MATH9.Widgets["geometry"] = function (mount, cfg) {
    if (cfg.kind === "angle-sum") return angleSum(mount, cfg);
    return shapeExplorer(mount, cfg);
  };

  /* ============== Tổng 4 góc của tứ giác = 360° ===================== */
  function angleSum(mount, cfg) {
    var vbW = 360, vbH = 280;
    // 4 đỉnh ban đầu (lồi), thứ tự A,B,C,D
    var V = [
      { x: 80, y: 70, name: "A" },
      { x: 285, y: 95, name: "B" },
      { x: 250, y: 220, name: "C" },
      { x: 60, y: 205, name: "D" },
    ];

    mount.innerHTML =
      '<p class="widget-hint">Dùng chuột (hoặc ngón tay) <b>kéo các đỉnh</b> $A, B, C, D$ để đổi hình dạng ' +
      "tứ giác. Dù kéo thế nào, <b>tổng bốn góc luôn bằng $360^\\circ$</b>.</p>" +
      '<div id="as-svg"></div>' +
      '<div class="widget-result" id="as-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#as-svg");
    var resBox = mount.querySelector("#as-res");
    var cen = { x: 0, y: 0 };

    function angleAt(i) {
      var p = V[(i + 3) % 4], c = V[i], n = V[(i + 1) % 4];
      var a1 = Math.atan2(p.y - c.y, p.x - c.x);
      var a2 = Math.atan2(n.y - c.y, n.x - c.x);
      var d = Math.abs(a1 - a2) * 180 / Math.PI;
      if (d > 180) d = 360 - d;
      return d;
    }

    function draw() {
      cen.x = (V[0].x + V[1].x + V[2].x + V[3].x) / 4;
      cen.y = (V[0].y + V[1].y + V[2].y + V[3].y) / 4;
      var pts = V.map(function (p) { return p.x + "," + p.y; }).join(" ");
      var s = '<svg viewBox="0 0 ' + vbW + " " + vbH + '" width="360" style="touch-action:none">';
      s += '<polygon points="' + pts + '" fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"/>';
      var angs = [0, 1, 2, 3].map(angleAt);
      V.forEach(function (p, i) {
        // nhãn số đo góc (đặt phía trong, gần tâm)
        var u = norm(cen.x - p.x, cen.y - p.y);
        s += T(p.x + u.x * 26, p.y + u.y * 26 + 4, Math.round(angs[i]) + "°",
          'font-size="13" font-weight="700" fill="#1d4ed8" text-anchor="middle"');
        s += vlabel(p, cen, p.name);
        s += '<circle cx="' + p.x + '" cy="' + p.y + '" r="9" fill="#f59e0b" stroke="#fff" stroke-width="2" class="as-h" data-i="' + i + '" style="cursor:grab"/>';
      });
      s += "</svg>";
      box.innerHTML = s;

      var sum = Math.round(angs.reduce(function (a, b) { return a + b; }, 0));
      resBox.innerHTML = "$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = " + sum + "^\\circ$$";
      MATH9.typeset(resBox);
      bindHandles();
    }

    var active = -1;
    function svgPoint(e) {
      var svg = box.querySelector("svg");
      var r = svg.getBoundingClientRect();
      var cx = (e.touches ? e.touches[0].clientX : e.clientX);
      var cy = (e.touches ? e.touches[0].clientY : e.clientY);
      return { x: (cx - r.left) * vbW / r.width, y: (cy - r.top) * vbH / r.height };
    }
    function onMove(e) {
      if (active < 0) return;
      var p = svgPoint(e);
      V[active].x = Math.max(16, Math.min(vbW - 16, p.x));
      V[active].y = Math.max(16, Math.min(vbH - 16, p.y));
      draw();
      if (e.cancelable) e.preventDefault();
    }
    function onUp() { active = -1; }
    function bindHandles() {
      box.querySelectorAll(".as-h").forEach(function (h) {
        h.addEventListener("pointerdown", function (e) { active = +h.getAttribute("data-i"); e.preventDefault(); });
      });
    }
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);

    draw();
  }

  /* ============== Bộ khám phá các tứ giác đặc biệt ================= */
  function shapeExplorer(mount, cfg) {
    var kind = cfg.kind;
    var vbW = 360, vbH = 250;

    // cấu hình thanh trượt theo từng loại
    var SLIDERS = {
      parallelogram: [
        { id: "a", label: "đáy", min: 4, max: 9, val: 7 },
        { id: "h", label: "cao", min: 3, max: 6, val: 4 },
        { id: "s", label: "xiên", min: 0, max: 4, val: 2 },
      ],
      rectangle: [
        { id: "a", label: "rộng", min: 4, max: 9, val: 8 },
        { id: "b", label: "cao", min: 3, max: 6, val: 5 },
      ],
      rhombus: [
        { id: "d1", label: "chéo 1", min: 4, max: 9, val: 8 },
        { id: "d2", label: "chéo 2", min: 4, max: 9, val: 5 },
      ],
      trapezoid: [
        { id: "B", label: "đáy lớn", min: 6, max: 10, val: 9 },
        { id: "b", label: "đáy nhỏ", min: 2, max: 5, val: 4 },
        { id: "h", label: "cao", min: 3, max: 6, val: 4 },
      ],
    };
    var HINT = {
      parallelogram: "Trượt thanh đổi hình bình hành. Cạnh cùng dấu (gạch / mũi tên) thì <b>bằng nhau và song song</b>; hai đường chéo cắt nhau tại <b>trung điểm</b> mỗi đường.",
      rectangle: "Hình chữ nhật có <b>bốn góc vuông</b>; hai đường chéo <b>bằng nhau</b> và cắt nhau tại trung điểm.",
      rhombus: "Hình thoi có <b>bốn cạnh bằng nhau</b>; hai đường chéo <b>vuông góc</b> và cắt nhau tại trung điểm. Khi hai đường chéo bằng nhau → thành <b>hình vuông</b>.",
      trapezoid: "Hình thang cân: hai <b>cạnh bên bằng nhau</b>, hai <b>góc kề một đáy bằng nhau</b>, hai <b>đường chéo bằng nhau</b>.",
    };

    var defs = SLIDERS[kind] || [];
    var html = '<p class="widget-hint">' + (HINT[kind] || "") + '</p><div class="widget-controls">';
    defs.forEach(function (d) {
      html +=
        '<div class="slider-group"><label>' + d.label + "</label>" +
        '<input type="range" id="ge-' + d.id + '" min="' + d.min + '" max="' + d.max + '" value="' + d.val + '">' +
        '<span class="slider-val" id="ge-' + d.id + '-v">' + d.val + "</span></div>";
    });
    html += "</div><div id=\"ge-svg\"></div><div class=\"widget-result\" id=\"ge-res\"></div>";
    mount.innerHTML = html;

    var box = mount.querySelector("#ge-svg");
    var resBox = mount.querySelector("#ge-res");
    var ins = {};
    defs.forEach(function (d) { ins[d.id] = mount.querySelector("#ge-" + d.id); });

    function val(id) { return parseInt(ins[id].value, 10); }
    var U = 26; // px mỗi đơn vị

    function draw() {
      defs.forEach(function (d) { mount.querySelector("#ge-" + d.id + "-v").textContent = ins[d.id].value; });
      var cx = vbW / 2, cy = vbH / 2;
      var P = {}, s = "", res = "";
      var sk = 'fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"';
      var diag = 'stroke="#d97706" stroke-width="1.6" stroke-dasharray="5 4"';

      if (kind === "parallelogram") {
        var a = val("a") * U, h = val("h") * U, sx = val("s") * U;
        P.A = { x: cx - a / 2 - sx / 2, y: cy + h / 2 };
        P.B = { x: P.A.x + a, y: P.A.y };
        P.C = { x: P.B.x + sx, y: P.A.y - h };
        P.D = { x: P.A.x + sx, y: P.A.y - h };
        s += poly([P.A, P.B, P.C, P.D], sk);
        s += L(P.A.x, P.A.y, P.C.x, P.C.y, diag) + L(P.B.x, P.B.y, P.D.x, P.D.y, diag);
        s += dot(mid(P.A, P.C));
        s += ticks(P.A, P.B, 1) + ticks(P.D, P.C, 1);
        s += ticks(P.A, P.D, 2) + ticks(P.B, P.C, 2);
        s += chevron(P.A, P.B, 1) + chevron(P.D, P.C, 1);
        s += chevron(P.A, P.D, 2) + chevron(P.B, P.C, 2);
        res = "$AB = CD$ ; $AD = BC$ — các cạnh đối bằng nhau và song song.";
      } else if (kind === "rectangle") {
        var aw = val("a") * U, bh = val("b") * U;
        P.A = { x: cx - aw / 2, y: cy + bh / 2 };
        P.B = { x: cx + aw / 2, y: cy + bh / 2 };
        P.C = { x: cx + aw / 2, y: cy - bh / 2 };
        P.D = { x: cx - aw / 2, y: cy - bh / 2 };
        s += poly([P.A, P.B, P.C, P.D], sk);
        s += L(P.A.x, P.A.y, P.C.x, P.C.y, diag) + L(P.B.x, P.B.y, P.D.x, P.D.y, diag);
        s += dot(mid(P.A, P.C));
        [["A", "B", "D"], ["B", "A", "C"], ["C", "B", "D"], ["D", "A", "C"]].forEach(function (t) {
          s += rightAngle(P[t[0]], P[t[1]], P[t[2]], 12);
        });
        var dg = Math.round(Math.hypot(aw, bh) / U * 10) / 10;
        res = "Hai đường chéo $AC = BD = " + dg + "$ (đơn vị) — <b>bằng nhau</b>.";
      } else if (kind === "rhombus") {
        var d1 = val("d1") * U, d2 = val("d2") * U;
        P.A = { x: cx, y: cy + d2 / 2 };   // dưới
        P.B = { x: cx + d1 / 2, y: cy };   // phải
        P.C = { x: cx, y: cy - d2 / 2 };   // trên
        P.D = { x: cx - d1 / 2, y: cy };   // trái
        s += poly([P.A, P.B, P.C, P.D], sk);
        s += L(P.A.x, P.A.y, P.C.x, P.C.y, diag) + L(P.B.x, P.B.y, P.D.x, P.D.y, diag);
        s += rightAngle({ x: cx, y: cy }, P.B, P.C, 11);
        s += ticks(P.A, P.B, 1) + ticks(P.B, P.C, 1) + ticks(P.C, P.D, 1) + ticks(P.D, P.A, 1);
        var side = Math.round(Math.hypot(d1 / 2, d2 / 2) / U * 10) / 10;
        var square = val("d1") === val("d2");
        res = "Bốn cạnh bằng nhau ($= " + side + "$); hai đường chéo vuông góc." +
          (square ? " <b>Hai đường chéo bằng nhau → đây là HÌNH VUÔNG!</b>" : "");
      } else if (kind === "trapezoid") {
        var Bb = val("B") * U, bb = Math.min(val("b"), val("B") - 1) * U, hh = val("h") * U;
        P.A = { x: cx - Bb / 2, y: cy + hh / 2 };
        P.B = { x: cx + Bb / 2, y: cy + hh / 2 };
        P.C = { x: cx + bb / 2, y: cy - hh / 2 };
        P.D = { x: cx - bb / 2, y: cy - hh / 2 };
        s += poly([P.A, P.B, P.C, P.D], sk);
        s += L(P.A.x, P.A.y, P.C.x, P.C.y, diag) + L(P.B.x, P.B.y, P.D.x, P.D.y, diag);
        s += ticks(P.A, P.D, 1) + ticks(P.B, P.C, 1);
        s += chevron(P.A, P.B, 1) + chevron(P.D, P.C, 1);
        res = "Hai cạnh bên $AD = BC$ và hai đường chéo $AC = BD$ — đều <b>bằng nhau</b>.";
      }

      // nhãn đỉnh
      var c2 = { x: cx, y: cy };
      ["A", "B", "C", "D"].forEach(function (k) { if (P[k]) s += vlabel(P[k], c2, k); });

      box.innerHTML = '<svg viewBox="0 0 ' + vbW + " " + vbH + '" width="360">' + s + "</svg>";
      resBox.innerHTML = res;
      MATH9.typeset(resBox);
    }

    function poly(arr, attr) {
      return '<polygon points="' + arr.map(function (p) { return p.x + "," + p.y; }).join(" ") + '" ' + attr + "/>";
    }
    function dot(p) { return '<circle cx="' + p.x + '" cy="' + p.y + '" r="3.5" fill="#d97706"/>'; }

    defs.forEach(function (d) { ins[d.id].addEventListener("input", draw); });
    draw();
  }
})();
