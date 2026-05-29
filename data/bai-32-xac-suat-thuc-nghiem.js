/* Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất — Chương VIII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-32-xac-suat-thuc-nghiem",
  chapter: "Chương VIII. Mở đầu về tính xác suất của biến cố",
  order: 3,
  title: "Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất",

  objectives: [
    "Tính xác suất thực nghiệm của một biến cố.",
    "Hiểu: khi số lần thực hiện càng lớn, xác suất thực nghiệm càng gần xác suất lí thuyết.",
    "Dùng xác suất thực nghiệm để ước lượng trong thực tế.",
  ],

  intro: {
    text:
      "Nếu tung đồng xu $10$ lần được $7$ mặt Ngửa, tỉ số $\\dfrac{7}{10}$ là <b>xác suất thực nghiệm</b>. " +
      "Tung càng nhiều lần, tỉ số này càng tiến gần xác suất lí thuyết $\\dfrac{1}{2}$. Hãy bấm 'Tung +50' " +
      "nhiều lần ở widget để tự thấy điều đó!",
    math: "P_{\\text{tn}} = \\dfrac{k}{n}",
  },

  theory: [
    {
      heading: "1. Xác suất thực nghiệm",
      html:
        "Thực hiện một phép thử $n$ lần, nếu biến cố $A$ xảy ra $k$ lần thì <b>xác suất thực nghiệm</b> của " +
        "$A$ là tỉ số $\\dfrac{k}{n}$, với $k$ là số lần biến cố xảy ra và $n$ là tổng số lần thực hiện.",
      formula: "P_{\\text{tn}}(A) = \\dfrac{k}{n}",
    },
    {
      heading: "2. Liên hệ với xác suất lí thuyết",
      html:
        "Khi số lần thực hiện $n$ <b>càng lớn</b>, xác suất thực nghiệm $\\dfrac{k}{n}$ càng <b>tiến gần</b> " +
        "xác suất (lí thuyết) của biến cố. Vài lần đầu có thể lệch nhiều, nhưng về lâu dài thì ổn định.",
    },
    {
      heading: "3. Ứng dụng",
      html:
        "Khi <b>không tính được</b> xác suất lí thuyết (ví dụ tỉ lệ phế phẩm của một dây chuyền), ta thực " +
        "hiện nhiều lần rồi dùng xác suất thực nghiệm để <b>ước lượng</b>.",
    },
  ],

  visual: {
    type: "probability",
    config: {
      outcomes: ["Sấp", "Ngửa"],
      favorable: ["Ngửa"],
      favLabel: "ra mặt Ngửa",
      theory: "\\dfrac{1}{2}",
      hint: "Tung đồng xu: lúc đầu xác suất thực nghiệm của 'ra mặt Ngửa' có thể lệch xa $\\dfrac{1}{2}$, nhưng bấm 'Tung +50' nhiều lần sẽ thấy nó <b>tiến dần về $0{,}5$</b>.",
    },
  },

  examples: [
    {
      title: "Tính xác suất thực nghiệm",
      prompt: "Tung một đồng xu $20$ lần, thấy $12$ lần ra mặt Ngửa. Tính xác suất thực nghiệm của biến cố 'ra mặt Ngửa'.",
      steps: [
        "Số lần xảy ra $k = 12$; tổng số lần $n = 20$.",
        "$P_{\\text{tn}} = \\dfrac{12}{20} = 0{,}6$.",
      ],
    },
    {
      title: "So với lí thuyết",
      prompt: "Một xúc xắc được tung $600$ lần, mặt $6$ xuất hiện $95$ lần. So sánh xác suất thực nghiệm với xác suất lí thuyết.",
      steps: [
        "Thực nghiệm: $\\dfrac{95}{600} \\approx 0{,}158$.",
        "Lí thuyết: $\\dfrac{1}{6} \\approx 0{,}167$.",
        "Hai giá trị khá gần nhau — phù hợp với số lần tung lớn.",
      ],
    },
    {
      title: "Ước lượng thực tế",
      prompt: "Kiểm tra $500$ sản phẩm thấy $15$ sản phẩm lỗi. Ước lượng xác suất một sản phẩm bị lỗi.",
      steps: [
        "Xác suất thực nghiệm $= \\dfrac{15}{500} = 0{,}03 = 3\\%$.",
        "Dùng giá trị này để ước lượng tỉ lệ sản phẩm lỗi của dây chuyền.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Nghĩ rằng xác suất thực nghiệm phải bằng đúng xác suất lí thuyết.",
      right: "Chúng chỉ <b>xấp xỉ</b> nhau, và càng gần khi số lần càng lớn.",
      note: "Tung 10 lần có thể ra 7 Ngửa; điều đó bình thường.",
    },
    {
      wrong: "Kết luận chắc chắn từ một số ít lần thử (mẫu nhỏ).",
      right: "Cần số lần đủ lớn thì ước lượng mới đáng tin.",
      note: "Mẫu càng lớn, ước lượng càng chính xác.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Tung đồng xu $50$ lần, ra Ngửa $28$ lần. Tính xác suất thực nghiệm của 'ra Ngửa'.",
      hints: ["$\\dfrac{k}{n}$ với $k = 28$, $n = 50$."],
      solution: "$\\dfrac{28}{50} = 0{,}56$." },
    { level: "Nhận biết", prompt: "Xác suất thực nghiệm được tính bằng công thức nào?",
      hints: ["Số lần xảy ra trên tổng số lần."],
      solution: "$P_{\\text{tn}} = \\dfrac{k}{n}$, trong đó $k$ là số lần biến cố xảy ra và $n$ là tổng số lần thực hiện." },
    { level: "Nhận biết", prompt: "Khi số lần thực hiện càng lớn, xác suất thực nghiệm có xu hướng thế nào?",
      hints: ["Liên hệ với xác suất lí thuyết."],
      solution: "Càng tiến gần xác suất (lí thuyết) của biến cố." },
    { level: "Thông hiểu", prompt: "Tung một xúc xắc $120$ lần, mặt $1$ xuất hiện $18$ lần. Tính xác suất thực nghiệm và so với $\\dfrac{1}{6}$.",
      hints: ["Thực nghiệm $= \\dfrac{18}{120}$; lí thuyết $= \\dfrac{1}{6} \\approx 0{,}167$."],
      solution: "$\\dfrac{18}{120} = 0{,}15$, gần với $\\dfrac{1}{6} \\approx 0{,}167$." },
    { level: "Thông hiểu", prompt: "Gieo một hạt giống $200$ lần (200 hạt), có $184$ hạt nảy mầm. Ước lượng xác suất một hạt nảy mầm.",
      hints: ["$\\dfrac{184}{200}$."],
      solution: "$\\dfrac{184}{200} = 0{,}92 = 92\\%$." },
    { level: "Thông hiểu", prompt: "Một cầu thủ ném phạt $40$ lần, vào $30$ lần. Xác suất thực nghiệm ném vào là bao nhiêu?",
      hints: ["$\\dfrac{30}{40}$."],
      solution: "$\\dfrac{30}{40} = 0{,}75 = 75\\%$." },
    { level: "Vận dụng", prompt:
        "Một xưởng kiểm tra $1000$ bóng đèn, thấy $25$ bóng hỏng. Ước lượng xác suất một bóng bị hỏng; " +
        "dự đoán trong lô $4000$ bóng có khoảng bao nhiêu bóng hỏng.",
      hints: ["Xác suất thực nghiệm $= \\dfrac{25}{1000}$.", "Nhân với $4000$."],
      solution: "$P \\approx \\dfrac{25}{1000} = 0{,}025$. Trong $4000$ bóng, ước lượng $0{,}025 \\times 4000 = 100$ bóng hỏng." },
    { level: "Vận dụng", prompt:
        "Hai bạn tung đồng xu: An tung $10$ lần được $7$ Ngửa, Bình tung $1000$ lần được $508$ Ngửa. " +
        "Kết quả của ai phản ánh xác suất lí thuyết ($0{,}5$) tốt hơn? Vì sao?",
      hints: ["So mỗi tỉ số với $0{,}5$.", "Ai tung nhiều lần hơn?"],
      solution:
        "An: $\\dfrac{7}{10} = 0{,}7$ (lệch xa $0{,}5$). Bình: $\\dfrac{508}{1000} = 0{,}508$ (rất gần $0{,}5$). " +
        "Kết quả của Bình tốt hơn vì số lần tung lớn hơn nhiều." },
  ],

  quiz: [
    { type: "fill", q: "Tung đồng xu $20$ lần, $12$ lần ra Ngửa. Xác suất thực nghiệm “ra Ngửa” là bao nhiêu? (nhập số thập phân)", answer: 0.6, explain: "$\\dfrac{12}{20} = 0{,}6$." },
    { type: "mc", q: "Khi số lần thực hiện càng lớn, xác suất thực nghiệm:", choices: ["Càng gần xác suất lí thuyết", "Càng xa xác suất lí thuyết", "Không thay đổi", "Luôn bằng 1"], answer: 0, explain: "Đó là mối liên hệ giữa thực nghiệm và lí thuyết." },
    { type: "fill", q: "Kiểm tra $500$ sản phẩm thấy $15$ sản phẩm lỗi. Ước lượng xác suất một sản phẩm bị lỗi (nhập số thập phân).", answer: 0.03, explain: "$\\dfrac{15}{500} = 0{,}03$." },
  ],
});
