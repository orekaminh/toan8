/* Bài 10. Căn bậc ba và căn thức bậc ba
   Chương III (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-10-can-bac-ba",
  chapter: "Chương III. Căn bậc hai và căn bậc ba",
  order: 4,
  title: "Bài 10. Căn bậc ba và căn thức bậc ba",

  objectives: [
    "Hiểu khái niệm căn bậc ba của một số và kí hiệu $\\sqrt[3]{a}$.",
    "Biết mọi số thực đều có đúng một căn bậc ba (kể cả số âm).",
    "Vận dụng các tính chất $\\sqrt[3]{a^3} = a$ và $\\sqrt[3]{ab} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}$ để tính toán.",
  ],

  intro: {
    text:
      "Một bể cá hình lập phương có thể tích $27$ lít $= 27\\,\\text{dm}^3$. Hỏi cạnh của bể dài bao nhiêu? " +
      "Ta cần một số $x$ sao cho $x^3 = 27$. Số đó chính là $3$, vì $3^3 = 27$. Ta gọi $3$ là " +
      "<b>căn bậc ba</b> của $27$ và viết $\\sqrt[3]{27} = 3$. Vậy cạnh bể dài $3$ dm.",
    math: "x^3 = 27 \\Rightarrow x = \\sqrt[3]{27} = 3",
  },

  theory: [
    {
      heading: "1. Căn bậc ba",
      html:
        "<b>Căn bậc ba</b> của một số $a$ là số $x$ sao cho $x^3 = a$, kí hiệu là $\\sqrt[3]{a}$.<br>" +
        "Điểm đặc biệt: <b>mọi số thực $a$ đều có đúng một căn bậc ba</b>. Khác với căn bậc hai, số âm " +
        "vẫn có căn bậc ba (là một số âm). Chẳng hạn $\\sqrt[3]{27} = 3$, $\\sqrt[3]{-8} = -2$, và " +
        "$\\sqrt[3]{0} = 0$.",
      formula: "\\sqrt[3]{a} = x \\iff x^3 = a",
    },
    {
      heading: "2. Tính chất của căn bậc ba",
      html:
        "Với mọi số thực $a, b$ ta luôn có:<br>" +
        "• $\\sqrt[3]{a^3} = a$ (lấy căn bậc ba rồi luỹ thừa ba, hay ngược lại, đều trở về $a$);<br>" +
        "• $\\sqrt[3]{ab} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}$ (căn bậc ba của một tích bằng tích các căn bậc ba).<br>" +
        "Nhờ tính chất thứ hai, ta thường tách số dưới căn thành tích của một lập phương để tính nhanh.",
      formula: "\\sqrt[3]{a^3} = a, \\qquad \\sqrt[3]{ab} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}",
    },
    {
      heading: "3. Căn thức bậc ba",
      html:
        "Khi dưới dấu căn bậc ba là một biểu thức chứa biến, ta được một <b>căn thức bậc ba</b>, ví dụ " +
        "$\\sqrt[3]{x - 1}$ hay $\\sqrt[3]{2x + 5}$. Vì mọi số thực đều có căn bậc ba nên căn thức bậc ba " +
        "<b>xác định với mọi giá trị</b> của biến (không cần điều kiện như căn bậc hai).",
    },
  ],

  examples: [
    {
      title: "Tính căn bậc ba của số dương",
      prompt: "Tính $\\sqrt[3]{64}$.",
      steps: [
        "Ta tìm số $x$ sao cho $x^3 = 64$.",
        "Nhận thấy $4^3 = 4 \\cdot 4 \\cdot 4 = 64$.",
        "Vậy $\\sqrt[3]{64} = 4$.",
      ],
    },
    {
      title: "Căn bậc ba của số âm",
      prompt: "Tính $\\sqrt[3]{-8}$.",
      steps: [
        "Ta tìm số $x$ sao cho $x^3 = -8$.",
        "Vì $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$ nên $x = -2$.",
        "Vậy $\\sqrt[3]{-8} = -2$ (số âm vẫn có căn bậc ba).",
      ],
    },
    {
      title: "Vận dụng tính chất của tích",
      prompt: "Tính $\\sqrt[3]{27} + \\sqrt[3]{-8}$.",
      steps: [
        "$\\sqrt[3]{27} = 3$ vì $3^3 = 27$.",
        "$\\sqrt[3]{-8} = -2$ vì $(-2)^3 = -8$.",
        "Do đó $\\sqrt[3]{27} + \\sqrt[3]{-8} = 3 + (-2) = 1$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng số âm <b>không có</b> căn bậc ba (giống như căn bậc hai).",
      right: "Mọi số thực đều có đúng <b>một</b> căn bậc ba; số âm có căn bậc ba là một số âm, ví dụ $\\sqrt[3]{-8} = -2$.",
      note: "Đừng nhầm quy tắc của căn bậc hai sang căn bậc ba.",
    },
    {
      wrong: "Viết $\\sqrt[3]{-27} = 3$ (bỏ dấu âm).",
      right: "$\\sqrt[3]{-27} = -3$ vì $(-3)^3 = -27$.",
      note: "Lập phương của số âm vẫn là số âm, nên căn bậc ba giữ nguyên dấu.",
    },
    {
      wrong: "Tính $\\sqrt[3]{8 + 27} = \\sqrt[3]{8} + \\sqrt[3]{27} = 2 + 3 = 5$.",
      right: "Căn bậc ba <b>không</b> tách theo phép cộng: $\\sqrt[3]{8 + 27} = \\sqrt[3]{35} \\ne 5$.",
      note: "Tính chất $\\sqrt[3]{ab} = \\sqrt[3]{a}\\cdot\\sqrt[3]{b}$ chỉ đúng với <b>tích</b>, không đúng với tổng.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt[3]{27}$.",
      hints: ["Tìm số $x$ với $x^3 = 27$."],
      solution: "$3^3 = 27$ nên $\\sqrt[3]{27} = 3$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt[3]{-8}$.",
      hints: ["Tìm số $x$ với $x^3 = -8$; chú ý dấu."],
      solution: "$(-2)^3 = -8$ nên $\\sqrt[3]{-8} = -2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính $\\sqrt[3]{64}$.",
      hints: ["Số nào lập phương lên bằng $64$?"],
      solution: "$4^3 = 64$ nên $\\sqrt[3]{64} = 4$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $\\sqrt[3]{27} + \\sqrt[3]{-8}$.",
      hints: ["Tính từng căn bậc ba rồi cộng lại.", "$\\sqrt[3]{27} = 3$ và $\\sqrt[3]{-8} = -2$."],
      solution: "$\\sqrt[3]{27} + \\sqrt[3]{-8} = 3 + (-2) = 1$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính $\\sqrt[3]{125} - \\sqrt[3]{8}$.",
      hints: ["$5^3 = 125$ và $2^3 = 8$."],
      solution: "$\\sqrt[3]{125} - \\sqrt[3]{8} = 5 - 2 = 3$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Dùng tính chất $\\sqrt[3]{ab} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}$ để tính $\\sqrt[3]{8} \\cdot \\sqrt[3]{27}$.",
      hints: ["Gộp lại thành $\\sqrt[3]{8 \\cdot 27}$ hoặc tính từng căn rồi nhân."],
      solution: "$\\sqrt[3]{8} \\cdot \\sqrt[3]{27} = 2 \\cdot 3 = 6$ (cũng bằng $\\sqrt[3]{216} = 6$).",
    },
    {
      level: "Vận dụng",
      prompt: "Một khối lập phương có thể tích $125\\,\\text{cm}^3$. Tính độ dài cạnh của khối đó.",
      hints: ["Thể tích lập phương cạnh $a$ là $a^3$.", "Giải $a^3 = 125$ bằng căn bậc ba."],
      solution: "Gọi cạnh là $a$, ta có $a^3 = 125 \\Rightarrow a = \\sqrt[3]{125} = 5$. Vậy cạnh dài $5$ cm.",
    },
    {
      level: "Vận dụng",
      prompt: "Tính giá trị của căn thức $\\sqrt[3]{x^3 - 1}$ tại $x = 3$.",
      hints: ["Thay $x = 3$ vào biểu thức dưới căn trước.", "Sau đó lấy căn bậc ba của kết quả."],
      solution: "Tại $x = 3$: $x^3 - 1 = 27 - 1 = 26$. Vậy $\\sqrt[3]{x^3 - 1} = \\sqrt[3]{26}$ (giá trị này không phải số nguyên).",
    },
  ],

  quiz: [
    { type: "mc", q: "Giá trị của $\\sqrt[3]{27}$ là:",
      choices: ["$3$", "$9$", "$-3$", "$\\sqrt{3}$"], answer: 0,
      explain: "$3^3 = 27$ nên $\\sqrt[3]{27} = 3$." },
    { type: "fill", q: "Tính $\\sqrt[3]{-8}$. Kết quả bằng bao nhiêu?", answer: -2,
      explain: "$(-2)^3 = -8$ nên $\\sqrt[3]{-8} = -2$." },
    { type: "mc", q: "Khẳng định nào sau đây <b>đúng</b>?",
      choices: [
        "Số âm không có căn bậc ba.",
        "Mọi số thực đều có đúng một căn bậc ba.",
        "$\\sqrt[3]{-27} = 3$.",
        "$\\sqrt[3]{a + b} = \\sqrt[3]{a} + \\sqrt[3]{b}$.",
      ], answer: 1,
      explain: "Mọi số thực (kể cả số âm) đều có đúng một căn bậc ba; $\\sqrt[3]{-27} = -3$ và căn bậc ba không tách theo tổng." },
  ],
});
