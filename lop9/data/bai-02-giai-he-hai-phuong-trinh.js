/* Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn
   Chương I (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-02-giai-he-hai-phuong-trinh",
  chapter: "Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn",
  order: 2,
  title: "Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn",

  objectives: [
    "Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế.",
    "Giải hệ bằng phương pháp cộng đại số.",
    "Nhận biết hệ có một nghiệm, vô nghiệm hoặc vô số nghiệm.",
  ],

  intro: {
    text:
      "Ở Bài 1 ta biết nghiệm của hệ là toạ độ giao điểm của hai đường thẳng. Nhưng vẽ hình không phải " +
      "lúc nào cũng cho kết quả chính xác. Vì vậy ta dùng phép biến đổi đại số để giải hệ một cách chắc " +
      "chắn: <b>phương pháp thế</b> và <b>phương pháp cộng đại số</b>.",
    math: "\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}",
  },

  theory: [
    {
      heading: "1. Phương pháp thế",
      html:
        "<b>Bước 1.</b> Từ một phương trình, rút một ẩn theo ẩn kia.<br>" +
        "<b>Bước 2.</b> Thế biểu thức vừa tìm vào phương trình còn lại để được phương trình một ẩn.<br>" +
        "<b>Bước 3.</b> Giải phương trình một ẩn đó rồi suy ra ẩn còn lại.",
    },
    {
      heading: "2. Phương pháp cộng đại số",
      html:
        "<b>Bước 1.</b> Nhân hai vế của mỗi phương trình với số thích hợp để hệ số của một ẩn ở hai " +
        "phương trình <b>bằng nhau</b> hoặc <b>đối nhau</b>.<br>" +
        "<b>Bước 2.</b> Cộng (nếu đối nhau) hoặc trừ (nếu bằng nhau) từng vế để <b>khử</b> một ẩn.<br>" +
        "<b>Bước 3.</b> Giải phương trình một ẩn vừa thu được rồi suy ra ẩn còn lại.",
    },
    {
      heading: "3. Số nghiệm của hệ",
      html:
        "Một hệ hai phương trình bậc nhất hai ẩn có thể có: <b>đúng một nghiệm</b> (hai đường thẳng cắt " +
        "nhau), <b>vô nghiệm</b> (hai đường thẳng song song), hoặc <b>vô số nghiệm</b> (hai đường thẳng " +
        "trùng nhau).",
    },
  ],

  examples: [
    {
      title: "Phương pháp thế",
      prompt: "Giải hệ $\\begin{cases} y = 2x - 1 \\\\ 3x + y = 9 \\end{cases}$.",
      steps: [
        "Phương trình (1) đã cho $y = 2x - 1$.",
        "Thế vào (2): $3x + (2x - 1) = 9 \\Rightarrow 5x - 1 = 9 \\Rightarrow 5x = 10 \\Rightarrow x = 2$.",
        "Suy ra $y = 2 \\cdot 2 - 1 = 3$.",
        "Vậy hệ có nghiệm $(x; y) = (2; 3)$.",
      ],
    },
    {
      title: "Phương pháp cộng đại số",
      prompt: "Giải hệ $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$.",
      steps: [
        "Hệ số của $y$ là $1$ và $-1$ (đối nhau) nên cộng từng vế hai phương trình.",
        "$(2x + y) + (x - y) = 5 + 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.",
        "Thế vào $x - y = 1$: $2 - y = 1 \\Rightarrow y = 1$.",
        "Vậy nghiệm là $(2; 1)$.",
      ],
    },
    {
      title: "Cộng đại số có nhân hệ số",
      prompt: "Giải hệ $\\begin{cases} 2x + 3y = 7 \\\\ 3x + 2y = 8 \\end{cases}$.",
      steps: [
        "Nhân (1) với $3$ và (2) với $2$ để hệ số của $x$ đều bằng $6$:",
        "$\\begin{cases} 6x + 9y = 21 \\\\ 6x + 4y = 16 \\end{cases}$",
        "Trừ từng vế: $5y = 5 \\Rightarrow y = 1$.",
        "Thế vào (1): $2x + 3 = 7 \\Rightarrow x = 2$. Vậy nghiệm $(2; 1)$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Khi nhân để cân bằng hệ số, chỉ nhân vế trái mà quên vế phải.",
      right: "Phải nhân <b>cả hai vế</b> của phương trình với cùng một số.",
      note: "Nhân thiếu vế phải sẽ làm sai nghiệm.",
    },
    {
      wrong: "Thế xong, tìm được một ẩn rồi quên tính ẩn còn lại.",
      right: "Sau khi tìm một ẩn, phải thế ngược lại để tìm ẩn kia rồi mới kết luận.",
      note: "Nghiệm của hệ là một <b>cặp</b> $(x; y)$.",
    },
    {
      wrong: "Hệ số một ẩn <b>bằng nhau</b> mà lại cộng hai phương trình.",
      right: "Hệ số <b>đối nhau</b> thì cộng; hệ số <b>bằng nhau</b> thì trừ để khử ẩn.",
      note: "Mục tiêu là làm mất (khử) một ẩn.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Giải hệ $\\begin{cases} x + y = 6 \\\\ x - y = 2 \\end{cases}$ bằng phương pháp cộng đại số.",
      hints: ["Hệ số của $y$ đối nhau → cộng hai phương trình."],
      solution: "Cộng: $2x = 8 \\Rightarrow x = 4$; suy ra $y = 6 - 4 = 2$. Nghiệm $(4; 2)$.",
    },
    {
      level: "Nhận biết",
      prompt: "Giải hệ $\\begin{cases} x = y + 1 \\\\ x + y = 7 \\end{cases}$ bằng phương pháp thế.",
      hints: ["Thế $x = y + 1$ vào phương trình thứ hai."],
      solution: "$(y + 1) + y = 7 \\Rightarrow 2y = 6 \\Rightarrow y = 3$; $x = 4$. Nghiệm $(4; 3)$.",
    },
    {
      level: "Nhận biết",
      prompt: "Hệ $\\begin{cases} x + y = 2 \\\\ x + y = 5 \\end{cases}$ có nghiệm không?",
      hints: ["Hai vế trái giống nhau nhưng vế phải khác nhau."],
      solution: "Một biểu thức không thể vừa bằng $2$ vừa bằng $5$ → hệ <b>vô nghiệm</b>.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải hệ $\\begin{cases} 2x + y = 5 \\\\ 3x - y = 10 \\end{cases}$.",
      hints: ["Hệ số của $y$ đối nhau → cộng hai phương trình."],
      solution: "Cộng: $5x = 15 \\Rightarrow x = 3$; $2 \\cdot 3 + y = 5 \\Rightarrow y = -1$. Nghiệm $(3; -1)$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải hệ $\\begin{cases} 3x + 2y = 12 \\\\ x - 2y = -4 \\end{cases}$.",
      hints: ["Hệ số của $y$ là $2$ và $-2$ (đối nhau) → cộng."],
      solution: "Cộng: $4x = 8 \\Rightarrow x = 2$; $2 - 2y = -4 \\Rightarrow y = 3$. Nghiệm $(2; 3)$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Giải hệ $\\begin{cases} y = 3x - 2 \\\\ 2x + y = 8 \\end{cases}$ bằng phương pháp thế.",
      hints: ["Thế $y = 3x - 2$ vào phương trình thứ hai."],
      solution: "$2x + (3x - 2) = 8 \\Rightarrow 5x = 10 \\Rightarrow x = 2$; $y = 4$. Nghiệm $(2; 4)$.",
    },
    {
      level: "Vận dụng",
      prompt: "Giải hệ $\\begin{cases} 2x + 3y = 7 \\\\ 4x - y = 7 \\end{cases}$.",
      hints: ["Rút $y$ từ phương trình thứ hai: $y = 4x - 7$.", "Thế vào phương trình thứ nhất."],
      solution:
        "Thế: $2x + 3(4x - 7) = 7 \\Rightarrow 14x - 21 = 7 \\Rightarrow x = 2$; $y = 4 \\cdot 2 - 7 = 1$. Nghiệm $(2; 1)$.",
    },
    {
      level: "Vận dụng",
      prompt: "Tìm $a$ để hệ $\\begin{cases} x + y = 4 \\\\ x - y = a \\end{cases}$ có nghiệm với $x = 3$.",
      hints: ["Từ $x = 3$ và phương trình đầu, tìm $y$.", "Thay vào phương trình hai để tìm $a$."],
      solution: "$x = 3 \\Rightarrow y = 1$; khi đó $a = x - y = 3 - 1 = 2$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Nghiệm của hệ $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$ là cặp nào?",
      choices: ["$(2; 3)$", "$(3; 2)$", "$(4; 1)$", "$(1; 4)$"], answer: 1,
      explain: "$3 + 2 = 5$ và $3 - 2 = 1$ đều đúng." },
    { type: "fill", q: "Giải hệ $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$. Giá trị của $x$ là bao nhiêu?",
      answer: 7, explain: "Cộng hai phương trình: $2x = 14 \\Rightarrow x = 7$." },
    { type: "mc", q: "Hệ $\\begin{cases} x + y = 2 \\\\ 2x + 2y = 4 \\end{cases}$ có bao nhiêu nghiệm?",
      choices: ["Một nghiệm", "Vô nghiệm", "Vô số nghiệm", "Hai nghiệm"], answer: 2,
      explain: "Phương trình (2) gấp đôi phương trình (1) → hai đường thẳng trùng nhau → vô số nghiệm." },
  ],
});
