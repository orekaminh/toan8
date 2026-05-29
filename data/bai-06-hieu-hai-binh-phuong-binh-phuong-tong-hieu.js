/* Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu
   Chương II (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-06-hieu-hai-binh-phuong-binh-phuong-tong-hieu",
  chapter: "Chương II. Hằng đẳng thức đáng nhớ và ứng dụng",
  order: 1,
  title: "Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu",

  objectives: [
    "Nhớ và vận dụng được ba hằng đẳng thức: bình phương của một tổng, bình phương của một hiệu, hiệu hai bình phương.",
    "Khai triển nhanh các biểu thức dạng $(a+b)^2$, $(a-b)^2$, $(a-b)(a+b)$.",
    "Dùng hằng đẳng thức để tính nhẩm, tính nhanh giá trị các biểu thức số.",
  ],

  intro: {
    text:
      "Muốn tính nhanh $51^2$ trong đầu? Hãy viết $51 = 50 + 1$ rồi dùng <b>hằng đẳng thức</b> " +
      "$(a+b)^2$. Hằng đẳng thức là những công thức luôn đúng, giúp khai triển và tính toán cực nhanh " +
      "mà không cần nhân dài dòng.",
    math: "(a+b)^2 = a^2 + 2ab + b^2",
  },

  theory: [
    {
      heading: "1. Bình phương của một tổng",
      html: "Hình vuông cạnh $(a+b)$ có diện tích bằng tổng diện tích các mảnh $a^2,\\ ab,\\ ab,\\ b^2$.",
      formula: "(a+b)^2 = a^2 + 2ab + b^2",
    },
    {
      heading: "2. Bình phương của một hiệu",
      html: "Tương tự, chỉ khác dấu của hạng tử giữa:",
      formula: "(a-b)^2 = a^2 - 2ab + b^2",
    },
    {
      heading: "3. Hiệu hai bình phương",
      html: "Tích của một tổng và một hiệu (cùng hai số $a, b$) cho ra hiệu hai bình phương:",
      formula: "a^2 - b^2 = (a-b)(a+b)",
    },
  ],

  visual: { type: "identity", config: { mode: "square", a: 3, b: 2 } },

  examples: [
    {
      title: "Bình phương của một tổng",
      prompt: "Khai triển $(x+3)^2$.",
      steps: [
        "Áp dụng $(a+b)^2 = a^2 + 2ab + b^2$ với $a=x,\\ b=3$.",
        "$(x+3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$.",
      ],
    },
    {
      title: "Bình phương của một hiệu",
      prompt: "Khai triển $(3x-2)^2$.",
      steps: [
        "Áp dụng $(a-b)^2 = a^2 - 2ab + b^2$ với $a=3x,\\ b=2$.",
        "$(3x)^2 - 2 \\cdot 3x \\cdot 2 + 2^2 = 9x^2 - 12x + 4$.",
      ],
    },
    {
      title: "Hiệu hai bình phương",
      prompt: "Tính $(x-5)(x+5)$.",
      steps: [
        "Đây là dạng $(a-b)(a+b) = a^2 - b^2$ với $a=x,\\ b=5$.",
        "$(x-5)(x+5) = x^2 - 25$.",
      ],
    },
    {
      title: "Tính nhanh",
      prompt: "Tính nhanh $51^2$ và $49 \\cdot 51$.",
      steps: [
        "$51^2 = (50+1)^2 = 50^2 + 2 \\cdot 50 \\cdot 1 + 1^2 = 2500 + 100 + 1 = 2601$.",
        "$49 \\cdot 51 = (50-1)(50+1) = 50^2 - 1^2 = 2500 - 1 = 2499$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$(a+b)^2 = a^2 + b^2$ (quên hạng tử $2ab$).",
      right: "$(a+b)^2 = a^2 + 2ab + b^2$.",
      note: "Luôn nhớ hạng tử giữa $2ab$ (gấp đôi tích hai số).",
    },
    {
      wrong: "$(a-b)^2 = a^2 - 2ab - b^2$.",
      right: "$(a-b)^2 = a^2 - 2ab + b^2$ — hạng tử cuối $+b^2$.",
      note: "Bình phương của số (kể cả số âm) luôn dương, nên $b^2$ mang dấu $+$.",
    },
    {
      wrong: "Nhầm $a^2 - b^2$ với $(a-b)^2$.",
      right: "$a^2 - b^2 = (a-b)(a+b)$, còn $(a-b)^2 = a^2 - 2ab + b^2$.",
      note: "Hai biểu thức hoàn toàn khác nhau.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Khai triển $(x+1)^2$.",
      hints: ["Dùng $(a+b)^2 = a^2 + 2ab + b^2$ với $b=1$."],
      solution: "$(x+1)^2 = x^2 + 2x + 1$." },
    { level: "Nhận biết", prompt: "Khai triển $(x-6)^2$.",
      hints: ["Dùng $(a-b)^2 = a^2 - 2ab + b^2$ với $b=6$."],
      solution: "$(x-6)^2 = x^2 - 12x + 36$." },
    { level: "Nhận biết", prompt: "Tính $(x-7)(x+7)$.",
      hints: ["Dạng $(a-b)(a+b) = a^2 - b^2$."],
      solution: "$(x-7)(x+7) = x^2 - 49$." },
    { level: "Thông hiểu", prompt: "Khai triển $(2x+5)^2$.",
      hints: ["$a = 2x,\\ b = 5$.", "Nhớ $(2x)^2 = 4x^2$ và $2 \\cdot 2x \\cdot 5 = 20x$."],
      solution: "$(2x+5)^2 = 4x^2 + 20x + 25$." },
    { level: "Thông hiểu", prompt: "Khai triển $(3a-4b)^2$.",
      hints: ["$(a-b)^2$ với hai 'số' là $3a$ và $4b$."],
      solution: "$(3a)^2 - 2 \\cdot 3a \\cdot 4b + (4b)^2 = 9a^2 - 24ab + 16b^2$." },
    { level: "Thông hiểu", prompt: "Viết $x^2 - 16$ thành tích.",
      hints: ["$16 = 4^2$, dùng $a^2 - b^2 = (a-b)(a+b)$."],
      solution: "$x^2 - 16 = x^2 - 4^2 = (x-4)(x+4)$." },
    { level: "Vận dụng", prompt: "Tính nhanh $103^2$.",
      hints: ["Viết $103 = 100 + 3$ rồi dùng $(a+b)^2$."],
      solution: "$103^2 = (100+3)^2 = 10000 + 600 + 9 = 10609$." },
    { level: "Vận dụng", prompt: "Tính nhanh $98 \\cdot 102$.",
      hints: ["$98 = 100 - 2$, $102 = 100 + 2$ → dùng $(a-b)(a+b)$."],
      solution: "$98 \\cdot 102 = (100-2)(100+2) = 100^2 - 2^2 = 10000 - 4 = 9996$." },
  ],

  quiz: [
    { type: "mc", q: "$(x + 3)^2 = $?", choices: ["$x^2 + 6x + 9$", "$x^2 + 9$", "$x^2 + 3x + 9$", "$x^2 + 6x + 3$"], answer: 0, explain: "$a^2 + 2ab + b^2$ với $a = x,\\ b = 3$." },
    { type: "mc", q: "$x^2 - 25 = $?", choices: ["$(x - 5)(x + 5)$", "$(x - 5)^2$", "$(x + 5)^2$", "$(x - 25)(x + 1)$"], answer: 0, explain: "Hiệu hai bình phương, $25 = 5^2$." },
    { type: "fill", q: "Tính nhanh $51^2 - 49^2$.", answer: 200, explain: "$(51 - 49)(51 + 49) = 2 \\cdot 100 = 200$." },
  ],
});
