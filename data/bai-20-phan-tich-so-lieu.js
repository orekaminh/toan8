/* Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ — Chương V (KNTT, Tập 1) */
MATH8.registerLesson({
  id: "bai-20-phan-tich-so-lieu",
  chapter: "Chương V. Dữ liệu và biểu đồ",
  order: 3,
  title: "Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ",

  objectives: [
    "Đọc và phân tích số liệu từ biểu đồ: giá trị lớn nhất, nhỏ nhất, tổng, trung bình.",
    "Rút ra nhận xét, so sánh và phát hiện xu hướng.",
    "Cảnh giác với những biểu đồ trình bày gây hiểu lầm.",
  ],

  intro: {
    text:
      "Biểu đồ không chỉ để 'nhìn cho đẹp' — từ biểu đồ ta <b>đọc số liệu</b> và <b>rút ra nhận xét</b>: " +
      "cái gì nhiều nhất, ít nhất, tổng cộng bao nhiêu, có tăng/giảm không. Xem biểu đồ doanh số dưới đây.",
  },

  theory: [
    {
      heading: "1. Đọc số liệu từ biểu đồ",
      html:
        "Từ biểu đồ, ta xác định được: giá trị <b>lớn nhất / nhỏ nhất</b>, <b>tổng</b> các giá trị, giá " +
        "trị <b>trung bình</b> (tổng chia số phần), và phần trăm (với biểu đồ tròn).",
    },
    {
      heading: "2. Nhận xét và so sánh",
      html:
        "So sánh các cột/phần để rút ra kết luận (ví dụ tháng nào bán chạy nhất, xu hướng tăng hay giảm). " +
        "Nhận xét cần bám sát số liệu.",
    },
    {
      heading: "3. Cẩn thận biểu đồ gây hiểu lầm",
      html:
        "Một số biểu đồ cố tình để trục không bắt đầu từ $0$, hoặc dùng hình ảnh to nhỏ không đúng tỉ lệ, " +
        "khiến người xem hiểu sai mức chênh lệch. Cần đọc kĩ trục và đơn vị.",
    },
  ],

  visual: {
    type: "chart",
    config: {
      labels: ["T1", "T2", "T3", "T4"],
      values: [20, 35, 30, 45],
      unit: "sản phẩm",
      views: ["bar", "table"],
      title: "Số sản phẩm bán được theo tháng",
      hint: "Đọc biểu đồ cột: tìm tháng cao nhất / thấp nhất, tính tổng và trung bình.",
    },
  },

  examples: [
    {
      title: "Tìm lớn nhất, nhỏ nhất",
      prompt: "Theo biểu đồ (T1: 20, T2: 35, T3: 30, T4: 45 sản phẩm), tháng nào bán nhiều nhất, ít nhất?",
      steps: [
        "So sánh các giá trị: $20, 35, 30, 45$.",
        "Lớn nhất là $45$ (tháng 4); nhỏ nhất là $20$ (tháng 1).",
      ],
    },
    {
      title: "Tổng và trung bình",
      prompt: "Tính tổng số sản phẩm bán được trong 4 tháng và trung bình mỗi tháng.",
      steps: [
        "Tổng $= 20 + 35 + 30 + 45 = 130$ sản phẩm.",
        "Trung bình mỗi tháng $= \\dfrac{130}{4} = 32{,}5$ sản phẩm.",
      ],
    },
    {
      title: "Nhận xét xu hướng",
      prompt: "Nhận xét về tình hình bán hàng qua 4 tháng.",
      steps: [
        "Từ T1 đến T2 tăng mạnh ($20 \\to 35$); T3 giảm nhẹ ($35 \\to 30$); T4 tăng cao nhất ($30 \\to 45$).",
        "Nhìn chung doanh số có xu hướng tăng dần, tháng 4 tốt nhất.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Kết luận 'cột này cao gấp đôi cột kia' mà không nhìn trục bắt đầu từ đâu.",
      right: "Phải đọc giá trị thực trên trục; trục không từ $0$ dễ gây hiểu lầm.",
      note: "Luôn kiểm tra trục và đơn vị trước khi so sánh.",
    },
    {
      wrong: "Tính trung bình bằng cách lấy (lớn nhất + nhỏ nhất) chia 2.",
      right: "Trung bình $=$ tổng tất cả giá trị chia cho số phần.",
      note: "Trung bình cộng dùng TẤT CẢ số liệu.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Theo số liệu T1:20, T2:35, T3:30, T4:45, tháng nào bán ít nhất?",
      hints: ["Tìm số nhỏ nhất."],
      solution: "Tháng 1 (20 sản phẩm)." },
    { level: "Nhận biết", prompt: "Tính tổng số sản phẩm bán trong 4 tháng (20, 35, 30, 45).",
      hints: ["Cộng tất cả."],
      solution: "$20 + 35 + 30 + 45 = 130$ sản phẩm." },
    { level: "Nhận biết", prompt: "Tháng 4 bán nhiều hơn tháng 1 bao nhiêu sản phẩm?",
      hints: ["Lấy hiệu hai giá trị."],
      solution: "$45 - 20 = 25$ sản phẩm." },
    { level: "Thông hiểu", prompt: "Tính số sản phẩm trung bình mỗi tháng (20, 35, 30, 45).",
      hints: ["Tổng chia cho 4."],
      solution: "$\\dfrac{130}{4} = 32{,}5$ sản phẩm." },
    { level: "Thông hiểu", prompt: "Trong các tháng, có mấy tháng bán trên mức trung bình ($32{,}5$)?",
      hints: ["So từng giá trị với $32{,}5$."],
      solution: "Các tháng trên trung bình: T2 ($35$) và T4 ($45$) → có $2$ tháng." },
    { level: "Thông hiểu", prompt: "Tháng nào có mức tăng nhiều nhất so với tháng liền trước?",
      hints: ["Tính chênh lệch giữa các tháng liên tiếp."],
      solution: "T1→T2 tăng $15$; T2→T3 giảm $5$; T3→T4 tăng $15$. Mức tăng lớn nhất là $15$ (xảy ra ở T2 và T4)." },
    { level: "Vận dụng", prompt:
        "Một biểu đồ tròn về cách đến trường của $400$ học sinh: Xe đạp $50\\%$, Đi bộ $20\\%$, Xe buýt $30\\%$. " +
        "Tính số học sinh mỗi nhóm.",
      hints: ["Nhân phần trăm với $400$."],
      solution: "Xe đạp $= 200$; Đi bộ $= 80$; Xe buýt $= 120$ (tổng $= 400$)." },
    { level: "Vận dụng", prompt:
        "Doanh thu 3 quý lần lượt là $120$, $150$, $180$ (triệu đồng). Nếu xu hướng tăng đều như vậy tiếp tục, " +
        "hãy dự đoán doanh thu quý 4 và tính tổng cả năm theo dự đoán.",
      hints: ["Mỗi quý tăng $30$ triệu.", "Quý 4 dự đoán $= 180 + 30$."],
      solution: "Quý 4 dự đoán $= 180 + 30 = 210$ triệu. Tổng cả năm $= 120 + 150 + 180 + 210 = 660$ triệu đồng." },
  ],

  quiz: [
    { type: "fill", q: "Số sản phẩm 4 tháng: 20, 35, 30, 45. Tổng số sản phẩm là bao nhiêu?", answer: 130, explain: "$20 + 35 + 30 + 45 = 130$." },
    { type: "fill", q: "Số sản phẩm 4 tháng: 20, 35, 30, 45. Trung bình mỗi tháng là bao nhiêu? (nhập số thập phân)", answer: 32.5, explain: "$130 : 4 = 32{,}5$." },
    { type: "mc", q: "Số sản phẩm T1–T4 là 20, 35, 30, 45. Tháng nào bán nhiều nhất?", choices: ["Tháng 4", "Tháng 1", "Tháng 2", "Tháng 3"], answer: 0, explain: "Giá trị lớn nhất là $45$ (tháng 4)." },
  ],
});
