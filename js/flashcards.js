/* =======================================================================
   flashcards.js — Thẻ ghi nhớ công thức (tự sinh từ phần "Kiến thức cần nhớ"
   của các bài). Ôn theo kiểu ngắt quãng (Leitner) lưu trong trình duyệt.
   ======================================================================= */

(function () {
  "use strict";
  var deck = [], queue = [], pos = 0, flipped = false, filter = "all";

  function clean(h) { return String(h || "").replace(/^\s*\d+\.\s*/, ""); }

  function collect() {
    deck = [];
    Object.keys(MATH8.lessons).forEach(function (lid) {
      var L = MATH8.lessons[lid];
      (L.theory || []).forEach(function (t, i) {
        if (t.formula) deck.push({
          id: lid + ":t" + i, chapter: L.chapter, lessonId: lid, lessonTitle: L.title,
          front: clean(t.heading) || L.title, back: t.formula,
        });
      });
    });
  }
  function chaptersList() {
    var s = []; deck.forEach(function (c) { if (s.indexOf(c.chapter) < 0) s.push(c.chapter); }); return s;
  }
  function buildQueue() {
    var now = Date.now();
    var pool = deck.filter(function (c) { return filter === "all" || c.chapter === filter; });
    var due = pool.filter(function (c) { return (MATH8.store ? MATH8.store.getCard(c.id).due : 0) <= now; });
    queue = (due.length ? due : pool).slice();
    for (var i = queue.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = queue[i]; queue[i] = queue[j]; queue[j] = t; }
    pos = 0; flipped = false;
  }

  function render() {
    var box = document.getElementById("fc-card");
    var ctrl = document.getElementById("fc-ctrl");
    if (!queue.length) {
      box.innerHTML = '<div class="empty-note">Không có thẻ nào cho lựa chọn này.</div>';
      ctrl.innerHTML = ""; document.getElementById("fc-progress").textContent = ""; return;
    }
    if (pos >= queue.length) {
      box.innerHTML = '<div class="empty-note">🎉 Bạn đã ôn hết các thẻ đến hạn!<br>Hãy quay lại sau, hoặc ôn lại từ đầu.</div>';
      ctrl.innerHTML = '<button class="btn" id="fc-again">↺ Ôn lại từ đầu</button>';
      document.getElementById("fc-again").addEventListener("click", function () { buildQueue(); render(); });
      document.getElementById("fc-progress").textContent = "";
      return;
    }
    var c = queue[pos];
    if (!flipped) {
      box.innerHTML = '<div class="fc-side">CÂU HỎI · ' + c.chapter + "</div>" +
        '<div class="fc-content">' + c.front + " = ?</div>" +
        '<div class="fc-hint">Nghĩ trong đầu rồi bấm để xem đáp án</div>';
      ctrl.innerHTML = '<button class="btn btn-hint" id="fc-flip">Lật thẻ 🔄</button>';
      document.getElementById("fc-flip").addEventListener("click", function () { flipped = true; render(); });
    } else {
      box.innerHTML = '<div class="fc-side">ĐÁP ÁN</div>' +
        '<div class="fc-content">$$' + c.back + "$$</div>" +
        '<div class="fc-hint"><a href="bai.html?id=' + encodeURIComponent(c.lessonId) + '">' + c.lessonTitle + "</a></div>";
      ctrl.innerHTML = '<button class="btn btn-no" id="fc-no">Chưa nhớ</button>' +
        '<button class="btn btn-yes" id="fc-yes">Đã nhớ ✓</button>';
      document.getElementById("fc-no").addEventListener("click", function () { grade(false); });
      document.getElementById("fc-yes").addEventListener("click", function () { grade(true); });
    }
    box.onclick = function (e) { if (e.target.tagName !== "A" && !flipped) { flipped = true; render(); } };
    MATH8.typeset(box);
    document.getElementById("fc-progress").textContent = "Thẻ " + (pos + 1) + " / " + queue.length;
  }

  function grade(ok) {
    if (MATH8.store) MATH8.store.gradeCard(queue[pos].id, ok);
    pos++; flipped = false; render();
  }

  MATH8.renderFlashcards = function () {
    collect();
    var sel = document.getElementById("fc-filter");
    sel.innerHTML = '<option value="all">Tất cả chương</option>' +
      chaptersList().map(function (c) { return '<option value="' + c.replace(/"/g, "") + '">' + c + "</option>"; }).join("");
    sel.addEventListener("change", function () { filter = sel.value; buildQueue(); render(); });
    buildQueue(); render();
  };
})();
