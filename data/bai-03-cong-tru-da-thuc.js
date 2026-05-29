/* Bài 3. Phép cộng và phép trừ đa thức — Chương I (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-03-cong-tru-da-thuc",
  chapter: "Chương I. Đa thức",
  order: 3,
  title: "Bài 3. Phép cộng và phép trừ đa thức",

  objectives: [
    "Cộng được hai đa thức.",
    "Trừ được hai đa thức, đặc biệt là quy tắc đổi dấu khi bỏ dấu ngoặc đứng sau dấu trừ.",
    "Vận dụng cộng, trừ đa thức để giải các bài toán thực tế.",
  ],

  intro: {
    text:
      "Mảnh đất nhà bạn An gồm hai thửa: thửa A có diện tích $x^2 + 2x$ ($\\text{m}^2$), thửa B có diện " +
      "tích $3x + 5$ ($\\text{m}^2$). Muốn biết <b>tổng</b> diện tích cả hai thửa, hay biết thửa A " +
      "<b>hơn</b> thửa B bao nhiêu, ta cần biết cách <b>cộng</b> và <b>trừ</b> hai đa thức.",
    math: "(x^2 + 2x) + (3x + 5) = x^2 + 5x + 5",
  },

  theory: [
    {
      heading: "1. Cộng hai đa thức",
      html:
        "Muốn cộng hai đa thức, ta <b>bỏ dấu ngoặc</b> (dấu các hạng tử giữ nguyên) rồi <b>thu gọn</b> " +
        "(cộng các hạng tử đồng dạng).",
      formula: "(3x^2 + 2x) + (x^2 - 5x) = 3x^2 + 2x + x^2 - 5x = 4x^2 - 3x",
    },
    {
      heading: "2. Trừ hai đa thức",
      html:
        "Muốn trừ hai đa thức, ta bỏ dấu ngoặc. Khi bỏ dấu ngoặc đứng sau dấu <b>trừ</b>, phải " +
        "<b>đổi dấu tất cả</b> các hạng tử trong ngoặc, rồi thu gọn.",
      formula: "(5x^2 + 3x) - (2x^2 - x) = 5x^2 + 3x - 2x^2 + x = 3x^2 + 4x",
    },
  ],

  visual: {
    type: "algebra-tiles",
    config: {
      tiles: [
        { type: "x", sign: 1, count: 2 },
        { type: "1", sign: 1, count: 3 },
        { type: "x", sign: -1, count: 1 },
        { type: "1", sign: -1, count: 1 },
      ],
      combine: true,
      buttonText: "Rút gọn (triệt tiêu)",
      caption:
        "Phép tính $(2x + 3) - (x + 1)$: ta thêm các viên gạch <b>trái dấu</b> $-x$ và $-1$. " +
        "Một gạch $x$ dương gặp một gạch $x$ âm sẽ <b>triệt tiêu</b> nhau. Bấm để xem kết quả.",
    },
  },

  examples: [
    {
      title: "Cộng hai đa thức",
      prompt: "Tính $(3x^2 + 2x - 1) + (x^2 - 5x + 4)$.",
      steps: [
        "Bỏ ngoặc, giữ nguyên dấu: $3x^2 + 2x - 1 + x^2 - 5x + 4$.",
        "Nhóm đồng dạng: $(3x^2 + x^2) + (2x - 5x) + (-1 + 4)$.",
        "Thu gọn: $4x^2 - 3x + 3$.",
      ],
    },
    {
      title: "Trừ hai đa thức",
      prompt: "Tính $(5x^2 + 3x - 2) - (2x^2 - x + 6)$.",
      steps: [
        "Bỏ ngoặc sau dấu trừ → <b>đổi dấu mọi hạng tử</b> trong ngoặc thứ hai:",
        "$5x^2 + 3x - 2 - 2x^2 + x - 6$.",
        "Nhóm đồng dạng: $(5x^2 - 2x^2) + (3x + x) + (-2 - 6)$.",
        "Thu gọn: $3x^2 + 4x - 8$.",
      ],
    },
    {
      title: "Ứng dụng diện tích",
      prompt:
        "Thửa A có diện tích $x^2 + 2x$ ($\\text{m}^2$), thửa B có diện tích $3x + 5$ ($\\text{m}^2$). " +
        "Tính tổng diện tích hai thửa.",
      steps: [
        "Tổng $= (x^2 + 2x) + (3x + 5)$.",
        "Bỏ ngoặc và thu gọn: $x^2 + 2x + 3x + 5 = x^2 + 5x + 5$ ($\\text{m}^2$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$(5x^2 + 3x) - (2x^2 - x) = 5x^2 + 3x - 2x^2 - x$ (chỉ đổi dấu hạng tử đầu).",
      right: "Phải đổi dấu MỌI hạng tử: $5x^2 + 3x - 2x^2 + x = 3x^2 + 4x$.",
      note: "Sau dấu trừ, đổi dấu TẤT CẢ các hạng tử trong ngoặc.",
    },
    {
      wrong: "Cộng hai hạng tử không đồng dạng: $3x^2 + 2x = 5x^2$.",
      right: "$3x^2$ và $2x$ khác phần biến nên KHÔNG gộp được; giữ nguyên $3x^2 + 2x$.",
      note: "Chỉ cộng/trừ các hạng tử ĐỒNG DẠNG (cùng phần biến).",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $(2x + 3) + (5x + 1)$.",
      hints: ["Bỏ ngoặc, gộp các hạng tử chứa $x$ và các hằng số."],
      solution: "$(2x + 3) + (5x + 1) = 2x + 5x + 3 + 1 = 7x + 4$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $(4x^2 + x) + (2x^2 + 3x)$.",
      hints: ["Gộp các hạng tử $x^2$ với nhau và các hạng tử $x$ với nhau."],
      solution: "$= (4 + 2)x^2 + (1 + 3)x = 6x^2 + 4x$.",
    },
    {
      level: "Nhận biết",
      prompt: "Bỏ dấu ngoặc: $-(3x^2 - 2x + 5)$.",
      hints: ["Trước ngoặc là dấu trừ → đổi dấu tất cả các hạng tử bên trong."],
      solution: "$-(3x^2 - 2x + 5) = -3x^2 + 2x - 5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(6x^2 - 4x + 1) + (-2x^2 + 4x - 5)$.",
      hints: ["Bỏ ngoặc giữ nguyên dấu rồi thu gọn.", "Chú ý $-4x + 4x = 0$."],
      solution: "$= (6 - 2)x^2 + (-4 + 4)x + (1 - 5) = 4x^2 - 4$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(7x^2 + 2x - 3) - (4x^2 + 5x - 8)$.",
      hints: [
        "Đổi dấu mọi hạng tử trong ngoặc thứ hai.",
        "$7x^2 + 2x - 3 - 4x^2 - 5x + 8$.",
      ],
      solution: "$= (7 - 4)x^2 + (2 - 5)x + (-3 + 8) = 3x^2 - 3x + 5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $A = 2x^2 + 3x$ và $B = x^2 - x + 4$. Tính $A - B$.",
      hints: ["Viết $A - B = (2x^2 + 3x) - (x^2 - x + 4)$ rồi đổi dấu ngoặc sau."],
      solution: "$A - B = 2x^2 + 3x - x^2 + x - 4 = x^2 + 4x - 4$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình chữ nhật có chu vi là đa thức $C = 6x + 10$ (cm). Biết chiều dài là $2x + 4$ (cm). " +
        "Tìm đa thức biểu thị chiều rộng của hình chữ nhật.",
      hints: [
        "Nửa chu vi $=$ dài $+$ rộng. Nửa chu vi $= C : 2 = 3x + 5$.",
        "Chiều rộng $=$ nửa chu vi $-$ chiều dài.",
      ],
      solution:
        "Nửa chu vi $= (6x + 10) : 2 = 3x + 5$. " +
        "Chiều rộng $= (3x + 5) - (2x + 4) = 3x + 5 - 2x - 4 = x + 1$ (cm).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Bạn Lan có $A = 5x^2 + 2x - 1$ (nghìn đồng) và bạn Huy có $B = 3x^2 - x + 4$ (nghìn đồng). " +
        "Viết đa thức biểu thị tổng số tiền hai bạn và đa thức biểu thị Lan hơn Huy bao nhiêu. " +
        "Tính các giá trị đó khi $x = 2$.",
      hints: [
        "Tổng $= A + B$; phần Lan hơn Huy $= A - B$ (nhớ đổi dấu ngoặc).",
        "Sau khi có đa thức, thay $x = 2$ để tính số.",
      ],
      solution:
        "Tổng $A + B = (5 + 3)x^2 + (2 - 1)x + (-1 + 4) = 8x^2 + x + 3$. " +
        "Tại $x = 2$: $8 \\cdot 4 + 2 + 3 = 37$ (nghìn đồng).<br>" +
        "Lan hơn Huy: $A - B = (5 - 3)x^2 + (2 + 1)x + (-1 - 4) = 2x^2 + 3x - 5$. " +
        "Tại $x = 2$: $2 \\cdot 4 + 6 - 5 = 9$ (nghìn đồng).",
    },
  ],

  quiz: [
    { type: "mc", q: "$(2x + 3) + (x - 1) = $?", choices: ["$3x + 2$", "$3x + 4$", "$2x + 2$", "$x + 2$"], answer: 0, explain: "$2x + x = 3x$; $3 - 1 = 2$." },
    { type: "mc", q: "$(5x - 2) - (2x + 1) = $?", choices: ["$3x - 3$", "$3x - 1$", "$7x - 1$", "$3x + 1$"], answer: 0, explain: "Đổi dấu ngoặc sau: $5x - 2 - 2x - 1 = 3x - 3$." },
    { type: "fill", q: "Trong kết quả của $(4x + 5) - (x + 2)$, hệ số của $x$ là bao nhiêu?", answer: 3, explain: "$4x - x = 3x$." },
  ],
});
