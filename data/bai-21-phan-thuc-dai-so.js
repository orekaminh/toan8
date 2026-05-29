/* Bài 21. Phân thức đại số — Chương VI (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-21-phan-thuc-dai-so",
  chapter: "Chương VI. Phân thức đại số",
  order: 1,
  title: "Bài 21. Phân thức đại số",

  objectives: [
    "Nhận biết phân thức đại số $\\dfrac{A}{B}$ (với $A, B$ là đa thức, $B \\ne 0$); chỉ ra tử thức, mẫu thức.",
    "Tìm điều kiện xác định của phân thức (mẫu thức khác $0$) và tính giá trị phân thức.",
    "Nhận biết hai phân thức bằng nhau bằng quy tắc nhân chéo.",
  ],

  intro: {
    text:
      "Giống như phân số $\\dfrac{3}{4}$ nhưng tử và mẫu là <b>đa thức</b>, ta có <b>phân thức đại số</b> " +
      "như $\\dfrac{x+1}{x-2}$. Vì không thể chia cho $0$, phân thức chỉ dùng được khi <b>mẫu khác $0$</b>. " +
      "Trượt thử bên dưới để thấy điều đó.",
    math: "\\dfrac{A}{B} \\quad (B \\ne 0)",
  },

  theory: [
    {
      heading: "1. Phân thức đại số",
      html:
        "<b>Phân thức đại số</b> (gọi tắt là phân thức) là biểu thức có dạng $\\dfrac{A}{B}$, trong đó " +
        "$A, B$ là những đa thức và $B \\ne 0$. $A$ là <b>tử thức</b>, $B$ là <b>mẫu thức</b>.<br>" +
        "Mỗi đa thức cũng là một phân thức với mẫu thức bằng $1$.",
    },
    {
      heading: "2. Điều kiện xác định và giá trị",
      html:
        "Phân thức $\\dfrac{A}{B}$ <b>xác định</b> khi $B \\ne 0$. Với giá trị của biến làm $B \\ne 0$, ta " +
        "tính được <b>giá trị</b> của phân thức bằng cách thay số rồi thực hiện phép chia.",
    },
    {
      heading: "3. Hai phân thức bằng nhau",
      html: "Hai phân thức được coi là bằng nhau khi nhân chéo cho kết quả bằng nhau:",
      formula: "\\dfrac{A}{B} = \\dfrac{C}{D} \\ \\Leftrightarrow\\ A \\cdot D = B \\cdot C",
    },
  ],

  visual: {
    type: "fraction",
    config: {
      mode: "evaluate",
      latex: "\\dfrac{1}{x-2}",
      num: function (x) { return 1; },
      den: function (x) { return x - 2; },
      xMin: -1, xMax: 5, x: 0,
      hint: "Phân thức $\\dfrac{1}{x-2}$ <b>không xác định</b> khi mẫu $x-2 = 0$, tức $x = 2$. Trượt $x$ tới $2$ để thấy điều đó.",
    },
  },

  examples: [
    {
      title: "Điều kiện xác định",
      prompt: "Tìm điều kiện xác định của phân thức $\\dfrac{x+1}{x-3}$.",
      steps: [
        "Phân thức xác định khi mẫu khác $0$: $x - 3 \\ne 0$.",
        "Suy ra $x \\ne 3$.",
      ],
    },
    {
      title: "Tính giá trị phân thức",
      prompt: "Tính giá trị của $\\dfrac{2x}{x+1}$ tại $x = 2$.",
      steps: [
        "Tại $x = 2$, mẫu $= 2 + 1 = 3 \\ne 0$ nên phân thức xác định.",
        "Giá trị $= \\dfrac{2 \\cdot 2}{2 + 1} = \\dfrac{4}{3}$.",
      ],
    },
    {
      title: "Hai phân thức bằng nhau",
      prompt: "Hỏi $\\dfrac{x}{2}$ và $\\dfrac{3x}{6}$ có bằng nhau không?",
      steps: [
        "Nhân chéo: $x \\cdot 6 = 6x$ và $2 \\cdot 3x = 6x$.",
        "Hai tích bằng nhau ($6x = 6x$) nên $\\dfrac{x}{2} = \\dfrac{3x}{6}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Quên tìm điều kiện xác định, dùng phân thức cả khi mẫu bằng $0$.",
      right: "Luôn yêu cầu mẫu $\\ne 0$; tại giá trị làm mẫu $= 0$ phân thức không xác định.",
      note: "Không bao giờ chia cho $0$.",
    },
    {
      wrong: "Kiểm tra hai phân thức bằng nhau bằng cách so sánh tử với tử, mẫu với mẫu.",
      right: "Dùng nhân chéo: $\\dfrac{A}{B} = \\dfrac{C}{D} \\Leftrightarrow AD = BC$.",
      note: "$\\dfrac{x}{2}$ và $\\dfrac{3x}{6}$ trông khác nhau nhưng vẫn bằng nhau.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tìm điều kiện xác định của $\\dfrac{5}{x-1}$.",
      hints: ["Mẫu khác $0$."],
      solution: "$x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$." },
    { level: "Nhận biết", prompt: "Chỉ ra tử thức và mẫu thức của $\\dfrac{2x+3}{x^2+1}$.",
      hints: ["Tử ở trên, mẫu ở dưới."],
      solution: "Tử thức là $2x + 3$; mẫu thức là $x^2 + 1$." },
    { level: "Nhận biết", prompt: "Tính giá trị của $\\dfrac{x-1}{x+2}$ tại $x = 3$.",
      hints: ["Thay $x = 3$, kiểm tra mẫu khác $0$."],
      solution: "$\\dfrac{3-1}{3+2} = \\dfrac{2}{5}$." },
    { level: "Thông hiểu", prompt: "Tìm điều kiện xác định của $\\dfrac{x}{x^2-4}$.",
      hints: ["Mẫu $x^2 - 4 = (x-2)(x+2) \\ne 0$."],
      solution: "$x^2 - 4 \\ne 0 \\Leftrightarrow x \\ne 2$ và $x \\ne -2$." },
    { level: "Thông hiểu", prompt: "Hai phân thức $\\dfrac{x-1}{2}$ và $\\dfrac{2x-2}{4}$ có bằng nhau không?",
      hints: ["Nhân chéo và so sánh."],
      solution: "$(x-1)\\cdot 4 = 4x - 4$ và $2 \\cdot (2x-2) = 4x - 4$. Bằng nhau nên hai phân thức bằng nhau." },
    { level: "Thông hiểu", prompt: "Tìm đa thức $A$ biết $\\dfrac{A}{x+1} = \\dfrac{x^2-1}{(x+1)^2}$.",
      hints: ["Nhân chéo: $A \\cdot (x+1)^2 = (x+1)(x^2-1)$.", "Hoặc nhận xét $\\dfrac{x^2-1}{(x+1)^2} = \\dfrac{(x-1)(x+1)}{(x+1)^2} = \\dfrac{x-1}{x+1}$."],
      solution: "Rút gọn vế phải: $\\dfrac{x^2-1}{(x+1)^2} = \\dfrac{x-1}{x+1}$, nên $A = x - 1$." },
    { level: "Vận dụng", prompt: "Tìm các giá trị của $x$ để phân thức $\\dfrac{x+2}{x^2-9}$ không xác định.",
      hints: ["Phân thức không xác định khi mẫu $= 0$.", "$x^2 - 9 = (x-3)(x+3)$."],
      solution: "Mẫu $= 0 \\Leftrightarrow x = 3$ hoặc $x = -3$. Đó là các giá trị làm phân thức không xác định." },
    { level: "Vận dụng", prompt: "Với điều kiện xác định, tính giá trị của $\\dfrac{x^2-1}{x-1}$ tại $x = 5$.",
      hints: ["Kiểm tra mẫu khác $0$ ($x = 5$ thì $x - 1 = 4 \\ne 0$).", "Có thể rút gọn $\\dfrac{x^2-1}{x-1} = x+1$ trước."],
      solution: "Tại $x = 5$: $\\dfrac{25-1}{5-1} = \\dfrac{24}{4} = 6$ (cũng bằng $x + 1 = 6$)." },
  ],

  quiz: [
    { type: "mc", q: "Điều kiện xác định của phân thức $\\dfrac{1}{x-2}$ là:", choices: ["$x \\ne 2$", "$x \\ne 0$", "$x \\ne -2$", "$x \\ne 1$"], answer: 0, explain: "Mẫu khác $0$: $x - 2 \\ne 0$." },
    { type: "mc", q: "Hai phân thức $\\dfrac{A}{B} = \\dfrac{C}{D}$ khi nào?", choices: ["$A \\cdot D = B \\cdot C$", "$A \\cdot C = B \\cdot D$", "$A + D = B + C$", "$A = C$ và $B = D$"], answer: 0, explain: "Quy tắc nhân chéo." },
    { type: "fill", q: "Tính giá trị của $\\dfrac{x-1}{x+2}$ tại $x = 3$ (nhập số thập phân).", answer: 0.4, explain: "$\\dfrac{2}{5} = 0{,}4$." },
  ],
});
