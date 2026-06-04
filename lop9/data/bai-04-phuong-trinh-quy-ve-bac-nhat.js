/* Bài 4. Phương trình quy về phương trình bậc nhất một ẩn
   Chương II (Toán 9, Kết nối tri thức) */
MATH9.registerLesson({
  id: "bai-04-phuong-trinh-quy-ve-bac-nhat",
  chapter: "Chương II. Phương trình và bất phương trình bậc nhất một ẩn",
  order: 1,
  title: "Bài 4. Phương trình quy về phương trình bậc nhất một ẩn",

  objectives: [
    "Giải được phương trình tích dạng $A(x) \\cdot B(x) = 0$.",
    "Tìm điều kiện xác định và giải được phương trình chứa ẩn ở mẫu.",
    "Biết đối chiếu nghiệm với điều kiện xác định để loại nghiệm ngoại lai.",
  ],

  intro: {
    text:
      "Nhiều phương trình thoạt nhìn không phải bậc nhất, nhưng bằng vài phép biến đổi quen thuộc ta có " +
      "thể đưa chúng <b>quy về</b> phương trình bậc nhất một ẩn $ax + b = 0$. Hai dạng thường gặp là " +
      "<b>phương trình tích</b> và <b>phương trình chứa ẩn ở mẫu</b>. Chẳng hạn $(x - 2)(2x + 6) = 0$ " +
      "hay $\\dfrac{x}{x - 2} = 3$ đều giải được nhờ ý tưởng này.",
    math: "A(x) \\cdot B(x) = 0",
  },

  theory: [
    {
      heading: "1. Phương trình tích",
      html:
        "Một tích bằng $0$ khi và chỉ khi có ít nhất một thừa số bằng $0$. Do đó:<br>" +
        "$A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0$ <b>hoặc</b> $B(x) = 0$.<br>" +
        "Để giải, ta cho từng thừa số bằng $0$ rồi giải các phương trình bậc nhất thu được, sau đó " +
        "<b>gộp</b> tất cả nghiệm lại.",
      formula: "A(x) \\cdot B(x) = 0 \\Leftrightarrow A(x) = 0 \\text{ or } B(x) = 0",
    },
    {
      heading: "2. Điều kiện xác định của phương trình chứa ẩn ở mẫu",
      html:
        "Với phương trình có ẩn ở mẫu, trước hết phải tìm <b>điều kiện xác định</b> (ĐKXĐ): các giá trị " +
        "của ẩn làm cho <b>mọi mẫu thức đều khác</b> $0$. Ví dụ phương trình $\\dfrac{x}{x - 2} = 3$ có " +
        "ĐKXĐ là $x - 2 \\ne 0$, tức $x \\ne 2$.",
      formula: "\\dfrac{A(x)}{B(x)} \\text{ xac dinh } \\Leftrightarrow B(x) \\ne 0",
    },
    {
      heading: "3. Các bước giải phương trình chứa ẩn ở mẫu",
      html:
        "<b>Bước 1.</b> Tìm ĐKXĐ (cho từng mẫu khác $0$).<br>" +
        "<b>Bước 2.</b> Quy đồng mẫu hai vế rồi <b>khử mẫu</b>.<br>" +
        "<b>Bước 3.</b> Giải phương trình bậc nhất vừa thu được.<br>" +
        "<b>Bước 4.</b> <b>Đối chiếu</b> với ĐKXĐ: giá trị nào thoả thì nhận làm nghiệm, giá trị nào vi " +
        "phạm ĐKXĐ thì <b>loại</b>.",
    },
  ],

  visual: {
    type: "equation",
    config: { a: 2, b: 3, c: 11 },
  },

  examples: [
    {
      title: "Giải phương trình tích",
      prompt: "Giải phương trình $(x - 2)(2x + 6) = 0$.",
      steps: [
        "Tích bằng $0$ nên một trong hai thừa số bằng $0$: $x - 2 = 0$ hoặc $2x + 6 = 0$.",
        "$x - 2 = 0 \\Rightarrow x = 2$.",
        "$2x + 6 = 0 \\Rightarrow 2x = -6 \\Rightarrow x = -3$.",
        "Vậy phương trình có hai nghiệm: $x = 2$ và $x = -3$.",
      ],
    },
    {
      title: "Phương trình chứa ẩn ở mẫu (nghiệm được nhận)",
      prompt: "Giải phương trình $\\dfrac{x}{x - 2} = 3$.",
      steps: [
        "<b>ĐKXĐ:</b> $x - 2 \\ne 0 \\Rightarrow x \\ne 2$.",
        "Khử mẫu (nhân hai vế với $x - 2$): $x = 3(x - 2)$.",
        "$x = 3x - 6 \\Rightarrow -2x = -6 \\Rightarrow x = 3$.",
        "Đối chiếu: $x = 3 \\ne 2$ nên <b>thoả</b> ĐKXĐ. Vậy nghiệm là $x = 3$.",
      ],
    },
    {
      title: "Phương trình chứa ẩn ở mẫu (loại nghiệm)",
      prompt: "Giải phương trình $\\dfrac{x^2}{x - 1} = \\dfrac{1}{x - 1}$.",
      steps: [
        "<b>ĐKXĐ:</b> $x - 1 \\ne 0 \\Rightarrow x \\ne 1$.",
        "Hai vế cùng mẫu $x - 1$, khử mẫu được $x^2 = 1 \\Rightarrow x = 1$ hoặc $x = -1$.",
        "Đối chiếu: $x = 1$ <b>vi phạm</b> ĐKXĐ nên loại; $x = -1$ thoả nên nhận.",
        "Vậy phương trình có một nghiệm $x = -1$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Giải phương trình chứa ẩn ở mẫu mà không tìm ĐKXĐ.",
      right: "Luôn tìm ĐKXĐ <b>trước</b> (cho mọi mẫu khác $0$) rồi mới khử mẫu.",
      note: "Bỏ qua ĐKXĐ dễ dẫn đến nhận nhầm nghiệm không hợp lệ.",
    },
    {
      wrong: "Tìm được giá trị của ẩn là kết luận ngay đó là nghiệm.",
      right: "Phải <b>đối chiếu</b> với ĐKXĐ; giá trị nào vi phạm thì phải <b>loại</b>.",
      note: "Giá trị vi phạm ĐKXĐ gọi là nghiệm ngoại lai.",
    },
    {
      wrong: "Giải $(x - 2)(2x + 6) = 0$ bằng cách khai triển rồi mới giải.",
      right: "Cho ngay từng thừa số bằng $0$: $x - 2 = 0$ hoặc $2x + 6 = 0$.",
      note: "Tích bằng $0$ khi và chỉ khi một thừa số bằng $0$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Giải phương trình tích $(x - 1)(x + 5) = 0$.",
      hints: ["Cho từng thừa số bằng $0$."],
      solution: "$x - 1 = 0 \\Rightarrow x = 1$; $x + 5 = 0 \\Rightarrow x = -5$. Vậy $x = 1$ hoặc $x = -5$.",
    },
    {
      level: "Nhận biết",
      prompt: "Giải phương trình tích $(2x - 4)(x + 3) = 0$.",
      hints: ["Cho $2x - 4 = 0$ và $x + 3 = 0$."],
      solution: "$2x - 4 = 0 \\Rightarrow x = 2$; $x + 3 = 0 \\Rightarrow x = -3$. Vậy $x = 2$ hoặc $x = -3$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tìm điều kiện xác định của phương trình $\\dfrac{x + 1}{x - 3} = 2$.",
      hints: ["Mẫu thức phải khác $0$."],
      solution: "ĐKXĐ: $x - 3 \\ne 0 \\Rightarrow x \\ne 3$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình $\\dfrac{1}{x - 1} = 2$.",
      hints: ["Tìm ĐKXĐ rồi khử mẫu.", "Đừng quên đối chiếu điều kiện."],
      solution:
        "ĐKXĐ: $x \\ne 1$. Khử mẫu: $1 = 2(x - 1) \\Rightarrow 1 = 2x - 2 \\Rightarrow 2x = 3 \\Rightarrow x = \\dfrac{3}{2}$. " +
        "Vì $\\dfrac{3}{2} \\ne 1$ nên nhận. Nghiệm $x = \\dfrac{3}{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình $\\dfrac{x + 1}{x - 3} = 2$.",
      hints: ["ĐKXĐ: $x \\ne 3$.", "Khử mẫu: $x + 1 = 2(x - 3)$."],
      solution:
        "ĐKXĐ: $x \\ne 3$. Khử mẫu: $x + 1 = 2(x - 3) \\Rightarrow x + 1 = 2x - 6 \\Rightarrow -x = -7 \\Rightarrow x = 7$. " +
        "Vì $7 \\ne 3$ nên nhận. Nghiệm $x = 7$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải phương trình $\\dfrac{x^2}{x - 2} = \\dfrac{4}{x - 2}$.",
      hints: ["ĐKXĐ: $x \\ne 2$.", "Khử mẫu được $x^2 = 4$ rồi đối chiếu điều kiện."],
      solution:
        "ĐKXĐ: $x \\ne 2$. Khử mẫu: $x^2 = 4 \\Rightarrow x = 2$ hoặc $x = -2$. " +
        "Loại $x = 2$ (vi phạm ĐKXĐ), nhận $x = -2$. Nghiệm $x = -2$.",
    },
    {
      level: "Vận dụng",
      prompt: "Giải phương trình $\\dfrac{4}{x + 2} = \\dfrac{3}{x + 1}$.",
      hints: ["ĐKXĐ: $x \\ne -2$ và $x \\ne -1$.", "Quy đồng và khử mẫu: $4(x + 1) = 3(x + 2)$."],
      solution:
        "ĐKXĐ: $x \\ne -2,\\ x \\ne -1$. Khử mẫu: $4(x + 1) = 3(x + 2) \\Rightarrow 4x + 4 = 3x + 6 \\Rightarrow x = 2$. " +
        "Vì $2 \\ne -2$ và $2 \\ne -1$ nên nhận. Nghiệm $x = 2$.",
    },
    {
      level: "Vận dụng",
      prompt: "Giải phương trình $\\dfrac{x}{x - 1} = \\dfrac{1}{x - 1} + 2$.",
      hints: ["ĐKXĐ: $x \\ne 1$.", "Khử mẫu: $x = 1 + 2(x - 1)$ rồi đối chiếu điều kiện."],
      solution:
        "ĐKXĐ: $x \\ne 1$. Khử mẫu: $x = 1 + 2(x - 1) \\Rightarrow x = 1 + 2x - 2 \\Rightarrow x = 2x - 1 \\Rightarrow -x = -1 \\Rightarrow x = 1$. " +
        "Nhưng $x = 1$ vi phạm ĐKXĐ nên bị loại. Vậy phương trình <b>vô nghiệm</b>.",
    },
  ],

  quiz: [
    { type: "mc", q: "Nghiệm của phương trình $(x - 2)(2x + 6) = 0$ là?",
      choices: ["$x = 2$ hoặc $x = -3$", "$x = -2$ hoặc $x = 3$", "$x = 2$ hoặc $x = 3$", "$x = -2$ hoặc $x = -3$"], answer: 0,
      explain: "$x - 2 = 0 \\Rightarrow x = 2$; $2x + 6 = 0 \\Rightarrow x = -3$." },
    { type: "fill", q: "Giải phương trình $\\dfrac{x}{x - 2} = 3$ (với $x \\ne 2$). Nghiệm $x$ bằng bao nhiêu?",
      answer: 3, explain: "$x = 3(x - 2) \\Rightarrow x = 3x - 6 \\Rightarrow x = 3$ (thoả $x \\ne 2$)." },
    { type: "mc", q: "Điều kiện xác định của phương trình $\\dfrac{x + 1}{x - 3} = 5$ là?",
      choices: ["$x \\ne 0$", "$x \\ne 3$", "$x \\ne -1$", "$x \\ne 5$"], answer: 1,
      explain: "Mẫu $x - 3 \\ne 0 \\Rightarrow x \\ne 3$." },
  ],
});
