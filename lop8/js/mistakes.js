/* =======================================================================
   mistakes.js — Sổ tay lỗi sai: liệt kê các câu quiz từng làm sai (lưu trong
   trình duyệt) để ôn lại đúng chỗ yếu. Bấm "Đã ôn" để xoá khỏi sổ.
   ======================================================================= */

(function () {
  "use strict";

  MATH8.renderMistakes = function () {
    var root = document.getElementById("mk-root");
    if (!root) return;
    var arr = MATH8.store ? MATH8.store.getMistakes() : [];

    if (!arr.length) {
      root.innerHTML =
        '<div class="empty-note">Chưa có lỗi nào được ghi lại. 🎉<br>' +
        'Hãy làm phần <b>“Tự kiểm tra”</b> ở mỗi bài — câu nào làm sai sẽ tự xuất hiện ở đây để con ôn lại đúng chỗ yếu.</div>';
      return;
    }

    arr.sort(function (a, b) { return (b.when || 0) - (a.when || 0); });
    var h = '<p style="color:#55617a">Đây là những câu con từng trả lời sai trong phần Tự kiểm tra. Ôn lại rồi bấm <b>Đã ôn</b> để xoá khỏi sổ.</p>';
    arr.forEach(function (m) {
      h += '<div class="mistake" data-id="' + m.id + '">';
      h += '<div class="mk-lesson"><a href="bai.html?id=' + encodeURIComponent(m.lessonId) + '">' + m.lessonTitle + "</a></div>";
      h += "<div>" + m.q + "</div>";
      h += '<div class="mk-correct">Đáp án đúng: ' + m.correct + "</div>";
      h += '<div class="mk-actions"><button class="btn" data-act="resolve">✓ Đã ôn (xoá)</button>' +
        '<a class="btn btn-hint" href="bai.html?id=' + encodeURIComponent(m.lessonId) + '">Ôn lại bài</a></div>';
      h += "</div>";
    });
    root.innerHTML = h;
    MATH8.typeset(root);

    root.querySelectorAll('[data-act="resolve"]').forEach(function (b) {
      b.addEventListener("click", function () {
        var item = b.parentNode.parentNode;
        MATH8.store.removeMistake(item.getAttribute("data-id"));
        MATH8.renderMistakes();
      });
    });
  };
})();
