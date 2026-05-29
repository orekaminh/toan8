/* Bài 1. Đơn thức — Chương I. Đa thức (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-01-don-thuc",
  chapter: "Chương I. Đa thức",
  order: 1,
  title: "Bài 1. Đơn thức",

  objectives: [
    "Nhận biết được đơn thức và đơn thức thu gọn; chỉ ra được hệ số và phần biến.",
    "Xác định được bậc của một đơn thức.",
    "Nhận ra các đơn thức đồng dạng và cộng, trừ được các đơn thức đồng dạng.",
  ],

  intro: {
    text:
      "Một viên gạch hình vuông có cạnh $x$ (cm) thì diện tích là $x^2$. Một khối lập phương cạnh $x$ " +
      "có thể tích $x^3$. Mua $5$ gói kẹo, mỗi gói $x$ viên thì được $5x$ viên. " +
      "Những biểu thức gọn gàng như $x^2,\\ x^3,\\ 5x$ chính là <b>đơn thức</b> — những 'viên gạch' " +
      "cơ bản để sau này ghép thành đa thức.",
    math: "5x \\qquad x^2 \\qquad 3x^2y \\qquad -7",
  },

  theory: [
    {
      heading: "1. Đơn thức là gì?",
      html:
        "<b>Đơn thức</b> là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một <b>tích</b> giữa " +
        "các số và các biến. Ví dụ: $-3,\\ x,\\ 2xy,\\ \\dfrac{1}{2}x^2y^3$.<br>" +
        "Những biểu thức có dấu cộng hoặc trừ như $x + 1$ <b>không</b> phải là đơn thức.",
    },
    {
      heading: "2. Đơn thức thu gọn — hệ số và phần biến",
      html:
        "<b>Đơn thức thu gọn</b> là đơn thức chỉ gồm tích của một số với các biến, trong đó mỗi biến " +
        "xuất hiện đúng một lần dưới dạng luỹ thừa với số mũ nguyên dương.<br>" +
        "Khi đó: phần số là <b>hệ số</b>, phần các biến là <b>phần biến</b>.<br>" +
        "Ví dụ $3x^2y$ có hệ số $3$ và phần biến $x^2y$.",
    },
    {
      heading: "3. Bậc của đơn thức",
      html:
        "Với đơn thức thu gọn có hệ số khác $0$, <b>bậc</b> của nó bằng <b>tổng số mũ</b> của tất cả các " +
        "biến.<br>Ví dụ: bậc của $3x^2y$ là $2 + 1 = 3$.",
    },
    {
      heading: "4. Đơn thức đồng dạng",
      html:
        "Hai đơn thức <b>đồng dạng</b> là hai đơn thức có hệ số khác $0$ và có <b>cùng phần biến</b>.<br>" +
        "Ví dụ $2x^2y$ và $-5x^2y$ đồng dạng; còn $2x^2y$ và $2xy^2$ thì không.<br>" +
        "Muốn <b>cộng (trừ)</b> các đơn thức đồng dạng: giữ nguyên phần biến, cộng (trừ) các hệ số.",
      formula: "2x^2y + (-5x^2y) = (2 - 5)x^2y = -3x^2y",
    },
  ],

  visual: {
    type: "algebra-tiles",
    config: {
      tiles: [{ type: "x2", sign: 1, count: 3 }],
      combine: false,
      buttonText: "Gom lại",
      caption:
        "Ba viên gạch $x^2$ là ba đơn thức <b>đồng dạng</b>. Gộp ba viên lại ta được một đơn thức duy nhất. " +
        "Bấm nút để xem kết quả.",
    },
  },

  examples: [
    {
      title: "Nhận biết đơn thức",
      prompt: "Trong các biểu thức sau, biểu thức nào là đơn thức: $4x^2y,\\quad 3 - x,\\quad -\\dfrac{1}{2}xy^3,\\quad x + y$ ?",
      steps: [
        "$4x^2y$ là tích của số $4$ với các biến → là đơn thức.",
        "$3 - x$ có phép trừ → <b>không</b> phải đơn thức.",
        "$-\\dfrac{1}{2}xy^3$ là tích của số với các biến → là đơn thức.",
        "$x + y$ có phép cộng → <b>không</b> phải đơn thức.",
        "Vậy các đơn thức là $4x^2y$ và $-\\dfrac{1}{2}xy^3$.",
      ],
    },
    {
      title: "Thu gọn và tìm hệ số, phần biến, bậc",
      prompt: "Thu gọn đơn thức $A = 2x \\cdot 3x^2 y$ rồi chỉ ra hệ số, phần biến và bậc.",
      steps: [
        "Nhân các hệ số với nhau: $2 \\cdot 3 = 6$.",
        "Nhân các luỹ thừa cùng biến: $x \\cdot x^2 = x^3$.",
        "Vậy $A = 6x^3y$.",
        "Hệ số là $6$; phần biến là $x^3y$.",
        "Bậc của $A$ là $3 + 1 = 4$.",
      ],
    },
    {
      title: "Cộng, trừ đơn thức đồng dạng",
      prompt: "Tính $5x^2 + 8x^2 - 2x^2$.",
      steps: [
        "Ba đơn thức đều có phần biến $x^2$ nên đồng dạng.",
        "Cộng, trừ các hệ số: $5 + 8 - 2 = 11$.",
        "Giữ nguyên phần biến: kết quả là $11x^2$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Coi $x + 2$ là đơn thức.",
      right: "$x + 2$ là <b>đa thức</b> (có phép cộng), không phải đơn thức.",
      note: "Đơn thức chỉ có phép nhân giữa số và biến, không có dấu cộng/trừ.",
    },
    {
      wrong: "Tính bậc của $3x^2y$ bằng $2$ (chỉ lấy số mũ lớn nhất).",
      right: "Bậc $= 2 + 1 = 3$ (cộng tất cả số mũ của các biến).",
      note: "Bậc là TỔNG các số mũ, không phải số mũ lớn nhất.",
    },
    {
      wrong: "Cộng cả phần biến: $5x^2 + 8x^2 = 13x^4$.",
      right: "$5x^2 + 8x^2 = 13x^2$ (chỉ cộng hệ số, giữ nguyên phần biến).",
      note: "Cộng đơn thức đồng dạng KHÔNG cộng số mũ.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Biểu thức nào sau đây là đơn thức: $-7xy,\\quad x^2 + 1,\\quad \\dfrac{2}{3}x^3,\\quad 5 - 2y$ ?",
      hints: ["Đơn thức chỉ gồm phép nhân giữa số và biến, không có dấu + hoặc −."],
      solution: "Các đơn thức là $-7xy$ và $\\dfrac{2}{3}x^3$. Hai biểu thức còn lại có phép cộng/trừ nên không phải đơn thức.",
    },
    {
      level: "Nhận biết",
      prompt: "Chỉ ra hệ số và phần biến của đơn thức $-4x^3y^2$.",
      hints: ["Hệ số là phần số đứng trước; phần biến là phần chứa các chữ."],
      solution: "Hệ số là $-4$; phần biến là $x^3y^2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tìm bậc của đơn thức $6x^2y^3z$.",
      hints: ["Bậc = tổng số mũ của tất cả các biến (biến $z$ có số mũ $1$)."],
      solution: "Bậc $= 2 + 3 + 1 = 6$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Thu gọn đơn thức $B = 3xy \\cdot (-2x^2y)$ rồi tìm bậc của nó.",
      hints: [
        "Nhân các hệ số với nhau, rồi nhân các luỹ thừa cùng biến.",
        "$x \\cdot x^2 = x^3$ và $y \\cdot y = y^2$.",
      ],
      solution:
        "Hệ số: $3 \\cdot (-2) = -6$. Phần biến: $x \\cdot x^2 = x^3$, $y \\cdot y = y^2$. " +
        "Vậy $B = -6x^3y^2$, có bậc $3 + 2 = 5$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Hai đơn thức $4x^2y$ và $-9x^2y$ có đồng dạng không? Nếu có, hãy tính tổng của chúng.",
      hints: ["Đồng dạng khi có cùng phần biến.", "Cộng đơn thức đồng dạng: cộng hệ số, giữ phần biến."],
      solution: "Hai đơn thức có cùng phần biến $x^2y$ nên đồng dạng. Tổng: $4x^2y + (-9x^2y) = (4 - 9)x^2y = -5x^2y$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Rút gọn: $7a^2b - 3a^2b + a^2b$.",
      hints: ["Cả ba đều đồng dạng (phần biến $a^2b$). Chú ý $a^2b = 1 \\cdot a^2b$."],
      solution: "$(7 - 3 + 1)a^2b = 5a^2b$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một hình hộp chữ nhật có chiều dài $2x$, chiều rộng $x$ và chiều cao $3x$ (cùng đơn vị). " +
        "Viết đơn thức biểu thị thể tích của hình hộp và cho biết bậc của nó.",
      hints: [
        "Thể tích hình hộp chữ nhật $=$ dài $\\times$ rộng $\\times$ cao.",
        "Nhân ba đơn thức: nhân hệ số với nhau và nhân các luỹ thừa của $x$.",
      ],
      solution:
        "Thể tích $V = 2x \\cdot x \\cdot 3x = (2 \\cdot 1 \\cdot 3)\\,(x \\cdot x \\cdot x) = 6x^3$. " +
        "Đây là đơn thức bậc $3$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh vườn gồm hai luống: luống thứ nhất diện tích $5x^2$ ($\\text{m}^2$), luống thứ hai " +
        "diện tích $2x^2$ ($\\text{m}^2$). Hỏi tổng diện tích hai luống là bao nhiêu? Nếu $x = 4$ thì diện tích bằng bao nhiêu $\\text{m}^2$?",
      hints: [
        "Hai diện tích là hai đơn thức đồng dạng, cộng lại được tổng.",
        "Sau khi có tổng theo $x$, thay $x = 4$ để tính số.",
      ],
      solution:
        "Tổng diện tích $= 5x^2 + 2x^2 = 7x^2$ ($\\text{m}^2$). " +
        "Với $x = 4$: $7 \\cdot 4^2 = 7 \\cdot 16 = 112$ ($\\text{m}^2$).",
    },
  ],

  quiz: [
    { type: "mc", q: "Biểu thức nào sau đây là đơn thức?", choices: ["$x+1$", "$3x^2y$", "$x-2$", "$\\dfrac{1}{x}$"], answer: 1, explain: "Đơn thức chỉ gồm tích của số và biến, không có phép cộng/trừ." },
    { type: "fill", q: "Bậc của đơn thức $4x^2y^3$ là bao nhiêu?", answer: 5, explain: "Bậc = tổng số mũ $= 2 + 3 = 5$." },
    { type: "mc", q: "Thu gọn $2x \\cdot 3x$ được kết quả nào?", choices: ["$5x$", "$6x$", "$5x^2$", "$6x^2$"], answer: 3, explain: "$2 \\cdot 3 = 6$ và $x \\cdot x = x^2$." },
  ],
});
