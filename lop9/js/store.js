/* =======================================================================
   store.js — Lưu trạng thái học tập vào trình duyệt (localStorage)
   Dùng cho: tiến độ học, kết quả quiz, sổ tay lỗi sai, lịch ôn flashcard.
   Chạy được qua file://; nếu trình duyệt chặn thì tự chuyển sang bộ nhớ tạm.
   ======================================================================= */

(function () {
  "use strict";
  window.MATH9 = window.MATH9 || {};

  var PREFIX = "math9:";
  var mem = {}; // dự phòng khi localStorage bị chặn
  function read(key, def) {
    try {
      var s = localStorage.getItem(PREFIX + key);
      return s ? JSON.parse(s) : def;
    } catch (e) {
      return mem[key] !== undefined ? mem[key] : def;
    }
  }
  function write(key, val) {
    mem[key] = val;
    try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); } catch (e) {}
  }

  var DAY = 86400000;
  var INTERVAL = { 1: 0, 2: 1 * DAY, 3: 3 * DAY, 4: 7 * DAY, 5: 14 * DAY };

  MATH9.store = {
    // ---- Tiến độ ----
    getProgress: function () { return read("progress", {}); },
    isDone: function (id) { var p = read("progress", {}); return !!(p[id] && p[id].done); },
    setDone: function (id, done) { var p = read("progress", {}); p[id] = p[id] || {}; p[id].done = done; write("progress", p); },
    markVisited: function (id) { var p = read("progress", {}); p[id] = p[id] || {}; p[id].visited = Date.now(); write("progress", p); write("last", id); },
    getLast: function () { return read("last", null); },

    // ---- Quiz ----
    recordQuiz: function (id, idx, correct) {
      var q = read("quiz", {}); q[id] = q[id] || {};
      q[id][idx] = { correct: correct, t: Date.now() }; write("quiz", q);
    },
    getQuiz: function (id) { return read("quiz", {})[id] || {}; },

    // ---- Sổ tay lỗi sai ----
    addMistake: function (m) {
      var arr = read("mistakes", []);
      arr = arr.filter(function (x) { return x.id !== m.id; });
      arr.push(m); write("mistakes", arr);
    },
    removeMistake: function (mid) {
      write("mistakes", read("mistakes", []).filter(function (x) { return x.id !== mid; }));
    },
    getMistakes: function () { return read("mistakes", []); },

    // ---- Flashcard (ôn ngắt quãng kiểu Leitner) ----
    getCard: function (cid) { var c = read("cards", {})[cid]; return c || { box: 1, due: 0 }; },
    gradeCard: function (cid, remembered) {
      var cards = read("cards", {});
      var c = cards[cid] || { box: 1, due: 0 };
      c.box = remembered ? Math.min(5, c.box + 1) : 1;
      c.due = Date.now() + (INTERVAL[c.box] || 0);
      cards[cid] = c; write("cards", cards);
    },

    // ---- Tiện ích ----
    reset: function () {
      ["progress", "quiz", "mistakes", "cards", "last"].forEach(function (k) {
        mem[k] = undefined;
        try { localStorage.removeItem(PREFIX + k); } catch (e) {}
      });
    },
  };
})();
