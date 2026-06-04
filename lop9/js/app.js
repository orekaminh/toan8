/* =======================================================================
   Tự học Toán 9 – Kết nối tri thức
   app.js: registry trung tâm + tiện ích chung + render trang chủ
   Chạy được qua file:// (không cần server). Không dùng fetch().
   ======================================================================= */

(function () {
  "use strict";

  // --- Registry toàn cục -------------------------------------------------
  // Mỗi file data/bai-XX.js gọi MATH9.registerLesson(...) để tự đăng ký.
  window.MATH9 = window.MATH9 || {
    lessons: {},
    chapters: {},
    registerLesson: function (lesson) {
      this.lessons[lesson.id] = lesson;
    },
    registerChapter: function (chapter) {
      this.chapters[chapter.id] = chapter;
    },
    getLesson: function (id) {
      return this.lessons[id];
    },
  };

  // --- Lộ trình 10 chương Toán 9 (SGK Kết nối tri thức) ------------------
  // active:true = đã soạn nội dung. Các chương còn lại hiện "Sắp có".
  MATH9.ROADMAP = [
    { id: "chuong-01", roman: "I",    tap: 1, title: "Phương trình và hệ hai phương trình bậc nhất hai ẩn", count: 3, active: true },
    { id: "chuong-02", roman: "II",   tap: 1, title: "Phương trình và bất phương trình bậc nhất một ẩn",    count: 3, active: true },
    { id: "chuong-03", roman: "III",  tap: 1, title: "Căn bậc hai và căn bậc ba",                           count: 4, active: true },
    { id: "chuong-04", roman: "IV",   tap: 1, title: "Hệ thức lượng trong tam giác vuông",                  count: 2, active: true },
    { id: "chuong-05", roman: "V",    tap: 1, title: "Đường tròn",                                          count: 5, active: true },
    { id: "chuong-06", roman: "VI",   tap: 2, title: "Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn", count: 4, active: true },
    { id: "chuong-07", roman: "VII",  tap: 2, title: "Tần số và tần số tương đối",                          count: 3, active: true },
    { id: "chuong-08", roman: "VIII", tap: 2, title: "Xác suất của biến cố trong một số mô hình xác suất đơn giản", count: 2, active: true },
    { id: "chuong-09", roman: "IX",   tap: 2, title: "Đường tròn ngoại tiếp và đường tròn nội tiếp",        count: 4, active: true },
    { id: "chuong-10", roman: "X",    tap: 2, title: "Một số hình khối trong thực tiễn",                     count: 2, active: true },
  ];

  // --- Tiện ích: render công thức toán bằng KaTeX ------------------------
  MATH9.typeset = function (el) {
    if (!el || typeof renderMathInElement !== "function") return;
    try {
      renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.warn("KaTeX render lỗi:", e);
    }
  };

  // Tạo phần tử nhanh
  MATH9.el = function (tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === "class") e.className = attrs[k];
        else if (k === "html") e.innerHTML = attrs[k];
        else e.setAttribute(k, attrs[k]);
      }
    }
    if (html != null) e.innerHTML = html;
    return e;
  };

  // --- Trang chủ: vẽ lộ trình + tiến độ ---------------------------------
  MATH9.renderHome = function (mount) {
    var root = typeof mount === "string" ? document.getElementById(mount) : mount;
    if (!root) return;
    var store = MATH9.store;
    var isDone = function (id) { return store ? store.isDone(id) : false; };

    var html = "";

    // Thanh công cụ học tập
    html += '<div class="home-tools">' +
      '<a href="flashcards.html">🃏 Flashcard công thức</a>' +
      '<a href="cong-thuc.html">📐 Bảng công thức</a>' +
      '<a href="loi-sai.html">📒 Sổ tay lỗi sai</a>' +
      "</div>";

    // Banner "tiếp tục học" (lấy tên bài từ danh mục chương)
    if (store) {
      var last = store.getLast(), lastTitle = null;
      if (last) {
        for (var ck in MATH9.chapters) {
          MATH9.chapters[ck].lessons.forEach(function (l) { if (l.id === last) lastTitle = l.title; });
        }
      }
      if (lastTitle) {
        html += '<div class="continue-banner"><div>📖 Đang học dở: <b>' + lastTitle + "</b></div>" +
          '<a class="ct-go" href="bai.html?id=' + encodeURIComponent(last) + '">Tiếp tục →</a></div>';
      }
    }

    html += '<div class="roadmap">';
    MATH9.ROADMAP.forEach(function (ch) {
      var chapter = MATH9.chapters[ch.id];
      var isActive = ch.active && chapter;
      html += '<div class="chap-card' + (isActive ? " chap-active" : " chap-soon") + '">';
      html += '  <div class="chap-head">';
      html += '    <span class="chap-roman">Chương ' + ch.roman + "</span>";
      html += '    <span class="chap-tap">Tập ' + ch.tap + "</span>";
      html += "  </div>";
      html += '  <h3 class="chap-title">' + ch.title + "</h3>";

      if (isActive) {
        var doneN = chapter.lessons.filter(function (l) { return isDone(l.id); }).length;
        var total = chapter.lessons.length;
        var pct = total ? Math.round(doneN / total * 100) : 0;
        html += '  <div class="chap-meta">' + total + " bài</div>";
        html += '  <div class="chap-progress"><div class="pbar"><span style="width:' + pct + '%"></span></div>' +
          '<div class="pnum">Đã học ' + doneN + "/" + total + " bài</div></div>";
        html += '<ul class="lesson-list">';
        chapter.lessons.forEach(function (ls) {
          var d = isDone(ls.id);
          html += '<li><a class="lesson-link' + (d ? " done" : "") + '" href="bai.html?id=' +
            encodeURIComponent(ls.id) + '"><span class="lesson-dot"></span>' + ls.title +
            (d ? '<span class="lesson-check">✓</span>' : "") + "</a></li>";
        });
        html += "</ul>";
      } else {
        html += '  <div class="chap-meta">' + ch.count + ' bài · <em>Sắp có</em></div>';
      }
      html += "</div>";
    });
    html += "</div>";

    root.innerHTML = html;
  };
})();
