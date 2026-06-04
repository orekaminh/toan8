/* =======================================================================
   area-model.js — Mô hình diện tích
   • mode "multiply": minh hoạ (x + a)(x + b) bằng hình chữ nhật chia 4 ô,
     có thanh trượt a, b; biểu thức kết quả cập nhật theo thời gian thực.
   • mode "divide": minh hoạ chia đa thức cho đơn thức như "diện tích ÷ một
     cạnh = cạnh kia"; bấm để hiện thương.
   Vẽ bằng SVG thuần, không phụ thuộc thư viện ngoài → chạy offline.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  var SVGNS = "http://www.w3.org/2000/svg";
  function svg(tag, attrs) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function term(coef, varText) {
    // tạo chuỗi như "5x", "x", "-x", "6" để hiển thị gọn
    if (!varText) return String(coef);
    if (coef === 1) return varText;
    if (coef === -1) return "-" + varText;
    return coef + varText;
  }

  // ----------------------------------------------------------------------
  MATH9.Widgets["area-model"] = function (mount, cfg) {
    if (cfg.mode === "divide") return divideModel(mount, cfg);
    return multiplyModel(mount, cfg);
  };

  /* ============== (x + a)(x + b) ===================================== */
  function multiplyModel(mount, cfg) {
    var a = cfg.a != null ? cfg.a : 2;
    var b = cfg.b != null ? cfg.b : 3;
    var aMin = 1, aMax = 5, bMin = 1, bMax = 5;

    mount.innerHTML =
      '<p class="widget-hint">Kéo thanh trượt để đổi <b>a</b> và <b>b</b>. ' +
      'Hình chữ nhật cạnh <b>(x + a)</b> và <b>(x + b)</b> được chia thành 4 ô — ' +
      'tổng diện tích 4 ô chính là kết quả phép nhân.</p>' +
      '<div class="widget-controls">' +
      '  <div class="slider-group"><label>a =</label>' +
      '    <input type="range" id="am-a" min="' + aMin + '" max="' + aMax + '" value="' + a + '">' +
      '    <span class="slider-val" id="am-a-v">' + a + '</span></div>' +
      '  <div class="slider-group"><label>b =</label>' +
      '    <input type="range" id="am-b" min="' + bMin + '" max="' + bMax + '" value="' + b + '">' +
      '    <span class="slider-val" id="am-b-v">' + b + '</span></div>' +
      '</div>' +
      '<div id="am-svg"></div>' +
      '<div class="widget-result" id="am-res"></div>';

    var svgBox = mount.querySelector("#am-svg");
    var resBox = mount.querySelector("#am-res");
    var aIn = mount.querySelector("#am-a");
    var bIn = mount.querySelector("#am-b");

    function draw() {
      a = parseInt(aIn.value, 10);
      b = parseInt(bIn.value, 10);
      mount.querySelector("#am-a-v").textContent = a;
      mount.querySelector("#am-b-v").textContent = b;

      var X = 90;      // độ dài tượng trưng cho x
      var U = 24;      // độ dài 1 đơn vị
      var pad = 46;
      var wA = a * U, hB = b * U;
      var W = X + wA, H = X + hB;
      var vbW = W + pad * 2, vbH = H + pad * 2;

      var s = '<svg viewBox="0 0 ' + vbW + " " + vbH + '" width="' + Math.min(vbW, 460) + '">';
      var ox = pad, oy = pad;

      // 4 ô: [x·x] [a·x] / [x·b] [a·b]
      function rect(x, y, w, h, fill, label) {
        s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
          '" fill="' + fill + '" stroke="#fff" stroke-width="2"/>';
        s += '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) +
          '" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">' + label + "</text>";
      }
      rect(ox, oy, X, X, "#2563eb", "x²");
      rect(ox + X, oy, wA, X, "#0ea5a4", term(a, "x"));
      rect(ox, oy + X, X, hB, "#14b8a6", term(b, "x"));
      rect(ox + X, oy + X, wA, hB, "#f59e0b", String(a * b));

      // nhãn cạnh trên: x | a
      s += sideLabel(ox + X / 2, oy - 12, "x");
      s += sideLabel(ox + X + wA / 2, oy - 12, "+ " + a);
      // nhãn cạnh trái: x | b  (xoay dọc)
      s += sideLabelV(ox - 14, oy + X / 2, "x");
      s += sideLabelV(ox - 14, oy + X + hB / 2, "+ " + b);

      // ngoặc tổng cạnh
      s += '<text x="' + (ox + W / 2) + '" y="' + (oy + H + 30) +
        '" text-anchor="middle" font-size="15" fill="#1f2733">chiều rộng = x + ' + a + "</text>";
      s += '<text x="' + (ox + W + 30) + '" y="' + (oy + H / 2) +
        '" text-anchor="middle" font-size="15" fill="#1f2733" transform="rotate(90 ' +
        (ox + W + 30) + " " + (oy + H / 2) + ')">chiều cao = x + ' + b + "</text>";

      s += "</svg>";
      svgBox.innerHTML = s;

      var sum = a + b, prod = a * b;
      resBox.innerHTML =
        "$$(x+" + a + ")(x+" + b + ") = x^2 + " + sum + "x + " + prod + "$$";
      MATH9.typeset(resBox);
    }

    function sideLabel(x, y, txt) {
      return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2733">' + txt + "</text>";
    }
    function sideLabelV(x, y, txt) {
      return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="15" font-weight="700" fill="#1f2733" transform="rotate(-90 ' + x + " " + y + ')">' + txt + "</text>";
    }

    aIn.addEventListener("input", draw);
    bIn.addEventListener("input", draw);
    draw();
  }

  /* ============== chia đa thức cho đơn thức ========================== */
  function divideModel(mount, cfg) {
    // cfg: { divisor:"2x", terms:[{area:"6x^3", quo:"3x^2"},{area:"4x^2", quo:"2x"}],
    //        expr:"\\frac{6x^3+4x^2}{2x}=3x^2+2x" }
    var terms = cfg.terms || [];
    var colors = ["#2563eb", "#0ea5a4", "#f59e0b", "#8b5cf6"];

    mount.innerHTML =
      '<p class="widget-hint">Chia đa thức cho đơn thức giống như tìm <b>chiều cao</b> khi biết ' +
      '<b>diện tích</b> và <b>chiều rộng</b>: mỗi mảnh diện tích (một hạng tử) chia cho cạnh ' +
      '<b>' + cfg.divisor + '</b> sẽ cho một hạng tử của thương. Bấm nút để hiện thương.</p>' +
      '<div id="dm-svg"></div>' +
      '<div style="text-align:center;margin-top:10px">' +
      '  <button class="btn btn-hint" id="dm-btn">👁️ Hiện thương</button></div>' +
      '<div class="widget-result" id="dm-res" style="display:none"></div>';

    var svgBox = mount.querySelector("#dm-svg");
    var revealed = false;

    function draw() {
      var colW = 120, H = 110, pad = 56, gap = 0;
      var W = colW * terms.length;
      var vbW = W + pad * 2, vbH = H + pad * 2;
      var s = '<svg viewBox="0 0 ' + vbW + " " + vbH + '" width="' + Math.min(vbW, 460) + '">';
      var ox = pad, oy = pad;

      // cạnh trái = số chia (chiều rộng)
      s += '<text x="' + (ox - 18) + '" y="' + (oy + H / 2) +
        '" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2733" transform="rotate(-90 ' +
        (ox - 18) + " " + (oy + H / 2) + ')">' + cfg.divisor + "</text>";
      s += '<text x="' + (ox - 36) + '" y="' + (oy + H / 2) +
        '" text-anchor="middle" font-size="12" fill="#55617a" transform="rotate(-90 ' +
        (ox - 36) + " " + (oy + H / 2) + ')">(số chia)</text>';

      terms.forEach(function (t, i) {
        var x = ox + i * (colW + gap);
        s += '<rect x="' + x + '" y="' + oy + '" width="' + colW + '" height="' + H +
          '" fill="' + colors[i % colors.length] + '" stroke="#fff" stroke-width="2"/>';
        // diện tích (hạng tử bị chia)
        s += '<text x="' + (x + colW / 2) + '" y="' + (oy + H / 2 + 6) +
          '" text-anchor="middle" font-size="17" font-weight="700" fill="#fff">' + t.area + "</text>";
        // thương (chiều cao) — hiện khi reveal
        if (revealed) {
          s += '<text x="' + (x + colW / 2) + '" y="' + (oy - 12) +
            '" text-anchor="middle" font-size="16" font-weight="700" fill="#16a34a">' + t.quo + "</text>";
        } else {
          s += '<text x="' + (x + colW / 2) + '" y="' + (oy - 12) +
            '" text-anchor="middle" font-size="16" fill="#9aa6bd">?</text>';
        }
      });
      s += "</svg>";
      svgBox.innerHTML = s;
    }

    mount.querySelector("#dm-btn").addEventListener("click", function () {
      revealed = !revealed;
      this.textContent = revealed ? "🙈 Ẩn thương" : "👁️ Hiện thương";
      var res = mount.querySelector("#dm-res");
      if (revealed && cfg.expr) {
        res.innerHTML = "$$" + cfg.expr + "$$";
        res.style.display = "block";
        MATH9.typeset(res);
      } else {
        res.style.display = "none";
      }
      draw();
    });

    draw();
  }
})();
