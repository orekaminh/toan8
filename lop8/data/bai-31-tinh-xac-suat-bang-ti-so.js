/* Bài 31. Cách tính xác suất của biến cố bằng tỉ số — Chương VIII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-31-tinh-xac-suat-bang-ti-so",
  chapter: "Chương VIII. Mở đầu về tính xác suất của biến cố",
  order: 2,
  title: "Bài 31. Cách tính xác suất của biến cố bằng tỉ số",

  objectives: [
    "Tính xác suất của một biến cố bằng tỉ số khi các kết quả đồng khả năng.",
    "Hiểu xác suất là một số từ $0$ đến $1$.",
    "Vận dụng vào xúc xắc, đồng xu, rút thẻ.",
  ],

  intro: {
    text:
      "Khi các kết quả <b>đồng khả năng</b> (cân đối, công bằng), xác suất của một biến cố được tính rất " +
      "gọn: lấy <b>số kết quả thuận lợi</b> chia cho <b>số kết quả có thể</b>.",
    math: "P(A) = \\dfrac{k}{n}",
  },

  theory: [
    {
      heading: "1. Kết quả đồng khả năng",
      html:
        "Các kết quả <b>đồng khả năng</b> là các kết quả có cùng khả năng xảy ra (xúc xắc cân đối, đồng xu " +
        "công bằng, các thẻ giống hệt nhau).",
    },
    {
      heading: "2. Công thức tính xác suất",
      html:
        "Với phép thử có các kết quả đồng khả năng, xác suất của biến cố $A$ bằng tỉ số giữa <b>số kết quả " +
        "thuận lợi</b> $k$ và <b>số kết quả có thể</b> $n$:",
      formula: "P(A) = \\dfrac{k}{n}",
    },
    {
      heading: "3. Giá trị của xác suất",
      html:
        "Xác suất luôn là một số từ $0$ đến $1$: $0 \\le P(A) \\le 1$. Biến cố <b>không thể</b> có xác suất " +
        "$0$; biến cố <b>chắc chắn</b> có xác suất $1$.",
    },
  ],

  visual: {
    type: "probability",
    config: {
      outcomes: ["1", "2", "3", "4", "5", "6"],
      favorable: ["5", "6"],
      favLabel: "ra số lớn hơn 4",
      theory: "\\dfrac{2}{6} = \\dfrac{1}{3}",
      hint: "Biến cố 'ra số lớn hơn $4$' có $k = 2$ kết quả thuận lợi ($5, 6$) trong $n = 6$ kết quả, nên $P = \\dfrac{2}{6} = \\dfrac{1}{3}$. Tung nhiều lần để thấy thực nghiệm tiến gần $\\dfrac{1}{3}$.",
    },
  },

  examples: [
    {
      title: "Xúc xắc – số chẵn",
      prompt: "Tung một xúc xắc cân đối. Tính xác suất biến cố 'ra số chẵn'.",
      steps: [
        "Số kết quả có thể: $n = 6$.",
        "Số kết quả thuận lợi (số chẵn $2, 4, 6$): $k = 3$.",
        "$P = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
      ],
    },
    {
      title: "Xúc xắc – số lớn hơn 4",
      prompt: "Tính xác suất biến cố 'ra số lớn hơn $4$' khi tung một xúc xắc.",
      steps: [
        "Kết quả thuận lợi: $5, 6$ → $k = 2$; có thể $n = 6$.",
        "$P = \\dfrac{2}{6} = \\dfrac{1}{3}$.",
      ],
    },
    {
      title: "Rút thẻ",
      prompt: "Một hộp có $10$ thẻ giống nhau đánh số $1$ đến $10$. Rút ngẫu nhiên một thẻ. Tính xác suất rút được số chia hết cho $5$.",
      steps: [
        "Số chia hết cho $5$ trong $1..10$ là $5$ và $10$ → $k = 2$.",
        "Số kết quả có thể $n = 10$.",
        "$P = \\dfrac{2}{10} = \\dfrac{1}{5}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng công thức $\\dfrac{k}{n}$ khi các kết quả KHÔNG đồng khả năng.",
      right: "Công thức tỉ số chỉ đúng khi các kết quả đồng khả năng (cân đối, công bằng).",
      note: "Kiểm tra điều kiện 'đồng khả năng' trước khi áp dụng.",
    },
    {
      wrong: "Đếm sai số kết quả có thể $n$ (ví dụ nói xúc xắc có $5$ mặt).",
      right: "Xúc xắc có $n = 6$ kết quả; đếm cẩn thận cả $k$ và $n$.",
      note: "Sai $n$ hoặc $k$ là sai toàn bộ.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tung một đồng xu cân đối. Tính xác suất ra mặt Ngửa.",
      hints: ["$n = 2$, $k = 1$."],
      solution: "$P = \\dfrac{1}{2}$." },
    { level: "Nhận biết", prompt: "Tung một xúc xắc. Tính xác suất ra mặt $6$.",
      hints: ["$k = 1$, $n = 6$."],
      solution: "$P = \\dfrac{1}{6}$." },
    { level: "Nhận biết", prompt: "Một biến cố chắc chắn xảy ra có xác suất bằng bao nhiêu?",
      hints: ["Mọi kết quả đều thuận lợi."],
      solution: "$P = 1$." },
    { level: "Thông hiểu", prompt: "Tung một xúc xắc, tính xác suất 'ra số lẻ'.",
      hints: ["Số lẻ: $1,3,5$ → $k = 3$."],
      solution: "$P = \\dfrac{3}{6} = \\dfrac{1}{2}$." },
    { level: "Thông hiểu", prompt: "Hộp có $12$ thẻ số $1$ đến $12$. Tính xác suất rút được số chia hết cho $3$.",
      hints: ["Bội của 3 trong $1..12$: $3,6,9,12$."],
      solution: "$k = 4$, $n = 12$ → $P = \\dfrac{4}{12} = \\dfrac{1}{3}$." },
    { level: "Thông hiểu", prompt: "Một túi có $5$ bi đỏ và $3$ bi xanh giống hệt nhau. Lấy ngẫu nhiên một viên. Tính xác suất lấy được bi xanh.",
      hints: ["$k = 3$ (bi xanh), $n = 5 + 3 = 8$."],
      solution: "$P = \\dfrac{3}{8}$." },
    { level: "Vận dụng", prompt:
        "Một bánh xe quay chia $8$ ô bằng nhau đánh số $1$ đến $8$. Tính xác suất kim dừng ở ô có số nguyên tố.",
      hints: ["Số nguyên tố trong $1..8$: $2,3,5,7$."],
      solution: "$k = 4$ ($2,3,5,7$), $n = 8$ → $P = \\dfrac{4}{8} = \\dfrac{1}{2}$." },
    { level: "Vận dụng", prompt:
        "Hộp có $20$ thẻ số $1$ đến $20$. Rút ngẫu nhiên một thẻ. Tính xác suất rút được số vừa chẵn vừa chia hết cho $5$.",
      hints: ["Vừa chẵn vừa chia hết cho 5 → chia hết cho 10."],
      solution: "Các số chia hết cho $10$ trong $1..20$: $10, 20$ → $k = 2$, $n = 20$, $P = \\dfrac{2}{20} = \\dfrac{1}{10}$." },
  ],

  quiz: [
    { type: "mc", q: "Tung một xúc xắc cân đối, xác suất “ra số chẵn” là:", choices: ["$\\dfrac{1}{2}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{6}$", "$\\dfrac{2}{3}$"], answer: 0, explain: "$\\dfrac{3}{6} = \\dfrac{1}{2}$." },
    { type: "mc", q: "Xác suất “ra mặt 6” khi tung một xúc xắc là:", choices: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{3}$", "$1$"], answer: 0, explain: "$1$ kết quả thuận lợi trên $6$ kết quả." },
    { type: "mc", q: "Một biến cố chắc chắn xảy ra có xác suất bằng:", choices: ["$1$", "$0$", "$\\dfrac{1}{2}$", "$2$"], answer: 0, explain: "Mọi kết quả đều thuận lợi nên $P = 1$." },
  ],
});
