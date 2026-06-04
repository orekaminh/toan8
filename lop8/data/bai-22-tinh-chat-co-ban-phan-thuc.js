/* Bài 22. Tính chất cơ bản của phân thức đại số — Chương VI (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-22-tinh-chat-co-ban-phan-thuc",
  chapter: "Chương VI. Phân thức đại số",
  order: 2,
  title: "Bài 22. Tính chất cơ bản của phân thức đại số",

  objectives: [
    "Nắm tính chất cơ bản của phân thức (nhân/chia cả tử và mẫu cho cùng một đa thức khác $0$).",
    "Rút gọn phân thức bằng cách phân tích thành nhân tử rồi chia cho nhân tử chung.",
    "Quy đồng mẫu thức của nhiều phân thức.",
  ],

  intro: {
    text:
      "Giống phân số $\\dfrac{6}{9} = \\dfrac{2}{3}$, phân thức cũng <b>rút gọn</b> được bằng cách chia cả " +
      "tử và mẫu cho nhân tử chung. Đây là chìa khoá để tính toán phân thức gọn gàng. Bấm xem từng bước " +
      "rút gọn ở dưới.",
    math: "\\dfrac{A}{B} = \\dfrac{A \\cdot M}{B \\cdot M} \\quad (M \\ne 0)",
  },

  theory: [
    {
      heading: "1. Tính chất cơ bản",
      html:
        "• Nhân cả tử và mẫu với cùng một đa thức khác $0$ thì được phân thức bằng nó.<br>" +
        "• Chia cả tử và mẫu cho một <b>nhân tử chung</b> thì cũng được phân thức bằng nó.",
      formula: "\\dfrac{A}{B} = \\dfrac{A \\cdot M}{B \\cdot M}\\ (M \\ne 0);\\qquad \\dfrac{A}{B} = \\dfrac{A : N}{B : N}",
    },
    {
      heading: "2. Rút gọn phân thức",
      html:
        "Các bước: (1) phân tích tử và mẫu thành nhân tử; (2) tìm nhân tử chung; (3) chia cả tử và mẫu " +
        "cho nhân tử chung đó.",
    },
    {
      heading: "3. Quy đồng mẫu thức",
      html:
        "Để cộng/trừ các phân thức khác mẫu, ta <b>quy đồng</b>: tìm <b>mẫu thức chung (MTC)</b> rồi nhân " +
        "mỗi phân thức với <b>thừa số phụ</b> tương ứng để mọi phân thức cùng mẫu.",
    },
  ],

  visual: {
    type: "fraction",
    config: {
      mode: "simplify",
      steps: ["\\dfrac{x^2-1}{x-1}", "\\dfrac{(x-1)(x+1)}{x-1}", "x+1"],
      note: "Rút gọn được $x + 1$ (với điều kiện $x \\ne 1$).",
    },
  },

  examples: [
    {
      title: "Rút gọn (đơn thức)",
      prompt: "Rút gọn $\\dfrac{6x^2y}{9xy^2}$.",
      steps: [
        "Nhân tử chung của tử và mẫu là $3xy$.",
        "$\\dfrac{6x^2y}{9xy^2} = \\dfrac{3xy \\cdot 2x}{3xy \\cdot 3y} = \\dfrac{2x}{3y}$.",
      ],
    },
    {
      title: "Rút gọn (dùng hằng đẳng thức)",
      prompt: "Rút gọn $\\dfrac{x^2-4}{x+2}$.",
      steps: [
        "Phân tích tử: $x^2 - 4 = (x-2)(x+2)$.",
        "$\\dfrac{(x-2)(x+2)}{x+2} = x - 2$ (với $x \\ne -2$).",
      ],
    },
    {
      title: "Quy đồng mẫu thức",
      prompt: "Quy đồng mẫu thức hai phân thức $\\dfrac{1}{x}$ và $\\dfrac{1}{x+1}$.",
      steps: [
        "Mẫu thức chung là $x(x+1)$.",
        "$\\dfrac{1}{x} = \\dfrac{x+1}{x(x+1)}$ (nhân tử mẫu với $x+1$).",
        "$\\dfrac{1}{x+1} = \\dfrac{x}{x(x+1)}$ (nhân tử mẫu với $x$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Rút gọn bằng cách 'gạch' số hạng: $\\dfrac{x+2}{2} = x$.",
      right: "Chỉ được chia cho <b>nhân tử chung</b>, không được gạch từng số hạng. $\\dfrac{x+2}{2}$ không rút gọn thành $x$.",
      note: "Phân tích thành NHÂN TỬ rồi mới chia, đừng gạch hạng tử rời.",
    },
    {
      wrong: "Quên điều kiện khi rút gọn (ví dụ bỏ qua $x \\ne -2$).",
      right: "Khi chia cho nhân tử chứa biến, cần nêu điều kiện để nhân tử đó khác $0$.",
      note: "Rút gọn $\\dfrac{x^2-4}{x+2} = x-2$ chỉ đúng khi $x \\ne -2$.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Rút gọn $\\dfrac{4x}{6x}$ (với $x \\ne 0$).",
      hints: ["Chia cả tử và mẫu cho $2x$."],
      solution: "$\\dfrac{4x}{6x} = \\dfrac{2}{3}$." },
    { level: "Nhận biết", prompt: "Rút gọn $\\dfrac{x^2}{x}$ (với $x \\ne 0$).",
      hints: ["Chia tử và mẫu cho $x$."],
      solution: "$\\dfrac{x^2}{x} = x$." },
    { level: "Nhận biết", prompt: "Điền: $\\dfrac{2}{3} = \\dfrac{2x}{\\square}$.",
      hints: ["Nhân cả tử và mẫu với $x$."],
      solution: "$\\dfrac{2}{3} = \\dfrac{2x}{3x}$, vậy chỗ trống là $3x$." },
    { level: "Thông hiểu", prompt: "Rút gọn $\\dfrac{x^2-9}{x-3}$.",
      hints: ["Tử $= (x-3)(x+3)$."],
      solution: "$\\dfrac{(x-3)(x+3)}{x-3} = x + 3$ (với $x \\ne 3$)." },
    { level: "Thông hiểu", prompt: "Rút gọn $\\dfrac{3x+6}{x^2-4}$.",
      hints: ["Tử $= 3(x+2)$; mẫu $= (x-2)(x+2)$."],
      solution: "$\\dfrac{3(x+2)}{(x-2)(x+2)} = \\dfrac{3}{x-2}$ (với $x \\ne \\pm 2$)." },
    { level: "Thông hiểu", prompt: "Quy đồng mẫu thức $\\dfrac{2}{x-1}$ và $\\dfrac{3}{x+1}$.",
      hints: ["MTC $= (x-1)(x+1)$.", "Nhân mỗi phân thức với thừa số phụ thích hợp."],
      solution: "$\\dfrac{2}{x-1} = \\dfrac{2(x+1)}{(x-1)(x+1)}$ và $\\dfrac{3}{x+1} = \\dfrac{3(x-1)}{(x-1)(x+1)}$." },
    { level: "Vận dụng", prompt: "Rút gọn $\\dfrac{x^2+4x+4}{x^2-4}$.",
      hints: ["Tử $= (x+2)^2$; mẫu $= (x-2)(x+2)$.", "Chia cho nhân tử chung $(x+2)$."],
      solution: "$\\dfrac{(x+2)^2}{(x-2)(x+2)} = \\dfrac{x+2}{x-2}$ (với $x \\ne \\pm 2$)." },
    { level: "Vận dụng", prompt: "Rút gọn $\\dfrac{2x^2-2}{x^2+2x+1}$.",
      hints: ["Tử $= 2(x^2-1) = 2(x-1)(x+1)$; mẫu $= (x+1)^2$."],
      solution: "$\\dfrac{2(x-1)(x+1)}{(x+1)^2} = \\dfrac{2(x-1)}{x+1}$ (với $x \\ne -1$)." },
  ],

  quiz: [
    { type: "mc", q: "Rút gọn $\\dfrac{x^2-1}{x-1}$ (với $x \\ne 1$):", choices: ["$x+1$", "$x-1$", "$x$", "$x^2$"], answer: 0, explain: "$\\dfrac{(x-1)(x+1)}{x-1} = x+1$." },
    { type: "mc", q: "Rút gọn $\\dfrac{6x^2y}{9xy^2}$:", choices: ["$\\dfrac{2x}{3y}$", "$\\dfrac{2y}{3x}$", "$\\dfrac{3x}{2y}$", "$\\dfrac{2}{3}$"], answer: 0, explain: "Chia cả tử và mẫu cho nhân tử chung $3xy$." },
    { type: "mc", q: "Cách rút gọn phân thức nào ĐÚNG?", choices: ["Chia cả tử và mẫu cho nhân tử chung", "Gạch bỏ các số hạng giống nhau ở tử và mẫu", "Cộng tử với mẫu", "Nhân tử với mẫu"], answer: 0, explain: "Chỉ được chia cho NHÂN TỬ chung, không gạch số hạng rời." },
  ],
});
