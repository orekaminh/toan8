/* Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất — Chương VII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-28-ham-so-bac-nhat-do-thi",
  chapter: "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
  order: 4,
  title: "Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất",

  objectives: [
    "Nhận biết hàm số bậc nhất $y = ax + b$ ($a \\ne 0$); biết $b$ là tung độ gốc.",
    "Biết hàm số đồng biến khi $a>0$, nghịch biến khi $a<0$.",
    "Vẽ được đồ thị hàm số bậc nhất bằng cách xác định hai điểm.",
  ],

  intro: {
    text:
      "Hàm số cước taxi $y = 15x + 12$ có dạng $y = ax + b$ — gọi là <b>hàm số bậc nhất</b>. Đồ thị của " +
      "nó là một <b>đường thẳng</b>. Trượt thanh $a, b$ bên dưới để cảm nhận: $a$ quyết định lên/xuống, " +
      "$b$ là chỗ đường cắt trục tung.",
    math: "y = ax + b \\quad (a \\ne 0)",
  },

  theory: [
    {
      heading: "1. Hàm số bậc nhất",
      html: "Hàm số bậc nhất là hàm số cho bởi công thức $y = ax + b$, trong đó $a, b$ là số cho trước và $a \\ne 0$. Số $b$ gọi là <b>tung độ gốc</b>.",
      formula: "y = ax + b \\quad (a \\ne 0)",
    },
    {
      heading: "2. Tính đồng biến, nghịch biến",
      html:
        "• Nếu $a > 0$: hàm số <b>đồng biến</b> (x tăng thì y tăng, đồ thị đi lên).<br>" +
        "• Nếu $a < 0$: hàm số <b>nghịch biến</b> (x tăng thì y giảm, đồ thị đi xuống).",
    },
    {
      heading: "3. Đồ thị và cách vẽ",
      html:
        "Đồ thị hàm số $y = ax + b$ ($a \\ne 0$) là một đường thẳng cắt trục tung tại $(0; b)$. " +
        "Để vẽ, ta xác định <b>hai điểm</b> rồi nối lại — thường lấy giao với hai trục: $(0; b)$ và " +
        "$\\left(-\\dfrac{b}{a};\\ 0\\right)$.",
    },
  ],

  visual: { type: "graph", config: { a: 2, b: 1 } },

  examples: [
    {
      title: "Nhận biết hàm số bậc nhất",
      prompt: "Trong các hàm số sau, hàm nào là bậc nhất: $y = 2x - 1$; $y = 3$; $y = x^2 + 1$?",
      steps: [
        "$y = 2x - 1$ có dạng $ax + b$ với $a = 2 \\ne 0$ → là hàm số bậc nhất.",
        "$y = 3$ có $a = 0$ → KHÔNG phải hàm số bậc nhất (là hàm hằng).",
        "$y = x^2 + 1$ chứa $x^2$ → không phải bậc nhất.",
      ],
    },
    {
      title: "Đồng biến hay nghịch biến",
      prompt: "Xét tính đồng biến, nghịch biến của $y = -3x + 2$.",
      steps: [
        "Hệ số $a = -3 < 0$.",
        "Vậy hàm số <b>nghịch biến</b> (đồ thị đi xuống).",
      ],
    },
    {
      title: "Vẽ đồ thị",
      prompt: "Vẽ đồ thị hàm số $y = 2x + 1$.",
      steps: [
        "Chọn $x = 0 \\Rightarrow y = 1$, được điểm $A(0; 1)$ (cắt trục tung).",
        "Chọn $x = 1 \\Rightarrow y = 3$, được điểm $B(1; 3)$.",
        "Vẽ đường thẳng qua $A$ và $B$ — đó là đồ thị cần tìm.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Gọi $y = 5$ là hàm số bậc nhất.",
      right: "Cần $a \\ne 0$. $y = 5$ có $a = 0$ nên KHÔNG phải hàm số bậc nhất.",
      note: "Điều kiện sống còn: $a \\ne 0$.",
    },
    {
      wrong: "Cho rằng $a < 0$ thì hàm số đồng biến.",
      right: "$a > 0$ → đồng biến; $a < 0$ → nghịch biến.",
      note: "Dấu của $a$ quyết định lên (đồng biến) hay xuống (nghịch biến).",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Hàm số nào là bậc nhất: $y = -4x + 7$; $y = \\dfrac{2}{x}$; $y = 0x + 5$?",
      hints: ["Dạng $ax+b$ với $a \\ne 0$, ẩn không nằm dưới mẫu."],
      solution: "Chỉ $y = -4x + 7$ là hàm số bậc nhất." },
    { level: "Nhận biết", prompt: "Cho $y = 3x - 5$. Xác định $a$, $b$ và tung độ gốc.",
      hints: ["$a$ là hệ số của $x$; $b$ là hằng số (tung độ gốc)."],
      solution: "$a = 3$, $b = -5$; tung độ gốc là $-5$." },
    { level: "Nhận biết", prompt: "Hàm số $y = -2x + 1$ đồng biến hay nghịch biến?",
      hints: ["Xét dấu của $a$."],
      solution: "$a = -2 < 0$ nên hàm số nghịch biến." },
    { level: "Thông hiểu", prompt: "Tìm giao điểm của đồ thị $y = 2x - 4$ với trục tung và trục hoành.",
      hints: ["Trục tung: $x = 0$. Trục hoành: $y = 0$."],
      solution: "Trục tung: $(0; -4)$. Trục hoành: $0 = 2x - 4 \\Rightarrow x = 2$, điểm $(2; 0)$." },
    { level: "Thông hiểu", prompt: "Với giá trị nào của $m$ thì $y = (m - 1)x + 3$ là hàm số bậc nhất?",
      hints: ["Cần hệ số của $x$ khác $0$: $m - 1 \\ne 0$."],
      solution: "$m - 1 \\ne 0 \\Leftrightarrow m \\ne 1$." },
    { level: "Thông hiểu", prompt: "Cho $y = ax + 2$ đi qua điểm $(1; 5)$. Tìm $a$.",
      hints: ["Thay $x=1, y=5$ vào: $5 = a \\cdot 1 + 2$."],
      solution: "$a + 2 = 5 \\Rightarrow a = 3$." },
    { level: "Vận dụng", prompt:
        "Một lò xo dài $10$ cm khi chưa treo vật. Treo vật nặng $x$ (kg) thì lò xo dài thêm $2x$ cm, nên " +
        "chiều dài là $y = 2x + 10$ (cm). Tính chiều dài khi treo $3$ kg; và treo bao nhiêu kg thì lò xo dài $20$ cm?",
      hints: ["Chiều dài khi $x = 3$: thay vào.", "Dài $20$ cm: giải $2x + 10 = 20$."],
      solution: "Khi $x=3$: $y = 2 \\cdot 3 + 10 = 16$ cm. Giải $2x + 10 = 20 \\Rightarrow x = 5$ kg." },
    { level: "Vận dụng", prompt: "Đồ thị hàm số $y = ax + b$ cắt trục tung tại $(0; 3)$ và đi qua $(2; 7)$. Tìm $a, b$.",
      hints: ["Cắt trục tung tại $(0;3)$ cho ngay $b = 3$.", "Thay $(2;7)$: $7 = 2a + 3$."],
      solution: "$b = 3$; $7 = 2a + 3 \\Rightarrow a = 2$. Vậy $y = 2x + 3$." },
  ],

  quiz: [
    { type: "mc", q: "Hàm số nào là hàm số bậc nhất?", choices: ["$y = 2x - 1$", "$y = 3$", "$y = x^2 + 1$", "$y = \\dfrac{2}{x}$"], answer: 0, explain: "Dạng $y = ax + b$ với $a \\ne 0$." },
    { type: "mc", q: "Hàm số $y = -3x + 2$ là hàm số:", choices: ["Nghịch biến", "Đồng biến", "Hằng", "Không xác định"], answer: 0, explain: "$a = -3 < 0$ nên nghịch biến." },
    { type: "fill", q: "Đồ thị $y = 2x - 4$ cắt trục hoành tại điểm có hoành độ $x = $? (cho $y = 0$)", answer: 2, explain: "$0 = 2x - 4 \\Rightarrow x = 2$." },
  ],
});
