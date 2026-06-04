/* Bài 5. Phép chia đa thức cho đơn thức — Chương I (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-05-chia-da-thuc-cho-don-thuc",
  chapter: "Chương I. Đa thức",
  order: 5,
  title: "Bài 5. Phép chia đa thức cho đơn thức",

  objectives: [
    "Chia được đơn thức cho đơn thức (trường hợp chia hết).",
    "Chia được đa thức cho đơn thức khi mỗi hạng tử của đa thức chia hết cho đơn thức đó.",
    "Hiểu phép chia như phép toán ngược của phép nhân qua mô hình diện tích.",
  ],

  intro: {
    text:
      "Một hình chữ nhật có diện tích $6x^3 + 4x^2$ và chiều rộng $2x$. Muốn tìm chiều dài, ta lấy " +
      "diện tích <b>chia</b> cho chiều rộng: $(6x^3 + 4x^2) : 2x$. Phép chia đa thức cho đơn thức chính " +
      "là phép toán ngược của phép nhân mà con vừa học ở Bài 4.",
    math: "(6x^3 + 4x^2) : 2x = 3x^2 + 2x",
  },

  theory: [
    {
      heading: "1. Chia đơn thức cho đơn thức",
      html:
        "Muốn chia đơn thức cho đơn thức (trường hợp chia hết), ta: chia hệ số cho hệ số, rồi chia luỹ " +
        "thừa của từng biến bằng cách <b>lấy số mũ trừ đi nhau</b>.",
      formula: "x^m : x^n = x^{m-n} \\quad (m \\ge n)",
    },
    {
      heading: "2. Chia đa thức cho đơn thức",
      html:
        "Muốn chia một đa thức cho một đơn thức (khi <b>mỗi hạng tử</b> của đa thức đều chia hết cho đơn " +
        "thức đó), ta chia <b>từng hạng tử</b> của đa thức cho đơn thức rồi cộng các kết quả lại.",
      formula: "(A + B) : C = A : C + B : C",
    },
    {
      heading: "3. Nhìn bằng diện tích (phép chia ngược của phép nhân)",
      html:
        "Nếu diện tích một mảnh là $2x \\cdot 3x^2 = 6x^3$ thì khi biết diện tích $6x^3$ và một cạnh $2x$, " +
        "ta tìm được cạnh kia là $3x^2$. Phép chia tách diện tích thành các 'cạnh chiều cao'.",
    },
  ],

  visual: {
    type: "area-model",
    config: {
      mode: "divide",
      divisor: "2x",
      terms: [
        { area: "6x³", quo: "3x²" },
        { area: "4x²", quo: "2x" },
      ],
      expr: "\\frac{6x^3 + 4x^2}{2x} = 3x^2 + 2x",
    },
  },

  examples: [
    {
      title: "Chia đơn thức cho đơn thức",
      prompt: "Tính $12x^5 : 4x^2$.",
      steps: [
        "Chia hệ số: $12 : 4 = 3$.",
        "Chia luỹ thừa: $x^5 : x^2 = x^{5-2} = x^3$.",
        "Vậy $12x^5 : 4x^2 = 3x^3$.",
      ],
    },
    {
      title: "Chia đa thức cho đơn thức",
      prompt: "Tính $(6x^3 + 4x^2) : 2x$.",
      steps: [
        "Chia từng hạng tử cho $2x$:",
        "$6x^3 : 2x = 3x^2$ ; $4x^2 : 2x = 2x$.",
        "Cộng lại: $3x^2 + 2x$.",
      ],
    },
    {
      title: "Đa thức ba hạng tử",
      prompt: "Tính $(15x^4 - 10x^3 + 5x^2) : 5x^2$.",
      steps: [
        "Chia từng hạng tử cho $5x^2$:",
        "$15x^4 : 5x^2 = 3x^2$ ; $-10x^3 : 5x^2 = -2x$ ; $5x^2 : 5x^2 = 1$.",
        "Cộng lại: $3x^2 - 2x + 1$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$x^5 : x^2 = x^{5:2}$ hoặc $x^{2.5}$ (chia số mũ).",
      right: "$x^5 : x^2 = x^{5-2} = x^3$.",
      note: "Chia luỹ thừa cùng cơ số thì TRỪ các số mũ.",
    },
    {
      wrong: "$(6x^3 + 4x^2) : 2x = 3x^2$ (chỉ chia hạng tử đầu).",
      right: "Chia HẾT mọi hạng tử: $3x^2 + 2x$.",
      note: "Đừng quên chia cả những hạng tử phía sau.",
    },
    {
      wrong: "$5x^2 : 5x^2 = 0$.",
      right: "$5x^2 : 5x^2 = 1$ (một số/biểu thức chia cho chính nó bằng $1$).",
      note: "Hạng tử giống hệt số chia sẽ cho thương là $1$, không phải $0$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $10x^4 : 2x^2$.",
      hints: ["Chia hệ số $10 : 2$, rồi $x^4 : x^2 = x^{4-2}$."],
      solution: "$10x^4 : 2x^2 = 5x^2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $-8x^3 : 4x$.",
      hints: ["Chia hệ số (chú ý dấu) và chia luỹ thừa $x^3 : x = x^{3-1}$."],
      solution: "$-8x^3 : 4x = -2x^2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $(4x^2 + 6x) : 2x$.",
      hints: ["Chia từng hạng tử cho $2x$."],
      solution: "$4x^2 : 2x + 6x : 2x = 2x + 3$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(9x^4 - 6x^3 + 3x^2) : 3x^2$.",
      hints: [
        "Chia từng hạng tử cho $3x^2$.",
        "$9x^4 : 3x^2 = 3x^2$ ; $-6x^3 : 3x^2 = -2x$ ; $3x^2 : 3x^2 = 1$.",
      ],
      solution: "$= 3x^2 - 2x + 1$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(12x^3y - 8x^2y) : 4x^2y$.",
      hints: [
        "Chia từng hạng tử cho $4x^2y$; chú ý chia cả phần biến $y$.",
        "$12x^3y : 4x^2y = 3x$ ; $-8x^2y : 4x^2y = -2$.",
      ],
      solution: "$= 3x - 2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(6x^3 - 9x^2) : 3x$.",
      hints: ["Chia từng hạng tử cho $3x$.", "$6x^3 : 3x = 2x^2$ ; $-9x^2 : 3x = -3x$."],
      solution: "$(6x^3 - 9x^2) : 3x = 2x^2 - 3x$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình chữ nhật có diện tích $8x^3 + 12x^2$ ($\\text{cm}^2$) và chiều rộng $4x$ (cm). " +
        "Tìm đa thức biểu thị chiều dài của hình chữ nhật.",
      hints: ["Chiều dài $=$ diện tích $:$ chiều rộng $= (8x^3 + 12x^2) : 4x$.", "Chia từng hạng tử cho $4x$."],
      solution: "Chiều dài $= (8x^3 + 12x^2) : 4x = 2x^2 + 3x$ (cm).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Biết $(20x^4 - 15x^3 + 10x^2) : 5x^2 = Q$. Hãy tìm đa thức $Q$ rồi tính giá trị của $Q$ khi $x = 2$.",
      hints: [
        "Chia từng hạng tử cho $5x^2$ để tìm $Q$.",
        "Sau khi có $Q$, thay $x = 2$ để tính giá trị.",
      ],
      solution:
        "$Q = 20x^4 : 5x^2 - 15x^3 : 5x^2 + 10x^2 : 5x^2 = 4x^2 - 3x + 2$. " +
        "Tại $x = 2$: $Q = 4 \\cdot 4 - 3 \\cdot 2 + 2 = 16 - 6 + 2 = 12$.",
    },
  ],

  quiz: [
    { type: "mc", q: "$(6x^3 + 4x^2) : 2x = $?", choices: ["$3x^2 + 2x$", "$3x^2 + 4x$", "$3x + 2$", "$6x^2 + 2x$"], answer: 0, explain: "Chia từng hạng tử: $6x^3 : 2x = 3x^2$; $4x^2 : 2x = 2x$." },
    { type: "fill", q: "$12x^5 : 4x^2 = 3x^{\\square}$. Điền số mũ vào ô trống.", answer: 3, explain: "$x^5 : x^2 = x^{5-2} = x^3$." },
    { type: "mc", q: "$10x^4 : 2x^2 = $?", choices: ["$5x^2$", "$5x^3$", "$8x^2$", "$5x^6$"], answer: 0, explain: "$10 : 2 = 5$; $x^4 : x^2 = x^2$." },
  ],
});
