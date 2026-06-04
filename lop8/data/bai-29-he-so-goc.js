/* Bài 29. Hệ số góc của đường thẳng — Chương VII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-29-he-so-goc",
  chapter: "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
  order: 5,
  title: "Bài 29. Hệ số góc của đường thẳng",

  objectives: [
    "Hiểu $a$ là hệ số góc của đường thẳng $y = ax + b$ và ý nghĩa độ dốc của nó.",
    "Nhận biết vị trí tương đối của hai đường thẳng: song song, trùng nhau, cắt nhau.",
    "Tìm điều kiện để hai đường thẳng song song hoặc cắt nhau.",
  ],

  intro: {
    text:
      "Trong $y = ax + b$, số $a$ cho biết đường thẳng <b>dốc</b> thế nào: $a > 0$ đi lên, $a < 0$ đi xuống, " +
      "$|a|$ càng lớn càng dốc. Vì thế $a$ được gọi là <b>hệ số góc</b>. Trượt thanh $a$ để thấy đường " +
      "thẳng nghiêng theo.",
    math: "y = ax + b",
  },

  theory: [
    {
      heading: "1. Hệ số góc",
      html:
        "Trong hàm số bậc nhất $y = ax + b$, hệ số $a$ gọi là <b>hệ số góc</b> của đường thẳng.<br>" +
        "• $a > 0$: đường thẳng đi lên từ trái sang phải;<br>" +
        "• $a < 0$: đường thẳng đi xuống;<br>" +
        "• $|a|$ càng lớn thì đường thẳng càng dốc.",
    },
    {
      heading: "2. Hai đường thẳng song song / trùng / cắt nhau",
      html:
        "Cho $(d): y = ax + b$ và $(d'): y = a'x + b'$.<br>" +
        "• <b>Song song</b> $\\Leftrightarrow a = a'$ và $b \\ne b'$;<br>" +
        "• <b>Trùng nhau</b> $\\Leftrightarrow a = a'$ và $b = b'$;<br>" +
        "• <b>Cắt nhau</b> $\\Leftrightarrow a \\ne a'$.",
      formula: "(d) \\parallel (d') \\ \\Leftrightarrow\\ a = a' \\ \\text{và}\\ b \\ne b'",
    },
  ],

  visual: { type: "graph", config: { a: 1, b: 0, slope: true, hint: "Số $a$ là <b>hệ số góc</b> — nó quyết định độ dốc của đường thẳng. Trượt $a$ để thấy đường nghiêng nhiều/ít; trượt $b$ để dời đường lên xuống mà <b>không đổi độ dốc</b>." } },

  examples: [
    {
      title: "Tìm hệ số góc",
      prompt: "Tìm hệ số góc của các đường thẳng $y = 3x - 2$ và $y = -x + 5$.",
      steps: [
        "Đường $y = 3x - 2$ có hệ số góc $a = 3$ (đi lên).",
        "Đường $y = -x + 5$ có hệ số góc $a = -1$ (đi xuống).",
      ],
    },
    {
      title: "Hai đường song song",
      prompt: "Hai đường thẳng $y = 2x + 1$ và $y = 2x - 3$ có song song không?",
      steps: [
        "Hệ số góc bằng nhau: $a = a' = 2$.",
        "Tung độ gốc khác nhau: $1 \\ne -3$.",
        "Vậy hai đường thẳng <b>song song</b>.",
      ],
    },
    {
      title: "Hai đường cắt nhau",
      prompt: "Xét vị trí của $y = 2x + 1$ và $y = -x + 1$.",
      steps: [
        "Hệ số góc khác nhau: $2 \\ne -1$.",
        "Vậy hai đường thẳng <b>cắt nhau</b>. (Chúng cùng đi qua $(0; 1)$ vì cùng $b = 1$.)",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Kết luận hai đường song song chỉ vì $a = a'$, không xét $b$.",
      right: "Cần $a = a'$ <b>và</b> $b \\ne b'$. Nếu $b = b'$ thì hai đường TRÙNG nhau.",
      note: "Đừng quên điều kiện $b \\ne b'$.",
    },
    {
      wrong: "Coi $b$ (tung độ gốc) là hệ số góc.",
      right: "Hệ số góc là $a$ (hệ số của $x$), không phải $b$.",
      note: "$a$ điều khiển độ dốc; $b$ chỉ dời đường lên/xuống.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Hệ số góc của đường thẳng $y = -5x + 2$ là bao nhiêu?",
      hints: ["Hệ số góc là hệ số của $x$."],
      solution: "Hệ số góc là $a = -5$." },
    { level: "Nhận biết", prompt: "Đường thẳng $y = 4x - 1$ đi lên hay đi xuống?",
      hints: ["Xét dấu hệ số góc."],
      solution: "$a = 4 > 0$ nên đường thẳng đi lên." },
    { level: "Nhận biết", prompt: "Hai đường $y = 3x + 2$ và $y = 3x - 7$ có cùng hệ số góc không?",
      hints: ["So sánh hệ số của $x$."],
      solution: "Có, cùng hệ số góc $a = 3$." },
    { level: "Thông hiểu", prompt: "Hai đường thẳng $y = 5x - 1$ và $y = 5x - 1$ ở vị trí nào với nhau?",
      hints: ["So sánh cả $a$ và $b$."],
      solution: "$a = a' = 5$ và $b = b' = -1$ nên hai đường TRÙNG nhau." },
    { level: "Thông hiểu", prompt: "Xét vị trí tương đối của $y = -2x + 3$ và $y = -2x + 3{,}5$.",
      hints: ["$a$ bằng nhau? $b$ có khác nhau không?"],
      solution: "$a = a' = -2$ nhưng $b = 3 \\ne 3{,}5 = b'$, nên hai đường SONG SONG." },
    { level: "Thông hiểu", prompt: "Xét vị trí của $y = x + 4$ và $y = 3x - 2$.",
      hints: ["So sánh hai hệ số góc."],
      solution: "$1 \\ne 3$ nên hai đường CẮT nhau." },
    { level: "Vận dụng", prompt: "Tìm $m$ để đường thẳng $y = (m - 2)x + 1$ song song với đường thẳng $y = 3x - 4$.",
      hints: ["Song song cần hệ số góc bằng nhau: $m - 2 = 3$.", "Kiểm tra tung độ gốc khác nhau ($1 \\ne -4$ ✓)."],
      solution: "$m - 2 = 3 \\Rightarrow m = 5$ (khi đó $b = 1 \\ne -4$ nên thật sự song song)." },
    { level: "Vận dụng", prompt: "Tìm $m$ để hai đường thẳng $y = mx + 1$ và $y = 2x + 1$ cắt nhau.",
      hints: ["Cắt nhau khi hệ số góc khác nhau: $m \\ne 2$."],
      solution: "Hai đường cắt nhau khi $m \\ne 2$ (với mọi $m \\ne 2$; lưu ý vẫn cần $m \\ne 0$ để là hàm bậc nhất)." },
  ],

  quiz: [
    { type: "fill", q: "Hệ số góc của đường thẳng $y = -5x + 2$ là bao nhiêu?", answer: -5, explain: "Hệ số góc là hệ số của $x$, tức $-5$." },
    { type: "mc", q: "Hai đường thẳng $y = 2x + 1$ và $y = 2x - 3$ ở vị trí:", choices: ["Song song", "Trùng nhau", "Cắt nhau", "Vuông góc"], answer: 0, explain: "$a = a' = 2$ và $b \\ne b'$." },
    { type: "mc", q: "Hai đường thẳng song song khi:", choices: ["$a = a'$ và $b \\ne b'$", "$a = a'$ và $b = b'$", "$a \\ne a'$", "$b = b'$"], answer: 0, explain: "Cùng hệ số góc nhưng khác tung độ gốc." },
  ],
});
