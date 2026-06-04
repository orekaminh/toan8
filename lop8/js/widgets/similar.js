/* =======================================================================
   similar.js — Widget cho Chương IX. Tam giác đồng dạng
     • "similar-triangles" : phóng to / thu nhỏ một tam giác theo tỉ số k
     • "pythagore"         : hình vuông trên ba cạnh tam giác vuông, a²+b²=c²
     • "similar-figures"   : một hình và ảnh đồng dạng (tỉ số k) của nó
   Vẽ bằng SVG thuần, chạy offline.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH8 = window.MATH8 || {};
  MATH8.Widgets = MATH8.Widgets || {};

  function poly(pts, attr) {
    return '<polygon points="' + pts.map(function (p) { return p.x + "," + p.y; }).join(" ") + '" ' + attr + "/>";
  }
  function T(x, y, txt, attr) { return '<text x="' + x + '" y="' + y + '" ' + attr + ">" + txt + "</text>"; }
  function lbl(x, y, txt, color) { return T(x, y, txt, 'font-size="13" font-weight="700" fill="' + (color || "#1f2733") + '" text-anchor="middle"'); }
  function r2(v) { return Number.isInteger(v) ? String(v) : (Math.round(v * 100) / 100).toString(); }

  MATH8.Widgets["similar"] = function (mount, cfg) {
    if (cfg.kind === "pythagore") return pythagore(mount, cfg);
    if (cfg.kind === "similar-figures") return simFigures(mount, cfg);
    return simTriangles(mount, cfg);
  };

  function sliderHTML(id, label, min, max, val, step) {
    return '<div class="slider-group"><label>' + label + '</label>' +
      '<input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + (step || 1) + '" value="' + val + '">' +
      '<span class="slider-val" id="' + id + '-v">' + val + '</span></div>';
  }

  /* ---------- Tam giác đồng dạng (phóng to / thu nhỏ) ---------- */
  function simTriangles(mount, cfg) {
    var base = [{ x: 0, y: 0 }, { x: 80, y: 0 }, { x: 22, y: -56 }]; // tam giác mẫu
    var a1 = { x: 40, y: 168 }, a2 = { x: 205, y: 182 }, scale = 20;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Tam giác $A'B'C'$ là ảnh <b>phóng to / thu nhỏ</b> của tam giác $ABC$ theo tỉ số $k$. Hai tam " +
        "giác <b>đồng dạng</b>: các góc bằng nhau, các cạnh tương ứng cùng gấp $k$ lần.") + "</p>" +
      '<div class="widget-controls">' + sliderHTML("si-k", "k (%) =", 50, 200, 150, 25) + "</div>" +
      '<div id="si-svg"></div><div class="widget-result" id="si-res"></div>';
    MATH8.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#si-svg"), resBox = mount.querySelector("#si-res"), kIn = mount.querySelector("#si-k");

    function draw() {
      var k = (+kIn.value) / 100;
      mount.querySelector("#si-k-v").textContent = kIn.value;
      var t1 = base.map(function (p) { return { x: p.x + a1.x, y: p.y + a1.y }; });
      var t2 = base.map(function (p) { return { x: a2.x + p.x * k, y: a2.y + p.y * k }; });
      var s = '<svg viewBox="0 0 400 240" width="380">';
      s += poly(t1, 'fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"');
      s += poly(t2, 'fill="#d1fae5" stroke="#0ea5a4" stroke-width="2.5"');
      var n1 = ["A", "B", "C"], n2 = ["A'", "B'", "C'"];
      t1.forEach(function (p, i) { s += lbl(p.x + (i === 0 ? -10 : i === 1 ? 10 : 0), p.y + (i === 2 ? -6 : 14), n1[i], "#2563eb"); });
      t2.forEach(function (p, i) { s += lbl(p.x + (i === 0 ? -10 : i === 1 ? 10 : 0), p.y + (i === 2 ? -6 : 14), n2[i], "#0ea5a4"); });
      s += "</svg>";
      box.innerHTML = s;
      var AB = 80 / scale, ABp = AB * k;
      resBox.innerHTML =
        "<div style='font-size:16px'>$\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số $k = " + r2(k) + "$</div>" +
        "<div style='font-size:14.5px'>$\\dfrac{A'B'}{AB} = \\dfrac{B'C'}{BC} = \\dfrac{C'A'}{CA} = " + r2(k) +
        "$. Ví dụ $AB = " + r2(AB) + " \\Rightarrow A'B' = " + r2(ABp) + "$.</div>";
      MATH8.typeset(resBox);
    }
    kIn.addEventListener("input", draw); draw();
  }

  /* ---------- Định lí Pythagore ---------- */
  function pythagore(mount, cfg) {
    mount.innerHTML =
      '<p class="widget-hint">Tam giác vuông có hai cạnh góc vuông $a, b$ và cạnh huyền $c$. Diện tích ' +
      'hình vuông dựng trên cạnh huyền ($c^2$) luôn bằng <b>tổng</b> diện tích hai hình vuông trên hai ' +
      'cạnh góc vuông ($a^2 + b^2$). Trượt $a, b$ để kiểm chứng.</p>' +
      '<div class="widget-controls">' + sliderHTML("py-a", "a =", 3, 6, 3) + sliderHTML("py-b", "b =", 3, 6, 4) + "</div>" +
      '<div id="py-svg"></div><div class="widget-result" id="py-res"></div>';
    var box = mount.querySelector("#py-svg"), resBox = mount.querySelector("#py-res");
    var aIn = mount.querySelector("#py-a"), bIn = mount.querySelector("#py-b");

    function draw() {
      var a = +aIn.value, b = +bIn.value, u = 17;
      mount.querySelector("#py-a-v").textContent = a;
      mount.querySelector("#py-b-v").textContent = b;
      var ox = 175, oy = 200;
      var C = { x: ox, y: oy }, A = { x: ox + a * u, y: oy }, B = { x: ox, y: oy - b * u };
      var s = '<svg viewBox="0 0 400 370" width="380">';
      // hình vuông trên cạnh a (đi xuống)
      s += poly([C, A, { x: A.x, y: A.y + a * u }, { x: C.x, y: C.y + a * u }], 'fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"');
      s += lbl(ox + a * u / 2, oy + a * u / 2 + 5, "a²", "#1d4ed8");
      // hình vuông trên cạnh b (sang trái)
      s += poly([C, B, { x: B.x - b * u, y: B.y }, { x: C.x - b * u, y: C.y }], 'fill="#99f6e4" stroke="#0ea5a4" stroke-width="1.5"');
      s += lbl(ox - b * u / 2, oy - b * u / 2 + 5, "b²", "#0f766e");
      // hình vuông trên cạnh huyền (ra ngoài)
      var n = { x: b * u, y: -a * u };
      s += poly([A, B, { x: B.x + n.x, y: B.y + n.y }, { x: A.x + n.x, y: A.y + n.y }], 'fill="#fde68a" stroke="#d97706" stroke-width="1.5"');
      var hc = { x: (A.x + B.x + n.x) / 2, y: (A.y + B.y + n.y) / 2 };
      s += lbl(hc.x, hc.y + 5, "c²", "#b45309");
      // tam giác vuông
      s += poly([C, A, B], 'fill="#fff" stroke="#1f2733" stroke-width="2"');
      s += '<polyline points="' + (C.x + 11) + "," + C.y + " " + (C.x + 11) + "," + (C.y - 11) + " " + C.x + "," + (C.y - 11) + '" fill="none" stroke="#1f2733" stroke-width="1.3"/>';
      s += lbl((C.x + A.x) / 2, oy + 15, "a", "#1f2733");
      s += lbl(ox - 9, (C.y + B.y) / 2, "b", "#1f2733");
      s += "</svg>";
      box.innerHTML = s;
      var c2 = a * a + b * b, c = Math.sqrt(c2);
      var cStr = Number.isInteger(c) ? String(c) : "\\sqrt{" + c2 + "} \\approx " + (Math.round(c * 100) / 100);
      resBox.innerHTML = "$$a^2 + b^2 = " + (a * a) + " + " + (b * b) + " = " + c2 + " = c^2 \\ \\Rightarrow\\ c = " + cStr + "$$";
      MATH8.typeset(resBox);
    }
    aIn.addEventListener("input", draw); bIn.addEventListener("input", draw); draw();
  }

  /* ---------- Hình đồng dạng ---------- */
  function simFigures(mount, cfg) {
    // hình "ngôi nhà": gồm thân + mái
    var house = [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 60, y: -40 }, { x: 30, y: -64 }, { x: 0, y: -40 }];
    var a1 = { x: 35, y: 175 }, a2 = { x: 210, y: 185 };
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Hai hình <b>đồng dạng</b> khi hình này là ảnh phóng to / thu nhỏ của hình kia (có thể kèm di " +
        "chuyển). Mọi độ dài đều nhân với cùng tỉ số $k$, còn các góc giữ nguyên.") + "</p>" +
      '<div class="widget-controls">' + sliderHTML("sf-k", "k (%) =", 50, 200, 150, 25) + "</div>" +
      '<div id="sf-svg"></div><div class="widget-result" id="sf-res"></div>';
    MATH8.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#sf-svg"), resBox = mount.querySelector("#sf-res"), kIn = mount.querySelector("#sf-k");

    function draw() {
      var k = (+kIn.value) / 100;
      mount.querySelector("#sf-k-v").textContent = kIn.value;
      var f1 = house.map(function (p) { return { x: p.x + a1.x, y: p.y + a1.y }; });
      var f2 = house.map(function (p) { return { x: a2.x + p.x * k, y: a2.y + p.y * k }; });
      var s = '<svg viewBox="0 0 400 230" width="380">';
      s += poly(f1, 'fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"');
      s += poly(f2, 'fill="#d1fae5" stroke="#0ea5a4" stroke-width="2.5"');
      s += "</svg>";
      box.innerHTML = s;
      resBox.innerHTML = "<div style='font-size:15px'>Hình bên phải đồng dạng với hình bên trái, tỉ số $k = " + r2(k) +
        "$ (mọi cạnh gấp $" + r2(k) + "$ lần, các góc không đổi).</div>";
      MATH8.typeset(resBox);
    }
    kIn.addEventListener("input", draw); draw();
  }
})();
