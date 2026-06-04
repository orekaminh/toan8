/* Bài 20. Định lý Vi-ét và ứng dụng
   Chương VI (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-20-dinh-li-viete",
  chapter: "Chương VI. Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
  order: 3,
  title: "Bài 20. Định lý Vi-ét và ứng dụng",

  objectives: [
    "Phát biểu và vận dụng Định lý Vi-ét để tính tổng và tích hai nghiệm của phương trình bậc hai.",
    "Nhẩm nhanh nghiệm khi $a + b + c = 0$ hoặc $a - b + c = 0$.",
    "Tìm hai số khi biết tổng và tích của chúng.",
  ],

  intro: {
    text:
      "Để tìm tổng và tích hai nghiệm của một phương trình bậc hai, ta <b>không nhất thiết phải giải</b> " +
      "phương trình đó. <b>Định lý Vi-ét</b> cho ta mối liên hệ trực tiếp giữa các hệ số $a, b, c$ với " +
      "tổng và tích hai nghiệm. Nhờ đó ta có thể nhẩm nghiệm rất nhanh và tìm hai số khi biết tổng, tích " +
      "của chúng.",
    math: "x_1 + x_2 = -\\dfrac{b}{a}, \\qquad x_1 \\cdot x_2 = \\dfrac{c}{a}",
  },

  theory: [
    {
      heading: "1. Định lý Vi-ét",
      html:
        "Nếu $x_1, x_2$ là hai nghiệm của phương trình bậc hai $ax^2 + bx + c = 0\\ (a \\ne 0)$ thì " +
        "<b>tổng</b> và <b>tích</b> hai nghiệm được tính theo các hệ số như sau:<br>" +
        "Định lý chỉ dùng được khi phương trình <b>có nghiệm</b>, tức là $\\Delta \\ge 0$ (hay $\\Delta' \\ge 0$).",
      formula: "x_1 + x_2 = -\\dfrac{b}{a}, \\qquad x_1 \\cdot x_2 = \\dfrac{c}{a}",
    },
    {
      heading: "2. Nhẩm nghiệm nhờ Định lý Vi-ét",
      html:
        "Với phương trình $ax^2 + bx + c = 0\\ (a \\ne 0)$:<br>" +
        "• Nếu $a + b + c = 0$ thì phương trình có một nghiệm $x_1 = 1$ và nghiệm kia $x_2 = \\dfrac{c}{a}$.<br>" +
        "• Nếu $a - b + c = 0$ thì phương trình có một nghiệm $x_1 = -1$ và nghiệm kia $x_2 = -\\dfrac{c}{a}$.",
      formula: "a + b + c = 0 \\Rightarrow x_1 = 1,\\ x_2 = \\dfrac{c}{a}",
    },
    {
      heading: "3. Tìm hai số khi biết tổng và tích",
      html:
        "Nếu hai số có <b>tổng</b> bằng $S$ và <b>tích</b> bằng $P$ thì chúng là hai nghiệm của phương " +
        "trình $X^2 - SX + P = 0$.<br>" +
        "Điều kiện để tồn tại hai số đó là $S^2 - 4P \\ge 0$.",
      formula: "X^2 - SX + P = 0",
    },
  ],

  examples: [
    {
      title: "Tính tổng và tích hai nghiệm",
      prompt: "Không giải phương trình, hãy tính tổng và tích hai nghiệm của $2x^2 - 5x + 3 = 0$.",
      steps: [
        "Ở đây $a = 2,\\ b = -5,\\ c = 3$. Vì $\\Delta = (-5)^2 - 4 \\cdot 2 \\cdot 3 = 1 > 0$ nên phương trình có hai nghiệm.",
        "Tổng: $x_1 + x_2 = -\\dfrac{b}{a} = -\\dfrac{-5}{2} = \\dfrac{5}{2}$.",
        "Tích: $x_1 \\cdot x_2 = \\dfrac{c}{a} = \\dfrac{3}{2}$.",
        "Vậy tổng hai nghiệm là $\\dfrac{5}{2}$ và tích hai nghiệm là $\\dfrac{3}{2}$.",
      ],
    },
    {
      title: "Nhẩm nghiệm khi $a + b + c = 0$",
      prompt: "Nhẩm nghiệm của phương trình $2x^2 - 5x + 3 = 0$.",
      steps: [
        "Kiểm tra: $a + b + c = 2 + (-5) + 3 = 0$.",
        "Suy ra một nghiệm là $x_1 = 1$.",
        "Nghiệm còn lại: $x_2 = \\dfrac{c}{a} = \\dfrac{3}{2}$.",
        "Vậy phương trình có hai nghiệm $x_1 = 1$ và $x_2 = \\dfrac{3}{2}$.",
      ],
    },
    {
      title: "Tìm hai số biết tổng và tích",
      prompt: "Tìm hai số có tổng bằng $5$ và tích bằng $6$.",
      steps: [
        "Hai số cần tìm là nghiệm của $X^2 - SX + P = 0$ với $S = 5,\\ P = 6$.",
        "Phương trình: $X^2 - 5X + 6 = 0$.",
        "$\\Delta = (-5)^2 - 4 \\cdot 6 = 1 > 0 \\Rightarrow X_1 = \\dfrac{5 + 1}{2} = 3,\\ X_2 = \\dfrac{5 - 1}{2} = 2$.",
        "Vậy hai số cần tìm là $2$ và $3$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Viết tổng hai nghiệm là $x_1 + x_2 = \\dfrac{b}{a}$ (quên dấu trừ).",
      right: "Tổng hai nghiệm là $x_1 + x_2 = -\\dfrac{b}{a}$, còn tích là $x_1 \\cdot x_2 = \\dfrac{c}{a}$.",
      note: "Chỉ có công thức tổng mới mang dấu trừ, công thức tích thì không.",
    },
    {
      wrong: "Dùng Định lý Vi-ét cho phương trình $x^2 + x + 1 = 0$ rồi kết luận có tổng, tích nghiệm.",
      right: "Phải kiểm tra $\\Delta \\ge 0$ trước. Ở đây $\\Delta = 1 - 4 = -3 < 0$ nên phương trình vô nghiệm.",
      note: "Không có nghiệm thì không thể nói về tổng và tích nghiệm.",
    },
    {
      wrong: "Khi tìm hai số biết tổng $S$, tích $P$ lại lập phương trình $X^2 + SX + P = 0$.",
      right: "Phương trình đúng là $X^2 - SX + P = 0$ (hệ số của $X$ là $-S$).",
      note: "Vì tổng hai nghiệm bằng $S$ nên hệ số của $X$ phải là $-S$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Cho phương trình $x^2 - 7x + 12 = 0$ (có hai nghiệm). Tính $x_1 + x_2$ và $x_1 \\cdot x_2$.",
      hints: ["Áp dụng $x_1 + x_2 = -\\dfrac{b}{a}$ và $x_1 \\cdot x_2 = \\dfrac{c}{a}$ với $a = 1$."],
      solution: "$x_1 + x_2 = -\\dfrac{-7}{1} = 7$ và $x_1 \\cdot x_2 = \\dfrac{12}{1} = 12$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính tổng và tích hai nghiệm của $3x^2 + 6x - 9 = 0$ mà không giải phương trình.",
      hints: ["Xác định $a = 3,\\ b = 6,\\ c = -9$ rồi dùng Định lý Vi-ét."],
      solution: "$x_1 + x_2 = -\\dfrac{6}{3} = -2$ và $x_1 \\cdot x_2 = \\dfrac{-9}{3} = -3$.",
    },
    {
      level: "Nhận biết",
      prompt: "Phương trình $x^2 - 6x + 5 = 0$ có $a + b + c$ bằng bao nhiêu? Từ đó nhẩm một nghiệm.",
      hints: ["Tính $a + b + c$; nếu bằng $0$ thì có ngay nghiệm $x_1 = 1$."],
      solution: "$a + b + c = 1 + (-6) + 5 = 0$ nên một nghiệm là $x_1 = 1$ (nghiệm kia là $x_2 = \\dfrac{c}{a} = 5$).",
    },
    {
      level: "Thông hiểu",
      prompt: "Nhẩm hai nghiệm của phương trình $3x^2 - 4x + 1 = 0$.",
      hints: ["Kiểm tra $a + b + c$.", "Dùng $x_1 = 1,\\ x_2 = \\dfrac{c}{a}$."],
      solution:
        "$a + b + c = 3 + (-4) + 1 = 0$ nên $x_1 = 1$ và $x_2 = \\dfrac{c}{a} = \\dfrac{1}{3}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Nhẩm hai nghiệm của phương trình $2x^2 + 5x + 3 = 0$.",
      hints: ["Kiểm tra $a - b + c$.", "Nếu $a - b + c = 0$ thì $x_1 = -1,\\ x_2 = -\\dfrac{c}{a}$."],
      solution:
        "$a - b + c = 2 - 5 + 3 = 0$ nên $x_1 = -1$ và $x_2 = -\\dfrac{c}{a} = -\\dfrac{3}{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tìm hai số có tổng bằng $7$ và tích bằng $12$.",
      hints: ["Hai số là nghiệm của $X^2 - SX + P = 0$.", "Lập $X^2 - 7X + 12 = 0$ rồi giải."],
      solution:
        "Hai số là nghiệm của $X^2 - 7X + 12 = 0$. $\\Delta = 49 - 48 = 1 \\Rightarrow X_1 = 4,\\ X_2 = 3$. Vậy hai số là $3$ và $4$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho phương trình $x^2 - 5x + m = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thoả mãn " +
        "$x_1 \\cdot x_2 = 6$.",
      hints: [
        "Theo Định lý Vi-ét, $x_1 \\cdot x_2 = \\dfrac{c}{a} = m$.",
        "Cho $m = 6$ rồi kiểm tra điều kiện $\\Delta \\ge 0$.",
      ],
      solution:
        "Theo Vi-ét, $x_1 \\cdot x_2 = m$, nên $m = 6$. Khi đó $\\Delta = (-5)^2 - 4 \\cdot 6 = 1 > 0$ nên phương trình có hai nghiệm. Vậy $m = 6$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh đất hình chữ nhật có chu vi $26\\,\\text{m}$ và diện tích $40\\,\\text{m}^2$. Tìm chiều dài và " +
        "chiều rộng của mảnh đất.",
      hints: [
        "Gọi chiều dài, chiều rộng là hai số có tổng $S$ và tích $P$.",
        "Nửa chu vi là tổng hai cạnh: $S = 13$; diện tích là tích: $P = 40$.",
      ],
      solution:
        "Hai cạnh có tổng $S = \\dfrac{26}{2} = 13$ và tích $P = 40$, nên là nghiệm của $X^2 - 13X + 40 = 0$. " +
        "$\\Delta = 169 - 160 = 9 \\Rightarrow X_1 = \\dfrac{13 + 3}{2} = 8,\\ X_2 = \\dfrac{13 - 3}{2} = 5$. " +
        "Vậy chiều dài $8\\,\\text{m}$, chiều rộng $5\\,\\text{m}$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Cho $x^2 - 9x + 20 = 0$ (có hai nghiệm). Tổng hai nghiệm $x_1 + x_2$ bằng bao nhiêu?",
      choices: ["$-9$", "$9$", "$20$", "$-20$"], answer: 1,
      explain: "$x_1 + x_2 = -\\dfrac{b}{a} = -\\dfrac{-9}{1} = 9$." },
    { type: "fill", q: "Phương trình $5x^2 - 8x + 3 = 0$ có $a + b + c = 0$, nên một nghiệm là $1$. Nghiệm còn lại bằng bao nhiêu?",
      answer: 0.6, explain: "$x_2 = \\dfrac{c}{a} = \\dfrac{3}{5} = 0{,}6$." },
    { type: "mc", q: "Hai số có tổng bằng $5$ và tích bằng $6$ là hai nghiệm của phương trình nào?",
      choices: ["$X^2 + 5X + 6 = 0$", "$X^2 - 5X + 6 = 0$", "$X^2 - 6X + 5 = 0$", "$X^2 + 5X - 6 = 0$"], answer: 1,
      explain: "Theo công thức $X^2 - SX + P = 0$ với $S = 5,\\ P = 6$ ta được $X^2 - 5X + 6 = 0$." },
  ],
});
