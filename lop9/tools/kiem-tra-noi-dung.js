/* =======================================================================
   tools/kiem-tra-noi-dung.js  —  Công cụ kiểm tra nội dung
   Chạy:  node tools/kiem-tra-noi-dung.js   (từ thư mục gốc của web)

   Tự động nạp TẤT CẢ các bài trong data/ (như trình duyệt), rồi:
     • kiểm cấu trúc mỗi bài (đủ trường, mức bài tập hợp lệ),
     • dùng chính KaTeX trong vendor/ để BIÊN DỊCH THỬ mọi công thức,
     • báo lỗi LaTeX hoặc dấu $ lệch (không khớp cặp).
   Không cần cài thêm gì ngoài Node.js.
   ======================================================================= */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");
const JS = path.join(ROOT, "js");

// Giả lập trình duyệt tối thiểu (đủ để nạp app + dữ liệu)
global.window = global;
global.document = {
  getElementById: () => null,
  createElement: () => ({ setAttribute() {}, appendChild() {}, style: {}, set innerHTML(v) {} }),
  createElementNS: () => ({ setAttribute() {} }),
};
global.renderMathInElement = () => {};

function load(p) { vm.runInThisContext(fs.readFileSync(p, "utf8"), { filename: p }); }

// nạp lõi
["app.js", "render-lesson.js", path.join("widgets", "area-model.js"),
 path.join("widgets", "algebra-tiles.js"), path.join("widgets", "geometry.js")]
  .forEach((f) => load(path.join(JS, f)));

// nạp dữ liệu: chuong-*.js trước, rồi bai-*.js
const files = fs.readdirSync(DATA).filter((f) => f.endsWith(".js"));
files.filter((f) => f.startsWith("chuong-")).sort().forEach((f) => load(path.join(DATA, f)));
files.filter((f) => f.startsWith("bai-")).sort().forEach((f) => load(path.join(DATA, f)));

const katex = require(path.join(ROOT, "vendor", "katex", "katex.min.js"));

let errors = [];
let formulaCount = 0;
let quizCount = 0;

function checkLatex(tex, display, where) {
  formulaCount++;
  try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false }); }
  catch (e) { errors.push(where + " → LỖI LaTeX: " + e.message + "  [" + String(tex).trim() + "]"); }
}
function checkText(str, where) {
  if (typeof str !== "string") return;
  let s = str.replace(/\$\$([\s\S]+?)\$\$/g, (m, p1) => { checkLatex(p1, true, where); return " "; });
  s = s.replace(/\$([^$]+?)\$/g, (m, p1) => { checkLatex(p1, false, where); return " "; });
  const stray = (s.match(/\$/g) || []).length;
  if (stray) errors.push(where + " → CÓ " + stray + " dấu $ lệch: [" + str.slice(0, 60) + "...]");
}

const W = global.MATH9;
const lessonIds = Object.keys(W.lessons);
console.log("Tổng số bài đã đăng ký:", lessonIds.length, "\n");

// kiểm danh mục chương ↔ bài
Object.values(W.chapters).forEach((c) => {
  c.lessons.forEach((l) => {
    if (!W.lessons[l.id]) errors.push("Chương " + c.roman + " trỏ tới bài không tồn tại: " + l.id);
  });
});

// duyệt từng bài
const byChapter = {};
Object.values(W.lessons).forEach((L) => {
  const tag = L.id;
  ["id", "chapter", "order", "title"].forEach((k) => { if (L[k] == null) errors.push(tag + " thiếu trường " + k); });
  (L.objectives || []).forEach((o, i) => checkText(o, tag + ".objectives[" + i + "]"));
  if (L.intro) { checkText(L.intro.text, tag + ".intro.text"); if (L.intro.math) checkLatex(L.intro.math, true, tag + ".intro.math"); }
  (L.theory || []).forEach((t, i) => {
    checkText(t.heading, tag + ".theory[" + i + "].heading");
    checkText(t.html, tag + ".theory[" + i + "].html");
    if (t.formula) checkLatex(t.formula, true, tag + ".theory[" + i + "].formula");
  });
  if (L.visual && L.visual.config) {
    if (L.visual.config.caption) checkText(L.visual.config.caption, tag + ".visual.caption");
    if (L.visual.config.expr) checkLatex(L.visual.config.expr, true, tag + ".visual.expr");
  }
  (L.examples || []).forEach((e, i) => {
    checkText(e.title, tag + ".ex[" + i + "].title"); checkText(e.prompt, tag + ".ex[" + i + "].prompt");
    (e.steps || []).forEach((s, j) => checkText(s, tag + ".ex[" + i + "].steps[" + j + "]"));
  });
  (L.commonMistakes || []).forEach((m, i) => {
    checkText(m.wrong, tag + ".mk[" + i + "].wrong"); checkText(m.right, tag + ".mk[" + i + "].right"); checkText(m.note, tag + ".mk[" + i + "].note");
  });
  const lv = { "Nhận biết": 0, "Thông hiểu": 0, "Vận dụng": 0 };
  (L.exercises || []).forEach((x, i) => {
    if (lv[x.level] === undefined) errors.push(tag + ".bt[" + i + "] mức lạ: " + x.level); else lv[x.level]++;
    checkText(x.prompt, tag + ".bt[" + i + "].prompt");
    (x.hints || []).forEach((h, j) => checkText(h, tag + ".bt[" + i + "].hints[" + j + "]"));
    checkText(x.solution, tag + ".bt[" + i + "].solution");
  });
  (L.quiz || []).forEach((q, i) => {
    if (q.type !== "mc" && q.type !== "fill") errors.push(tag + ".quiz[" + i + "] type lạ: " + q.type);
    checkText(q.q, tag + ".quiz[" + i + "].q");
    if (q.explain) checkText(q.explain, tag + ".quiz[" + i + "].explain");
    if (q.type === "mc") {
      if (!Array.isArray(q.choices) || q.choices.length < 2) errors.push(tag + ".quiz[" + i + "] thiếu choices");
      else q.choices.forEach((c, ci) => checkText(c, tag + ".quiz[" + i + "].choice[" + ci + "]"));
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= (q.choices || []).length)
        errors.push(tag + ".quiz[" + i + "] answer ngoài phạm vi");
    } else if (q.answer == null) errors.push(tag + ".quiz[" + i + "] thiếu answer");
  });
  quizCount += (L.quiz || []).length;
  (byChapter[L.chapter] = byChapter[L.chapter] || []).push(
    "  " + tag.padEnd(34) + " | bài tập " + (L.exercises || []).length +
    " (NB " + lv["Nhận biết"] + "/TH " + lv["Thông hiểu"] + "/VD " + lv["Vận dụng"] + ")" +
    " | quiz " + (L.quiz || []).length +
    " | widget: " + (L.visual ? L.visual.type + (L.visual.config && L.visual.config.kind ? ":" + L.visual.config.kind : "") : "—")
  );
});
Object.keys(byChapter).sort().forEach((c) => { console.log(c); byChapter[c].forEach((r) => console.log(r)); });

console.log("\nĐã biên dịch thử", formulaCount, "công thức KaTeX; tổng số câu quiz:", quizCount, ".");
if (errors.length) { console.log("\n❌ " + errors.length + " VẤN ĐỀ:"); errors.forEach((e) => console.log("  - " + e)); process.exit(1); }
else console.log("\n✅ TẤT CẢ ỔN: đăng ký đúng, mọi công thức biên dịch được, không có $ lệch.");
