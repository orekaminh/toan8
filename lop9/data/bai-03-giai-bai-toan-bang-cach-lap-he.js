/* Bài 3. Giải bài toán bằng cách lập hệ phương trình
   Chương I (Toán 9, Kết nối tri thức, Tập 1) */
MATH9.registerLesson({
  id: "bai-03-giai-bai-toan-bang-cach-lap-he",
  chapter: "Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn",
  order: 3,
  title: "Bài 3. Giải bài toán bằng cách lập hệ phương trình",

  objectives: [
    "Nắm ba bước giải bài toán bằng cách lập hệ phương trình.",
    "Lập được hệ phương trình từ bài toán thực tế (tìm số, mua bán, hình học, chuyển động).",
    "Giải hệ, đối chiếu điều kiện và kết luận.",
  ],

  intro: {
    text:
      "Nhiều bài toán thực tế có <b>hai đại lượng chưa biết</b> liên hệ với nhau bởi <b>hai điều kiện</b>. " +
      "Đặt mỗi đại lượng là một ẩn, mỗi điều kiện cho một phương trình — ta được một hệ. Giải hệ là tìm ra " +
      "đáp số của bài toán.",
    math: "\\begin{cases} x + y = 24 \\\\ x - y = 6 \\end{cases}",
  },

  theory: [
    {
      heading: "Ba bước giải bài toán bằng cách lập hệ phương trình",
      html:
        "<b>Bước 1. Lập hệ phương trình:</b> chọn hai ẩn và đặt điều kiện cho ẩn; biểu diễn các đại lượng " +
        "theo ẩn; từ các dữ kiện của đề lập hai phương trình.<br>" +
        "<b>Bước 2. Giải hệ phương trình</b> vừa lập (bằng phương pháp thế hoặc cộng đại số).<br>" +
        "<b>Bước 3. Kết luận:</b> đối chiếu nghiệm với điều kiện rồi trả lời đúng câu hỏi của bài toán.",
    },
    {
      heading: "Một số dạng quen thuộc",
      html:
        "• <b>Tìm số</b> (tổng – hiệu, quan hệ gấp mấy lần).<br>" +
        "• <b>Mua bán</b> (số lượng × đơn giá).<br>" +
        "• <b>Hình học</b> (chu vi, diện tích hình chữ nhật).<br>" +
        "• <b>Chuyển động</b> với công thức quãng đường $s = v \\cdot t$.",
      formula: "s = v \\cdot t",
    },
  ],

  examples: [
    {
      title: "Bài toán tìm số",
      prompt: "Hai số có tổng bằng $24$ và hiệu bằng $6$. Tìm hai số đó.",
      steps: [
        "Gọi hai số là $x$ và $y$ (với $x > y$).",
        "Tổng và hiệu cho hệ $\\begin{cases} x + y = 24 \\\\ x - y = 6 \\end{cases}$.",
        "Cộng hai phương trình: $2x = 30 \\Rightarrow x = 15$; suy ra $y = 9$.",
        "Vậy hai số cần tìm là $15$ và $9$.",
      ],
    },
    {
      title: "Bài toán mua bán",
      prompt:
        "Mua $3$ quyển vở và $2$ chiếc bút hết $46$ nghìn đồng; mua $2$ quyển vở và $3$ chiếc bút hết " +
        "$44$ nghìn đồng. Tính giá mỗi quyển vở và mỗi chiếc bút.",
      steps: [
        "Gọi giá một quyển vở là $x$, một chiếc bút là $y$ (nghìn đồng, $x, y > 0$).",
        "Lập hệ $\\begin{cases} 3x + 2y = 46 \\\\ 2x + 3y = 44 \\end{cases}$.",
        "Nhân (1) với $3$, (2) với $2$ rồi trừ từng vế: $5x = 50 \\Rightarrow x = 10$; suy ra $y = 8$.",
        "Vậy vở giá $10$ nghìn đồng, bút giá $8$ nghìn đồng.",
      ],
    },
    {
      title: "Bài toán hình học",
      prompt: "Mảnh vườn hình chữ nhật có chu vi $28$ m, chiều dài hơn chiều rộng $4$ m. Tính chiều dài và chiều rộng.",
      steps: [
        "Gọi chiều dài là $x$, chiều rộng là $y$ (m, $x > y > 0$).",
        "Nửa chu vi: $x + y = 14$; chiều dài hơn rộng: $x - y = 4$.",
        "Cộng hai phương trình: $2x = 18 \\Rightarrow x = 9$; suy ra $y = 5$.",
        "Vậy chiều dài $9$ m, chiều rộng $5$ m.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Không đặt điều kiện cho ẩn (số người, giá tiền, độ dài… phải dương).",
      right: "Luôn đặt điều kiện phù hợp và đối chiếu nghiệm khi kết luận; nghiệm không thoả thì loại.",
      note: "Ví dụ số học sinh phải là số nguyên dương.",
    },
    {
      wrong: "Chỉ lập được một phương trình rồi giải.",
      right: "Bài toán hai ẩn cần <b>hai</b> phương trình lập từ hai dữ kiện khác nhau.",
      note: "Đọc kỹ đề để tìm đủ hai điều kiện.",
    },
    {
      wrong: "Tính ra $x, y$ rồi quên trả lời đúng câu hỏi của bài toán.",
      right: "Bước cuối phải <b>kết luận</b> đúng điều đề hỏi (đôi khi phải tính thêm).",
      note: "Ví dụ đề hỏi diện tích thì sau khi có hai cạnh phải nhân để ra diện tích.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Hai số có tổng $30$ và hiệu $8$. Tìm hai số đó.",
      hints: ["Gọi hai số là $x, y$ rồi lập hệ tổng và hiệu."],
      solution: "$\\begin{cases} x + y = 30 \\\\ x - y = 8 \\end{cases} \\Rightarrow x = 19,\\ y = 11$.",
    },
    {
      level: "Nhận biết",
      prompt: "Lập hệ phương trình (chưa cần giải) cho bài: 'Số $x$ hơn số $y$ là $5$ và tổng của chúng bằng $21$.'",
      hints: ["'Hơn $5$' nghĩa là $x - y = 5$; 'tổng bằng $21$' nghĩa là $x + y = 21$."],
      solution: "$\\begin{cases} x - y = 5 \\\\ x + y = 21 \\end{cases}$.",
    },
    {
      level: "Nhận biết",
      prompt: "Một lớp có $40$ học sinh, số nữ nhiều hơn số nam $6$ bạn. Tính số học sinh nam.",
      hints: ["Gọi số nam là $x$, số nữ là $y$: $x + y = 40$ và $y - x = 6$."],
      solution: "Giải hệ: $x = 17,\\ y = 23$. Vậy lớp có $17$ học sinh nam.",
    },
    {
      level: "Thông hiểu",
      prompt: "Một sân hình chữ nhật có chu vi $100$ m, chiều dài hơn chiều rộng $10$ m. Tính diện tích sân.",
      hints: ["Nửa chu vi: $x + y = 50$; chiều dài hơn rộng: $x - y = 10$.", "Tìm $x, y$ rồi tính diện tích $x \\cdot y$."],
      solution: "$x = 30,\\ y = 20$; diện tích $= 30 \\cdot 20 = 600$ m$^2$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Mua $2$ chiếc bánh và $3$ hộp sữa hết $23$ nghìn đồng; mua $3$ chiếc bánh và $2$ hộp sữa hết " +
        "$22$ nghìn đồng. Tính giá mỗi loại.",
      hints: ["Gọi giá bánh $x$, giá sữa $y$: $\\begin{cases} 2x + 3y = 23 \\\\ 3x + 2y = 22 \\end{cases}$."],
      solution: "Giải hệ: $x = 4,\\ y = 5$. Bánh giá $4$ nghìn, sữa giá $5$ nghìn đồng.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tổng hai số là $50$, số lớn gấp $4$ lần số bé. Tìm hai số.",
      hints: ["Gọi số bé $y$, số lớn $x$: $x + y = 50$ và $x = 4y$.", "Thế $x = 4y$ vào phương trình đầu."],
      solution: "$4y + y = 50 \\Rightarrow 5y = 50 \\Rightarrow y = 10,\\ x = 40$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Quãng đường AB dài $210$ km. Một ô tô đi từ A, một xe máy đi từ B, ngược chiều và khởi hành " +
        "cùng lúc, gặp nhau sau $2$ giờ. Vận tốc ô tô hơn xe máy $15$ km/h. Tính vận tốc mỗi xe.",
      hints: [
        "Sau $2$ giờ tổng quãng đường hai xe đi được $= 210$ km: $2x + 2y = 210$.",
        "Vận tốc hơn kém nhau: $x - y = 15$.",
      ],
      solution:
        "Từ $2x + 2y = 210$ có $x + y = 105$; cùng $x - y = 15 \\Rightarrow x = 60,\\ y = 45$. " +
        "Ô tô $60$ km/h, xe máy $45$ km/h.",
    },
    {
      level: "Vận dụng",
      prompt: "Hiện nay tuổi mẹ gấp $3$ lần tuổi con, tổng số tuổi hai mẹ con là $48$. Tính tuổi mỗi người.",
      hints: ["Gọi tuổi con là $x$, tuổi mẹ là $y$: $y = 3x$ và $x + y = 48$."],
      solution: "$x + 3x = 48 \\Rightarrow 4x = 48 \\Rightarrow x = 12,\\ y = 36$. Con $12$ tuổi, mẹ $36$ tuổi.",
    },
  ],

  quiz: [
    { type: "mc", q: "Hai số có tổng $12$ và hiệu $4$. Số lớn là số nào?",
      choices: ["$6$", "$8$", "$10$", "$4$"], answer: 1,
      explain: "$x + y = 12,\\ x - y = 4 \\Rightarrow x = 8$." },
    { type: "fill", q: "Hình chữ nhật có chu vi $20$ m, chiều dài hơn chiều rộng $2$ m. Chiều rộng bằng bao nhiêu mét?",
      answer: 4, explain: "$x + y = 10,\\ x - y = 2 \\Rightarrow$ chiều rộng $= 4$ m." },
    { type: "mc", q: "Một lớp có $40$ học sinh, số nữ hơn số nam $6$ bạn. Số học sinh nam là?",
      choices: ["$17$", "$23$", "$20$", "$34$"], answer: 0,
      explain: "$x + y = 40,\\ y - x = 6 \\Rightarrow x = 17$." },
  ],
});
