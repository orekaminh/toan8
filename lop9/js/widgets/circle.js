/* =======================================================================
   circle.js — Widget đường tròn (Chương V)
     kind "point" : vị trí điểm M so với (O;R) — trượt OM
     kind "line"  : vị trí đường thẳng & (O;R) — trượt d (cắt/tiếp xúc/không giao)
     kind "two"   : vị trí hai đường tròn (O;R) và (O';r) — trượt d = OO'
   ======================================================================= */
(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};
  MATH9.Widgets = MATH9.Widgets || {};
  var U = 22;
  function head(h) { return '<p class="widget-hint">' + h + "</p>"; }

  MATH9.Widgets["circle"] = function (mount, cfg) {
    var kind = cfg.kind || "line";
    if (kind === "point") return pointMode(mount, cfg);
    if (kind === "two") return twoMode(mount, cfg);
    return lineMode(mount, cfg);
  };

  function lineMode(mount, cfg) {
    var R = 3, cx = 150, cy = 120;
    mount.innerHTML = head(cfg.hint ||
      "Đường tròn $(O;R)$ với $R = 3$. Trượt $d$ (khoảng cách từ $O$ đến đường thẳng) để thấy 3 vị trí: " +
      "<b>cắt</b> $(d<R)$, <b>tiếp xúc</b> $(d=R)$, <b>không giao</b> $(d>R)$.") +
      '<div class="widget-controls"><div class="slider-group"><label>d =</label>' +
      '<input type="range" id="cl-d" min="0" max="6" step="0.5" value="1.5"><span class="slider-val" id="cl-d-v">1.5</span></div></div>' +
      '<div id="cl-svg"></div><div class="widget-result" id="cl-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#cl-svg"), res = mount.querySelector("#cl-res"), dIn = mount.querySelector("#cl-d");
    function draw() {
      var d = +dIn.value; mount.querySelector("#cl-d-v").textContent = d;
      var ly = cy + d * U;
      var s = '<svg viewBox="0 0 300 250" width="300">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (R * U) + '" fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"/>';
      s += '<line x1="20" y1="' + ly + '" x2="280" y2="' + ly + '" stroke="#dc2626" stroke-width="2.5"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="' + ly + '" stroke="#0ea5a4" stroke-width="1.6" stroke-dasharray="4 3"/>';
      s += '<text x="' + (cx + 5) + '" y="' + ((cy + ly) / 2) + '" font-size="12" fill="#0ea5a4" font-weight="700">d</text>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="#1f2733"/><text x="' + (cx - 16) + '" y="' + (cy + 4) + '" font-size="13" font-weight="700">O</text>';
      var rel;
      if (d < R - 1e-9) { var half = Math.sqrt(R * R - d * d) * U; s += '<circle cx="' + (cx - half) + '" cy="' + ly + '" r="4" fill="#dc2626"/><circle cx="' + (cx + half) + '" cy="' + ly + '" r="4" fill="#dc2626"/>'; rel = "Đường thẳng <b>cắt</b> đường tròn tại 2 điểm ($d < R$)."; }
      else if (Math.abs(d - R) < 1e-9) { s += '<circle cx="' + cx + '" cy="' + ly + '" r="4.5" fill="#dc2626"/>'; rel = "Đường thẳng <b>tiếp xúc</b> đường tròn (1 điểm chung, $d = R$) — là tiếp tuyến."; }
      else rel = "Đường thẳng và đường tròn <b>không giao nhau</b> ($d > R$).";
      s += "</svg>";
      box.innerHTML = s;
      res.innerHTML = "<div style='font-size:15px'>$d = " + d + "$, $R = 3$. " + rel + "</div>";
      MATH9.typeset(res);
    }
    dIn.addEventListener("input", draw); draw();
  }

  function pointMode(mount, cfg) {
    var R = 3, cx = 150, cy = 120;
    mount.innerHTML = head(cfg.hint ||
      "Đường tròn $(O;R)$ với $R = 3$. Trượt để đổi $OM$. Điểm $M$ nằm <b>trong</b> nếu $OM<R$, " +
      "<b>trên</b> nếu $OM=R$, <b>ngoài</b> nếu $OM>R$.") +
      '<div class="widget-controls"><div class="slider-group"><label>OM =</label>' +
      '<input type="range" id="cp-d" min="0" max="6" step="0.5" value="2"><span class="slider-val" id="cp-d-v">2</span></div></div>' +
      '<div id="cp-svg"></div><div class="widget-result" id="cp-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#cp-svg"), res = mount.querySelector("#cp-res"), dIn = mount.querySelector("#cp-d");
    function draw() {
      var d = +dIn.value; mount.querySelector("#cp-d-v").textContent = d;
      var mx = cx + d * U;
      var s = '<svg viewBox="0 0 300 250" width="300">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (R * U) + '" fill="#e8f0fe" stroke="#2563eb" stroke-width="2.5"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + mx + '" y2="' + cy + '" stroke="#0ea5a4" stroke-width="1.6" stroke-dasharray="4 3"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="#1f2733"/><text x="' + (cx - 16) + '" y="' + (cy + 4) + '" font-size="13" font-weight="700">O</text>';
      s += '<circle cx="' + mx + '" cy="' + cy + '" r="4.5" fill="#dc2626"/><text x="' + (mx - 3) + '" y="' + (cy - 9) + '" font-size="13" font-weight="700" fill="#dc2626">M</text>';
      s += "</svg>";
      box.innerHTML = s;
      var rel = d < R - 1e-9 ? "$M$ nằm <b>trong</b> đường tròn ($OM < R$)."
        : Math.abs(d - R) < 1e-9 ? "$M$ nằm <b>trên</b> đường tròn ($OM = R$)."
          : "$M$ nằm <b>ngoài</b> đường tròn ($OM > R$).";
      res.innerHTML = "<div style='font-size:15px'>$OM = " + d + "$, $R = 3$. " + rel + "</div>";
      MATH9.typeset(res);
    }
    dIn.addEventListener("input", draw); draw();
  }

  function twoMode(mount, cfg) {
    var R = 3, r = 2, cy = 120, ox = 110;
    mount.innerHTML = head(cfg.hint ||
      "Hai đường tròn $(O;R)$ và $(O';r)$ với $R = 3,\\ r = 2$. Trượt $d = OO'$ để xem các vị trí tương đối.") +
      '<div class="widget-controls"><div class="slider-group"><label>d =</label>' +
      '<input type="range" id="ct-d" min="0" max="8" step="0.5" value="4"><span class="slider-val" id="ct-d-v">4</span></div></div>' +
      '<div id="ct-svg"></div><div class="widget-result" id="ct-res"></div>';
    MATH9.typeset(mount.querySelector(".widget-hint"));
    var box = mount.querySelector("#ct-svg"), res = mount.querySelector("#ct-res"), dIn = mount.querySelector("#ct-d");
    function draw() {
      var d = +dIn.value; mount.querySelector("#ct-d-v").textContent = d;
      var o2 = ox + d * U;
      var s = '<svg viewBox="0 0 340 250" width="340">';
      s += '<circle cx="' + ox + '" cy="' + cy + '" r="' + (R * U) + '" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2.5"/>';
      s += '<circle cx="' + o2 + '" cy="' + cy + '" r="' + (r * U) + '" fill="rgba(14,165,164,0.10)" stroke="#0ea5a4" stroke-width="2.5"/>';
      s += '<circle cx="' + ox + '" cy="' + cy + '" r="3" fill="#1f2733"/><text x="' + (ox - 16) + '" y="' + (cy + 4) + '" font-size="12" font-weight="700">O</text>';
      s += '<circle cx="' + o2 + '" cy="' + cy + '" r="3" fill="#1f2733"/><text x="' + (o2 + 6) + '" y="' + (cy + 4) + '" font-size="12" font-weight="700">O\'</text>';
      s += "</svg>";
      box.innerHTML = s;
      var sum = R + r, dif = R - r, rel;
      if (d > sum + 1e-9) rel = "Hai đường tròn <b>ở ngoài nhau</b> ($d > R + r$).";
      else if (Math.abs(d - sum) < 1e-9) rel = "Hai đường tròn <b>tiếp xúc ngoài</b> ($d = R + r$).";
      else if (d > dif + 1e-9) rel = "Hai đường tròn <b>cắt nhau</b> tại 2 điểm ($R - r < d < R + r$).";
      else if (Math.abs(d - dif) < 1e-9) rel = "Hai đường tròn <b>tiếp xúc trong</b> ($d = R - r$).";
      else rel = "Đường tròn nhỏ nằm <b>trong</b> đường tròn lớn ($d < R - r$)" + (d === 0 ? " — hai đường tròn đồng tâm" : "") + ".";
      res.innerHTML = "<div style='font-size:15px'>$d = " + d + "$, $R = 3$, $r = 2$. " + rel + "</div>";
      MATH9.typeset(res);
    }
    dIn.addEventListener("input", draw); draw();
  }
})();
