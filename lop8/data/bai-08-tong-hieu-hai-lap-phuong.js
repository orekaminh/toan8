/* Bài 8. Tổng và hiệu hai lập phương — Chương II (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-08-tong-hieu-hai-lap-phuong",
  chapter: "Chương II. Hằng đẳng thức đáng nhớ và ứng dụng",
  order: 3,
  title: "Bài 8. Tổng và hiệu hai lập phương",

  objectives: [
    "Nhớ và vận dụng hai hằng đẳng thức: tổng hai lập phương, hiệu hai lập phương.",
    "Phân tích các biểu thức dạng $a^3 + b^3$ và $a^3 - b^3$ thành tích.",
    "Phân biệt dấu của hạng tử giữa trong 'bình phương thiếu'.",
  ],

  intro: {
    text:
      "Hai hằng đẳng thức cuối của bộ 'đáng nhớ' giúp <b>phân tích thành nhân tử</b> những biểu thức như " +
      "$x^3 + 8$ hay $x^3 - 27$. Chúng dùng tới 'bình phương thiếu' $a^2 \\mp ab + b^2$.",
    math: "a^3 + b^3 = (a+b)(a^2 - ab + b^2)",
  },

  theory: [
    {
      heading: "1. Tổng hai lập phương",
      html: "Hạng tử giữa của 'bình phương thiếu' mang dấu <b>trừ</b>: $-ab$.",
      formula: "a^3 + b^3 = (a+b)(a^2 - ab + b^2)",
    },
    {
      heading: "2. Hiệu hai lập phương",
      html: "Hạng tử giữa của 'bình phương thiếu' mang dấu <b>cộng</b>: $+ab$.",
      formula: "a^3 - b^3 = (a-b)(a^2 + ab + b^2)",
    },
    {
      heading: "Mẹo nhớ dấu",
      html:
        "Dấu trong ngoặc đầu giống dấu của vế trái ($+$ với tổng, $-$ với hiệu). Hạng tử giữa của ngoặc " +
        "sau mang dấu <b>ngược lại</b>: tổng lập phương → $-ab$; hiệu lập phương → $+ab$.",
    },
  ],

  visual: {
    type: "identity",
    config: {
      mode: "check",
      latex: "a^3 + b^3 = (a+b)(a^2 - ab + b^2)",
      vars: [{ id: "a", label: "a", min: 1, max: 6, val: 2 }, { id: "b", label: "b", min: 1, max: 6, val: 3 }],
      lhs: function (v) { return v.a * v.a * v.a + v.b * v.b * v.b; },
      rhs: function (v) { return (v.a + v.b) * (v.a * v.a - v.a * v.b + v.b * v.b); },
    },
  },

  examples: [
    {
      title: "Tổng hai lập phương",
      prompt: "Phân tích $x^3 + 8$ thành nhân tử.",
      steps: [
        "Viết $8 = 2^3$, nên $x^3 + 8 = x^3 + 2^3$ (tổng hai lập phương với $a=x,\\ b=2$).",
        "Áp dụng $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.",
        "$x^3 + 8 = (x+2)(x^2 - 2x + 4)$.",
      ],
    },
    {
      title: "Hiệu hai lập phương",
      prompt: "Phân tích $x^3 - 27$ thành nhân tử.",
      steps: [
        "Viết $27 = 3^3$, nên $x^3 - 27 = x^3 - 3^3$ ($a=x,\\ b=3$).",
        "Áp dụng $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.",
        "$x^3 - 27 = (x-3)(x^2 + 3x + 9)$.",
      ],
    },
    {
      title: "Có hệ số ở biến",
      prompt: "Phân tích $8x^3 + 1$.",
      steps: [
        "Viết $8x^3 = (2x)^3$ và $1 = 1^3$, nên đây là tổng hai lập phương với $a=2x,\\ b=1$.",
        "$(2x+1)\\big((2x)^2 - 2x \\cdot 1 + 1^2\\big)$.",
        "$= (2x+1)(4x^2 - 2x + 1)$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$a^3 + b^3 = (a+b)^3$.",
      right: "$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ — không phải lập phương của tổng.",
      note: "Phân biệt $(a+b)^3$ (khai triển) với $a^3+b^3$ (phân tích thành tích).",
    },
    {
      wrong: "Tổng lập phương lại dùng $+ab$: $(a+b)(a^2 + ab + b^2)$.",
      right: "Tổng lập phương dùng $-ab$: $(a+b)(a^2 - ab + b^2)$.",
      note: "Hạng tử giữa ngược dấu với dấu của vế trái.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Phân tích $x^3 + 1$.",
      hints: ["$1 = 1^3$; dùng $a^3 + b^3$ với $b=1$."],
      solution: "$x^3 + 1 = (x+1)(x^2 - x + 1)$." },
    { level: "Nhận biết", prompt: "Phân tích $x^3 - 8$.",
      hints: ["$8 = 2^3$; dùng $a^3 - b^3$ với $b=2$."],
      solution: "$x^3 - 8 = (x-2)(x^2 + 2x + 4)$." },
    { level: "Nhận biết", prompt: "Điền dấu thích hợp: $a^3 - b^3 = (a-b)(a^2\\ \\square\\ ab + b^2)$.",
      hints: ["Hiệu hai lập phương dùng dấu gì ở hạng tử giữa?"],
      solution: "Dấu $+$: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$." },
    { level: "Thông hiểu", prompt: "Phân tích $27x^3 + 8$.",
      hints: ["$27x^3 = (3x)^3$, $8 = 2^3$; $a=3x,\\ b=2$."],
      solution: "$(3x+2)\\big((3x)^2 - 3x \\cdot 2 + 2^2\\big) = (3x+2)(9x^2 - 6x + 4)$." },
    { level: "Thông hiểu", prompt: "Phân tích $x^3 - 64$.",
      hints: ["$64 = 4^3$."],
      solution: "$x^3 - 64 = (x-4)(x^2 + 4x + 16)$." },
    { level: "Thông hiểu", prompt: "Phân tích $8 - x^3$.",
      hints: ["Viết thành $2^3 - x^3$ (hiệu hai lập phương với $a=2,\\ b=x$)."],
      solution: "$8 - x^3 = 2^3 - x^3 = (2-x)(4 + 2x + x^2)$." },
    { level: "Vận dụng", prompt: "Rút gọn $(x+1)(x^2 - x + 1)$.",
      hints: ["Đây chính là vế phải của tổng hai lập phương với $a=x,\\ b=1$."],
      solution: "$(x+1)(x^2 - x + 1) = x^3 + 1$." },
    { level: "Vận dụng", prompt: "Phân tích $x^6 - 1$ thành nhân tử (gợi ý: coi $x^6 = (x^2)^3$).",
      hints: ["$x^6 - 1 = (x^2)^3 - 1^3$ → hiệu hai lập phương với $a=x^2,\\ b=1$.", "Sau đó để ý $x^2 - 1$ còn phân tích tiếp được."],
      solution:
        "$x^6 - 1 = (x^2 - 1)(x^4 + x^2 + 1)$. Lại có $x^2 - 1 = (x-1)(x+1)$, nên " +
        "$x^6 - 1 = (x-1)(x+1)(x^4 + x^2 + 1)$." },
  ],

  quiz: [
    { type: "mc", q: "$x^3 + 8 = $?", choices: ["$(x + 2)(x^2 - 2x + 4)$", "$(x + 2)^3$", "$(x + 2)(x^2 + 2x + 4)$", "$(x - 2)(x^2 + 2x + 4)$"], answer: 0, explain: "$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ với $b = 2$." },
    { type: "mc", q: "$x^3 - 1 = $?", choices: ["$(x - 1)(x^2 + x + 1)$", "$(x - 1)^3$", "$(x - 1)(x^2 - x + 1)$", "$(x + 1)(x^2 - x + 1)$"], answer: 0, explain: "$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$." },
    { type: "mc", q: "Trong $a^3 + b^3 = (a + b)(a^2 \\;\\square\\; ab + b^2)$, dấu ở giữa là?", choices: ["$-$", "$+$"], answer: 0, explain: "Tổng hai lập phương dùng dấu trừ ở hạng tử giữa." },
  ],
});
