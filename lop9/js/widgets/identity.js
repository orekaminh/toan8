/* =======================================================================
   identity.js — Widget cho hằng đẳng thức
     • mode "square" : mô hình diện tích (a+b)² = a² + 2ab + b² (trượt a, b)
     • mode "check"  : kiểm chứng một đẳng thức bằng SỐ — trượt biến, tính cả
                       hai vế và cho thấy chúng luôn bằng nhau.
   Vẽ bằng SVG thuần, chạy offline.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  function fmt(v) {
    return Number.isInteger(v) ? String(v) : (Math.round(v * 1000) / 1000).toString();
  }

  MATH9.Widgets["identity"] = function (mount, cfg) {
    if (cfg.mode === "check") return checkId(mount, cfg);
    return squareId(mount, cfg);
  };

  /* ---------- (a+b)² = a² + 2ab + b² ---------- */
  function squareId(mount, cfg) {
    var a = cfg.a != null ? cfg.a : 3, b = cfg.b != null ? cfg.b : 2;
    mount.innerHTML =
      '<p class="widget-hint">Hình vuông cạnh $(a+b)$ được chia thành 4 mảnh: một $a^2$, hai mảnh $ab$ ' +
      'và một $b^2$. Cộng lại đúng bằng $(a+b)^2$. Trượt thanh để đổi $a, b$.</p>' +
      '<div class="widget-controls">' +
      '  <div class="slider-group"><label>a =</label><input type="range" id="sq-a" min="1" max="6" value="' + a + '"><span class="slider-val" id="sq-a-v">' + a + '</span></div>' +
      '  <div class="slider-group"><label>b =</label><input type="range" id="sq-b" min="1" max="6" value="' + b + '"><span class="slider-val" id="sq-b-v">' + b + '</span></div>' +
      '</div><div id="sq-svg"></div><div class="widget-result" id="sq-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#sq-svg"), resBox = mount.querySelector("#sq-res");
    var aIn = mount.querySelector("#sq-a"), bIn = mount.querySelector("#sq-b");

    function draw() {
      a = +aIn.value; b = +bIn.value;
      mount.querySelector("#sq-a-v").textContent = a;
      mount.querySelector("#sq-b-v").textContent = b;
      var U = 26, pad = 40, A = a * U, B = b * U, S = A + B, vb = S + pad * 2, ox = pad, oy = pad;
      function rect(x, y, w, h, fill, label) {
        return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="#fff" stroke-width="2"/>' +
          '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 5) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">' + label + '</text>';
      }
      var s = '<svg viewBox="0 0 ' + vb + ' ' + vb + '" width="' + Math.min(vb, 380) + '">';
      s += rect(ox, oy, A, A, "#2563eb", "a²");
      s += rect(ox + A, oy, B, A, "#0ea5a4", "ab");
      s += rect(ox, oy + A, A, B, "#14b8a6", "ab");
      s += rect(ox + A, oy + A, B, B, "#f59e0b", "b²");
      s += '<text x="' + (ox + A / 2) + '" y="' + (oy - 12) + '" text-anchor="middle" font-size="14" font-weight="700">a</text>';
      s += '<text x="' + (ox + A + B / 2) + '" y="' + (oy - 12) + '" text-anchor="middle" font-size="14" font-weight="700">b</text>';
      s += '<text x="' + (ox - 14) + '" y="' + (oy + A / 2 + 5) + '" text-anchor="middle" font-size="14" font-weight="700">a</text>';
      s += '<text x="' + (ox - 14) + '" y="' + (oy + A + B / 2 + 5) + '" text-anchor="middle" font-size="14" font-weight="700">b</text>';
      s += "</svg>";
      box.innerHTML = s;

      var sum = (a + b) * (a + b);
      resBox.innerHTML =
        "$$(a+b)^2 = a^2 + 2ab + b^2$$" +
        "<div style='font-size:15px'>Với $a=" + a + ", b=" + b + "$: $(" + a + "+" + b + ")^2 = " + sum +
        " = " + (a * a) + " + " + (2 * a * b) + " + " + (b * b) + "$</div>";
      MATH9.typeset(resBox);
    }
    aIn.addEventListener("input", draw); bIn.addEventListener("input", draw);
    draw();
  }

  /* ---------- Kiểm chứng đẳng thức bằng số ---------- */
  function checkId(mount, cfg) {
    var vars = cfg.vars || [{ id: "a", label: "a", min: 1, max: 6, val: 3 }, { id: "b", label: "b", min: 1, max: 6, val: 2 }];
    var ctrl = "";
    vars.forEach(function (v) {
      ctrl += '<div class="slider-group"><label>' + v.label + ' =</label>' +
        '<input type="range" id="ck-' + v.id + '" min="' + v.min + '" max="' + v.max + '" value="' + v.val + '">' +
        '<span class="slider-val" id="ck-' + v.id + '-v">' + v.val + '</span></div>';
    });
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint || "Trượt thanh đổi giá trị các biến. Dù chọn số nào, <b>hai vế của đẳng thức luôn bằng nhau</b> — đó là ý nghĩa của 'hằng đẳng thức'.") + '</p>' +
      '<div class="widget-result">$$' + cfg.latex + '$$</div>' +
      '<div class="widget-controls">' + ctrl + '</div>' +
      '<div class="widget-result" id="ck-res"></div>';
    MATH9.typeset(mount);

    var resBox = mount.querySelector("#ck-res");
    var ins = {};
    vars.forEach(function (v) { ins[v.id] = mount.querySelector("#ck-" + v.id); });

    function draw() {
      var val = {};
      vars.forEach(function (v) {
        val[v.id] = +ins[v.id].value;
        mount.querySelector("#ck-" + v.id + "-v").textContent = ins[v.id].value;
      });
      var lhs = cfg.lhs(val), rhs = cfg.rhs(val);
      var eq = Math.abs(lhs - rhs) < 1e-9;
      var sub = vars.map(function (v) { return v.label + "=" + val[v.id]; }).join(", ");
      resBox.innerHTML =
        "<div style='font-size:15px'>Với $" + sub + "$:</div>" +
        "<div style='font-size:17px'>vế trái $= " + fmt(lhs) + "$ ; vế phải $= " + fmt(rhs) + "$ &nbsp; " +
        (eq ? "<b style='color:#16a34a'>✓ bằng nhau</b>" : "<b style='color:#dc2626'>✗</b>") + "</div>";
      MATH9.typeset(resBox);
    }
    vars.forEach(function (v) { ins[v.id].addEventListener("input", draw); });
    draw();
  }
})();
