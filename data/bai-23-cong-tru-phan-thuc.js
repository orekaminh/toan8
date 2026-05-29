/* Bài 23. Phép cộng và phép trừ phân thức đại số — Chương VI (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-23-cong-tru-phan-thuc",
  chapter: "Chương VI. Phân thức đại số",
  order: 3,
  title: "Bài 23. Phép cộng và phép trừ phân thức đại số",

  objectives: [
    "Cộng, trừ hai phân thức cùng mẫu.",
    "Cộng, trừ hai phân thức khác mẫu bằng cách quy đồng mẫu thức.",
    "Hiểu phân thức đối và dùng nó để thực hiện phép trừ.",
  ],

  intro: {
    text:
      "Cộng, trừ phân thức cũng như cộng, trừ phân số: <b>cùng mẫu</b> thì cộng/trừ tử; <b>khác mẫu</b> " +
      "thì quy đồng trước. Trượt $x$ ở widget để kiểm chứng một kết quả cộng phân thức luôn đúng.",
    math: "\\dfrac{A}{M} + \\dfrac{B}{M} = \\dfrac{A+B}{M}",
  },

  theory: [
    {
      heading: "1. Cộng, trừ cùng mẫu",
      html: "Cộng (trừ) các tử thức và giữ nguyên mẫu thức chung.",
      formula: "\\dfrac{A}{M} + \\dfrac{B}{M} = \\dfrac{A+B}{M};\\qquad \\dfrac{A}{M} - \\dfrac{B}{M} = \\dfrac{A-B}{M}",
    },
    {
      heading: "2. Cộng, trừ khác mẫu",
      html: "Quy đồng mẫu thức để đưa về cùng mẫu, sau đó cộng (trừ) như trên rồi rút gọn nếu được.",
    },
    {
      heading: "3. Phân thức đối",
      html:
        "Phân thức đối của $\\dfrac{A}{B}$ là $-\\dfrac{A}{B} = \\dfrac{-A}{B}$. " +
        "Trừ một phân thức nghĩa là cộng với phân thức đối của nó.",
      formula: "\\dfrac{A}{B} - \\dfrac{C}{D} = \\dfrac{A}{B} + \\left(-\\dfrac{C}{D}\\right)",
    },
  ],

  visual: {
    type: "identity",
    config: {
      mode: "check",
      hint: "Một phép cộng phân thức cho ra kết quả là một phân thức bằng nó. Trượt $x$ để kiểm chứng hai vế luôn cho cùng một giá trị (đã tránh các giá trị làm mẫu bằng $0$).",
      latex: "\\dfrac{1}{x} + \\dfrac{1}{x+1} = \\dfrac{2x+1}{x(x+1)}",
      vars: [{ id: "x", label: "x", min: 1, max: 6, val: 2 }],
      lhs: function (v) { return 1 / v.x + 1 / (v.x + 1); },
      rhs: function (v) { return (2 * v.x + 1) / (v.x * (v.x + 1)); },
    },
  },

  examples: [
    {
      title: "Cùng mẫu",
      prompt: "Tính $\\dfrac{2x}{x+1} + \\dfrac{3}{x+1}$.",
      steps: [
        "Hai phân thức cùng mẫu $x+1$ nên cộng các tử.",
        "$\\dfrac{2x + 3}{x+1}$.",
      ],
    },
    {
      title: "Khác mẫu (cộng)",
      prompt: "Tính $\\dfrac{1}{x} + \\dfrac{1}{x+1}$.",
      steps: [
        "Mẫu thức chung là $x(x+1)$.",
        "$\\dfrac{1}{x} = \\dfrac{x+1}{x(x+1)}$, $\\dfrac{1}{x+1} = \\dfrac{x}{x(x+1)}$.",
        "Cộng tử: $\\dfrac{(x+1) + x}{x(x+1)} = \\dfrac{2x+1}{x(x+1)}$.",
      ],
    },
    {
      title: "Khác mẫu (trừ)",
      prompt: "Tính $\\dfrac{1}{x-1} - \\dfrac{1}{x}$.",
      steps: [
        "Mẫu thức chung là $x(x-1)$.",
        "$\\dfrac{x}{x(x-1)} - \\dfrac{x-1}{x(x-1)} = \\dfrac{x - (x-1)}{x(x-1)}$.",
        "Tử: $x - (x-1) = 1$, nên kết quả là $\\dfrac{1}{x(x-1)}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cộng cả mẫu: $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{2}{x+y}$.",
      right: "Phải quy đồng: $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{y + x}{xy}$.",
      note: "KHÔNG cộng mẫu với mẫu.",
    },
    {
      wrong: "Khi trừ quên đổi dấu tử: $\\dfrac{x}{m} - \\dfrac{x-1}{m} = \\dfrac{x - x - 1}{m}$.",
      right: "$\\dfrac{x - (x-1)}{m} = \\dfrac{1}{m}$ — đổi dấu cả tử bị trừ.",
      note: "Đặt tử bị trừ trong ngoặc rồi mới bỏ dấu.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tính $\\dfrac{3}{x} + \\dfrac{4}{x}$.",
      hints: ["Cùng mẫu → cộng tử."],
      solution: "$\\dfrac{3+4}{x} = \\dfrac{7}{x}$." },
    { level: "Nhận biết", prompt: "Tính $\\dfrac{5x}{x+2} - \\dfrac{3x}{x+2}$.",
      hints: ["Cùng mẫu → trừ tử."],
      solution: "$\\dfrac{5x - 3x}{x+2} = \\dfrac{2x}{x+2}$." },
    { level: "Nhận biết", prompt: "Nêu phân thức đối của $\\dfrac{x}{x-3}$.",
      hints: ["Đổi dấu phân thức."],
      solution: "Phân thức đối là $-\\dfrac{x}{x-3} = \\dfrac{-x}{x-3}$." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{2}{x} + \\dfrac{3}{x^2}$.",
      hints: ["MTC $= x^2$. Nhân phân thức đầu với $\\dfrac{x}{x}$."],
      solution: "$\\dfrac{2x}{x^2} + \\dfrac{3}{x^2} = \\dfrac{2x+3}{x^2}$." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{1}{x-2} + \\dfrac{1}{x+2}$.",
      hints: ["MTC $= (x-2)(x+2)$.", "Cộng hai tử sau khi quy đồng."],
      solution: "$\\dfrac{(x+2) + (x-2)}{(x-2)(x+2)} = \\dfrac{2x}{x^2-4}$." },
    { level: "Thông hiểu", prompt: "Tính $\\dfrac{x}{x-1} - \\dfrac{1}{x-1}$.",
      hints: ["Cùng mẫu → trừ tử."],
      solution: "$\\dfrac{x-1}{x-1} = 1$ (với $x \\ne 1$)." },
    { level: "Vận dụng", prompt: "Tính $\\dfrac{3}{x-1} - \\dfrac{3}{x+1}$.",
      hints: ["MTC $= (x-1)(x+1)$.", "Tử: $3(x+1) - 3(x-1)$."],
      solution: "$\\dfrac{3(x+1) - 3(x-1)}{(x-1)(x+1)} = \\dfrac{6}{x^2-1}$." },
    { level: "Vận dụng", prompt: "Tính $\\dfrac{x}{x+3} + \\dfrac{3}{x+3} - \\dfrac{6}{x+3}$.",
      hints: ["Cùng mẫu $x+3$ → gộp các tử.", "$x + 3 - 6 = x - 3$."],
      solution: "$\\dfrac{x + 3 - 6}{x+3} = \\dfrac{x-3}{x+3}$." },
  ],

  quiz: [
    { type: "mc", q: "$\\dfrac{3}{x} + \\dfrac{4}{x} = $?", choices: ["$\\dfrac{7}{x}$", "$\\dfrac{7}{2x}$", "$\\dfrac{12}{x}$", "$\\dfrac{7}{x^2}$"], answer: 0, explain: "Cùng mẫu → cộng tử: $3 + 4 = 7$." },
    { type: "mc", q: "$\\dfrac{1}{x} + \\dfrac{1}{y} = $?", choices: ["$\\dfrac{x+y}{xy}$", "$\\dfrac{2}{x+y}$", "$\\dfrac{1}{xy}$", "$\\dfrac{2}{xy}$"], answer: 0, explain: "Quy đồng mẫu $xy$, KHÔNG cộng mẫu với mẫu." },
    { type: "mc", q: "$\\dfrac{x}{x-1} - \\dfrac{1}{x-1} = $? (với $x \\ne 1$)", choices: ["$1$", "$x-1$", "$\\dfrac{x}{x-1}$", "$0$"], answer: 0, explain: "$\\dfrac{x-1}{x-1} = 1$." },
  ],
});
