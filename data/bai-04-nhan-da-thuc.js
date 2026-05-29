/* Bài 4. Phép nhân đa thức — Chương I. Đa thức (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-04-nhan-da-thuc",
  chapter: "Chương I. Đa thức",
  order: 4,
  title: "Bài 4. Phép nhân đa thức",

  objectives: [
    "Nhân được đơn thức với đa thức.",
    "Nhân được đa thức với đa thức bằng quy tắc 'mỗi hạng tử nhân với mỗi hạng tử'.",
    "Hiểu phép nhân đa thức qua mô hình diện tích hình chữ nhật.",
  ],

  intro: {
    text:
      "Một mảnh đất hình chữ nhật có chiều dài $(x + 3)$ m và chiều rộng $(x + 2)$ m. " +
      "Diện tích mảnh đất là $(x + 3)(x + 2)$. Làm sao khai triển tích này thành một đa thức gọn gàng? " +
      "Mô hình diện tích bên dưới sẽ cho con thấy vì sao kết quả là $x^2 + 5x + 6$.",
    math: "(x + 3)(x + 2) = x^2 + 5x + 6",
  },

  theory: [
    {
      heading: "1. Nhân đơn thức với đa thức",
      html:
        "Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức đó với <b>từng hạng tử</b> của đa thức " +
        "rồi cộng các kết quả lại (tính chất phân phối).",
      formula: "A\\,(B + C) = A\\cdot B + A\\cdot C",
    },
    {
      heading: "2. Nhân đa thức với đa thức",
      html:
        "Muốn nhân hai đa thức, ta nhân <b>mỗi hạng tử</b> của đa thức này với <b>mỗi hạng tử</b> của đa " +
        "thức kia rồi cộng các tích lại và thu gọn.",
      formula: "(A + B)(C + D) = AC + AD + BC + BD",
    },
    {
      heading: "3. Nhìn bằng diện tích",
      html:
        "Hình chữ nhật cạnh $(x + a)$ và $(x + b)$ được chia thành $4$ ô nhỏ. Tổng diện tích $4$ ô chính " +
        "là kết quả của phép nhân — đó là lí do có công thức dưới đây.",
      formula: "(x + a)(x + b) = x^2 + (a + b)x + ab",
    },
  ],

  visual: {
    type: "area-model",
    config: { mode: "multiply", a: 3, b: 2 },
  },

  examples: [
    {
      title: "Nhân đơn thức với đa thức",
      prompt: "Tính $2x\\,(3x^2 - 4x + 1)$.",
      steps: [
        "Nhân $2x$ với từng hạng tử trong ngoặc.",
        "$2x \\cdot 3x^2 = 6x^3$ ; $2x \\cdot (-4x) = -8x^2$ ; $2x \\cdot 1 = 2x$.",
        "Cộng lại: $6x^3 - 8x^2 + 2x$.",
      ],
    },
    {
      title: "Nhân hai đa thức",
      prompt: "Tính $(x + 2)(x + 3)$.",
      steps: [
        "Nhân mỗi hạng tử của $(x + 2)$ với mỗi hạng tử của $(x + 3)$:",
        "$x \\cdot x = x^2$ ; $x \\cdot 3 = 3x$ ; $2 \\cdot x = 2x$ ; $2 \\cdot 3 = 6$.",
        "Cộng lại: $x^2 + 3x + 2x + 6$.",
        "Thu gọn: $x^2 + 5x + 6$.",
      ],
    },
    {
      title: "Có hạng tử mang dấu trừ",
      prompt: "Tính $(x - 1)(2x + 3)$.",
      steps: [
        "$x \\cdot 2x = 2x^2$ ; $x \\cdot 3 = 3x$.",
        "$(-1) \\cdot 2x = -2x$ ; $(-1) \\cdot 3 = -3$.",
        "Cộng lại: $2x^2 + 3x - 2x - 3$.",
        "Thu gọn: $2x^2 + x - 3$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "$(x + 2)(x + 3) = x^2 + 6$ (chỉ nhân hạng đầu với hạng đầu, hạng cuối với hạng cuối).",
      right: "Phải nhân đủ $4$ cặp: $x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.",
      note: "Mỗi hạng tử của đa thức này nhân với MỌI hạng tử của đa thức kia.",
    },
    {
      wrong: "$2x \\cdot 3x^2 = 6x^2$ (quên cộng số mũ).",
      right: "$2x \\cdot 3x^2 = 6x^{1+2} = 6x^3$.",
      note: "Khi nhân luỹ thừa cùng cơ số, CỘNG các số mũ.",
    },
    {
      wrong: "$(-1) \\cdot 3 = 3$ (sai dấu).",
      right: "$(-1) \\cdot 3 = -3$.",
      note: "Âm nhân dương ra âm — luôn để ý dấu khi có hạng tử trừ.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $3x\\,(x + 4)$.",
      hints: ["Nhân $3x$ với từng hạng tử: $3x \\cdot x$ và $3x \\cdot 4$."],
      solution: "$3x \\cdot x + 3x \\cdot 4 = 3x^2 + 12x$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $-2x\\,(x^2 - 3x + 5)$.",
      hints: ["Nhân $-2x$ với từng hạng tử; chú ý dấu."],
      solution: "$-2x \\cdot x^2 - 2x \\cdot (-3x) - 2x \\cdot 5 = -2x^3 + 6x^2 - 10x$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $(x + 1)(x + 4)$.",
      hints: ["Nhân đủ 4 cặp hạng tử rồi thu gọn các hạng tử đồng dạng."],
      solution: "$x^2 + 4x + x + 4 = x^2 + 5x + 4$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(x - 2)(x + 5)$.",
      hints: ["$x \\cdot x,\\ x \\cdot 5,\\ (-2) \\cdot x,\\ (-2) \\cdot 5$.", "Chú ý dấu của $-2$."],
      solution: "$x^2 + 5x - 2x - 10 = x^2 + 3x - 10$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(2x + 1)(3x - 4)$.",
      hints: [
        "Nhân từng cặp: $2x \\cdot 3x,\\ 2x \\cdot (-4),\\ 1 \\cdot 3x,\\ 1 \\cdot (-4)$.",
        "Thu gọn hai hạng tử chứa $x$.",
      ],
      solution: "$6x^2 - 8x + 3x - 4 = 6x^2 - 5x - 4$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $(x + 3)(x^2 - 2x + 1)$.",
      hints: [
        "Nhân $x$ với cả ba hạng tử, rồi nhân $3$ với cả ba hạng tử.",
        "$x(x^2 - 2x + 1) = x^3 - 2x^2 + x$; $3(x^2 - 2x + 1) = 3x^2 - 6x + 3$.",
      ],
      solution:
        "$x^3 - 2x^2 + x + 3x^2 - 6x + 3 = x^3 + x^2 - 5x + 3$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh vườn hình chữ nhật có chiều dài $(x + 6)$ m và chiều rộng $(x + 1)$ m. " +
        "Viết đa thức biểu thị diện tích mảnh vườn, rồi tính diện tích khi $x = 4$ m.",
      hints: ["Diện tích $= (x + 6)(x + 1)$; khai triển rồi thu gọn.", "Thay $x = 4$ vào kết quả."],
      solution:
        "Diện tích $= (x + 6)(x + 1) = x^2 + x + 6x + 6 = x^2 + 7x + 6$ ($\\text{m}^2$). " +
        "Tại $x = 4$: $4^2 + 7 \\cdot 4 + 6 = 16 + 28 + 6 = 50$ ($\\text{m}^2$).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình chữ nhật có chiều dài hơn chiều rộng $2$ cm. Gọi chiều rộng là $x$ cm. " +
        "Hãy viết đa thức biểu thị diện tích hình chữ nhật theo $x$.",
      hints: [
        "Chiều rộng là $x$, chiều dài hơn $2$ cm nên chiều dài là $x + 2$.",
        "Diện tích $=$ dài $\\times$ rộng $= (x + 2)\\cdot x$.",
      ],
      solution:
        "Chiều dài $= x + 2$. Diện tích $= (x + 2)\\cdot x = x^2 + 2x$ ($\\text{cm}^2$).",
    },
  ],

  quiz: [
    { type: "mc", q: "$(x + 2)(x + 3) = $?", choices: ["$x^2 + 5x + 6$", "$x^2 + 6$", "$x^2 + 6x + 5$", "$x^2 + 5x + 5$"], answer: 0, explain: "$x^2 + 3x + 2x + 6 = x^2 + 5x + 6$." },
    { type: "fill", q: "$2x(3x + 4) = 6x^2 + \\square x$. Điền số vào ô trống.", answer: 8, explain: "$2x \\cdot 4 = 8x$." },
    { type: "mc", q: "$(x - 1)(x + 1) = $?", choices: ["$x^2 - 1$", "$x^2 + 1$", "$x^2 - 2x - 1$", "$x^2 - 2x + 1$"], answer: 0, explain: "Hiệu hai bình phương: $x^2 - 1$." },
  ],
});
