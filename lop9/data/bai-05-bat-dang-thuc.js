/* Bài 5. Bất đẳng thức và tính chất
   Chương II (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-05-bat-dang-thuc",
  chapter: "Chương II. Phương trình và bất phương trình bậc nhất một ẩn",
  order: 2,
  title: "Bài 5. Bất đẳng thức và tính chất",

  objectives: [
    "Nhận biết bất đẳng thức và các kí hiệu $<,\\ >,\\ \\le,\\ \\ge$.",
    "Phát biểu và vận dụng tính chất cộng, trừ, nhân, chia hai vế của bất đẳng thức.",
    "Sử dụng tính chất bắc cầu để so sánh và chứng minh bất đẳng thức đơn giản.",
  ],

  intro: {
    text:
      "Khi so sánh hai số hay hai biểu thức, không phải lúc nào chúng cũng bằng nhau: có khi số này " +
      "<b>lớn hơn</b> hoặc <b>nhỏ hơn</b> số kia. Chẳng hạn nhiệt độ buổi sáng là $20^\\circ$C còn buổi " +
      "trưa là $32^\\circ$C, ta viết $20 < 32$. Một hệ thức như vậy được gọi là một <b>bất đẳng thức</b>. " +
      "Bài học này tìm hiểu khái niệm bất đẳng thức cùng các <b>tính chất</b> giúp biến đổi chúng.",
    math: "20 < 32",
  },

  theory: [
    {
      heading: "1. Bất đẳng thức",
      html:
        "Ta gọi hệ thức dạng $a < b$ (hay $a > b$, $a \\le b$, $a \\ge b$) là một <b>bất đẳng thức</b>, " +
        "trong đó $a$ là vế trái còn $b$ là vế phải.<br>" +
        "$\\bullet$ $a < b$: $a$ nhỏ hơn $b$. &nbsp; $\\bullet$ $a > b$: $a$ lớn hơn $b$.<br>" +
        "$\\bullet$ $a \\le b$: $a$ nhỏ hơn hoặc bằng $b$. &nbsp; $\\bullet$ $a \\ge b$: $a$ lớn hơn hoặc bằng $b$.<br>" +
        "Lưu ý: $a < b$ cũng có nghĩa là $a - b < 0$, và $a > b$ nghĩa là $a - b > 0$.",
      formula: "a < b,\\quad a > b,\\quad a \\le b,\\quad a \\ge b",
    },
    {
      heading: "2. Tính chất cộng (trừ) cùng một số vào hai vế",
      html:
        "Khi <b>cộng</b> (hoặc <b>trừ</b>) cùng một số vào cả hai vế của một bất đẳng thức thì được bất " +
        "đẳng thức mới <b>cùng chiều</b> với bất đẳng thức đã cho. Nghĩa là chiều của bất đẳng thức " +
        "<b>không đổi</b>.",
      formula: "a < b \\Rightarrow a + c < b + c",
    },
    {
      heading: "3. Tính chất nhân (chia) hai vế với một số",
      html:
        "$\\bullet$ Nhân (hoặc chia) hai vế với cùng một số <b>dương</b> thì được bất đẳng thức mới " +
        "<b>cùng chiều</b>.<br>" +
        "$\\bullet$ Nhân (hoặc chia) hai vế với cùng một số <b>âm</b> thì được bất đẳng thức mới " +
        "<b>ngược chiều</b> (phải <b>đổi chiều</b>).<br>" +
        "Ngoài ra còn có <b>tính chất bắc cầu</b>: nếu $a < b$ và $b < c$ thì $a < c$.",
      formula: "c > 0:\\ a < b \\Rightarrow ac < bc;\\qquad c < 0:\\ a < b \\Rightarrow ac > bc",
    },
  ],

  examples: [
    {
      title: "So sánh bằng cách xét hiệu",
      prompt: "So sánh hai số $a = 3 + 5$ và $b = 2 + 7$.",
      steps: [
        "Tính từng vế: $a = 3 + 5 = 8$ và $b = 2 + 7 = 9$.",
        "Xét hiệu $a - b = 8 - 9 = -1 < 0$.",
        "Vì $a - b < 0$ nên $a < b$, tức là $3 + 5 < 2 + 7$.",
      ],
    },
    {
      title: "Cộng cùng một số vào hai vế",
      prompt: "Cho $a < b$. Hãy so sánh $a + 3$ và $b + 3$.",
      steps: [
        "Ta cộng số $3$ vào cả hai vế của bất đẳng thức $a < b$.",
        "Theo tính chất cộng, chiều của bất đẳng thức không đổi.",
        "Vậy $a + 3 < b + 3$.",
      ],
    },
    {
      title: "Nhân hai vế với số âm (đổi chiều)",
      prompt: "Cho $a < b$. Hãy so sánh $-2a$ và $-2b$.",
      steps: [
        "Ta nhân cả hai vế của $a < b$ với số $-2$.",
        "Vì $-2 < 0$ là số âm nên phải <b>đổi chiều</b> bất đẳng thức.",
        "Vậy $-2a > -2b$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Từ $a < b$ suy ra $-3a < -3b$ (giữ nguyên chiều khi nhân với số âm).",
      right: "Nhân hai vế với số <b>âm</b> phải <b>đổi chiều</b>: $a < b \\Rightarrow -3a > -3b$.",
      note: "Chỉ khi nhân (chia) với số <b>dương</b> mới giữ nguyên chiều.",
    },
    {
      wrong: "Chia hai vế của $-2x < 6$ cho $-2$ mà vẫn viết $x < -3$.",
      right: "Chia cho số âm $-2$ phải đổi chiều: $-2x < 6 \\Rightarrow x > -3$.",
      note: "Mỗi lần nhân hay chia với số âm là một lần đổi chiều.",
    },
    {
      wrong: "Hiểu $a \\le b$ là $a$ luôn nhỏ hơn $b$ (không thể bằng nhau).",
      right: "$a \\le b$ nghĩa là $a$ nhỏ hơn <b>hoặc bằng</b> $b$, nên $a = b$ vẫn thoả mãn.",
      note: "Dấu gạch dưới cho phép trường hợp hai vế bằng nhau.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Điền dấu thích hợp $(<,\\ >)$ vào chỗ trống: $-5 \\ \\ldots \\ -2$.",
      hints: ["Trên trục số, số nằm bên trái thì nhỏ hơn."],
      solution: "Vì $-5$ nằm bên trái $-2$ nên $-5 < -2$.",
    },
    {
      level: "Nhận biết",
      prompt: "Cho $a > b$. Khi cộng số $4$ vào hai vế thì được bất đẳng thức nào?",
      hints: ["Cộng cùng một số vào hai vế giữ nguyên chiều."],
      solution: "$a + 4 > b + 4$ (chiều không đổi).",
    },
    {
      level: "Nhận biết",
      prompt: "Cho $a < b$. So sánh $5a$ và $5b$.",
      hints: ["Nhân hai vế với số dương $5$."],
      solution: "Vì $5 > 0$ nên giữ nguyên chiều: $5a < 5b$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $a < b$. So sánh $-4a$ và $-4b$.",
      hints: ["Nhân hai vế với số âm $-4$.", "Nhân với số âm phải đổi chiều."],
      solution: "Vì $-4 < 0$ nên đổi chiều: $-4a > -4b$.",
    },
    {
      level: "Thông hiểu",
      prompt: "So sánh hai số $a = 2 \\cdot 3 - 1$ và $b = 9 - 5$ bằng cách xét hiệu.",
      hints: ["Tính từng vế rồi xét dấu của $a - b$."],
      solution: "$a = 6 - 1 = 5$, $b = 9 - 5 = 4$; $a - b = 5 - 4 = 1 > 0$ nên $a > b$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Cho $a < b$. Hãy so sánh $2a + 1$ và $2b + 1$.",
      hints: ["Nhân hai vế với $2$ (dương) rồi cộng thêm $1$ vào hai vế."],
      solution:
        "Vì $2 > 0$ nên $2a < 2b$; cộng $1$ vào hai vế (giữ chiều) được $2a + 1 < 2b + 1$.",
    },
    {
      level: "Vận dụng",
      prompt: "Cho $a < b$ và $b < c$. Chứng tỏ $a + 2 < c + 2$.",
      hints: ["Dùng tính chất bắc cầu để có $a < c$.", "Rồi cộng $2$ vào hai vế."],
      solution:
        "Từ $a < b$ và $b < c$, theo tính chất bắc cầu suy ra $a < c$. Cộng $2$ vào hai vế (giữ chiều) được $a + 2 < c + 2$.",
    },
    {
      level: "Vận dụng",
      prompt: "Cho $a > b$. Hãy so sánh $-3a + 5$ và $-3b + 5$.",
      hints: ["Nhân hai vế với $-3$ (âm) thì đổi chiều.", "Sau đó cộng $5$ vào hai vế."],
      solution:
        "Vì $-3 < 0$ nên nhân hai vế của $a > b$ phải đổi chiều: $-3a < -3b$. Cộng $5$ vào hai vế (giữ chiều) được $-3a + 5 < -3b + 5$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Cho $a < b$. Khẳng định nào sau đây đúng?",
      choices: ["$a + 5 > b + 5$", "$a + 5 < b + 5$", "$a + 5 = b + 5$", "$a - 5 > b - 5$"], answer: 1,
      explain: "Cộng cùng một số vào hai vế giữ nguyên chiều, nên $a + 5 < b + 5$." },
    { type: "mc", q: "Cho $a < b$. Khi nhân hai vế với $-2$ ta được bất đẳng thức nào?",
      choices: ["$-2a < -2b$", "$-2a = -2b$", "$-2a > -2b$", "$2a > 2b$"], answer: 2,
      explain: "Nhân với số âm $-2$ phải đổi chiều, nên $-2a > -2b$." },
    { type: "fill", q: "Cho $a < 4$ và $4 < b$. Theo tính chất bắc cầu, $a$ luôn nhỏ hơn số nào?",
      answer: 4, explain: "Từ $a < 4$ và $4 < b$ suy ra $a < b$; đồng thời ta cũng có $a < 4$." },
  ],
});
