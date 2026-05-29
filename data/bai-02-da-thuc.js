/* Bài 2. Đa thức — Chương I. Đa thức (Kết nối tri thức, Tập 1) */
MATH8.registerLesson({
  id: "bai-02-da-thuc",
  chapter: "Chương I. Đa thức",
  order: 2,
  title: "Bài 2. Đa thức",

  objectives: [
    "Nhận biết được đa thức và đa thức thu gọn.",
    "Thu gọn được một đa thức bằng cách cộng các hạng tử đồng dạng.",
    "Xác định được bậc của đa thức và tính được giá trị của đa thức tại giá trị cho trước của biến.",
  ],

  intro: {
    text:
      "Ghép một hình vuông cạnh $x$ (diện tích $x^2$) với một hình chữ nhật kích thước $x \\times 3$ " +
      "(diện tích $3x$) và một hình vuông nhỏ cạnh $1$ (diện tích $1$). Tổng diện tích của miếng ghép là " +
      "$x^2 + 3x + 1$. Một tổng nhiều đơn thức như vậy được gọi là <b>đa thức</b>.",
    math: "x^2 + 3x + 1",
  },

  theory: [
    {
      heading: "1. Đa thức là gì?",
      html:
        "<b>Đa thức</b> là một tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một <b>hạng tử</b> " +
        "của đa thức.<br>Ví dụ $x^2 + 3x + 1$ là đa thức có ba hạng tử. Mỗi đơn thức cũng được coi là một " +
        "đa thức (chỉ có một hạng tử).",
    },
    {
      heading: "2. Thu gọn đa thức",
      html:
        "<b>Thu gọn</b> một đa thức là cộng (trừ) các hạng tử đồng dạng với nhau để đa thức không còn hai " +
        "hạng tử nào đồng dạng.",
      formula: "3x^2 + 5x - x^2 + 2 = (3 - 1)x^2 + 5x + 2 = 2x^2 + 5x + 2",
    },
    {
      heading: "3. Bậc của đa thức",
      html:
        "Bậc của một đa thức (khác đa thức $0$) là <b>bậc cao nhất</b> trong các hạng tử của nó " +
        "<b>sau khi đã thu gọn</b>.<br>Ví dụ: đa thức $2x^2 + 5x + 2$ có bậc $2$.",
    },
    {
      heading: "4. Giá trị của đa thức",
      html:
        "Muốn tính <b>giá trị</b> của một đa thức tại một giá trị của biến, ta thay giá trị đó vào đa thức " +
        "rồi thực hiện phép tính (nhớ thứ tự: luỹ thừa → nhân, chia → cộng, trừ).",
    },
  ],

  visual: {
    type: "algebra-tiles",
    config: {
      tiles: [
        { type: "x2", sign: 1, count: 1 },
        { type: "x", sign: 1, count: 2 },
        { type: "x2", sign: 1, count: 1 },
        { type: "1", sign: 1, count: 3 },
      ],
      combine: false,
      buttonText: "Thu gọn",
      caption:
        "Đa thức $x^2 + 2x + x^2 + 3$ gồm nhiều viên gạch nằm lộn xộn. Các gạch cùng loại là đồng dạng — " +
        "gộp chúng lại để <b>thu gọn</b> đa thức.",
    },
  },

  examples: [
    {
      title: "Thu gọn đa thức",
      prompt: "Thu gọn đa thức $P = 4x^2 + 3x - x^2 + 5 - x$.",
      steps: [
        "Nhóm các hạng tử đồng dạng: $(4x^2 - x^2) + (3x - x) + 5$.",
        "Cộng, trừ trong từng nhóm: $3x^2 + 2x + 5$.",
        "Vậy $P = 3x^2 + 2x + 5$ (đã thu gọn).",
      ],
    },
    {
      title: "Tìm bậc của đa thức",
      prompt: "Tìm bậc của đa thức $Q = 7x^3 - 2x^5 + x^2 - 9$.",
      steps: [
        "Đa thức đã thu gọn (không có hai hạng tử đồng dạng).",
        "Bậc các hạng tử lần lượt là $3,\\ 5,\\ 2,\\ 0$.",
        "Bậc cao nhất là $5$, nên $Q$ có bậc $5$.",
      ],
    },
    {
      title: "Tính giá trị của đa thức",
      prompt: "Tính giá trị của đa thức $P = 3x^2 + 2x + 5$ tại $x = 2$.",
      steps: [
        "Thay $x = 2$ vào: $P = 3 \\cdot 2^2 + 2 \\cdot 2 + 5$.",
        "Tính luỹ thừa trước: $2^2 = 4$, nên $P = 3 \\cdot 4 + 4 + 5$.",
        "$P = 12 + 4 + 5 = 21$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Tìm bậc khi đa thức chưa thu gọn, ví dụ nói $x^2 + 3x - x^2$ có bậc $2$.",
      right: "Thu gọn trước: $x^2 + 3x - x^2 = 3x$, nên bậc thực sự là $1$.",
      note: "Luôn thu gọn đa thức TRƯỚC khi tìm bậc.",
    },
    {
      wrong: "Cho rằng bậc đa thức bằng số hạng tử của nó.",
      right: "Bậc là số mũ cao nhất, không liên quan đến việc đa thức có mấy hạng tử.",
      note: "$x^5 + 1$ chỉ có 2 hạng tử nhưng bậc là $5$.",
    },
    {
      wrong: "Khi thay $x = 2$ vào $3x^2$ lại tính $(3 \\cdot 2)^2 = 36$.",
      right: "$3x^2$ nghĩa là $3 \\cdot x^2$, nên $3 \\cdot 2^2 = 3 \\cdot 4 = 12$.",
      note: "Tính luỹ thừa trước, rồi mới nhân với hệ số.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Đa thức $5x^2 - 4x + 7$ có mấy hạng tử? Kể tên các hạng tử đó.",
      hints: ["Mỗi đơn thức được cộng/trừ trong đa thức là một hạng tử."],
      solution: "Đa thức có $3$ hạng tử: $5x^2$, $-4x$ và $7$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tìm bậc của đa thức (đã thu gọn) $A = -3x^4 + 2x^2 - x + 6$.",
      hints: ["Bậc = số mũ cao nhất trong các hạng tử."],
      solution: "Hạng tử bậc cao nhất là $-3x^4$, nên $A$ có bậc $4$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tính giá trị của đa thức $B = 2x + 1$ tại $x = 5$.",
      hints: ["Thay $x = 5$ rồi tính."],
      solution: "$B = 2 \\cdot 5 + 1 = 10 + 1 = 11$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Thu gọn đa thức $M = 6x^2 - 2x + 3x^2 + 5x - 4$.",
      hints: [
        "Nhóm các hạng tử đồng dạng: nhóm chứa $x^2$, nhóm chứa $x$, và hằng số.",
        "$(6x^2 + 3x^2)$ và $(-2x + 5x)$.",
      ],
      solution: "$M = (6 + 3)x^2 + (-2 + 5)x - 4 = 9x^2 + 3x - 4$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Thu gọn rồi tìm bậc của đa thức $N = 4x^3 - x^3 + 2x - 2x + 7$.",
      hints: ["Thu gọn các hạng tử đồng dạng trước.", "Chú ý $2x - 2x = 0$."],
      solution: "$N = (4 - 1)x^3 + (2 - 2)x + 7 = 3x^3 + 7$. Bậc của $N$ là $3$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính giá trị của đa thức $P = x^2 - 3x + 2$ tại $x = -1$.",
      hints: ["Thay $x = -1$; nhớ $(-1)^2 = 1$ và $-3 \\cdot (-1) = 3$."],
      solution: "$P = (-1)^2 - 3 \\cdot (-1) + 2 = 1 + 3 + 2 = 6$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một khu vườn hình chữ nhật có chiều dài $(x + 5)$ m và chiều rộng $x$ m. " +
        "Diện tích khu vườn được cho bởi đa thức $S = x^2 + 5x$. Hãy tính diện tích khi $x = 10$ m.",
      hints: ["Thay $x = 10$ vào đa thức $S = x^2 + 5x$.", "Tính $10^2$ trước."],
      solution: "$S = 10^2 + 5 \\cdot 10 = 100 + 50 = 150$ ($\\text{m}^2$).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho đa thức $T = 2x^2 + 4x^2 - 5 + 3 - x$. Hãy thu gọn $T$, tìm bậc, rồi tính giá trị của $T$ tại $x = 3$.",
      hints: [
        "Thu gọn: nhóm các hạng tử chứa $x^2$ và các hằng số.",
        "Sau khi có $T$ rút gọn, thay $x = 3$ để tính giá trị.",
      ],
      solution:
        "Thu gọn: $T = (2 + 4)x^2 - x + (-5 + 3) = 6x^2 - x - 2$, bậc $2$. " +
        "Tại $x = 3$: $T = 6 \\cdot 3^2 - 3 - 2 = 54 - 3 - 2 = 49$.",
    },
  ],

  quiz: [
    { type: "fill", q: "Tính giá trị của đa thức $P = 2x + 1$ tại $x = 3$.", answer: 7, explain: "$2 \\cdot 3 + 1 = 7$." },
    { type: "mc", q: "Bậc của đa thức $3x^2 + 5x^4 - 1$ là?", choices: ["$2$", "$3$", "$4$", "$1$"], answer: 2, explain: "Số mũ cao nhất là $4$." },
    { type: "fill", q: "Thu gọn $5x + 3x$ được $\\square x$. Điền số vào ô trống.", answer: 8, explain: "$5 + 3 = 8$, giữ nguyên $x$." },
  ],
});
