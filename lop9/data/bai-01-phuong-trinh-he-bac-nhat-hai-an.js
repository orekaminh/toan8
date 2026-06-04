/* Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn
   Chương I (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-01-phuong-trinh-he-bac-nhat-hai-an",
  chapter: "Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn",
  order: 1,
  title: "Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",

  objectives: [
    "Nhận biết phương trình bậc nhất hai ẩn và nghiệm của nó.",
    "Nhận biết hệ hai phương trình bậc nhất hai ẩn và nghiệm của hệ.",
    "Kiểm tra được một cặp số có là nghiệm của một phương trình (hay một hệ) hay không.",
  ],

  intro: {
    text:
      "Bạn An mua $x$ quyển vở và $y$ chiếc bút. Mỗi quyển vở giá $3$ nghìn đồng, mỗi chiếc bút giá " +
      "$2$ nghìn đồng và An trả tất cả $12$ nghìn đồng. Khi đó số vở, số bút thoả mãn $3x + 2y = 12$ — " +
      "một <b>phương trình bậc nhất hai ẩn</b>. Có nhiều cách mua khác nhau, nghĩa là phương trình này có " +
      "<b>nhiều nghiệm</b>.",
    math: "3x + 2y = 12",
  },

  theory: [
    {
      heading: "1. Phương trình bậc nhất hai ẩn",
      html:
        "<b>Phương trình bậc nhất hai ẩn</b> $x, y$ là phương trình có dạng $ax + by = c$, trong đó " +
        "$a, b, c$ là các số đã biết và $a, b$ <b>không đồng thời bằng</b> $0$.<br>" +
        "Mỗi cặp số $(x_0; y_0)$ làm cho $ax_0 + by_0 = c$ trở thành đẳng thức đúng được gọi là một " +
        "<b>nghiệm</b>. Một phương trình bậc nhất hai ẩn luôn có <b>vô số nghiệm</b>; trên mặt phẳng " +
        "toạ độ, tập nghiệm của nó là một <b>đường thẳng</b>.",
      formula: "ax + by = c",
    },
    {
      heading: "2. Hệ hai phương trình bậc nhất hai ẩn",
      html:
        "Khi xét đồng thời hai phương trình bậc nhất hai ẩn, ta được một <b>hệ hai phương trình bậc " +
        "nhất hai ẩn</b>. Dấu ngoặc nhọn $\\{$ cho biết hai phương trình phải đúng cùng lúc.",
      formula: "\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}",
    },
    {
      heading: "3. Nghiệm của hệ phương trình",
      html:
        "<b>Nghiệm của hệ</b> là cặp số $(x_0; y_0)$ đồng thời là nghiệm của <b>cả hai</b> phương trình " +
        "trong hệ.<br>Về hình học, nghiệm của hệ chính là <b>toạ độ giao điểm</b> của hai đường thẳng " +
        "biểu diễn hai phương trình.",
    },
  ],

  visual: {
    type: "graph",
    config: {
      a: -1, b: 3, aMin: -3, aMax: 3, bMin: -4, bMax: 4,
      hint:
        "Đường thẳng dưới đây biểu diễn một phương trình bậc nhất hai ẩn, ví dụ $x + y = 3$ " +
        "(tức $y = -x + 3$). Mỗi <b>điểm</b> trên đường thẳng là một <b>nghiệm</b>. Trượt thanh để thấy " +
        "mỗi cặp hệ số cho một đường thẳng khác — đó là lí do phương trình có vô số nghiệm.",
    },
  },

  examples: [
    {
      title: "Kiểm tra một cặp số có là nghiệm",
      prompt: "Cặp số $(1; 2)$ có là nghiệm của phương trình $2x + 3y = 8$ không?",
      steps: [
        "Thay $x = 1,\\ y = 2$ vào vế trái: $2 \\cdot 1 + 3 \\cdot 2 = 2 + 6 = 8$.",
        "Vế trái bằng vế phải $(= 8)$.",
        "Vậy $(1; 2)$ <b>là</b> một nghiệm của phương trình.",
      ],
    },
    {
      title: "Tìm một vài nghiệm",
      prompt: "Tìm ba nghiệm của phương trình $x + y = 5$.",
      steps: [
        "Chọn $x = 0 \\Rightarrow y = 5$, được nghiệm $(0; 5)$.",
        "Chọn $x = 2 \\Rightarrow y = 3$, được nghiệm $(2; 3)$.",
        "Chọn $x = 5 \\Rightarrow y = 0$, được nghiệm $(5; 0)$.",
        "Phương trình còn vô số nghiệm khác.",
      ],
    },
    {
      title: "Kiểm tra nghiệm của hệ",
      prompt: "Cặp $(2; 1)$ có là nghiệm của hệ $\\begin{cases} x + y = 3 \\\\ x - y = 1 \\end{cases}$ không?",
      steps: [
        "Thay vào phương trình thứ nhất: $2 + 1 = 3$ ✓.",
        "Thay vào phương trình thứ hai: $2 - 1 = 1$ ✓.",
        "Cặp $(2; 1)$ thoả mãn <b>cả hai</b> phương trình.",
        "Vậy $(2; 1)$ là nghiệm của hệ.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng phương trình $2x + y = 5$ chỉ có một nghiệm.",
      right: "Phương trình bậc nhất hai ẩn có <b>vô số nghiệm</b> (tập nghiệm là một đường thẳng).",
      note: "Ứng với mỗi giá trị của $x$ ta tính được một giá trị $y$ tương ứng.",
    },
    {
      wrong: "Coi $0x + 0y = 4$ là phương trình bậc nhất hai ẩn.",
      right: "Cần $a, b$ <b>không đồng thời bằng</b> $0$; ở đây $a = b = 0$ nên không phải.",
      note: "Luôn kiểm tra điều kiện hệ số trước khi kết luận.",
    },
    {
      wrong: "Thấy $(2; 1)$ thoả phương trình thứ nhất là kết luận ngay nó là nghiệm của hệ.",
      right: "Nghiệm của hệ phải thoả <b>đồng thời cả hai</b> phương trình.",
      note: "Hãy thay vào từng phương trình rồi mới kết luận.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn: " +
        "$2x + y = 5$; $x^2 + y = 1$; $3x - 4y = 0$; $0x + 0y = 2$ ?",
      hints: ["Dạng $ax + by = c$ với $a, b$ không đồng thời $0$, và $x, y$ chỉ có số mũ $1$."],
      solution:
        "Đó là $2x + y = 5$ và $3x - 4y = 0$. (Loại $x^2 + y = 1$ vì có $x^2$; loại $0x + 0y = 2$ vì $a = b = 0$.)",
    },
    {
      level: "Nhận biết",
      prompt: "Cặp số $(0; 5)$ có là nghiệm của phương trình $x + y = 5$ không?",
      hints: ["Thay $x = 0,\\ y = 5$ vào vế trái rồi so với vế phải."],
      solution: "$0 + 5 = 5$ đúng, nên $(0; 5)$ là một nghiệm.",
    },
    {
      level: "Nhận biết",
      prompt: "Hãy chỉ ra một nghiệm của phương trình $2x + y = 6$.",
      hints: ["Chọn một giá trị tuỳ ý cho $x$ rồi tính $y$."],
      solution: "Chẳng hạn $x = 1 \\Rightarrow y = 4$, được nghiệm $(1; 4)$ (còn nhiều nghiệm khác).",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho phương trình $3x - y = 5$. Tìm $y$ khi $x = 2$.",
      hints: ["Thay $x = 2$ vào rồi giải tìm $y$."],
      solution: "$3 \\cdot 2 - y = 5 \\Rightarrow 6 - y = 5 \\Rightarrow y = 1$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cặp $(1; -1)$ có là nghiệm của hệ $\\begin{cases} 2x + y = 1 \\\\ x - y = 2 \\end{cases}$ không?",
      hints: ["Thay vào lần lượt hai phương trình.", "Phải đúng cả hai mới là nghiệm của hệ."],
      solution:
        "PT(1): $2 \\cdot 1 + (-1) = 1$ ✓. PT(2): $1 - (-1) = 2$ ✓. Vậy $(1; -1)$ là nghiệm của hệ.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tìm $m$ để cặp $(1; 2)$ là nghiệm của phương trình $mx + y = 5$.",
      hints: ["Thay $x = 1,\\ y = 2$ vào rồi giải theo $m$."],
      solution: "$m \\cdot 1 + 2 = 5 \\Rightarrow m = 3$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Tổng hai số là $10$. Gọi hai số là $x$ và $y$. Viết phương trình biểu thị điều đó và chỉ ra " +
        "hai nghiệm là số tự nhiên.",
      hints: ["Tổng hai số $= 10$ nghĩa là $x + y = 10$.", "Chọn $x$ là số tự nhiên rồi tính $y$."],
      solution: "Phương trình: $x + y = 10$. Hai nghiệm tự nhiên, chẳng hạn $(3; 7)$ và $(6; 4)$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho hệ $\\begin{cases} x + y = 5 \\\\ 2x + y = 8 \\end{cases}$. Cặp $(3; 2)$ có là nghiệm của hệ không?",
      hints: ["Thay $(3; 2)$ vào cả hai phương trình."],
      solution: "PT(1): $3 + 2 = 5$ ✓. PT(2): $2 \\cdot 3 + 2 = 8$ ✓. Vậy $(3; 2)$ là nghiệm của hệ.",
    },
  ],

  quiz: [
    { type: "mc", q: "Phương trình nào sau đây là phương trình bậc nhất hai ẩn?",
      choices: ["$x^2 + y = 1$", "$2x + 3y = 6$", "$\\dfrac{1}{x} + y = 2$", "$xy = 4$"], answer: 1,
      explain: "Dạng $ax + by = c$ với $x, y$ đều bậc nhất." },
    { type: "fill", q: "Cho $x + y = 7$. Khi $x = 3$ thì $y$ bằng bao nhiêu?", answer: 4,
      explain: "$y = 7 - 3 = 4$." },
    { type: "mc", q: "Cặp số nào là nghiệm của hệ $\\begin{cases} x + y = 4 \\\\ x - y = 2 \\end{cases}$?",
      choices: ["$(1; 3)$", "$(3; 1)$", "$(2; 2)$", "$(4; 0)$"], answer: 1,
      explain: "$3 + 1 = 4$ và $3 - 1 = 2$ đều đúng." },
  ],
});
