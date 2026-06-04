/* Bài 8. Khai căn bậc hai với phép nhân và phép chia
   Chương III (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-08-khai-can-nhan-chia",
  chapter: "Chương III. Căn bậc hai và căn bậc ba",
  order: 2,
  title: "Bài 8. Khai căn bậc hai với phép nhân và phép chia",

  objectives: [
    "Vận dụng quy tắc khai căn một tích và một thương để tính giá trị căn thức.",
    "Đưa thừa số ra ngoài và đưa thừa số vào trong dấu căn.",
    "Rút gọn các biểu thức chứa căn bậc hai bằng phép nhân, phép chia.",
  ],

  intro: {
    text:
      "Khi gặp $\\sqrt{9 \\cdot 16}$ ta có thể tính ngay $\\sqrt{144} = 12$, nhưng cũng có thể tách thành " +
      "$\\sqrt{9} \\cdot \\sqrt{16} = 3 \\cdot 4 = 12$. Cách tách này rất hữu ích khi số dưới căn lớn hoặc " +
      "không chính phương. Bài học giúp bạn dùng <b>phép nhân</b> và <b>phép chia</b> để khai căn và rút gọn " +
      "biểu thức một cách gọn gàng.",
    math: "\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}",
  },

  theory: [
    {
      heading: "1. Khai căn một tích",
      html:
        "Với hai số $A \\ge 0$ và $B \\ge 0$, căn bậc hai của một <b>tích</b> bằng tích các căn bậc hai:<br>" +
        "$\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$. Ngược lại, $\\sqrt{A} \\cdot \\sqrt{B} = \\sqrt{A \\cdot B}$.<br>" +
        "Ví dụ: $\\sqrt{9 \\cdot 16} = \\sqrt{9} \\cdot \\sqrt{16} = 3 \\cdot 4 = 12$.",
      formula: "\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}\\quad (A \\ge 0,\\ B \\ge 0)",
    },
    {
      heading: "2. Khai căn một thương",
      html:
        "Với $A \\ge 0$ và $B > 0$, căn bậc hai của một <b>thương</b> bằng thương các căn bậc hai:<br>" +
        "$\\sqrt{\\dfrac{A}{B}} = \\dfrac{\\sqrt{A}}{\\sqrt{B}}$. Đặc biệt $\\dfrac{\\sqrt{A}}{\\sqrt{B}} = \\sqrt{\\dfrac{A}{B}}$.<br>" +
        "Ví dụ: $\\dfrac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\dfrac{72}{2}} = \\sqrt{36} = 6$.",
      formula: "\\sqrt{\\dfrac{A}{B}} = \\dfrac{\\sqrt{A}}{\\sqrt{B}}\\quad (A \\ge 0,\\ B > 0)",
    },
    {
      heading: "3. Đưa thừa số ra ngoài, vào trong dấu căn",
      html:
        "<b>Đưa ra ngoài:</b> nếu một thừa số dưới căn là bình phương thì đưa được ra ngoài: " +
        "$\\sqrt{A^2 B} = |A|\\sqrt{B}$ (với $B \\ge 0$).<br>" +
        "Ví dụ: $\\sqrt{48} = \\sqrt{16 \\cdot 3} = \\sqrt{16} \\cdot \\sqrt{3} = 4\\sqrt{3}$.<br>" +
        "<b>Đưa vào trong:</b> ngược lại, $A\\sqrt{B} = \\sqrt{A^2 B}$ khi $A \\ge 0$.",
      formula: "\\sqrt{A^2 B} = |A|\\sqrt{B}\\quad (B \\ge 0)",
    },
  ],

  examples: [
    {
      title: "Khai căn một tích",
      prompt: "Tính $\\sqrt{5} \\cdot \\sqrt{20}$.",
      steps: [
        "Đưa hai căn về một căn: $\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{5 \\cdot 20}$.",
        "Nhân trong căn: $\\sqrt{5 \\cdot 20} = \\sqrt{100}$.",
        "Khai căn: $\\sqrt{100} = 10$.",
        "Vậy $\\sqrt{5} \\cdot \\sqrt{20} = 10$.",
      ],
    },
    {
      title: "Khai căn một thương",
      prompt: "Tính $\\dfrac{\\sqrt{72}}{\\sqrt{2}}$.",
      steps: [
        "Đưa về căn của thương: $\\dfrac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\dfrac{72}{2}}$.",
        "Rút gọn trong căn: $\\sqrt{\\dfrac{72}{2}} = \\sqrt{36}$.",
        "Khai căn: $\\sqrt{36} = 6$.",
        "Vậy $\\dfrac{\\sqrt{72}}{\\sqrt{2}} = 6$.",
      ],
    },
    {
      title: "Đưa thừa số ra ngoài dấu căn",
      prompt: "Rút gọn $\\sqrt{48}$.",
      steps: [
        "Tách $48$ thành tích có thừa số chính phương: $48 = 16 \\cdot 3$.",
        "Áp dụng khai căn một tích: $\\sqrt{48} = \\sqrt{16 \\cdot 3} = \\sqrt{16} \\cdot \\sqrt{3}$.",
        "Khai căn thừa số chính phương: $\\sqrt{16} = 4$.",
        "Vậy $\\sqrt{48} = 4\\sqrt{3}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Viết $\\sqrt{A^2} = A$ trong mọi trường hợp.",
      right: "Đúng là $\\sqrt{A^2} = |A|$; khi đưa thừa số ra ngoài phải để dấu giá trị tuyệt đối nếu chưa biết dấu của $A$.",
      note: "Chỉ bỏ dấu giá trị tuyệt đối khi chắc chắn $A \\ge 0$.",
    },
    {
      wrong: "Tách $\\sqrt{A + B} = \\sqrt{A} + \\sqrt{B}$.",
      right: "Quy tắc tách chỉ áp dụng cho <b>tích</b> và <b>thương</b>, không áp dụng cho tổng hay hiệu.",
      note: "Chẳng hạn $\\sqrt{9 + 16} = \\sqrt{25} = 5 \\ne \\sqrt{9} + \\sqrt{16} = 7$.",
    },
    {
      wrong: "Khi đưa ra ngoài, lấy luôn một thừa số chưa phải bình phương, ví dụ $\\sqrt{48} = 16\\sqrt{3}$.",
      right: "Phải khai căn thừa số chính phương: $\\sqrt{16} = 4$, nên $\\sqrt{48} = 4\\sqrt{3}$.",
      note: "Tách số dưới căn theo thừa số chính phương lớn nhất để rút gọn triệt để.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt{9 \\cdot 16}$.",
      hints: ["Dùng $\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$."],
      solution: "$\\sqrt{9 \\cdot 16} = \\sqrt{9} \\cdot \\sqrt{16} = 3 \\cdot 4 = 12$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt{2} \\cdot \\sqrt{8}$.",
      hints: ["Đưa hai căn về một căn rồi nhân trong căn."],
      solution: "$\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{2 \\cdot 8} = \\sqrt{16} = 4$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $\\dfrac{\\sqrt{50}}{\\sqrt{2}}$.",
      hints: ["Dùng $\\dfrac{\\sqrt{A}}{\\sqrt{B}} = \\sqrt{\\dfrac{A}{B}}$."],
      solution: "$\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\dfrac{50}{2}} = \\sqrt{25} = 5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Rút gọn $\\sqrt{72}$ về dạng $a\\sqrt{b}$.",
      hints: ["Tách $72$ thành tích có thừa số chính phương lớn nhất.", "$72 = 36 \\cdot 2$."],
      solution: "$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $\\sqrt{3} \\cdot \\sqrt{12}$.",
      hints: ["Nhân trong căn rồi khai căn."],
      solution: "$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{3 \\cdot 12} = \\sqrt{36} = 6$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Đưa thừa số vào trong dấu căn: $3\\sqrt{5}$.",
      hints: ["Dùng $A\\sqrt{B} = \\sqrt{A^2 B}$ với $A \\ge 0$."],
      solution: "$3\\sqrt{5} = \\sqrt{3^2 \\cdot 5} = \\sqrt{9 \\cdot 5} = \\sqrt{45}$.",
    },
    {
      level: "Vận dụng",
      prompt: "Rút gọn $\\sqrt{8} + \\sqrt{18} - \\sqrt{2}$.",
      hints: ["Đưa từng căn về dạng $a\\sqrt{2}$.", "$\\sqrt{8} = 2\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$."],
      solution:
        "$\\sqrt{8} = 2\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$. Do đó tổng $= 2\\sqrt{2} + 3\\sqrt{2} - \\sqrt{2} = 4\\sqrt{2}$.",
    },
    {
      level: "Vận dụng",
      prompt: "Cho $a \\ge 0$. Rút gọn $\\sqrt{9a^2}$.",
      hints: ["Dùng $\\sqrt{A^2 B} = |A|\\sqrt{B}$.", "Vì $a \\ge 0$ nên $|a| = a$."],
      solution: "$\\sqrt{9a^2} = \\sqrt{9} \\cdot \\sqrt{a^2} = 3|a| = 3a$ (do $a \\ge 0$).",
    },
  ],

  quiz: [
    { type: "mc", q: "Kết quả của $\\sqrt{4 \\cdot 25}$ là:",
      choices: ["$10$", "$20$", "$29$", "$100$"], answer: 0,
      explain: "$\\sqrt{4 \\cdot 25} = \\sqrt{4} \\cdot \\sqrt{25} = 2 \\cdot 5 = 10$." },
    { type: "fill", q: "Tính $\\dfrac{\\sqrt{72}}{\\sqrt{2}}$.", answer: 6,
      explain: "$\\dfrac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\dfrac{72}{2}} = \\sqrt{36} = 6$." },
    { type: "mc", q: "Rút gọn $\\sqrt{48}$ ta được:",
      choices: ["$4\\sqrt{3}$", "$3\\sqrt{4}$", "$16\\sqrt{3}$", "$2\\sqrt{12}$"], answer: 0,
      explain: "$\\sqrt{48} = \\sqrt{16 \\cdot 3} = \\sqrt{16} \\cdot \\sqrt{3} = 4\\sqrt{3}$." },
  ],
});
