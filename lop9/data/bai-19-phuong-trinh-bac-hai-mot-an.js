/* Bài 19. Phương trình bậc hai một ẩn
   Chương VI (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-19-phuong-trinh-bac-hai-mot-an",
  visual: { type: "quadratic", config: { a: 1, b: -1, c: -2 } },
  chapter: "Chương VI. Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
  order: 2,
  title: "Bài 19. Phương trình bậc hai một ẩn",

  objectives: [
    "Nhận biết phương trình bậc hai một ẩn và xác định đúng các hệ số $a, b, c$.",
    "Tính biệt thức $\\Delta = b^2 - 4ac$ và dựa vào dấu của $\\Delta$ để biện luận số nghiệm.",
    "Giải được phương trình bậc hai bằng công thức nghiệm và giải nhanh phương trình khuyết.",
  ],

  intro: {
    text:
      "Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng $5$ m và diện tích $6$ m². Nếu gọi chiều " +
      "rộng là $x$ thì ta có $x(x + 5) = 6$, tức $x^2 + 5x - 6 = 0$ — một <b>phương trình bậc hai một " +
      "ẩn</b>. Khác với phương trình bậc nhất, phương trình bậc hai có thể có <b>hai nghiệm</b>, " +
      "<b>một nghiệm</b> hoặc <b>vô nghiệm</b>. Chìa khoá để biết điều đó là <b>biệt thức</b> $\\Delta$.",
    math: "ax^2 + bx + c = 0 \\quad (a \\ne 0)",
  },

  theory: [
    {
      heading: "1. Phương trình bậc hai một ẩn",
      html:
        "<b>Phương trình bậc hai một ẩn</b> (ẩn $x$) là phương trình có dạng $ax^2 + bx + c = 0$, trong " +
        "đó $a, b, c$ là các số đã biết và $a \\ne 0$.<br>" +
        "Ở đây $a$ là hệ số của $x^2$, $b$ là hệ số của $x$, còn $c$ là hệ số tự do. Điều kiện " +
        "$a \\ne 0$ là bắt buộc, vì nếu $a = 0$ thì phương trình trở thành bậc nhất.",
      formula: "ax^2 + bx + c = 0 \\quad (a \\ne 0)",
    },
    {
      heading: "2. Công thức nghiệm và biệt thức $\\Delta$",
      html:
        "Đặt <b>biệt thức</b> $\\Delta = b^2 - 4ac$. Khi đó:<br>" +
        "• Nếu $\\Delta > 0$: phương trình có <b>hai nghiệm phân biệt</b> " +
        "$x_1 = \\dfrac{-b + \\sqrt{\\Delta}}{2a}$, $x_2 = \\dfrac{-b - \\sqrt{\\Delta}}{2a}$.<br>" +
        "• Nếu $\\Delta = 0$: phương trình có <b>nghiệm kép</b> $x_1 = x_2 = \\dfrac{-b}{2a}$.<br>" +
        "• Nếu $\\Delta < 0$: phương trình <b>vô nghiệm</b>.",
      formula: "\\Delta = b^2 - 4ac \\quad;\\quad x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}",
    },
    {
      heading: "3. Phương trình bậc hai khuyết",
      html:
        "Khi $b = 0$ hoặc $c = 0$ ta có phương trình <b>khuyết</b>, có thể giải nhanh mà không cần " +
        "công thức nghiệm.<br>" +
        "• Khuyết $b$: $ax^2 + c = 0 \\Rightarrow x^2 = -\\dfrac{c}{a}$ (có nghiệm khi $-\\dfrac{c}{a} \\ge 0$).<br>" +
        "• Khuyết $c$: $ax^2 + bx = 0 \\Rightarrow x(ax + b) = 0 \\Rightarrow x = 0$ hoặc $x = -\\dfrac{b}{a}$.",
      formula: "ax^2 + bx = 0 \\Leftrightarrow x(ax + b) = 0",
    },
  ],

  examples: [
    {
      title: "Trường hợp $\\Delta > 0$ (hai nghiệm phân biệt)",
      prompt: "Giải phương trình $x^2 - 5x + 6 = 0$.",
      steps: [
        "Xác định hệ số: $a = 1,\\ b = -5,\\ c = 6$.",
        "Tính biệt thức: $\\Delta = (-5)^2 - 4 \\cdot 1 \\cdot 6 = 25 - 24 = 1 > 0$.",
        "Vì $\\Delta > 0$ nên có hai nghiệm: $\\sqrt{\\Delta} = 1$, $x = \\dfrac{5 \\pm 1}{2}$.",
        "Vậy $x_1 = \\dfrac{5 + 1}{2} = 3$ và $x_2 = \\dfrac{5 - 1}{2} = 2$.",
      ],
    },
    {
      title: "Trường hợp $\\Delta = 0$ (nghiệm kép)",
      prompt: "Giải phương trình $x^2 - 4x + 4 = 0$.",
      steps: [
        "Hệ số: $a = 1,\\ b = -4,\\ c = 4$.",
        "Tính: $\\Delta = (-4)^2 - 4 \\cdot 1 \\cdot 4 = 16 - 16 = 0$.",
        "Vì $\\Delta = 0$ nên phương trình có nghiệm kép $x = \\dfrac{-b}{2a} = \\dfrac{4}{2} = 2$.",
        "Vậy phương trình có nghiệm kép $x_1 = x_2 = 2$.",
      ],
    },
    {
      title: "Trường hợp $\\Delta < 0$ (vô nghiệm)",
      prompt: "Giải phương trình $x^2 + x + 1 = 0$.",
      steps: [
        "Hệ số: $a = 1,\\ b = 1,\\ c = 1$.",
        "Tính: $\\Delta = 1^2 - 4 \\cdot 1 \\cdot 1 = 1 - 4 = -3 < 0$.",
        "Vì $\\Delta < 0$ nên phương trình <b>vô nghiệm</b>.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Quên kiểm tra điều kiện $a \\ne 0$ trước khi gọi là phương trình bậc hai.",
      right: "Phải có $a \\ne 0$; nếu $a = 0$ thì phương trình chỉ là bậc nhất.",
      note: "Luôn xác định rõ ba hệ số $a, b, c$ trước khi giải.",
    },
    {
      wrong: "Lấy nhầm dấu $b$ trong công thức, ví dụ với $b = -5$ lại viết $x = \\dfrac{-5 \\pm \\sqrt{\\Delta}}{2a}$.",
      right: "Công thức là $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$; với $b = -5$ thì $-b = 5$.",
      note: "Thay nguyên giá trị của $b$ (kể cả dấu âm) vào công thức.",
    },
    {
      wrong: "Thấy $\\Delta < 0$ vẫn cố lấy căn $\\sqrt{\\Delta}$ để tìm nghiệm.",
      right: "Khi $\\Delta < 0$ thì kết luận ngay phương trình <b>vô nghiệm</b>, không lấy căn.",
      note: "Chỉ khi $\\Delta \\ge 0$ mới có $\\sqrt{\\Delta}$ trong tập số thực.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Trong các phương trình sau, phương trình nào là phương trình bậc hai một ẩn: " +
        "$2x^2 - 3x + 1 = 0$; $5x - 4 = 0$; $0x^2 + 2x = 3$; $x^2 + 7 = 0$ ?",
      hints: ["Dạng $ax^2 + bx + c = 0$ với $a \\ne 0$."],
      solution:
        "Đó là $2x^2 - 3x + 1 = 0$ và $x^2 + 7 = 0$. (Loại $5x - 4 = 0$ vì không có $x^2$; loại " +
        "$0x^2 + 2x = 3$ vì $a = 0$.)",
    },
    {
      level: "Nhận biết",
      prompt: "Xác định các hệ số $a, b, c$ của phương trình $3x^2 - 7x + 2 = 0$.",
      hints: ["$a$ là hệ số của $x^2$, $b$ là hệ số của $x$, $c$ là hệ số tự do."],
      solution: "$a = 3,\\ b = -7,\\ c = 2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính biệt thức $\\Delta$ của phương trình $x^2 - 6x + 9 = 0$ và cho biết nó có dấu gì.",
      hints: ["$\\Delta = b^2 - 4ac$ với $a = 1,\\ b = -6,\\ c = 9$."],
      solution: "$\\Delta = (-6)^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0$. Vậy $\\Delta = 0$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình $x^2 - 2x - 3 = 0$.",
      hints: ["Tính $\\Delta = b^2 - 4ac$ rồi áp dụng công thức nghiệm."],
      solution:
        "$a = 1,\\ b = -2,\\ c = -3$; $\\Delta = (-2)^2 - 4 \\cdot 1 \\cdot (-3) = 4 + 12 = 16 > 0$. " +
        "$\\sqrt{\\Delta} = 4$, $x = \\dfrac{2 \\pm 4}{2}$. Vậy $x_1 = 3,\\ x_2 = -1$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình $2x^2 - 7x + 3 = 0$.",
      hints: ["$a = 2,\\ b = -7,\\ c = 3$.", "Nhớ mẫu số trong công thức là $2a = 4$."],
      solution:
        "$\\Delta = (-7)^2 - 4 \\cdot 2 \\cdot 3 = 49 - 24 = 25 > 0$. $\\sqrt{\\Delta} = 5$, " +
        "$x = \\dfrac{7 \\pm 5}{4}$. Vậy $x_1 = 3,\\ x_2 = \\dfrac{1}{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình khuyết $3x^2 - 2x = 0$.",
      hints: ["Đặt nhân tử chung $x$: $x(3x - 2) = 0$."],
      solution: "$x(3x - 2) = 0 \\Rightarrow x = 0$ hoặc $3x - 2 = 0 \\Rightarrow x = \\dfrac{2}{3}$. Vậy $x_1 = 0,\\ x_2 = \\dfrac{2}{3}$.",
    },
    {
      level: "Vận dụng",
      prompt: "Tìm $m$ để phương trình $x^2 - 4x + m = 0$ có nghiệm kép, rồi tìm nghiệm kép đó.",
      hints: ["Phương trình có nghiệm kép khi $\\Delta = 0$.", "Sau khi tìm $m$, dùng $x = \\dfrac{-b}{2a}$."],
      solution:
        "$\\Delta = (-4)^2 - 4 \\cdot 1 \\cdot m = 16 - 4m$. Nghiệm kép $\\Leftrightarrow \\Delta = 0 " +
        "\\Rightarrow 16 - 4m = 0 \\Rightarrow m = 4$. Khi đó $x = \\dfrac{4}{2} = 2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh vườn hình chữ nhật có chiều dài hơn chiều rộng $5$ m và diện tích $6$ m². " +
        "Tính chiều rộng của mảnh vườn.",
      hints: ["Gọi chiều rộng là $x > 0$, lập phương trình $x(x + 5) = 6$.", "Đưa về dạng $x^2 + 5x - 6 = 0$ rồi giải."],
      solution:
        "Gọi chiều rộng là $x$ (m), $x > 0$. Ta có $x(x + 5) = 6 \\Rightarrow x^2 + 5x - 6 = 0$. " +
        "$\\Delta = 5^2 - 4 \\cdot 1 \\cdot (-6) = 25 + 24 = 49$; $\\sqrt{\\Delta} = 7$, " +
        "$x = \\dfrac{-5 \\pm 7}{2}$, được $x = 1$ hoặc $x = -6$. Vì $x > 0$ nên chiều rộng là $1$ m.",
    },
  ],

  quiz: [
    { type: "mc", q: "Biệt thức của phương trình bậc hai $ax^2 + bx + c = 0$ là công thức nào?",
      choices: ["$\\Delta = b^2 + 4ac$", "$\\Delta = b^2 - 4ac$", "$\\Delta = 2b - 4ac$", "$\\Delta = b - 4ac$"], answer: 1,
      explain: "Theo định nghĩa, $\\Delta = b^2 - 4ac$." },
    { type: "fill", q: "Tính biệt thức $\\Delta$ của phương trình $x^2 - 5x + 6 = 0$.", answer: 1,
      explain: "$\\Delta = (-5)^2 - 4 \\cdot 1 \\cdot 6 = 25 - 24 = 1$." },
    { type: "mc", q: "Phương trình $x^2 + x + 1 = 0$ có bao nhiêu nghiệm?",
      choices: ["Hai nghiệm phân biệt", "Nghiệm kép", "Vô nghiệm", "Vô số nghiệm"], answer: 2,
      explain: "$\\Delta = 1 - 4 = -3 < 0$ nên phương trình vô nghiệm." },
  ],
});
