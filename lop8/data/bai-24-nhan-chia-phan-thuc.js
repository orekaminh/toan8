/* Bài 24. Phép nhân và phép chia phân thức đại số — Chương VI (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-24-nhan-chia-phan-thuc",
  chapter: "Chương VI. Phân thức đại số",
  order: 4,
  title: "Bài 24. Phép nhân và phép chia phân thức đại số",

  objectives: [
    "Nhân hai phân thức (nhân tử với tử, mẫu với mẫu) và rút gọn kết quả.",
    "Chia hai phân thức bằng cách nhân với phân thức nghịch đảo.",
    "Vận dụng để rút gọn các biểu thức phân thức.",
  ],

  intro: {
    text:
      "Nhân phân thức thì <b>nhân tử với tử, mẫu với mẫu</b> (giống phân số). Chia phân thức thì " +
      "<b>nhân với phân thức nghịch đảo</b>. Trượt $x$ để kiểm chứng một phép nhân phân thức.",
    math: "\\dfrac{A}{B} \\cdot \\dfrac{C}{D} = \\dfrac{A \\cdot C}{B \\cdot D}",
  },

  theory: [
    {
      heading: "1. Nhân hai phân thức",
      html: "Nhân tử với tử, mẫu với mẫu; sau đó nên rút gọn kết quả.",
      formula: "\\dfrac{A}{B} \\cdot \\dfrac{C}{D} = \\dfrac{AC}{BD}",
    },
    {
      heading: "2. Chia hai phân thức",
      html:
        "Chia cho một phân thức nghĩa là nhân với <b>phân thức nghịch đảo</b> của nó " +
        "(phân thức nghịch đảo của $\\dfrac{C}{D}$ là $\\dfrac{D}{C}$, với $C, D \\ne 0$).",
      formula: "\\dfrac{A}{B} : \\dfrac{C}{D} = \\dfrac{A}{B} \\cdot \\dfrac{D}{C} = \\dfrac{AD}{BC}",
    },
  ],

  visual: {
    type: "identity",
    config: {
      mode: "check",
      hint: "Một phép nhân phân thức (sau khi rút gọn) cho ra phân thức bằng nó. Trượt $x$ để kiểm chứng hai vế luôn cho cùng giá trị.",
      latex: "\\dfrac{x}{x+1} \\cdot \\dfrac{x+1}{3} = \\dfrac{x}{3}",
      vars: [{ id: "x", label: "x", min: 1, max: 6, val: 2 }],
      lhs: function (v) { return (v.x / (v.x + 1)) * ((v.x + 1) / 3); },
      rhs: function (v) { return v.x / 3; },
    },
  },

  examples: [
    {
      title: "Nhân rồi rút gọn",
      prompt: "Tính $\\dfrac{x}{x+2} \\cdot \\dfrac{x+2}{5}$.",
      steps: [
        "Nhân tử với tử, mẫu với mẫu: $\\dfrac{x(x+2)}{5(x+2)}$.",
        "Chia cả tử và mẫu cho nhân tử chung $(x+2)$: $\\dfrac{x}{5}$ (với $x \\ne -2$).",
      ],
    },
    {
      title: "Nhân hai biến",
      prompt: "Tính $\\dfrac{x^2}{y} \\cdot \\dfrac{y^2}{x}$.",
      steps: [
        "$\\dfrac{x^2 \\cdot y^2}{y \\cdot x} = \\dfrac{x^2 y^2}{xy}$.",
        "Rút gọn (chia cho $xy$): $\\dfrac{x^2 y^2}{xy} = xy$.",
      ],
    },
    {
      title: "Chia phân thức",
      prompt: "Tính $\\dfrac{x}{3} : \\dfrac{x}{6}$.",
      steps: [
        "Chia là nhân với nghịch đảo: $\\dfrac{x}{3} \\cdot \\dfrac{6}{x}$.",
        "$\\dfrac{6x}{3x} = 2$ (với $x \\ne 0$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Chia mà không nghịch đảo: $\\dfrac{A}{B} : \\dfrac{C}{D} = \\dfrac{A:C}{B:D}$.",
      right: "$\\dfrac{A}{B} : \\dfrac{C}{D} = \\dfrac{A}{B} \\cdot \\dfrac{D}{C}$ — nhân với nghịch đảo.",
      note: "Lật ngược phân thức thứ hai rồi nhân.",
    },
    {
      wrong: "Quên rút gọn kết quả sau khi nhân.",
      right: "Sau khi nhân, luôn kiểm tra xem còn nhân tử chung để rút gọn không.",
      note: "Kết quả nên ở dạng tối giản.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tính $\\dfrac{2}{x} \\cdot \\dfrac{x}{5}$ (với $x \\ne 0$).",
      hints: ["Nhân tử với tử, mẫu với mẫu rồi rút gọn."],
      solution: "$\\dfrac{2x}{5x} = \\dfrac{2}{5}$." },
    { level: "Nhận biết", prompt: "Nêu phân thức nghịch đảo của $\\dfrac{x+1}{x-2}$.",
      hints: ["Lật ngược tử và mẫu."],
      solution: "Nghịch đảo là $\\dfrac{x-2}{x+1}$." },
    { level: "Nhận biết", prompt: "Tính $\\dfrac{3}{x} : \\dfrac{1}{x}$ (với $x \\ne 0$).",
      hints: ["Nhân với nghịch đảo của $\\dfrac{1}{x}$ là $\\dfrac{x}{1}$."],
      solution: "$\\dfrac{3}{x} \\cdot \\dfrac{x}{1} = 3$." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{x-1}{4} \\cdot \\dfrac{8}{x-1}$ (với $x \\ne 1$).",
      hints: ["Nhân rồi rút gọn nhân tử chung $(x-1)$."],
      solution: "$\\dfrac{8(x-1)}{4(x-1)} = 2$." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{x+3}{x} \\cdot \\dfrac{x^2}{x+3}$.",
      hints: ["Nhân rồi rút gọn $(x+3)$ và bớt một $x$."],
      solution: "$\\dfrac{(x+3)x^2}{x(x+3)} = x$ (với $x \\ne 0,\\ x \\ne -3$)." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{x}{x+1} : \\dfrac{x}{x-1}$.",
      hints: ["Nhân với nghịch đảo $\\dfrac{x-1}{x}$."],
      solution: "$\\dfrac{x}{x+1} \\cdot \\dfrac{x-1}{x} = \\dfrac{x-1}{x+1}$ (với $x \\ne 0$)." },
    { level: "Vận dụng", prompt: "Tính $\\dfrac{x^2-1}{x} \\cdot \\dfrac{2x}{x+1}$.",
      hints: ["$x^2 - 1 = (x-1)(x+1)$.", "Rút gọn $(x+1)$ và $x$."],
      solution: "$\\dfrac{(x-1)(x+1) \\cdot 2x}{x(x+1)} = 2(x-1)$ (với $x \\ne 0,\\ x \\ne -1$)." },
    { level: "Vận dụng", prompt: "Tính $\\dfrac{x^2-4}{x+1} : \\dfrac{x-2}{x+1}$.",
      hints: ["Nhân với nghịch đảo $\\dfrac{x+1}{x-2}$.", "$x^2-4 = (x-2)(x+2)$."],
      solution: "$\\dfrac{(x-2)(x+2)}{x+1} \\cdot \\dfrac{x+1}{x-2} = x + 2$ (với $x \\ne -1,\\ x \\ne 2$)." },
  ],

  quiz: [
    { type: "mc", q: "$\\dfrac{2}{x} \\cdot \\dfrac{x}{5} = $? (với $x \\ne 0$)", choices: ["$\\dfrac{2}{5}$", "$\\dfrac{2x}{5}$", "$\\dfrac{2}{5x}$", "$\\dfrac{2x^2}{5}$"], answer: 0, explain: "$\\dfrac{2x}{5x} = \\dfrac{2}{5}$." },
    { type: "mc", q: "$\\dfrac{A}{B} : \\dfrac{C}{D} = $?", choices: ["$\\dfrac{A}{B} \\cdot \\dfrac{D}{C}$", "$\\dfrac{A}{B} \\cdot \\dfrac{C}{D}$", "$\\dfrac{A:C}{B:D}$", "$\\dfrac{AC}{BD}$"], answer: 0, explain: "Chia = nhân với phân thức nghịch đảo." },
    { type: "mc", q: "$\\dfrac{3}{x} : \\dfrac{1}{x} = $? (với $x \\ne 0$)", choices: ["$3$", "$\\dfrac{3}{x^2}$", "$\\dfrac{1}{3}$", "$3x$"], answer: 0, explain: "$\\dfrac{3}{x} \\cdot \\dfrac{x}{1} = 3$." },
  ],
});
