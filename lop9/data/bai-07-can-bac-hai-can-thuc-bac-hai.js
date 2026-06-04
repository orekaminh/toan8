/* Bài 7. Căn bậc hai và căn thức bậc hai
   Chương III (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-07-can-bac-hai-can-thuc-bac-hai",
  chapter: "Chương III. Căn bậc hai và căn bậc ba",
  order: 1,
  title: "Bài 7. Căn bậc hai và căn thức bậc hai",

  objectives: [
    "Hiểu khái niệm căn bậc hai số học của một số không âm và tính được nó.",
    "Vận dụng hằng đẳng thức $\\sqrt{A^2} = |A|$ để rút gọn.",
    "Tìm được điều kiện xác định (ĐKXĐ) của một căn thức bậc hai.",
  ],

  intro: {
    text:
      "Khi biết diện tích một hình vuông là $16\\ \\text{m}^2$, ta muốn tìm độ dài cạnh của nó. Cạnh đó là " +
      "số dương mà bình phương lên bằng $16$, tức là $\\sqrt{16} = 4$ (m). Phép toán đó gọi là lấy " +
      "<b>căn bậc hai số học</b>. Bài này giúp bạn hiểu rõ căn bậc hai số học, hằng đẳng thức " +
      "$\\sqrt{A^2} = |A|$ và cách tìm điều kiện để một căn thức có nghĩa.",
    math: "\\sqrt{16} = 4",
  },

  theory: [
    {
      heading: "1. Căn bậc hai số học",
      html:
        "Với số $a \\ge 0$, <b>căn bậc hai số học</b> của $a$ là số <b>không âm</b> $\\sqrt{a}$ sao cho " +
        "$(\\sqrt{a})^2 = a$.<br>" +
        "Như vậy $\\sqrt{a} \\ge 0$ và bình phương của nó trả lại đúng số $a$. Ví dụ $\\sqrt{16} = 4$ vì " +
        "$4 \\ge 0$ và $4^2 = 16$. Lưu ý $\\sqrt{a}$ chỉ xác định khi $a \\ge 0$.",
      formula: "\\sqrt{a} \\ge 0,\\quad (\\sqrt{a})^2 = a \\quad (a \\ge 0)",
    },
    {
      heading: "2. Hằng đẳng thức $\\sqrt{A^2} = |A|$",
      html:
        "Với mọi biểu thức $A$ ta luôn có $\\sqrt{A^2} = |A|$. Nghĩa là khi $A \\ge 0$ thì $\\sqrt{A^2} = A$, " +
        "còn khi $A < 0$ thì $\\sqrt{A^2} = -A$.<br>" +
        "Ví dụ $\\sqrt{7^2} = |7| = 7$ và $\\sqrt{(-3)^2} = |-3| = 3$. Đừng quên dấu giá trị tuyệt đối khi " +
        "chưa biết $A$ âm hay dương.",
      formula: "\\sqrt{A^2} = |A|",
    },
    {
      heading: "3. Căn thức bậc hai và điều kiện xác định",
      html:
        "Biểu thức $\\sqrt{A}$ (với $A$ là một biểu thức chứa biến) được gọi là <b>căn thức bậc hai</b>. " +
        "Căn thức $\\sqrt{A}$ <b>xác định</b> (hay có nghĩa) khi và chỉ khi $A \\ge 0$.<br>" +
        "Để tìm <b>điều kiện xác định</b> (ĐKXĐ), ta giải bất phương trình $A \\ge 0$. Ví dụ $\\sqrt{x - 2}$ " +
        "xác định khi $x - 2 \\ge 0$, tức là $x \\ge 2$.",
      formula: "\\sqrt{A}\\ \\text{co nghia} \\Leftrightarrow A \\ge 0",
    },
  ],

  examples: [
    {
      title: "Tính căn bậc hai số học",
      prompt: "Tính $\\sqrt{16}$ và $\\sqrt{49}$.",
      steps: [
        "Tìm số không âm có bình phương bằng $16$: vì $4 \\ge 0$ và $4^2 = 16$ nên $\\sqrt{16} = 4$.",
        "Tìm số không âm có bình phương bằng $49$: vì $7 \\ge 0$ và $7^2 = 49$ nên $\\sqrt{49} = 7$.",
        "Vậy $\\sqrt{16} = 4$ và $\\sqrt{49} = 7$.",
      ],
    },
    {
      title: "Dùng hằng đẳng thức $\\sqrt{A^2} = |A|$",
      prompt: "Tính $\\sqrt{7^2}$ và $\\sqrt{(-3)^2}$.",
      steps: [
        "Áp dụng $\\sqrt{A^2} = |A|$ với $A = 7$: $\\sqrt{7^2} = |7| = 7$.",
        "Áp dụng với $A = -3$: $\\sqrt{(-3)^2} = |-3| = 3$.",
        "Lưu ý $\\sqrt{(-3)^2} \\ne -3$ vì căn bậc hai số học luôn không âm.",
      ],
    },
    {
      title: "Tìm điều kiện xác định",
      prompt: "Tìm điều kiện xác định của căn thức $\\sqrt{x - 2}$.",
      steps: [
        "Căn thức $\\sqrt{A}$ xác định khi $A \\ge 0$, ở đây $A = x - 2$.",
        "Giải $x - 2 \\ge 0 \\Rightarrow x \\ge 2$.",
        "Vậy $\\sqrt{x - 2}$ xác định khi $x \\ge 2$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Viết $\\sqrt{(-3)^2} = -3$.",
      right: "$\\sqrt{(-3)^2} = |-3| = 3$ vì căn bậc hai số học luôn <b>không âm</b>.",
      note: "Nhớ $\\sqrt{A^2} = |A|$, không phải $\\sqrt{A^2} = A$.",
    },
    {
      wrong: "Cho rằng $\\sqrt{-4}$ là một số thực.",
      right: "$\\sqrt{a}$ chỉ xác định khi $a \\ge 0$; với $a = -4 < 0$ thì $\\sqrt{-4}$ <b>không tồn tại</b> trong số thực.",
      note: "Luôn kiểm tra biểu thức dưới căn có không âm hay không.",
    },
    {
      wrong: "Tìm ĐKXĐ của $\\sqrt{x - 2}$ là $x > 2$.",
      right: "Điều kiện là $x - 2 \\ge 0$, tức $x \\ge 2$ (lấy <b>cả dấu bằng</b>).",
      note: "Khi $x = 2$ thì $\\sqrt{x - 2} = \\sqrt{0} = 0$ vẫn xác định.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt{25}$.",
      hints: ["Tìm số không âm có bình phương bằng $25$."],
      solution: "Vì $5 \\ge 0$ và $5^2 = 25$ nên $\\sqrt{25} = 5$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt{5^2}$.",
      hints: ["Dùng $\\sqrt{A^2} = |A|$."],
      solution: "$\\sqrt{5^2} = |5| = 5$.",
    },
    {
      level: "Nhận biết",
      prompt: "Căn thức $\\sqrt{x}$ xác định khi nào?",
      hints: ["$\\sqrt{A}$ xác định khi biểu thức dưới căn không âm."],
      solution: "$\\sqrt{x}$ xác định khi $x \\ge 0$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $\\sqrt{(-8)^2}$.",
      hints: ["Áp dụng $\\sqrt{A^2} = |A|$ với $A = -8$."],
      solution: "$\\sqrt{(-8)^2} = |-8| = 8$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tìm điều kiện xác định của căn thức $\\sqrt{x - 5}$.",
      hints: ["Cho biểu thức dưới căn $\\ge 0$ rồi giải."],
      solution: "$x - 5 \\ge 0 \\Rightarrow x \\ge 5$. Vậy căn thức xác định khi $x \\ge 5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tìm điều kiện xác định của căn thức $\\sqrt{2x + 6}$.",
      hints: ["Giải bất phương trình $2x + 6 \\ge 0$."],
      solution: "$2x + 6 \\ge 0 \\Rightarrow 2x \\ge -6 \\Rightarrow x \\ge -3$. Vậy căn thức xác định khi $x \\ge -3$.",
    },
    {
      level: "Vận dụng",
      prompt: "Rút gọn biểu thức $\\sqrt{(x - 4)^2}$ với $x \\ge 4$.",
      hints: ["Dùng $\\sqrt{A^2} = |A|$.", "Khi $x \\ge 4$ thì $x - 4 \\ge 0$ nên $|x - 4| = x - 4$."],
      solution:
        "$\\sqrt{(x - 4)^2} = |x - 4|$. Vì $x \\ge 4$ nên $x - 4 \\ge 0$, do đó $|x - 4| = x - 4$. Vậy biểu thức bằng $x - 4$.",
    },
    {
      level: "Vận dụng",
      prompt: "Tìm điều kiện xác định của căn thức $\\sqrt{3 - x}$ và tính giá trị của nó khi $x = -1$.",
      hints: ["Cho $3 - x \\ge 0$ để tìm ĐKXĐ.", "Thay $x = -1$ vào rồi tính căn."],
      solution:
        "ĐKXĐ: $3 - x \\ge 0 \\Rightarrow x \\le 3$. Khi $x = -1$ (thoả $x \\le 3$): $\\sqrt{3 - (-1)} = \\sqrt{4} = 2$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Giá trị của $\\sqrt{81}$ là bao nhiêu?",
      choices: ["$9$", "$-9$", "$\\pm 9$", "$8$"], answer: 0,
      explain: "Căn bậc hai số học không âm: $\\sqrt{81} = 9$ vì $9 \\ge 0$ và $9^2 = 81$." },
    { type: "fill", q: "Tính $\\sqrt{(-6)^2}$.", answer: 6,
      explain: "$\\sqrt{(-6)^2} = |-6| = 6$." },
    { type: "mc", q: "Căn thức $\\sqrt{x - 7}$ xác định khi nào?",
      choices: ["$x \\le 7$", "$x \\ge 7$", "$x > 7$", "$x \\ne 7$"], answer: 1,
      explain: "Cần $x - 7 \\ge 0$, tức $x \\ge 7$." },
  ],
});
