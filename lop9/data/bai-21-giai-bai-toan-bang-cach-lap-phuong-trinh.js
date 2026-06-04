/* Bài 21. Giải bài toán bằng cách lập phương trình
   Chương VI (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-21-giai-bai-toan-bang-cach-lap-phuong-trinh",
  chapter: "Chương VI. Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
  order: 4,
  title: "Bài 21. Giải bài toán bằng cách lập phương trình",

  objectives: [
    "Nắm vững ba bước giải bài toán bằng cách lập phương trình.",
    "Chọn ẩn, đặt điều kiện cho ẩn và lập được phương trình (thường là bậc hai).",
    "Giải phương trình, đối chiếu điều kiện và kết luận đúng cho bài toán thực tế.",
  ],

  intro: {
    text:
      "Một mảnh đất hình chữ nhật có diện tích $60\\ \\text{m}^2$, chiều dài hơn chiều rộng $7\\ \\text{m}$. " +
      "Làm sao tìm được kích thước của mảnh đất? Nếu gọi chiều rộng là $x$ (mét) thì chiều dài là $x + 7$, " +
      "và diện tích cho ta phương trình $x(x + 7) = 60$ — một <b>phương trình bậc hai</b>. " +
      "Bài học này giúp bạn chuyển bài toán thực tế thành phương trình rồi giải để tìm đáp số.",
    math: "x(x + 7) = 60",
  },

  theory: [
    {
      heading: "1. Ba bước giải bài toán bằng cách lập phương trình",
      html:
        "<b>Bước 1. Lập phương trình.</b><br>" +
        "&bull; Chọn ẩn số và đặt <b>điều kiện</b> thích hợp cho ẩn (ví dụ độ dài, vận tốc phải dương).<br>" +
        "&bull; Biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết.<br>" +
        "&bull; Lập phương trình biểu thị mối quan hệ giữa các đại lượng.<br>" +
        "<b>Bước 2. Giải phương trình.</b> Thường là phương trình bậc hai $ax^2 + bx + c = 0$.<br>" +
        "<b>Bước 3. Kết luận.</b> <b>Đối chiếu</b> nghiệm với điều kiện rồi trả lời bài toán.",
    },
    {
      heading: "2. Một số dạng quan hệ thường gặp",
      html:
        "&bull; <b>Hình học:</b> diện tích hình chữ nhật $= $ dài $\\times$ rộng; chu vi $= 2\\,($dài $+$ rộng$)$.<br>" +
        "&bull; <b>Chuyển động:</b> quãng đường $s = v \\cdot t$ (vận tốc nhân thời gian).<br>" +
        "&bull; <b>Toán về số:</b> dựa vào tổng, tích, hiệu hoặc cấu tạo của các số để lập phương trình.",
      formula: "s = v \\cdot t",
    },
    {
      heading: "3. Lưu ý khi đối chiếu điều kiện",
      html:
        "Phương trình bậc hai có thể cho <b>hai nghiệm</b>. Hãy so từng nghiệm với điều kiện đã đặt: " +
        "nghiệm nào <b>không thoả</b> điều kiện (chẳng hạn độ dài âm) thì <b>loại</b>. " +
        "Chỉ giữ lại nghiệm hợp lí để kết luận cho bài toán.",
    },
  ],

  examples: [
    {
      title: "Dạng hình học — mảnh đất hình chữ nhật",
      prompt:
        "Một mảnh đất hình chữ nhật có diện tích $60\\ \\text{m}^2$, chiều dài hơn chiều rộng $7\\ \\text{m}$. " +
        "Tính kích thước mảnh đất.",
      steps: [
        "Gọi chiều rộng là $x$ (mét), điều kiện $x > 0$. Khi đó chiều dài là $x + 7$.",
        "Diện tích bằng $60$ nên: $x(x + 7) = 60 \\Rightarrow x^2 + 7x - 60 = 0$.",
        "$\\Delta = 7^2 - 4 \\cdot 1 \\cdot (-60) = 49 + 240 = 289 > 0,\\ \\sqrt{\\Delta} = 17$.",
        "$x_1 = \\dfrac{-7 + 17}{2} = 5,\\quad x_2 = \\dfrac{-7 - 17}{2} = -12$ (loại vì $x > 0$).",
        "Vậy chiều rộng $5\\ \\text{m}$, chiều dài $5 + 7 = 12\\ \\text{m}$.",
      ],
    },
    {
      title: "Dạng hình học — khu vườn theo chu vi và diện tích",
      prompt:
        "Một khu vườn hình chữ nhật có chu vi $28\\ \\text{m}$ và diện tích $48\\ \\text{m}^2$. " +
        "Tính độ dài hai cạnh của khu vườn.",
      steps: [
        "Nửa chu vi bằng $28 : 2 = 14\\ \\text{m}$, đây là tổng hai cạnh kề nhau.",
        "Gọi một cạnh là $x$ (mét), $0 < x < 14$. Cạnh còn lại là $14 - x$.",
        "Diện tích bằng $48$ nên: $x(14 - x) = 48 \\Rightarrow x^2 - 14x + 48 = 0$.",
        "$\\Delta = (-14)^2 - 4 \\cdot 48 = 196 - 192 = 4,\\ \\sqrt{\\Delta} = 2$.",
        "$x_1 = \\dfrac{14 + 2}{2} = 8,\\quad x_2 = \\dfrac{14 - 2}{2} = 6$. Vậy hai cạnh dài $8\\ \\text{m}$ và $6\\ \\text{m}$.",
      ],
    },
    {
      title: "Dạng toán về số",
      prompt: "Tích của hai số tự nhiên liên tiếp bằng $156$. Tìm hai số đó.",
      steps: [
        "Gọi số bé là $x$ (số tự nhiên), $x \\ge 0$. Số liền sau là $x + 1$.",
        "Tích hai số bằng $156$ nên: $x(x + 1) = 156 \\Rightarrow x^2 + x - 156 = 0$.",
        "$\\Delta = 1^2 - 4 \\cdot (-156) = 1 + 624 = 625,\\ \\sqrt{\\Delta} = 25$.",
        "$x_1 = \\dfrac{-1 + 25}{2} = 12,\\quad x_2 = \\dfrac{-1 - 25}{2} = -13$ (loại vì là số tự nhiên).",
        "Vậy hai số cần tìm là $12$ và $13$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Chọn ẩn nhưng quên đặt điều kiện cho ẩn.",
      right: "Luôn đặt điều kiện hợp lí, ví dụ độ dài $x > 0$, số lượng người là số nguyên dương.",
      note: "Điều kiện giúp loại nghiệm vô lí ở bước cuối.",
    },
    {
      wrong: "Giải xong phương trình là lấy luôn cả hai nghiệm làm đáp số.",
      right: "Phải <b>đối chiếu điều kiện</b>, loại nghiệm không hợp lí (chẳng hạn nghiệm âm của độ dài).",
      note: "Phương trình bậc hai thường có hai nghiệm nhưng bài toán chỉ nhận nghiệm phù hợp.",
    },
    {
      wrong: "Nhầm chu vi với nửa chu vi khi lập phương trình hình chữ nhật.",
      right: "Tổng hai cạnh kề bằng <b>nửa chu vi</b>; với chu vi $28$ thì tổng hai cạnh là $14$.",
      note: "Chu vi $= 2\\,($dài $+$ rộng$)$ nên dài $+$ rộng $=$ chu vi $: 2$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Một hình chữ nhật có chiều dài hơn chiều rộng $3\\ \\text{m}$. Gọi chiều rộng là $x$ (mét). " +
        "Hãy viết biểu thức chiều dài và biểu thức diện tích theo $x$.",
      hints: ["Chiều dài $=$ chiều rộng $+ 3$.", "Diện tích $=$ dài $\\times$ rộng."],
      solution: "Chiều dài là $x + 3$; diện tích là $x(x + 3) = x^2 + 3x$ (đơn vị $\\text{m}^2$).",
    },
    {
      level: "Nhận biết",
      prompt: "Một khu đất hình chữ nhật có chu vi $20\\ \\text{m}$. Tổng hai cạnh kề nhau bằng bao nhiêu?",
      hints: ["Tổng hai cạnh kề $=$ chu vi $: 2$."],
      solution: "Tổng hai cạnh kề nhau là $20 : 2 = 10\\ \\text{m}$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Tích của hai số tự nhiên liên tiếp bằng $30$. Gọi số bé là $x$. Hãy lập phương trình của bài toán.",
      hints: ["Số liền sau số $x$ là $x + 1$.", "Tích hai số bằng $30$."],
      solution: "Phương trình là $x(x + 1) = 30$, tức $x^2 + x - 30 = 0$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Một mảnh vườn hình chữ nhật có diện tích $40\\ \\text{m}^2$, chiều dài hơn chiều rộng $3\\ \\text{m}$. " +
        "Tính chiều rộng của mảnh vườn.",
      hints: ["Gọi chiều rộng là $x > 0$, chiều dài là $x + 3$.", "Lập phương trình $x(x + 3) = 40$."],
      solution:
        "$x(x + 3) = 40 \\Rightarrow x^2 + 3x - 40 = 0$. $\\Delta = 9 + 160 = 169,\\ \\sqrt{\\Delta} = 13$. " +
        "$x = \\dfrac{-3 + 13}{2} = 5$ (loại $x = -8$). Vậy chiều rộng là $5\\ \\text{m}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tích của hai số tự nhiên liên tiếp bằng $72$. Tìm hai số đó.",
      hints: ["Gọi số bé là $x \\ge 0$, số liền sau là $x + 1$.", "Lập phương trình $x(x + 1) = 72$."],
      solution:
        "$x^2 + x - 72 = 0$. $\\Delta = 1 + 288 = 289,\\ \\sqrt{\\Delta} = 17$. " +
        "$x = \\dfrac{-1 + 17}{2} = 8$ (loại $x = -9$). Vậy hai số là $8$ và $9$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Một ô tô đi quãng đường $120\\ \\text{km}$ hết $2$ giờ. Tính vận tốc trung bình của ô tô.",
      hints: ["Dùng công thức $s = v \\cdot t$.", "Suy ra $v = \\dfrac{s}{t}$."],
      solution: "Gọi vận tốc là $v > 0$ (km/h). Ta có $120 = v \\cdot 2 \\Rightarrow v = 60$. Vậy vận tốc là $60\\ \\text{km/h}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một khu vườn hình chữ nhật có chu vi $34\\ \\text{m}$ và diện tích $70\\ \\text{m}^2$. " +
        "Tính độ dài hai cạnh của khu vườn.",
      hints: ["Nửa chu vi $= 34 : 2 = 17$ là tổng hai cạnh.", "Gọi một cạnh là $x$, cạnh kia là $17 - x$, lập $x(17 - x) = 70$."],
      solution:
        "$x(17 - x) = 70 \\Rightarrow x^2 - 17x + 70 = 0$. $\\Delta = 289 - 280 = 9,\\ \\sqrt{\\Delta} = 3$. " +
        "$x_1 = \\dfrac{17 + 3}{2} = 10,\\ x_2 = \\dfrac{17 - 3}{2} = 7$. Vậy hai cạnh dài $10\\ \\text{m}$ và $7\\ \\text{m}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mảnh đất hình chữ nhật có chiều dài gấp đôi chiều rộng và diện tích $50\\ \\text{m}^2$. " +
        "Tính kích thước mảnh đất.",
      hints: ["Gọi chiều rộng là $x > 0$, chiều dài là $2x$.", "Lập phương trình $x \\cdot 2x = 50$."],
      solution:
        "$2x^2 = 50 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$ (loại $x = -5$). " +
        "Vậy chiều rộng $5\\ \\text{m}$, chiều dài $2 \\cdot 5 = 10\\ \\text{m}$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Bước đầu tiên khi giải bài toán bằng cách lập phương trình là gì?",
      choices: [
        "Giải phương trình",
        "Chọn ẩn và đặt điều kiện cho ẩn",
        "Kết luận đáp số",
        "Thử lại các nghiệm",
      ], answer: 1,
      explain: "Trình tự là: chọn ẩn (đặt điều kiện) và lập phương trình → giải → đối chiếu, kết luận." },
    { type: "fill", q: "Một hình chữ nhật có diện tích $60\\ \\text{m}^2$, chiều dài hơn chiều rộng $7\\ \\text{m}$. Chiều rộng (mét) bằng bao nhiêu?",
      answer: 5,
      explain: "$x(x + 7) = 60 \\Rightarrow x^2 + 7x - 60 = 0 \\Rightarrow x = 5$ (loại $x = -12$)." },
    { type: "mc", q: "Khu vườn hình chữ nhật có chu vi $28\\ \\text{m}$ và diện tích $48\\ \\text{m}^2$. Hai cạnh của khu vườn là?",
      choices: ["$8\\ \\text{m}$ và $6\\ \\text{m}$", "$7\\ \\text{m}$ và $7\\ \\text{m}$", "$12\\ \\text{m}$ và $4\\ \\text{m}$", "$10\\ \\text{m}$ và $4\\ \\text{m}$"], answer: 0,
      explain: "Nửa chu vi $= 14$; $x(14 - x) = 48 \\Rightarrow x^2 - 14x + 48 = 0 \\Rightarrow x = 8$ hoặc $x = 6$." },
  ],
});
