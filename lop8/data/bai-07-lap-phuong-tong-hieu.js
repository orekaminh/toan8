/* Bài 7. Lập phương của một tổng hay một hiệu — Chương II (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-07-lap-phuong-tong-hieu",
  chapter: "Chương II. Hằng đẳng thức đáng nhớ và ứng dụng",
  order: 2,
  title: "Bài 7. Lập phương của một tổng hay một hiệu",

  objectives: [
    "Nhớ và vận dụng hai hằng đẳng thức: lập phương của một tổng, lập phương của một hiệu.",
    "Khai triển nhanh các biểu thức dạng $(a+b)^3$ và $(a-b)^3$.",
    "Nhận ra quy luật hệ số $1, 3, 3, 1$ và dấu của các hạng tử.",
  ],

  intro: {
    text:
      "Sau bình phương, ta gặp <b>lập phương</b> của một tổng/hiệu. Thay vì nhân $(x+2)$ ba lần, " +
      "hằng đẳng thức cho ngay kết quả với quy luật hệ số rất dễ nhớ: $1, 3, 3, 1$.",
    math: "(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
  },

  theory: [
    {
      heading: "1. Lập phương của một tổng",
      html: "Hệ số lần lượt là $1, 3, 3, 1$; số mũ của $a$ giảm dần $3 \\to 0$, của $b$ tăng dần $0 \\to 3$.",
      formula: "(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
    },
    {
      heading: "2. Lập phương của một hiệu",
      html: "Giống công thức trên nhưng dấu <b>xen kẽ</b>: $+,\\ -,\\ +,\\ -$.",
      formula: "(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
    },
  ],

  visual: {
    type: "identity",
    config: {
      mode: "check",
      latex: "(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
      vars: [{ id: "a", label: "a", min: 1, max: 5, val: 2 }, { id: "b", label: "b", min: 1, max: 5, val: 1 }],
      lhs: function (v) { return Math.pow(v.a + v.b, 3); },
      rhs: function (v) { return v.a * v.a * v.a + 3 * v.a * v.a * v.b + 3 * v.a * v.b * v.b + v.b * v.b * v.b; },
    },
  },

  examples: [
    {
      title: "Lập phương của một tổng",
      prompt: "Khai triển $(x+2)^3$.",
      steps: [
        "Áp dụng $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ với $a=x,\\ b=2$.",
        "$x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3$.",
        "$= x^3 + 6x^2 + 12x + 8$.",
      ],
    },
    {
      title: "Lập phương của một hiệu",
      prompt: "Khai triển $(x-1)^3$.",
      steps: [
        "Áp dụng $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ với $a=x,\\ b=1$.",
        "$x^3 - 3x^2 + 3x - 1$.",
      ],
    },
    {
      title: "Có hệ số ở biến",
      prompt: "Khai triển $(2x+1)^3$.",
      steps: [
        "Với $a=2x,\\ b=1$: nhớ $(2x)^3 = 8x^3$, $(2x)^2 = 4x^2$.",
        "$(2x)^3 + 3(2x)^2 \\cdot 1 + 3 \\cdot 2x \\cdot 1^2 + 1^3$.",
        "$= 8x^3 + 12x^2 + 6x + 1$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$(a+b)^3 = a^3 + b^3$.",
      right: "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ — có thêm hai hạng tử giữa.",
      note: "Đừng quên hệ số $3$ của hai hạng tử ở giữa.",
    },
    {
      wrong: "Trong $(a-b)^3$ để tất cả dấu trừ: $a^3 - 3a^2b - 3ab^2 - b^3$.",
      right: "Dấu phải xen kẽ: $a^3 - 3a^2b + 3ab^2 - b^3$.",
      note: "Quy luật dấu: $+,\\ -,\\ +,\\ -$.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Khai triển $(x+1)^3$.",
      hints: ["$a=x,\\ b=1$; hệ số $1,3,3,1$."],
      solution: "$(x+1)^3 = x^3 + 3x^2 + 3x + 1$." },
    { level: "Nhận biết", prompt: "Khai triển $(x-2)^3$.",
      hints: ["$(a-b)^3$ với $a=x,\\ b=2$; dấu xen kẽ."],
      solution: "$x^3 - 3x^2 \\cdot 2 + 3x \\cdot 4 - 8 = x^3 - 6x^2 + 12x - 8$." },
    { level: "Nhận biết", prompt: "Nêu khai triển của $(a+b)^3$.",
      hints: ["Nhớ hệ số $1, 3, 3, 1$."],
      solution: "$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$." },
    { level: "Thông hiểu", prompt: "Khai triển $(x+3)^3$.",
      hints: ["$b=3$: $3^2=9$, $3^3=27$."],
      solution: "$x^3 + 3x^2 \\cdot 3 + 3x \\cdot 9 + 27 = x^3 + 9x^2 + 27x + 27$." },
    { level: "Thông hiểu", prompt: "Khai triển $(2x-1)^3$.",
      hints: ["$a=2x,\\ b=1$; $(2x)^3 = 8x^3$, $(2x)^2 = 4x^2$; dấu xen kẽ."],
      solution: "$8x^3 - 3 \\cdot 4x^2 + 3 \\cdot 2x - 1 = 8x^3 - 12x^2 + 6x - 1$." },
    { level: "Thông hiểu", prompt: "Viết $x^3 + 6x^2 + 12x + 8$ thành lập phương của một tổng.",
      hints: ["So với $(a+b)^3$: $a^3 = x^3$ nên $a=x$; $b^3 = 8$ nên $b=2$.", "Kiểm tra hạng tử giữa khớp."],
      solution: "Đó là $(x+2)^3$." },
    { level: "Vận dụng", prompt: "Tính nhanh $11^3$ bằng hằng đẳng thức.",
      hints: ["$11 = 10 + 1$, dùng $(a+b)^3$ với $a=10,\\ b=1$."],
      solution: "$11^3 = (10+1)^3 = 1000 + 300 + 30 + 1 = 1331$." },
    { level: "Vận dụng", prompt: "Rút gọn $(x+1)^3 - (x-1)^3$.",
      hints: ["Khai triển từng lập phương rồi trừ.", "Các hạng tử $x^3$ và $3x^2$... triệt tiêu hoặc nhân đôi."],
      solution:
        "$(x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1) = 6x^2 + 2$." },
  ],

  quiz: [
    { type: "mc", q: "$(x + 1)^3 = $?", choices: ["$x^3 + 3x^2 + 3x + 1$", "$x^3 + 1$", "$x^3 + 3x + 1$", "$x^3 + x^2 + x + 1$"], answer: 0, explain: "Hệ số $1, 3, 3, 1$." },
    { type: "mc", q: "$(x - 2)^3 = $?", choices: ["$x^3 - 6x^2 + 12x - 8$", "$x^3 - 8$", "$x^3 - 6x^2 - 12x - 8$", "$x^3 + 6x^2 + 12x + 8$"], answer: 0, explain: "Dấu xen kẽ với $b = 2$." },
    { type: "fill", q: "Trong $(x + 2)^3 = x^3 + 6x^2 + \\square x + 8$, điền số vào ô trống.", answer: 12, explain: "$3 \\cdot x \\cdot 2^2 = 12x$." },
  ],
});
