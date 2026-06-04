/* =======================================================================
   fraction.js — Widget cho phân thức đại số
     • mode "evaluate" : trượt x, tính giá trị phân thức; khi mẫu = 0 báo
                         "KHÔNG xác định" (minh hoạ điều kiện xác định).
     • mode "simplify" : hiện từng bước rút gọn phân thức (bấm để mở dần).
   Chạy offline, không phụ thuộc thư viện ngoài.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};

  function fmt(v) {
    if (!isFinite(v)) return "—";
    return Number.isInteger(v) ? String(v) : (Math.round(v * 1000) / 1000).toString();
  }

  MATH9.Widgets["fraction"] = function (mount, cfg) {
    if (cfg.mode === "simplify") return simplify(mount, cfg);
    return evaluate(mount, cfg);
  };

  /* ---------- Điều kiện xác định ---------- */
  function evaluate(mount, cfg) {
    var xMin = cfg.xMin != null ? cfg.xMin : -3, xMax = cfg.xMax != null ? cfg.xMax : 5;
    var x0 = cfg.x != null ? cfg.x : xMin;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Phân thức chỉ <b>xác định</b> khi mẫu thức khác $0$. Trượt $x$ để xem: tại giá trị làm mẫu bằng " +
        "$0$, phân thức <b>không xác định</b>.") + "</p>" +
      '<div class="widget-result">$$' + cfg.latex + "$$</div>" +
      '<div class="widget-controls"><div class="slider-group"><label>x =</label>' +
      '<input type="range" id="fr-x" min="' + xMin + '" max="' + xMax + '" step="1" value="' + x0 + '">' +
      '<span class="slider-val" id="fr-x-v">' + x0 + '</span></div></div>' +
      '<div class="widget-result" id="fr-res"></div>';
    MATH9.typeset(mount);

    var xIn = mount.querySelector("#fr-x"), resBox = mount.querySelector("#fr-res");
    function draw() {
      var x = +xIn.value;
      mount.querySelector("#fr-x-v").textContent = x;
      var den = cfg.den(x);
      if (den === 0) {
        resBox.innerHTML = "<div style='font-size:16px'>Với $x = " + x +
          "$: mẫu $= 0$ → <b style='color:#dc2626'>phân thức KHÔNG xác định!</b></div>";
      } else {
        var val = cfg.num(x) / den;
        resBox.innerHTML = "<div style='font-size:16px'>Với $x = " + x + "$: mẫu $= " + fmt(den) +
          " \\ne 0$, giá trị phân thức $= " + fmt(val) + "$ <b style='color:#16a34a'>✓</b></div>";
      }
      MATH9.typeset(resBox);
    }
    xIn.addEventListener("input", draw);
    draw();
  }

  /* ---------- Rút gọn từng bước ---------- */
  function simplify(mount, cfg) {
    var steps = cfg.steps || [];
    var shown = 1;
    mount.innerHTML =
      '<p class="widget-hint">' + (cfg.hint ||
        "Rút gọn phân thức = phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung. Bấm để xem từng bước.") + "</p>" +
      '<div id="fs-steps" style="text-align:center"></div>' +
      '<div style="text-align:center;margin-top:8px"><button class="btn btn-hint" id="fs-btn">Bước tiếp →</button></div>' +
      (cfg.note ? '<div class="widget-result" id="fs-note" style="display:none">' + cfg.note + "</div>" : "");
    MATH9.typeset(mount.querySelector(".widget-hint"));

    var stepsBox = mount.querySelector("#fs-steps"), btn = mount.querySelector("#fs-btn");
    function render() {
      var h = "";
      for (var i = 0; i < shown; i++) {
        h += '<div class="math-callout" style="margin:6px 0">' + (i === 0 ? "" : "= ") + "$$" + steps[i] + "$$</div>";
      }
      stepsBox.innerHTML = h;
      MATH9.typeset(stepsBox);
      if (shown >= steps.length) {
        btn.textContent = "✓ Đã rút gọn xong";
        btn.disabled = true;
        var note = mount.querySelector("#fs-note");
        if (note) note.style.display = "block";
      }
    }
    btn.addEventListener("click", function () { if (shown < steps.length) { shown++; render(); } });
    render();
  }
})();
