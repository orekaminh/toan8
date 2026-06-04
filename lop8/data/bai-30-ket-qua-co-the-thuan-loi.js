/* Bài 30. Kết quả có thể và kết quả thuận lợi — Chương VIII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-30-ket-qua-co-the-thuan-loi",
  chapter: "Chương VIII. Mở đầu về tính xác suất của biến cố",
  order: 1,
  title: "Bài 30. Kết quả có thể và kết quả thuận lợi",

  objectives: [
    "Liệt kê được các kết quả có thể của một phép thử ngẫu nhiên.",
    "Hiểu khái niệm biến cố.",
    "Xác định được các kết quả thuận lợi cho một biến cố.",
  ],

  intro: {
    text:
      "Khi tung một con xúc xắc, ta không biết trước mặt nào sẽ xuất hiện — đó là phép thử <b>ngẫu " +
      "nhiên</b>. Có $6$ <b>kết quả có thể</b>. Với biến cố 'ra số chẵn', những mặt $2, 4, 6$ là " +
      "<b>kết quả thuận lợi</b>. Tung thử ở widget bên dưới!",
  },

  theory: [
    {
      heading: "1. Phép thử và kết quả có thể",
      html:
        "<b>Phép thử ngẫu nhiên</b> là hành động mà ta không đoán trước được kết quả. Tập hợp tất cả các " +
        "kết quả có thể xảy ra gọi là <b>các kết quả có thể</b>.<br>" +
        "Ví dụ tung một xúc xắc: các kết quả có thể là $1, 2, 3, 4, 5, 6$.",
    },
    {
      heading: "2. Biến cố và kết quả thuận lợi",
      html:
        "<b>Biến cố</b> là một sự kiện ta quan tâm (ví dụ 'ra số chẵn'). Những kết quả làm cho biến cố " +
        "<b>xảy ra</b> gọi là <b>kết quả thuận lợi</b> cho biến cố đó.<br>" +
        "Biến cố 'ra số chẵn' có các kết quả thuận lợi là $2, 4, 6$ (gồm $3$ kết quả).",
    },
  ],

  visual: {
    type: "probability",
    config: {
      outcomes: ["1", "2", "3", "4", "5", "6"],
      favorable: ["2", "4", "6"],
      favLabel: "ra số chẵn",
      theory: "\\dfrac{3}{6} = \\dfrac{1}{2}",
      hint: "Sáu cột ứng với $6$ kết quả có thể. Cột <b>xanh lá</b> là kết quả <b>thuận lợi</b> cho biến cố 'ra số chẵn'. Bấm để tung thử.",
    },
  },

  examples: [
    {
      title: "Liệt kê kết quả có thể",
      prompt: "Một hộp có $4$ quả bóng đánh số $1, 2, 3, 4$. Lấy ngẫu nhiên một quả. Nêu các kết quả có thể.",
      steps: [
        "Mỗi lần lấy được một trong các quả $1, 2, 3, 4$.",
        "Các kết quả có thể là: $1, 2, 3, 4$ (gồm $4$ kết quả).",
      ],
    },
    {
      title: "Kết quả thuận lợi",
      prompt: "Vẫn hộp bóng $1, 2, 3, 4$. Xét biến cố 'lấy được quả mang số chẵn'. Nêu các kết quả thuận lợi.",
      steps: [
        "Số chẵn trong $\\{1,2,3,4\\}$ là $2$ và $4$.",
        "Các kết quả thuận lợi: $2, 4$ (gồm $2$ kết quả).",
      ],
    },
    {
      title: "Tung xúc xắc",
      prompt: "Tung một xúc xắc. Xét biến cố 'ra số lớn hơn $4$'. Liệt kê kết quả có thể và kết quả thuận lợi.",
      steps: [
        "Kết quả có thể: $1, 2, 3, 4, 5, 6$ ($6$ kết quả).",
        "Số lớn hơn $4$ là $5$ và $6$ → kết quả thuận lợi: $5, 6$ ($2$ kết quả).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Liệt kê thiếu kết quả có thể (ví dụ quên mặt $6$ của xúc xắc).",
      right: "Xúc xắc có đủ $6$ mặt: $1, 2, 3, 4, 5, 6$.",
      note: "Liệt kê đầy đủ, không bỏ sót.",
    },
    {
      wrong: "Nhầm 'kết quả thuận lợi' với 'kết quả có thể'.",
      right: "Kết quả thuận lợi là phần trong các kết quả có thể làm biến cố xảy ra.",
      note: "Thuận lợi ⊂ có thể.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tung một đồng xu. Nêu các kết quả có thể.",
      hints: ["Đồng xu có hai mặt."],
      solution: "Hai kết quả có thể: mặt Sấp và mặt Ngửa." },
    { level: "Nhận biết", prompt: "Tung một xúc xắc, biến cố 'ra mặt $6$' có mấy kết quả thuận lợi?",
      hints: ["Chỉ một mặt là $6$."],
      solution: "Có $1$ kết quả thuận lợi (mặt $6$)." },
    { level: "Nhận biết", prompt: "Hộp có các thẻ $1,2,3,4,5$. Biến cố 'lấy được số lẻ' có những kết quả thuận lợi nào?",
      hints: ["Số lẻ trong tập đó."],
      solution: "Các kết quả thuận lợi: $1, 3, 5$." },
    { level: "Thông hiểu", prompt: "Tung một xúc xắc. Biến cố 'ra số chia hết cho $3$' có mấy kết quả thuận lợi?",
      hints: ["Số chia hết cho 3 trong $1..6$."],
      solution: "Là $3$ và $6$ → có $2$ kết quả thuận lợi." },
    { level: "Thông hiểu", prompt: "Hộp có 8 viên bi đánh số $1$ đến $8$. Biến cố 'lấy được số lớn hơn $5$' gồm những kết quả nào?",
      hints: ["Các số $> 5$ trong $1..8$."],
      solution: "Là $6, 7, 8$ → $3$ kết quả thuận lợi." },
    { level: "Thông hiểu", prompt: "Tung xúc xắc, biến cố 'ra số nhỏ hơn $1$' có kết quả thuận lợi nào không?",
      hints: ["Có mặt nào nhỏ hơn 1 không?"],
      solution: "Không có mặt nào nhỏ hơn $1$ → $0$ kết quả thuận lợi (biến cố không thể xảy ra)." },
    { level: "Vận dụng", prompt:
        "Một bánh xe quay chia thành $8$ ô bằng nhau, đánh số $1$ đến $8$. Xét biến cố 'kim chỉ vào số chẵn'. " +
        "Liệt kê kết quả có thể và kết quả thuận lợi.",
      hints: ["Có thể: $1..8$. Thuận lợi: các số chẵn."],
      solution: "Kết quả có thể: $1,2,\\ldots,8$ ($8$ kết quả). Thuận lợi: $2,4,6,8$ ($4$ kết quả)." },
    { level: "Vận dụng", prompt:
        "Một túi có $3$ bi đỏ và $2$ bi xanh (khác nhau). Lấy ngẫu nhiên một viên. Có bao nhiêu kết quả có thể, " +
        "và biến cố 'lấy được bi đỏ' có mấy kết quả thuận lợi?",
      hints: ["Mỗi viên bi là một kết quả có thể.", "Bi đỏ có 3 viên."],
      solution: "Có $5$ kết quả có thể (5 viên bi). Biến cố 'bi đỏ' có $3$ kết quả thuận lợi." },
  ],

  quiz: [
    { type: "fill", q: "Tung một xúc xắc có bao nhiêu kết quả có thể?", answer: 6, explain: "Sáu mặt: $1, 2, 3, 4, 5, 6$." },
    { type: "fill", q: "Tung xúc xắc, biến cố “ra số chẵn” có bao nhiêu kết quả thuận lợi?", answer: 3, explain: "Là $2, 4, 6$ → $3$ kết quả." },
    { type: "mc", q: "Biến cố “ra số lớn hơn 4” khi tung xúc xắc có kết quả thuận lợi là:", choices: ["$5$ và $6$", "$4$ và $5$", "Chỉ $6$", "$4, 5, 6$"], answer: 0, explain: "Số lớn hơn $4$ là $5$ và $6$." },
  ],
});
