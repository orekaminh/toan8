/* =======================================================================
   render-lesson.js — dựng trang một bài học từ dữ liệu trong registry
   Bố cục 7 phần: Mục tiêu · Tình huống · Lý thuyết · Hình tương tác ·
   Ví dụ · Lỗi thường gặp · Bài tập (gợi ý 3 tầng + lời giải ẩn)
   ======================================================================= */

(function () {
  "use strict";

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  var LV_CLASS = { "Nhận biết": "lv-1", "Thông hiểu": "lv-2", "Vận dụng": "lv-3" };

  function esc(s) {
    return String(s == null ? "" : s);
  }

  // ---- Dựng từng khối -----------------------------------------------------
  function buildObjectives(list) {
    if (!list || !list.length) return "";
    var h = '<section class="block"><h2><span class="block-icon">🎯</span>Mục tiêu bài học</h2><ul class="objectives">';
    list.forEach(function (o) { h += "<li>" + esc(o) + "</li>"; });
    return h + "</ul></section>";
  }

  function buildIntro(intro) {
    if (!intro) return "";
    var h = '<section class="block intro-situation"><h2><span class="block-icon">💡</span>Tình huống mở đầu</h2>';
    h += "<div>" + esc(intro.text) + "</div>";
    if (intro.math) h += '<div class="math-callout">\\[' + esc(intro.math) + "\\]</div>";
    return h + "</section>";
  }

  function buildTheory(theory) {
    if (!theory || !theory.length) return "";
    var h = '<section class="block"><h2><span class="block-icon">📘</span>Kiến thức cần nhớ</h2>';
    theory.forEach(function (t) {
      h += '<div class="theory-item">';
      if (t.heading) h += "<h3>" + esc(t.heading) + "</h3>";
      if (t.html) h += "<div>" + t.html + "</div>";
      if (t.formula) h += '<div class="formula-box">\\[' + esc(t.formula) + "\\]</div>";
      h += "</div>";
    });
    return h + "</section>";
  }

  function buildVisual(visual) {
    if (!visual || !visual.type) return "";
    return (
      '<section class="block"><h2><span class="block-icon">🧩</span>Hiểu bằng hình ảnh tương tác</h2>' +
      '<div class="widget" id="widget-mount"></div></section>'
    );
  }

  function buildExamples(examples) {
    if (!examples || !examples.length) return "";
    var h = '<section class="block"><h2><span class="block-icon">✏️</span>Ví dụ minh hoạ</h2>';
    examples.forEach(function (ex, i) {
      h += '<div class="example">';
      h += "<h3>Ví dụ " + (i + 1) + (ex.title ? ": " + esc(ex.title) : "") + "</h3>";
      if (ex.prompt) h += "<div>" + esc(ex.prompt) + "</div>";
      if (ex.steps && ex.steps.length) {
        h += '<ol class="steps">';
        ex.steps.forEach(function (s) { h += "<li>" + esc(s) + "</li>"; });
        h += "</ol>";
      }
      h += "</div>";
    });
    return h + "</section>";
  }

  function buildMistakes(list) {
    if (!list || !list.length) return "";
    var h = '<section class="block mistakes"><h2><span class="block-icon">⚠️</span>Lỗi thường gặp</h2>';
    list.forEach(function (m) {
      h += '<div class="mistake-item">';
      if (m.wrong) h += '<div class="mistake-wrong">✗ Sai: ' + esc(m.wrong) + "</div>";
      if (m.right) h += '<div class="mistake-right">✓ Đúng: ' + esc(m.right) + "</div>";
      if (m.note) h += '<div class="mistake-note">' + esc(m.note) + "</div>";
      h += "</div>";
    });
    return h + "</section>";
  }

  function buildExercises(exercises) {
    if (!exercises || !exercises.length) return "";
    var h = '<section class="block"><h2><span class="block-icon">📝</span>Bài tập luyện tập</h2>';
    h += '<p style="color:#55617a;margin-top:-4px">Thử tự làm trước. Bí thì bấm <b>Gợi ý</b> (mở dần), cuối cùng mới <b>Xem lời giải</b>.</p>';
    exercises.forEach(function (ex, i) {
      var lv = LV_CLASS[ex.level] || "lv-1";
      h += '<div class="exercise" data-idx="' + i + '">';
      h += '<div class="ex-head"><span class="ex-num">Bài ' + (i + 1) + "</span>";
      h += '<span class="lv-badge ' + lv + '">' + esc(ex.level || "") + "</span></div>";
      h += '<div class="ex-prompt">' + esc(ex.prompt) + "</div>";
      h += '<div class="ex-actions">';
      if (ex.hints && ex.hints.length)
        h += '<button class="btn btn-hint" data-act="hint">💭 Gợi ý</button>';
      if (ex.solution)
        h += '<button class="btn btn-solution" data-act="solution">✅ Xem lời giải</button>';
      h += "</div>";
      h += '<div class="hint-area"></div>';
      h += '<div class="solution-area" style="display:none"></div>';
      h += "</div>";
    });
    return h + "</section>";
  }

  function buildNav(chapter, lesson) {
    if (!chapter) return "";
    var arr = chapter.lessons;
    var idx = -1;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === lesson.id) idx = i;
    var prev = idx > 0 ? arr[idx - 1] : null;
    var next = idx >= 0 && idx < arr.length - 1 ? arr[idx + 1] : null;
    var h = '<div class="lesson-nav">';
    if (prev)
      h += '<a class="nav-prev" href="bai.html?id=' + encodeURIComponent(prev.id) +
        '"><span class="nav-dir">← Bài trước</span>' + esc(prev.title) + "</a>";
    else h += '<a class="nav-prev" href="index.html"><span class="nav-dir">←</span>Về trang chủ</a>';
    if (next)
      h += '<a class="nav-next" href="bai.html?id=' + encodeURIComponent(next.id) +
        '"><span class="nav-dir">Bài tiếp →</span>' + esc(next.title) + "</a>";
    else h += '<a class="nav-next" href="index.html"><span class="nav-dir">→</span>Hoàn thành chương!</a>';
    return h + "</div>";
  }

  // ---- Gắn sự kiện cho phần bài tập --------------------------------------
  function bindExercises(root, exercises) {
    var blocks = root.querySelectorAll(".exercise");
    blocks.forEach(function (block) {
      var idx = parseInt(block.getAttribute("data-idx"), 10);
      var ex = exercises[idx];
      var hintArea = block.querySelector(".hint-area");
      var solArea = block.querySelector(".solution-area");
      var shown = 0;

      var hintBtn = block.querySelector('[data-act="hint"]');
      if (hintBtn) {
        hintBtn.addEventListener("click", function () {
          if (shown >= ex.hints.length) return;
          var b = MATH8.el("div", { class: "hint-bubble" });
          b.innerHTML =
            '<span class="hint-label">Gợi ý ' + (shown + 1) + ": </span>" + esc(ex.hints[shown]);
          hintArea.appendChild(b);
          MATH8.typeset(b);
          shown++;
          if (shown >= ex.hints.length) {
            hintBtn.textContent = "💭 Đã hết gợi ý";
            hintBtn.disabled = true;
          } else {
            hintBtn.textContent = "💭 Gợi ý tiếp (" + shown + "/" + ex.hints.length + ")";
          }
        });
      }

      var solBtn = block.querySelector('[data-act="solution"]');
      if (solBtn) {
        var open = false;
        solBtn.addEventListener("click", function () {
          open = !open;
          if (open) {
            if (!solArea.getAttribute("data-filled")) {
              solArea.innerHTML = '<span class="sol-label">Lời giải</span>' + esc(ex.solution);
              solArea.setAttribute("data-filled", "1");
              MATH8.typeset(solArea);
            }
            solArea.style.display = "block";
            solBtn.textContent = "🙈 Ẩn lời giải";
          } else {
            solArea.style.display = "none";
            solBtn.textContent = "✅ Xem lời giải";
          }
        });
      }
    });
  }

  // ---- Quiz tự kiểm tra ---------------------------------------------------
  function buildQuiz(quiz) {
    if (!quiz || !quiz.length) return "";
    var h = '<section class="block quiz"><h2><span class="block-icon">🎯</span>Tự kiểm tra (chấm điểm)</h2>';
    h += '<p style="color:#55617a;margin-top:-4px">Tự trả lời rồi bấm <b>Kiểm tra</b> — tự nghĩ ra đáp án giúp nhớ lâu hơn nhiều so với chỉ đọc lời giải.</p>';
    quiz.forEach(function (q, i) {
      h += '<div class="quiz-q" data-idx="' + i + '">';
      h += '<div class="quiz-prompt"><span class="q-num">Câu ' + (i + 1) + ".</span> " + esc(q.q) + "</div>";
      if (q.type === "mc") {
        h += '<div class="quiz-choices">';
        (q.choices || []).forEach(function (c, ci) {
          h += '<label class="quiz-choice"><input type="radio" name="q' + i + '" value="' + ci + '"><span>' + esc(c) + "</span></label>";
        });
        h += "</div>";
      } else {
        h += '<div class="quiz-fill"><input type="text" inputmode="decimal" placeholder="Nhập đáp số…"></div>';
      }
      h += '<div class="ex-actions" style="margin-top:9px"><button class="btn btn-hint" data-act="check">✔️ Kiểm tra</button></div>';
      h += '<div class="quiz-fb"></div></div>';
    });
    return h + '<div class="quiz-score" id="quiz-score"></div></section>';
  }

  function checkFill(val, answer) {
    var s = String(val == null ? "" : val).trim().replace(",", ".");
    if (s === "") return false;
    var num = parseFloat(s);
    if (!isNaN(num) && typeof answer === "number") return Math.abs(num - answer) < 1e-9;
    return s.replace(/\s+/g, "") === String(answer).replace(/\s+/g, "");
  }

  function bindQuiz(root, lesson) {
    var quiz = lesson.quiz || [];
    if (!quiz.length) return;
    var answered = {};
    function updateScore() {
      var done = Object.keys(answered).length, ok = 0;
      Object.keys(answered).forEach(function (k) { if (answered[k]) ok++; });
      var el = root.querySelector("#quiz-score");
      if (el) el.textContent = "Đã làm " + done + "/" + quiz.length + " câu · Đúng " + ok + (done === quiz.length ? " 🎉" : "");
    }
    root.querySelectorAll(".quiz-q").forEach(function (block) {
      var idx = parseInt(block.getAttribute("data-idx"), 10), q = quiz[idx];
      var fb = block.querySelector(".quiz-fb");
      block.querySelector('[data-act="check"]').addEventListener("click", function () {
        var correct = false;
        if (q.type === "mc") {
          var sel = block.querySelector('input[name="q' + idx + '"]:checked');
          if (!sel) { fb.className = "quiz-fb no"; fb.textContent = "Hãy chọn một đáp án trước nhé."; return; }
          var ci = +sel.value; correct = ci === q.answer;
          block.querySelectorAll(".quiz-choice").forEach(function (lab, li) {
            lab.classList.remove("correct", "wrong");
            if (li === q.answer) lab.classList.add("correct");
            if (li === ci && !correct) lab.classList.add("wrong");
          });
        } else {
          correct = checkFill(block.querySelector("input").value, q.answer);
        }
        var ansText = q.type === "mc" ? esc(q.choices[q.answer]) : esc(String(q.answer));
        if (correct) fb.className = "quiz-fb ok", fb.innerHTML = "✓ Chính xác! " + (q.explain ? esc(q.explain) : "");
        else fb.className = "quiz-fb no", fb.innerHTML = "✗ Chưa đúng. Đáp án: <b>" + ansText + "</b>. " + (q.explain ? esc(q.explain) : "");
        MATH8.typeset(fb);
        answered[idx] = correct;
        if (MATH8.store) {
          MATH8.store.recordQuiz(lesson.id, idx, correct);
          var mid = lesson.id + ":q" + idx;
          if (correct) MATH8.store.removeMistake(mid);
          else MATH8.store.addMistake({ id: mid, lessonId: lesson.id, lessonTitle: lesson.title, q: q.q,
            correct: q.type === "mc" ? q.choices[q.answer] : String(q.answer), when: Date.now() });
        }
        updateScore();
      });
    });
  }

  function buildDoneRow() { return '<div class="done-row"><button class="btn-done" id="done-btn"></button></div>'; }
  function bindDone(lesson) {
    var btn = document.getElementById("done-btn");
    if (!btn || !MATH8.store) return;
    function refresh() {
      var d = MATH8.store.isDone(lesson.id);
      btn.textContent = d ? "✓ Đã học bài này" : "Đánh dấu đã học bài này";
      btn.className = "btn-done" + (d ? " is-done" : "");
    }
    btn.addEventListener("click", function () { MATH8.store.setDone(lesson.id, !MATH8.store.isDone(lesson.id)); refresh(); });
    refresh();
  }

  // ---- Render chính -------------------------------------------------------
  MATH8.renderLessonPage = function () {
    var id = getParam("id");
    var lesson = id ? MATH8.getLesson(id) : null;
    var root = document.getElementById("lesson-root");
    var crumb = document.getElementById("crumb");

    if (!lesson) {
      root.innerHTML =
        '<div class="block"><h2>Không tìm thấy bài học</h2><p>Bài <code>' +
        esc(id) + '</code> chưa có. <a href="index.html">← Về trang chủ</a></p></div>';
      return;
    }

    document.title = lesson.title + " · Tự học Toán 8";
    if (crumb) crumb.innerHTML = lesson.chapter + " · <b>" + lesson.title + "</b>";

    // tìm chương chứa bài (để làm nav trước/sau)
    var chapter = null;
    for (var k in MATH8.chapters) {
      var c = MATH8.chapters[k];
      if (c.lessons.some(function (l) { return l.id === lesson.id; })) chapter = c;
    }

    var html = '<article class="lesson">';
    html += '<div class="chapter-name">' + esc(lesson.chapter) + "</div>";
    html += "<h1>" + esc(lesson.title) + "</h1>";
    html += buildObjectives(lesson.objectives);
    html += buildIntro(lesson.intro);
    html += buildTheory(lesson.theory);
    html += buildVisual(lesson.visual);
    html += buildExamples(lesson.examples);
    html += buildMistakes(lesson.commonMistakes);
    html += buildExercises(lesson.exercises);
    html += buildQuiz(lesson.quiz);
    html += buildDoneRow();
    html += buildNav(chapter, lesson);
    html += "</article>";

    root.innerHTML = html;

    // render công thức toán
    MATH8.typeset(root);

    // gắn widget tương tác
    if (lesson.visual && lesson.visual.type && MATH8.Widgets) {
      var mount = document.getElementById("widget-mount");
      var fn = MATH8.Widgets[lesson.visual.type];
      if (mount && typeof fn === "function") fn(mount, lesson.visual.config || {});
    }

    // gắn sự kiện bài tập + quiz + nút đã học
    bindExercises(root, lesson.exercises || []);
    bindQuiz(root, lesson);
    bindDone(lesson);
    if (MATH8.store) MATH8.store.markVisited(lesson.id);
  };
})();
