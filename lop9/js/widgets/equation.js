/* =======================================================================
   equation.js — Cân thăng bằng giải phương trình bậc nhất a·x + b = c
   Bấm nút thực hiện từng bước: "trừ b ở hai vế" → "chia hai vế cho a".
   Mỗi viên gạch xanh là một "x", viên cam nhỏ là một đơn vị "1".
   cfg: { a, b, c }  (chọn sao cho nghiệm x = (c-b)/a là số nguyên dương)
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  function eqTeX(a, b, c, step) {
    var bs = b >= 0 ? "+ " + b : "- " + (-b);
    if (step === 0) return (a === 1 ? "x" : a + "x") + " " + bs + " = " + c;
    if (step === 1) return (a === 1 ? "x" : a + "x") + " = " + (c - b);
    return "x = " + ((c - b) / a);
  }

  MATH9.Widgets["equation"] = function (mount, cfg) {
    var a = cfg.a != null ? cfg.a : 2, b = cfg.b != null ? cfg.b : 3, c = cfg.c != null ? cfg.c : 11;
    var step = 0;

    mount.innerHTML =
      '<p class="widget-hint">Mỗi gạch xanh là một $x$, mỗi ô cam là một đơn vị $1$. Cân đang thăng bằng ' +
      'nghĩa là hai vế bằng nhau. Bấm nút để <b>làm cùng một việc ở hai vế</b> cho tới khi còn lại $x = \\ldots$</p>' +
      '<div id="eq-svg"></div>' +
      '<div class="widget-result" id="eq-eqn"></div>' +
      '<div style="text-align:center;margin-top:8px">' +
      '  <button class="btn btn-hint" id="eq-btn"></button> ' +
      '  <button class="btn" id="eq-reset">↺ Làm lại</button></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));

    var box = mount.querySelector("#eq-svg"), eqnBox = mount.querySelector("#eq-eqn");
    var btn = mount.querySelector("#eq-btn"), reset = mount.querySelector("#eq-reset");

    function tiles(cx, list) {
      // vẽ một hàng gạch, căn giữa quanh cx, đáy ở y=150
      var w = list.reduce(function (s, t) { return s + (t === "x" ? 28 : 18) + 4; }, -4);
      var x = cx - w / 2, baseY = 150, s = "";
      list.forEach(function (t) {
        if (t === "x") {
          s += '<rect x="' + x + '" y="' + (baseY - 28) + '" width="28" height="28" rx="3" fill="#2563eb"/>' +
            '<text x="' + (x + 14) + '" y="' + (baseY - 9) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">x</text>';
          x += 32;
        } else {
          s += '<rect x="' + x + '" y="' + (baseY - 18) + '" width="18" height="18" rx="2" fill="#f59e0b"/>' +
            '<text x="' + (x + 9) + '" y="' + (baseY - 4) + '" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">1</text>';
          x += 22;
        }
      });
      return s;
    }

    function pans() {
      var L = [], Rr = [];
      var i;
      if (step === 0) {
        for (i = 0; i < a; i++) L.push("x");
        for (i = 0; i < b; i++) L.push("1");
        for (i = 0; i < c; i++) Rr.push("1");
      } else if (step === 1) {
        for (i = 0; i < a; i++) L.push("x");
        for (i = 0; i < c - b; i++) Rr.push("1");
      } else {
        L.push("x");
        for (i = 0; i < (c - b) / a; i++) Rr.push("1");
      }
      return [L, Rr];
    }

    function draw() {
      var pr = pans(), s = '<svg viewBox="0 0 360 175" width="340">';
      // đòn cân + trụ
      s += '<line x1="55" y1="60" x2="305" y2="60" stroke="#1f2733" stroke-width="4" stroke-linecap="round"/>';
      s += '<polygon points="180,60 165,120 195,120" fill="#9aa6bd"/>';
      s += '<rect x="150" y="120" width="60" height="8" rx="3" fill="#9aa6bd"/>';
      // hai đĩa
      s += '<line x1="95" y1="60" x2="95" y2="152" stroke="#9aa6bd" stroke-width="1.5"/>';
      s += '<line x1="265" y1="60" x2="265" y2="152" stroke="#9aa6bd" stroke-width="1.5"/>';
      s += '<rect x="35" y="152" width="120" height="7" rx="3" fill="#0ea5a4"/>';
      s += '<rect x="205" y="152" width="120" height="7" rx="3" fill="#0ea5a4"/>';
      s += tiles(95, pr[0]) + tiles(265, pr[1]);
      s += "</svg>";
      box.innerHTML = s;

      eqnBox.innerHTML = "$$" + eqTeX(a, b, c, step) + "$$";
      MATH9.typeset(eqnBox);

      if (step === 0) { btn.textContent = "➖ Trừ " + b + " ở hai vế"; btn.disabled = false; }
      else if (step === 1) { btn.textContent = "➗ Chia hai vế cho " + a; btn.disabled = false; }
      else { btn.textContent = "✓ Đã tìm được x = " + ((c - b) / a); btn.disabled = true; }
    }

    btn.addEventListener("click", function () { if (step < 2) { step++; draw(); } });
    reset.addEventListener("click", function () { step = 0; draw(); });
    draw();
  };
})();
