/* Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối
   Chương VII (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-23-tan-so-tuong-doi",
  chapter: "Chương VII. Tần số và tần số tương đối",
  order: 2,
  title: "Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối",

  objectives: [
    "Hiểu khái niệm tần số tương đối và tính được tần số tương đối của một giá trị.",
    "Lập được bảng tần số tương đối và kiểm tra điều kiện tổng các tần số tương đối bằng $100\\%$.",
    "Đọc và vẽ được biểu đồ cột, biểu đồ hình quạt tròn biểu diễn tần số tương đối.",
  ],

  intro: {
    text:
      "Một lớp có $20$ bạn, trong đó $5$ bạn thích môn Toán. Nếu chỉ nói “có $5$ bạn” thì khó so sánh " +
      "với lớp khác có sĩ số khác. Thay vào đó ta dùng tỉ lệ phần trăm: $\\dfrac{5}{20} \\cdot 100\\% = 25\\%$ " +
      "số bạn thích môn Toán. Con số $25\\%$ ấy chính là <b>tần số tương đối</b> — cách mô tả dữ liệu tiện " +
      "lợi để so sánh giữa các mẫu có cỡ khác nhau.",
    math: "f = \\dfrac{m}{N} \\cdot 100\\%",
  },

  theory: [
    {
      heading: "1. Tần số tương đối",
      html:
        "Cho một mẫu dữ liệu có cỡ mẫu $N$ (tổng số lần quan sát). <b>Tần số tương đối</b> $f$ của một giá " +
        "trị là tỉ số giữa <b>tần số</b> $m$ của giá trị đó và cỡ mẫu $N$, viết dưới dạng phần trăm:<br>" +
        "trong đó $m$ là số lần giá trị đó xuất hiện. Tần số tương đối cho biết giá trị đó chiếm bao nhiêu " +
        "phần trăm trong toàn bộ mẫu.",
      formula: "f = \\dfrac{m}{N} \\cdot 100\\%",
    },
    {
      heading: "2. Bảng tần số tương đối",
      html:
        "<b>Bảng tần số tương đối</b> liệt kê các giá trị cùng tần số tương đối của chúng. Vì các giá trị " +
        "tạo thành toàn bộ mẫu nên <b>tổng tất cả các tần số tương đối luôn bằng</b> $100\\%$. Nhờ tính chất " +
        "này, nếu thiếu một tần số tương đối ta có thể tìm lại bằng cách lấy $100\\%$ trừ đi tổng các phần " +
        "còn lại.",
      formula: "f_1 + f_2 + \\cdots + f_k = 100\\%",
    },
    {
      heading: "3. Biểu đồ tần số tương đối",
      html:
        "Có thể biểu diễn bảng tần số tương đối bằng hai loại biểu đồ:<br>" +
        "<b>Biểu đồ cột:</b> mỗi giá trị là một cột, chiều cao cột bằng tần số tương đối (theo $\\%$).<br>" +
        "<b>Biểu đồ hình quạt tròn:</b> cả hình tròn ứng với $100\\%$; mỗi giá trị là một hình quạt có số đo " +
        "góc ở tâm $= f \\cdot 360^\\circ$ (với $f$ viết ở dạng tỉ số). Ví dụ phần $25\\%$ ứng với góc " +
        "$0{,}25 \\cdot 360^\\circ = 90^\\circ$.",
    },
  ],

  visual: {
    type: "chart",
    config: {
      title: "Môn thể thao yêu thích của lớp",
      labels: ["Bóng đá", "Cầu lông", "Bơi lội", "Cờ vua"],
      values: [16, 8, 10, 6],
      unit: "bạn",
      views: ["table", "bar", "pie"],
    },
  },

  examples: [
    {
      title: "Tính tần số tương đối",
      prompt:
        "Một mẫu có cỡ mẫu $N = 20$. Một giá trị có tần số $m = 5$. Tính tần số tương đối của giá trị đó.",
      steps: [
        "Áp dụng công thức $f = \\dfrac{m}{N} \\cdot 100\\%$.",
        "Thay số: $f = \\dfrac{5}{20} \\cdot 100\\% = 0{,}25 \\cdot 100\\%$.",
        "Vậy tần số tương đối là $f = 25\\%$.",
      ],
    },
    {
      title: "Tìm tần số tương đối còn thiếu",
      prompt:
        "Bảng tần số tương đối của bốn loại quả gồm: Táo $30\\%$, Cam $25\\%$, Chuối $20\\%$ và Xoài (chưa " +
        "biết). Tìm tần số tương đối của Xoài.",
      steps: [
        "Tổng các tần số tương đối phải bằng $100\\%$.",
        "Tổng ba phần đã biết: $30\\% + 25\\% + 20\\% = 75\\%$.",
        "Phần còn thiếu của Xoài: $100\\% - 75\\% = 25\\%$.",
        "Vậy tần số tương đối của Xoài là $25\\%$.",
      ],
    },
    {
      title: "Lập bảng tần số tương đối",
      prompt:
        "Khảo sát môn thể thao yêu thích của một lớp $40$ bạn được: Bóng đá $16$, Cầu lông $8$, Bơi lội " +
        "$10$, Cờ vua $6$. Lập bảng tần số tương đối.",
      steps: [
        "Cỡ mẫu $N = 16 + 8 + 10 + 6 = 40$.",
        "Bóng đá: $\\dfrac{16}{40} \\cdot 100\\% = 40\\%$. Cầu lông: $\\dfrac{8}{40} \\cdot 100\\% = 20\\%$.",
        "Bơi lội: $\\dfrac{10}{40} \\cdot 100\\% = 25\\%$. Cờ vua: $\\dfrac{6}{40} \\cdot 100\\% = 15\\%$.",
        "Kiểm tra: $40\\% + 20\\% + 25\\% + 15\\% = 100\\%$ ✓.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Tính tần số tương đối bằng cách lấy $\\dfrac{N}{m} \\cdot 100\\%$.",
      right: "Công thức đúng là $f = \\dfrac{m}{N} \\cdot 100\\%$: lấy <b>tần số chia cho cỡ mẫu</b>.",
      note: "Tử số là tần số $m$, mẫu số là cỡ mẫu $N$.",
    },
    {
      wrong: "Quên nhân với $100\\%$, ghi tần số tương đối là $0{,}25$ thay vì $25\\%$.",
      right: "Tần số tương đối được viết dưới dạng <b>phần trăm</b>, nên phải nhân thêm $100\\%$.",
      note: "$\\dfrac{5}{20} = 0{,}25 = 25\\%$.",
    },
    {
      wrong: "Cho rằng tổng các tần số tương đối có thể lớn hơn hay nhỏ hơn $100\\%$.",
      right: "Tổng tất cả các tần số tương đối của một mẫu luôn <b>bằng đúng</b> $100\\%$.",
      note: "Dùng tính chất này để dò lỗi hoặc tìm phần còn thiếu.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Một mẫu có cỡ mẫu $N = 50$, một giá trị có tần số $m = 10$. Tính tần số tương đối của giá trị đó.",
      hints: ["Dùng công thức $f = \\dfrac{m}{N} \\cdot 100\\%$."],
      solution: "$f = \\dfrac{10}{50} \\cdot 100\\% = 20\\%$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Một bảng tần số tương đối có ba giá trị với tần số tương đối $50\\%$, $30\\%$ và $f$. Tìm $f$.",
      hints: ["Tổng các tần số tương đối bằng $100\\%$."],
      solution: "$f = 100\\% - (50\\% + 30\\%) = 100\\% - 80\\% = 20\\%$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Trong biểu đồ hình quạt tròn, một giá trị chiếm $25\\%$. Hỏi giá trị đó chiếm bao nhiêu phần của cả hình tròn?",
      hints: ["Cả hình tròn ứng với $100\\%$."],
      solution: "Chiếm $\\dfrac{1}{4}$ hình tròn, vì $25\\% = \\dfrac{1}{4}$ của $100\\%$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Một lớp $40$ bạn, có $12$ bạn đi học bằng xe đạp. Tính tần số tương đối của nhóm đi xe đạp.",
      hints: ["Cỡ mẫu $N = 40$, tần số $m = 12$.", "Áp dụng $f = \\dfrac{m}{N} \\cdot 100\\%$."],
      solution: "$f = \\dfrac{12}{40} \\cdot 100\\% = 30\\%$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Bảng tần số tương đối có bốn giá trị: $A = 35\\%$, $B = 25\\%$, $C = 15\\%$ và $D$. Tìm $D$.",
      hints: ["Tổng bốn tần số tương đối bằng $100\\%$."],
      solution: "$D = 100\\% - (35\\% + 25\\% + 15\\%) = 100\\% - 75\\% = 25\\%$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Trong biểu đồ hình quạt tròn, một giá trị có tần số tương đối $30\\%$. Tính số đo góc ở tâm của hình quạt đó.",
      hints: ["Góc ở tâm $= f \\cdot 360^\\circ$ với $f$ viết ở dạng tỉ số."],
      solution: "Góc ở tâm $= 0{,}3 \\cdot 360^\\circ = 108^\\circ$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Khảo sát màu yêu thích của $25$ bạn được: Đỏ $10$, Xanh $8$, Vàng $7$. Lập bảng tần số tương đối " +
        "và kiểm tra tổng.",
      hints: ["Cỡ mẫu $N = 25$.", "Tính từng tần số tương đối rồi cộng lại."],
      solution:
        "Đỏ: $\\dfrac{10}{25} \\cdot 100\\% = 40\\%$; Xanh: $\\dfrac{8}{25} \\cdot 100\\% = 32\\%$; " +
        "Vàng: $\\dfrac{7}{25} \\cdot 100\\% = 28\\%$. Tổng $40\\% + 32\\% + 28\\% = 100\\%$ ✓.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một giá trị chiếm $20\\%$ trong mẫu và có tần số $m = 8$. Tìm cỡ mẫu $N$ và tần số của một giá " +
        "trị khác chiếm $35\\%$.",
      hints: ["Từ $f = \\dfrac{m}{N} \\cdot 100\\%$ suy ra $N = \\dfrac{m}{f} \\cdot 100$.", "Có $N$ rồi tính tần số của phần $35\\%$."],
      solution:
        "Từ $20\\% = \\dfrac{8}{N} \\cdot 100\\%$ suy ra $N = \\dfrac{8 \\cdot 100}{20} = 40$. " +
        "Tần số của phần $35\\%$ là $m = \\dfrac{35}{100} \\cdot 40 = 14$ (lần).",
    },
  ],

  quiz: [
    { type: "mc", q: "Công thức tính tần số tương đối $f$ của một giá trị là gì? (với $m$ là tần số, $N$ là cỡ mẫu)",
      choices: ["$f = \\dfrac{N}{m} \\cdot 100\\%$", "$f = \\dfrac{m}{N} \\cdot 100\\%$", "$f = m \\cdot N \\cdot 100\\%$", "$f = (m + N) \\cdot 100\\%$"], answer: 1,
      explain: "Tần số tương đối bằng tần số $m$ chia cho cỡ mẫu $N$ rồi nhân $100\\%$, tức $f = \\dfrac{m}{N} \\cdot 100\\%$." },
    { type: "fill", q: "Mẫu có cỡ mẫu $N = 20$, một giá trị có tần số $m = 5$. Tần số tương đối của giá trị đó là bao nhiêu phần trăm?", answer: 25,
      explain: "$f = \\dfrac{5}{20} \\cdot 100\\% = 25\\%$." },
    { type: "mc", q: "Tổng tất cả các tần số tương đối trong một bảng tần số tương đối bằng bao nhiêu?",
      choices: ["$50\\%$", "$100\\%$", "$200\\%$", "Tùy mẫu"], answer: 1,
      explain: "Các giá trị tạo thành toàn bộ mẫu nên tổng các tần số tương đối luôn bằng $100\\%$." },
  ],
});
