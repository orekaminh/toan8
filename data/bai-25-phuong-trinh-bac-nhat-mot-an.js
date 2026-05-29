/* Bài 25. Phương trình bậc nhất một ẩn — Chương VII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-25-phuong-trinh-bac-nhat-mot-an",
  chapter: "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
  order: 1,
  title: "Bài 25. Phương trình bậc nhất một ẩn",

  objectives: [
    "Nhận biết phương trình bậc nhất một ẩn dạng $ax + b = 0$ ($a \\ne 0$).",
    "Dùng quy tắc chuyển vế và quy tắc nhân/chia để giải phương trình.",
    "Giải các phương trình đưa được về dạng $ax + b = 0$.",
  ],

  intro: {
    text:
      "Khi tìm một số chưa biết thoả mãn điều kiện cho trước, ta lập một <b>phương trình</b> rồi 'giải' " +
      "nó. Giải phương trình giống như giữ cho chiếc <b>cân thăng bằng</b>: làm gì ở vế này thì làm y hệt " +
      "ở vế kia. Hãy thử cân bên dưới.",
    math: "ax + b = 0 \\quad (a \\ne 0)",
  },

  theory: [
    {
      heading: "1. Phương trình bậc nhất một ẩn",
      html:
        "Phương trình dạng $ax + b = 0$ với $a, b$ là số đã cho và $a \\ne 0$ gọi là <b>phương trình bậc " +
        "nhất một ẩn</b> $x$. <b>Nghiệm</b> là giá trị của $x$ làm hai vế bằng nhau.",
      formula: "ax + b = 0 \\quad (a \\ne 0)",
    },
    {
      heading: "2. Hai quy tắc biến đổi",
      html:
        "• <b>Quy tắc chuyển vế:</b> chuyển một hạng tử từ vế này sang vế kia và <b>đổi dấu</b> hạng tử đó.<br>" +
        "• <b>Quy tắc nhân (chia):</b> nhân (hoặc chia) cả hai vế với cùng một số khác $0$.",
    },
    {
      heading: "3. Cách giải",
      html: "Chuyển $b$ sang vế phải (đổi dấu) rồi chia hai vế cho $a$:",
      formula: "ax + b = 0 \\ \\Leftrightarrow\\ ax = -b \\ \\Leftrightarrow\\ x = -\\dfrac{b}{a}",
    },
    {
      heading: "4. Phương trình đưa được về dạng $ax+b=0$",
      html: "Khi gặp phương trình có ngoặc hoặc ẩn ở cả hai vế: bỏ ngoặc, chuyển các hạng tử chứa ẩn về một vế, hằng số về vế kia, rồi thu gọn.",
    },
  ],

  visual: { type: "equation", config: { a: 2, b: 3, c: 11 } },

  examples: [
    {
      title: "Phương trình đơn giản",
      prompt: "Giải phương trình $2x - 6 = 0$.",
      steps: [
        "Chuyển $-6$ sang vế phải (đổi dấu): $2x = 6$.",
        "Chia hai vế cho $2$: $x = 3$.",
        "Vậy phương trình có nghiệm $x = 3$.",
      ],
    },
    {
      title: "Ẩn ở cả hai vế",
      prompt: "Giải phương trình $5x + 3 = 2x + 12$.",
      steps: [
        "Chuyển $2x$ sang trái và $3$ sang phải (đổi dấu): $5x - 2x = 12 - 3$.",
        "Thu gọn: $3x = 9$.",
        "Chia hai vế cho $3$: $x = 3$.",
      ],
    },
    {
      title: "Có dấu ngoặc",
      prompt: "Giải phương trình $2(x - 1) = x + 4$.",
      steps: [
        "Bỏ ngoặc: $2x - 2 = x + 4$.",
        "Chuyển vế: $2x - x = 4 + 2$, tức $x = 6$.",
        "Vậy $x = 6$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Chuyển vế nhưng quên đổi dấu: từ $2x - 6 = 0$ viết $2x = -6$.",
      right: "Chuyển $-6$ sang phải thành $+6$: $2x = 6$, nên $x = 3$.",
      note: "Chuyển vế thì PHẢI đổi dấu hạng tử.",
    },
    {
      wrong: "Giải $3x = 9$ ra $x = 3x... $ hoặc $x = 27$ (nhân thay vì chia).",
      right: "Chia hai vế cho $3$: $x = 9 : 3 = 3$.",
      note: "Để tìm $x$ từ $ax = m$, ta CHIA cho $a$.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Phương trình nào là bậc nhất một ẩn: $3x - 5 = 0$; $x^2 + 1 = 0$; $0x + 2 = 0$?",
      hints: ["Dạng $ax+b=0$ với $a \\ne 0$ và bậc của ẩn là $1$."],
      solution: "Chỉ $3x - 5 = 0$ là phương trình bậc nhất một ẩn. $x^2+1=0$ có bậc $2$; $0x+2=0$ có $a=0$." },
    { level: "Nhận biết", prompt: "Giải $x - 7 = 0$.",
      hints: ["Chuyển $-7$ sang vế phải."],
      solution: "$x = 7$." },
    { level: "Nhận biết", prompt: "Giải $3x = 12$.",
      hints: ["Chia hai vế cho $3$."],
      solution: "$x = 4$." },
    { level: "Thông hiểu", prompt: "Giải $4x + 5 = 17$.",
      hints: ["Chuyển $5$ sang phải rồi chia cho $4$."],
      solution: "$4x = 12 \\Rightarrow x = 3$." },
    { level: "Thông hiểu", prompt: "Giải $7x - 2 = 4x + 10$.",
      hints: ["Đưa ẩn về một vế, số về vế kia.", "$7x - 4x = 10 + 2$."],
      solution: "$3x = 12 \\Rightarrow x = 4$." },
    { level: "Thông hiểu", prompt: "Giải $3(x + 2) = 2x + 9$.",
      hints: ["Bỏ ngoặc: $3x + 6 = 2x + 9$.", "Chuyển vế và thu gọn."],
      solution: "$3x - 2x = 9 - 6 \\Rightarrow x = 3$." },
    { level: "Vận dụng", prompt: "Giải $\\dfrac{x}{2} + 3 = 7$.",
      hints: ["Chuyển $3$ sang phải: $\\dfrac{x}{2} = 4$.", "Nhân hai vế với $2$."],
      solution: "$\\dfrac{x}{2} = 4 \\Rightarrow x = 8$." },
    { level: "Vận dụng", prompt: "Tìm $x$ biết $5(x - 1) - 2(x + 2) = 6$.",
      hints: ["Bỏ ngoặc cẩn thận dấu: $5x - 5 - 2x - 4 = 6$.", "Thu gọn rồi giải."],
      solution: "$3x - 9 = 6 \\Rightarrow 3x = 15 \\Rightarrow x = 5$." },
  ],

  quiz: [
    { type: "mc", q: "Phương trình nào là phương trình bậc nhất một ẩn?", choices: ["$3x - 5 = 0$", "$x^2 + 1 = 0$", "$0x + 2 = 0$", "$\\dfrac{1}{x} = 2$"], answer: 0, explain: "Dạng $ax + b = 0$ với $a \\ne 0$, bậc của ẩn là $1$." },
    { type: "fill", q: "Giải phương trình $2x - 6 = 0$. $x = $?", answer: 3, explain: "$2x = 6 \\Rightarrow x = 3$." },
    { type: "fill", q: "Giải phương trình $5x + 3 = 2x + 12$. $x = $?", answer: 3, explain: "$3x = 9 \\Rightarrow x = 3$." },
  ],
});
