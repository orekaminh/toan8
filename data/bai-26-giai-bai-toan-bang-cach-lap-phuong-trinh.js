/* Bài 26. Giải bài toán bằng cách lập phương trình — Chương VII (KNTT, Tập 2) */
MATH8.registerLesson({
  id: "bai-26-giai-bai-toan-bang-cach-lap-phuong-trinh",
  chapter: "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
  order: 2,
  title: "Bài 26. Giải bài toán bằng cách lập phương trình",

  objectives: [
    "Nắm ba bước giải một bài toán bằng cách lập phương trình.",
    "Chọn ẩn hợp lí, biểu diễn các đại lượng và lập được phương trình.",
    "Giải và kết luận (đối chiếu điều kiện) cho bài toán thực tế.",
  ],

  intro: {
    text:
      "Nhiều bài toán đố sẽ dễ hơn hẳn nếu ta đặt một đại lượng chưa biết là $x$, rồi 'dịch' lời văn " +
      "thành một <b>phương trình</b>. Giải phương trình xong là có đáp số: " +
      "<b>lời văn → phương trình → đáp số</b>.",
  },

  theory: [
    {
      heading: "Ba bước giải bài toán bằng cách lập phương trình",
      html:
        "<b>Bước 1. Lập phương trình:</b> chọn ẩn và đặt điều kiện cho ẩn; biểu diễn các đại lượng chưa " +
        "biết theo ẩn; lập phương trình diễn đạt mối quan hệ.<br>" +
        "<b>Bước 2. Giải phương trình</b> vừa lập.<br>" +
        "<b>Bước 3. Kết luận:</b> kiểm tra nghiệm có thoả điều kiện không, rồi trả lời bài toán.",
    },
  ],

  visual: { type: "equation", config: { a: 2, b: 5, c: 25 } },

  examples: [
    {
      title: "Bài toán tìm số",
      prompt: "Tổng của hai số bằng $20$. Số lớn hơn số bé $4$ đơn vị. Tìm hai số đó.",
      steps: [
        "Gọi số bé là $x$ (điều kiện: $x$ là số, $x < 20$). Số lớn là $x + 4$.",
        "Tổng hai số bằng $20$: $x + (x + 4) = 20$.",
        "Giải: $2x + 4 = 20 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.",
        "Kết luận: số bé là $8$, số lớn là $12$.",
      ],
    },
    {
      title: "Bài toán hình học",
      prompt: "Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng $5$ m và chu vi bằng $50$ m. Tính các kích thước.",
      steps: [
        "Gọi chiều rộng là $x$ (m), $x > 0$. Chiều dài là $x + 5$ (m).",
        "Chu vi $= 2\\big(x + (x+5)\\big) = 50$, tức $2(2x + 5) = 50$.",
        "Giải: $2x + 5 = 25 \\Rightarrow 2x = 20 \\Rightarrow x = 10$.",
        "Kết luận: chiều rộng $10$ m, chiều dài $15$ m.",
      ],
    },
    {
      title: "Bài toán mua hàng",
      prompt: "Lan mua $3$ quyển vở cùng loại và một cây bút giá $8$ nghìn đồng, tổng cộng hết $26$ nghìn đồng. Tính giá một quyển vở.",
      steps: [
        "Gọi giá một quyển vở là $x$ (nghìn đồng), $x > 0$.",
        "Ba quyển vở và một bút: $3x + 8 = 26$.",
        "Giải: $3x = 18 \\Rightarrow x = 6$.",
        "Kết luận: mỗi quyển vở giá $6$ nghìn đồng.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Quên đặt điều kiện cho ẩn (ví dụ số tiền, độ dài phải dương).",
      right: "Luôn ghi điều kiện hợp lí cho ẩn ở Bước 1.",
      note: "Điều kiện giúp loại nghiệm vô lí ở Bước 3.",
    },
    {
      wrong: "Giải xong quên trả lời câu hỏi của đề.",
      right: "Bước 3 phải KẾT LUẬN đúng điều bài toán hỏi (và kiểm điều kiện).",
      note: "Đáp số của phương trình chưa chắc là đáp số của bài toán.",
    },
  ],

  exercises: [
    { level: "Nhận biết", prompt: "Một số $x$ cộng với $7$ thì bằng $15$. Lập phương trình tìm $x$.",
      hints: ["'Cộng với 7' là $x + 7$; 'bằng 15' là $= 15$."],
      solution: "$x + 7 = 15 \\Rightarrow x = 8$." },
    { level: "Nhận biết", prompt: "Gấp đôi một số rồi bớt $3$ thì được $11$. Tìm số đó.",
      hints: ["Gọi số đó là $x$: $2x - 3 = 11$."],
      solution: "$2x - 3 = 11 \\Rightarrow 2x = 14 \\Rightarrow x = 7$." },
    { level: "Nhận biết", prompt: "Một hình chữ nhật có chiều dài gấp $3$ lần chiều rộng $x$. Viết biểu thức chu vi theo $x$.",
      hints: ["Chiều dài là $3x$; chu vi $= 2(3x + x)$ (gấp đôi tổng dài và rộng)."],
      solution: "Chu vi $= 2(3x + x) = 8x$." },
    { level: "Thông hiểu", prompt: "Tổng hai số bằng $30$, số này gấp đôi số kia. Tìm hai số.",
      hints: ["Gọi số bé là $x$, số lớn là $2x$.", "$x + 2x = 30$."],
      solution: "$3x = 30 \\Rightarrow x = 10$. Hai số là $10$ và $20$." },
    { level: "Thông hiểu", prompt: "Một mảnh vườn hình chữ nhật có chu vi $40$ m, chiều dài hơn chiều rộng $6$ m. Tìm kích thước.",
      hints: ["Rộng $x$, dài $x+6$; nửa chu vi $= x + (x+6) = 20$."],
      solution: "$2x + 6 = 20 \\Rightarrow x = 7$. Rộng $7$ m, dài $13$ m." },
    { level: "Thông hiểu", prompt: "An có nhiều hơn Bình $5$ viên bi. Cả hai có $23$ viên. Hỏi mỗi bạn có bao nhiêu viên?",
      hints: ["Gọi số bi của Bình là $x$; An là $x + 5$.", "$x + (x+5) = 23$."],
      solution: "$2x + 5 = 23 \\Rightarrow x = 9$. Bình $9$ viên, An $14$ viên." },
    { level: "Vận dụng", prompt:
        "Một người mua $5$ kg gạo và $2$ kg đường hết $115$ nghìn đồng. Biết $1$ kg đường giá $20$ nghìn đồng. " +
        "Hỏi giá $1$ kg gạo?",
      hints: ["Gọi giá $1$ kg gạo là $x$ (nghìn): $5x + 2 \\cdot 20 = 115$.", "Giải phương trình."],
      solution: "$5x + 40 = 115 \\Rightarrow 5x = 75 \\Rightarrow x = 15$. Một kg gạo giá $15$ nghìn đồng." },
    { level: "Vận dụng", prompt:
        "Hiện nay mẹ hơn con $24$ tuổi. Sau $6$ năm nữa, tuổi mẹ gấp $3$ lần tuổi con. Tính tuổi con hiện nay.",
      hints: [
        "Gọi tuổi con hiện nay là $x$; tuổi mẹ là $x + 24$.",
        "Sau $6$ năm: con $x+6$, mẹ $x+30$, và $x + 30 = 3(x + 6)$.",
      ],
      solution: "$x + 30 = 3(x+6) = 3x + 18 \\Rightarrow 30 - 18 = 2x \\Rightarrow x = 6$. Con hiện $6$ tuổi." },
  ],

  quiz: [
    { type: "fill", q: "Tổng hai số là $20$, số lớn hơn số bé $4$. Số bé là bao nhiêu?", answer: 8, explain: "$x + (x+4) = 20 \\Rightarrow x = 8$." },
    { type: "fill", q: "Hình chữ nhật có chu vi $50$ m, chiều dài hơn rộng $5$ m. Chiều rộng (m) là?", answer: 10, explain: "$2(2x+5) = 50 \\Rightarrow x = 10$." },
    { type: "fill", q: "Lan mua $3$ quyển vở và $1$ cây bút giá $8$ nghìn, hết $26$ nghìn. Giá $1$ quyển vở (nghìn đồng)?", answer: 6, explain: "$3x + 8 = 26 \\Rightarrow x = 6$." },
  ],
});
