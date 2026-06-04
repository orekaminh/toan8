/* Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ — Chương V (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-19-bieu-dien-du-lieu",
  chapter: "Chương V. Dữ liệu và biểu đồ",
  order: 2,
  title: "Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ",

  objectives: [
    "Đọc và lập bảng thống kê.",
    "Nhận biết và đọc biểu đồ cột, biểu đồ đoạn thẳng, biểu đồ hình quạt tròn.",
    "Chọn được dạng biểu đồ phù hợp với mục đích.",
  ],

  intro: {
    text:
      "Một bộ số liệu có thể trình bày theo nhiều cách: <b>bảng</b> để tra cứu, <b>biểu đồ cột</b> để so " +
      "sánh, <b>biểu đồ tròn</b> để thấy tỉ lệ. Bấm các nút ở widget để xem cùng dữ liệu ở ba dạng.",
  },

  theory: [
    {
      heading: "1. Bảng thống kê",
      html: "Bảng gồm các loại (hoặc giá trị) và <b>tần số</b> tương ứng — thuận tiện để tra cứu con số chính xác.",
    },
    {
      heading: "2. Các dạng biểu đồ thường gặp",
      html:
        "• <b>Biểu đồ cột</b>: so sánh số lượng giữa các loại.<br>" +
        "• <b>Biểu đồ đoạn thẳng</b>: thể hiện sự thay đổi theo thời gian.<br>" +
        "• <b>Biểu đồ hình quạt tròn</b>: thể hiện tỉ lệ phần trăm của từng phần trong một tổng thể.<br>" +
        "• <b>Biểu đồ tranh</b>: dùng hình ảnh, mỗi hình ứng với một số lượng.",
    },
    {
      heading: "3. Chọn biểu đồ phù hợp",
      html:
        "Muốn <b>so sánh</b> → biểu đồ cột; muốn xem <b>tỉ lệ</b> của tổng → biểu đồ tròn; muốn xem " +
        "<b>diễn biến theo thời gian</b> → biểu đồ đoạn thẳng.",
    },
  ],

  visual: {
    type: "chart",
    config: {
      labels: ["Tốt", "Khá", "Đạt", "Chưa đạt"],
      values: [10, 18, 8, 4],
      unit: "học sinh",
      views: ["table", "bar", "pie"],
      title: "Xếp loại học tập lớp 8B",
      hint: "Cùng bảng số liệu này, biểu đồ <b>cột</b> giúp so sánh, biểu đồ <b>tròn</b> cho thấy tỉ lệ %. Bấm để chuyển dạng.",
    },
  },

  examples: [
    {
      title: "Đọc bảng và lập tỉ lệ",
      prompt: "Lớp 8B có xếp loại: Tốt $10$, Khá $18$, Đạt $8$, Chưa đạt $4$. Tính tổng số học sinh và tỉ lệ phần trăm loại Khá.",
      steps: [
        "Tổng $= 10 + 18 + 8 + 4 = 40$ học sinh.",
        "Tỉ lệ loại Khá $= \\dfrac{18}{40} = 0{,}45 = 45\\%$.",
      ],
    },
    {
      title: "Chọn biểu đồ",
      prompt: "Muốn thể hiện <b>tỉ lệ</b> các loại xếp loại trong tổng số học sinh, nên dùng biểu đồ nào?",
      steps: [
        "Cần thể hiện tỉ lệ của từng phần trong một tổng thể.",
        "→ Dùng <b>biểu đồ hình quạt tròn</b>.",
      ],
    },
    {
      title: "Đọc biểu đồ tròn",
      prompt: "Trên một biểu đồ tròn, phần 'Đi bộ' chiếm $25\\%$ trong tổng $200$ học sinh. Hỏi có bao nhiêu học sinh đi bộ?",
      steps: [
        "Số học sinh đi bộ $= 25\\% \\times 200 = \\dfrac{25}{100} \\times 200$.",
        "$= 50$ học sinh.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Dùng biểu đồ tròn cho các số liệu không thuộc cùng một tổng thể.",
      right: "Biểu đồ tròn chỉ dùng khi các phần cộng lại thành một tổng (100%).",
      note: "Tròn = tỉ lệ của MỘT tổng thể.",
    },
    {
      wrong: "Vẽ biểu đồ cột nhưng trục số không bắt đầu từ $0$ làm phóng đại chênh lệch.",
      right: "Trục giá trị nên bắt đầu từ $0$ để so sánh trung thực.",
      note: "Trục sai làm người đọc hiểu lầm mức chênh lệch.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Muốn so sánh số lượng học sinh thích từng môn thể thao, nên dùng biểu đồ nào?",
      hints: ["So sánh số lượng giữa các loại."],
      solution: "Biểu đồ cột." },
    { level: "Nhận biết", prompt: "Biểu đồ nào phù hợp để thể hiện nhiệt độ thay đổi trong một tuần?",
      hints: ["Thay đổi theo thời gian."],
      solution: "Biểu đồ đoạn thẳng." },
    { level: "Nhận biết", prompt: "Tổng các phần trong một biểu đồ hình quạt tròn bằng bao nhiêu phần trăm?",
      hints: ["Cả hình tròn là một tổng thể."],
      solution: "$100\\%$." },
    { level: "Thông hiểu", prompt: "Với số liệu Tốt 10, Khá 18, Đạt 8, Chưa đạt 4, tính tỉ lệ phần trăm loại Tốt.",
      hints: ["Tổng $= 40$; tỉ lệ $= \\dfrac{10}{40}$."],
      solution: "$\\dfrac{10}{40} = 0{,}25 = 25\\%$." },
    { level: "Thông hiểu", prompt: "Một biểu đồ tròn về phương tiện đến trường: Xe đạp $40\\%$, Đi bộ $35\\%$, còn lại là Xe buýt. Hỏi Xe buýt chiếm bao nhiêu phần trăm?",
      hints: ["Cả ba phần cộng lại $100\\%$."],
      solution: "Xe buýt $= 100\\% - 40\\% - 35\\% = 25\\%$." },
    { level: "Thông hiểu", prompt: "Tổng số học sinh là $200$, loại Khá chiếm $45\\%$. Tính số học sinh loại Khá.",
      hints: ["$45\\% \\times 200$."],
      solution: "$\\dfrac{45}{100} \\times 200 = 90$ học sinh." },
    { level: "Vận dụng", prompt:
        "Số sách bán được trong 4 tháng: tháng 1: 20, tháng 2: 35, tháng 3: 30, tháng 4: 45 (quyển). " +
        "Nên dùng biểu đồ nào để thấy rõ xu hướng tăng/giảm theo tháng? Tổng số sách bán được là bao nhiêu?",
      hints: ["Theo thời gian → biểu đồ đoạn thẳng.", "Cộng 4 tháng."],
      solution: "Dùng biểu đồ đoạn thẳng. Tổng $= 20 + 35 + 30 + 45 = 130$ quyển." },
    { level: "Vận dụng", prompt:
        "Một biểu đồ tròn có ba phần: A chiếm $\\dfrac{1}{2}$, B chiếm $\\dfrac{1}{4}$, C chiếm phần còn lại. " +
        "Tính phần trăm của C; biết tổng là $80$ sản phẩm, tính số sản phẩm của C.",
      hints: ["$C = 1 - \\dfrac{1}{2} - \\dfrac{1}{4}$.", "Đổi ra phần trăm rồi nhân với $80$."],
      solution: "$C = 1 - \\dfrac{1}{2} - \\dfrac{1}{4} = \\dfrac{1}{4} = 25\\%$. Số sản phẩm của C $= \\dfrac{1}{4} \\times 80 = 20$." },
  ],

  quiz: [
    { type: "mc", q: "Muốn so sánh số lượng giữa các loại, nên dùng biểu đồ nào?", choices: ["Biểu đồ cột", "Biểu đồ tròn", "Biểu đồ đoạn thẳng", "Biểu đồ tranh"], answer: 0, explain: "Biểu đồ cột hợp để so sánh số lượng." },
    { type: "mc", q: "Biểu đồ nào thể hiện tỉ lệ phần trăm của một tổng thể?", choices: ["Biểu đồ hình quạt tròn", "Biểu đồ cột", "Biểu đồ đoạn thẳng", "Biểu đồ tranh"], answer: 0, explain: "Hình quạt tròn = tỉ lệ của một tổng (100%)." },
    { type: "fill", q: "Lớp có 40 học sinh, loại Khá chiếm $45\\%$. Số học sinh loại Khá là bao nhiêu?", answer: 18, explain: "$45\\% \\times 40 = 18$." },
  ],
});
