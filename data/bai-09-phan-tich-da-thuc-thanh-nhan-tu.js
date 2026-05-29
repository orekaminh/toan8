/* Bài 9. Phân tích đa thức thành nhân tử — Chương II (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-09-phan-tich-da-thuc-thanh-nhan-tu",
  chapter: "Chương II. Hằng đẳng thức đáng nhớ và ứng dụng",
  order: 4,
  title: "Bài 9. Phân tích đa thức thành nhân tử",

  objectives: [
    "Hiểu phân tích đa thức thành nhân tử là viết đa thức thành một tích.",
    "Phân tích bằng ba cách: đặt nhân tử chung, dùng hằng đẳng thức, nhóm các hạng tử.",
    "Biết phối hợp các cách và phân tích đến khi không thể phân tích thêm.",
  ],

  intro: {
    text:
      "<b>Phân tích đa thức thành nhân tử</b> là viết một đa thức dưới dạng <b>tích</b> của những đa thức. " +
      "Việc này giúp rút gọn biểu thức, giải phương trình và tính nhanh. Có ba 'công cụ' chính: " +
      "đặt nhân tử chung, dùng hằng đẳng thức, và nhóm hạng tử.",
    math: "6x^2 + 9x = 3x(2x + 3)",
  },

  theory: [
    {
      heading: "1. Đặt nhân tử chung",
      html: "Tìm thừa số chung của mọi hạng tử rồi đặt ra ngoài dấu ngoặc.",
      formula: "AB + AC = A(B + C)",
    },
    {
      heading: "2. Dùng hằng đẳng thức",
      html:
        "Nhận ra dạng của một hằng đẳng thức để viết ngay thành tích, ví dụ:",
      formula: "a^2 - b^2 = (a-b)(a+b);\\quad a^2 + 2ab + b^2 = (a+b)^2",
    },
    {
      heading: "3. Nhóm các hạng tử",
      html:
        "Khi không có nhân tử chung cho tất cả, ta <b>nhóm</b> các hạng tử thích hợp để xuất hiện nhân tử " +
        "chung, ví dụ $xy + x + y + 1 = x(y+1) + (y+1) = (y+1)(x+1)$.",
    },
    {
      heading: "Lưu ý",
      html: "Phân tích phải <b>triệt để</b> — tiếp tục đến khi không thể phân tích thêm.",
    },
  ],

  visual: {
    type: "identity",
    config: {
      mode: "check",
      hint: "Phân tích thành nhân tử chỉ là viết lại đa thức dưới dạng tích — <b>giá trị không đổi</b>. Trượt $x$ để kiểm chứng hai vế luôn bằng nhau.",
      latex: "x^3 + x^2 + x + 1 = (x+1)(x^2+1)",
      vars: [{ id: "x", label: "x", min: 1, max: 6, val: 2 }],
      lhs: function (v) { return v.x * v.x * v.x + v.x * v.x + v.x + 1; },
      rhs: function (v) { return (v.x + 1) * (v.x * v.x + 1); },
    },
  },

  examples: [
    {
      title: "Đặt nhân tử chung",
      prompt: "Phân tích $6x^2 + 9x$.",
      steps: [
        "Nhân tử chung của $6x^2$ và $9x$ là $3x$.",
        "$6x^2 + 9x = 3x \\cdot 2x + 3x \\cdot 3 = 3x(2x + 3)$.",
      ],
    },
    {
      title: "Dùng hằng đẳng thức",
      prompt: "Phân tích $x^2 - 9$.",
      steps: [
        "$9 = 3^2$, đây là hiệu hai bình phương.",
        "$x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)$.",
      ],
    },
    {
      title: "Nhóm hạng tử",
      prompt: "Phân tích $x^3 + x^2 + x + 1$.",
      steps: [
        "Nhóm: $(x^3 + x^2) + (x + 1)$.",
        "Đặt nhân tử chung từng nhóm: $x^2(x+1) + 1 \\cdot (x+1)$.",
        "Xuất hiện nhân tử chung $(x+1)$: $(x+1)(x^2 + 1)$.",
      ],
    },
    {
      title: "Phối hợp nhiều cách",
      prompt: "Phân tích $2x^3 - 8x$.",
      steps: [
        "Đặt nhân tử chung $2x$: $2x(x^2 - 4)$.",
        "Còn $x^2 - 4 = x^2 - 2^2$ là hiệu hai bình phương.",
        "$2x^3 - 8x = 2x(x-2)(x+2)$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dừng ở $2(x^2 - 4)$ và coi là đã xong.",
      right: "Phải phân tích tiếp: $2(x^2-4) = 2(x-2)(x+2)$.",
      note: "Luôn phân tích TRIỆT ĐỂ, không bỏ sót hằng đẳng thức còn lại.",
    },
    {
      wrong: "Khi nhóm $(x^3 - x^2) - (x - 1)$ quên đổi dấu trong ngoặc sau dấu trừ.",
      right: "$-(x-1) = -x + 1$; cần cẩn thận dấu khi nhóm.",
      note: "Nhóm xong nên thử nhân lại để kiểm tra.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Phân tích $5x^2 + 10x$.",
      hints: ["Nhân tử chung là $5x$."],
      solution: "$5x^2 + 10x = 5x(x + 2)$." },
    { level: "Nhận biết", prompt: "Phân tích $x^2 - 25$.",
      hints: ["$25 = 5^2$; hiệu hai bình phương."],
      solution: "$x^2 - 25 = (x-5)(x+5)$." },
    { level: "Nhận biết", prompt: "Phân tích $x^2 + 6x + 9$.",
      hints: ["Có dạng $a^2 + 2ab + b^2$ với $a=x,\\ b=3$."],
      solution: "$x^2 + 6x + 9 = (x+3)^2$." },
    { level: "Thông hiểu", prompt: "Phân tích $3x^3 - 12x$.",
      hints: ["Đặt nhân tử chung $3x$ trước.", "Phần còn lại là hiệu hai bình phương."],
      solution: "$3x^3 - 12x = 3x(x^2 - 4) = 3x(x-2)(x+2)$." },
    { level: "Thông hiểu", prompt: "Phân tích $xy + 3x + 2y + 6$.",
      hints: ["Nhóm $(xy + 3x) + (2y + 6)$.", "Đặt nhân tử chung mỗi nhóm: $x(y+3) + 2(y+3)$."],
      solution: "$xy + 3x + 2y + 6 = x(y+3) + 2(y+3) = (y+3)(x+2)$." },
    { level: "Thông hiểu", prompt: "Phân tích $x^2 - 4x + 4$.",
      hints: ["Dạng $a^2 - 2ab + b^2$ với $a=x,\\ b=2$."],
      solution: "$x^2 - 4x + 4 = (x-2)^2$." },
    { level: "Vận dụng", prompt: "Phân tích $x^3 - x^2 - 4x + 4$.",
      hints: ["Nhóm $(x^3 - x^2) - (4x - 4)$.", "Đặt nhân tử chung: $x^2(x-1) - 4(x-1)$, rồi để ý $x^2 - 4$."],
      solution:
        "$x^3 - x^2 - 4x + 4 = x^2(x-1) - 4(x-1) = (x-1)(x^2 - 4) = (x-1)(x-2)(x+2)$." },
    { level: "Vận dụng", prompt: "Tính nhanh $37^2 - 13^2$ bằng cách phân tích thành nhân tử.",
      hints: ["$a^2 - b^2 = (a-b)(a+b)$ với $a=37,\\ b=13$."],
      solution: "$37^2 - 13^2 = (37-13)(37+13) = 24 \\cdot 50 = 1200$." },
  ],

  quiz: [
    { type: "mc", q: "Phân tích $6x^2 + 9x$ thành nhân tử (triệt để):", choices: ["$3x(2x + 3)$", "$3(2x^2 + 3x)$", "$x(6x + 9)$", "$3x(2x + 9)$"], answer: 0, explain: "Nhân tử chung lớn nhất là $3x$." },
    { type: "mc", q: "$x^2 - 16 = $?", choices: ["$(x - 4)(x + 4)$", "$(x - 4)^2$", "$(x - 16)(x + 1)$", "$(x - 8)(x + 2)$"], answer: 0, explain: "$16 = 4^2$, hiệu hai bình phương." },
    { type: "fill", q: "$x^2 + 6x + 9 = (x + \\square)^2$. Điền số vào ô trống.", answer: 3, explain: "Đây là $(x + 3)^2$." },
  ],
});
