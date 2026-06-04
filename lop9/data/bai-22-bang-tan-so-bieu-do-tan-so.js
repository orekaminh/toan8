/* Bài 22. Bảng tần số và biểu đồ tần số
   Chương VII (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-22-bang-tan-so-bieu-do-tan-so",
  chapter: "Chương VII. Tần số và tần số tương đối",
  order: 1,
  title: "Bài 22. Bảng tần số và biểu đồ tần số",

  objectives: [
    "Hiểu khái niệm tần số của một giá trị và lập được bảng tần số.",
    "Kiểm tra được tổng các tần số bằng cỡ mẫu $N$.",
    "Đọc và vẽ được biểu đồ tần số (biểu đồ cột, biểu đồ đoạn thẳng), tìm giá trị có tần số lớn nhất.",
  ],

  intro: {
    text:
      "Sau một bài kiểm tra, cô giáo muốn biết trong lớp có bao nhiêu bạn được $5$ điểm, bao nhiêu bạn " +
      "được $10$ điểm... Số lần một điểm số xuất hiện được gọi là <b>tần số</b> của điểm đó. Sắp xếp các " +
      "giá trị cùng tần số của chúng vào một bảng, ta được <b>bảng tần số</b>; vẽ thành cột hoặc đoạn " +
      "thẳng, ta được <b>biểu đồ tần số</b> giúp nhìn dữ liệu một cách trực quan.",
    math: "N = m_1 + m_2 + \\cdots + m_k",
  },

  theory: [
    {
      heading: "1. Tần số và bảng tần số",
      html:
        "Giả sử một mẫu dữ liệu có các giá trị khác nhau là $x_1, x_2, \\ldots, x_k$. <b>Tần số</b> của " +
        "giá trị $x_i$ là số lần $x_i$ xuất hiện trong mẫu, kí hiệu là $m_i$.<br>" +
        "<b>Bảng tần số</b> gồm hai dòng (hoặc hai cột): một dòng ghi các giá trị $x_i$, dòng còn lại ghi " +
        "các tần số $m_i$ tương ứng. <b>Tổng tất cả các tần số</b> bằng số phần tử của mẫu, gọi là " +
        "<b>cỡ mẫu</b> $N$.",
      formula: "N = m_1 + m_2 + \\cdots + m_k",
    },
    {
      heading: "2. Biểu đồ tần số",
      html:
        "<b>Biểu đồ tần số</b> biểu diễn trực quan bảng tần số. Có hai dạng thường gặp:<br>" +
        "• <b>Biểu đồ cột</b>: mỗi giá trị ứng với một cột, chiều cao của cột bằng tần số của giá trị đó.<br>" +
        "• <b>Biểu đồ đoạn thẳng</b>: với mỗi giá trị, đánh dấu một điểm có tung độ bằng tần số rồi nối " +
        "các điểm liên tiếp bằng các đoạn thẳng.",
    },
    {
      heading: "3. Giá trị có tần số lớn nhất (mốt)",
      html:
        "Giá trị có <b>tần số lớn nhất</b> trong mẫu được gọi là <b>mốt</b>. Nhìn vào biểu đồ tần số, mốt " +
        "chính là giá trị ứng với <b>cột cao nhất</b> (hay điểm cao nhất). Mốt cho biết giá trị xuất hiện " +
        "<b>nhiều nhất</b> trong mẫu dữ liệu.",
    },
  ],

  visual: {
    type: "chart",
    config: {
      title: "Điểm kiểm tra Toán của một lớp",
      labels: ["5", "6", "7", "8", "9", "10"],
      values: [2, 4, 8, 10, 7, 3],
      unit: "học sinh",
      views: ["table", "bar"],
    },
  },

  examples: [
    {
      title: "Lập bảng tần số",
      prompt:
        "Điểm kiểm tra của $10$ bạn là: $7, 8, 7, 9, 8, 7, 10, 8, 9, 8$. Hãy lập bảng tần số.",
      steps: [
        "Liệt kê các giá trị khác nhau: $7, 8, 9, 10$.",
        "Đếm số lần mỗi giá trị xuất hiện: $7$ có $3$ lần; $8$ có $4$ lần; $9$ có $2$ lần; $10$ có $1$ lần.",
        "Bảng tần số: giá trị $7, 8, 9, 10$ ứng với tần số $3, 4, 2, 1$.",
        "Kiểm tra cỡ mẫu: $3 + 4 + 2 + 1 = 10 = N$ ✓.",
      ],
    },
    {
      title: "Tìm cỡ mẫu và mốt từ bảng tần số",
      prompt:
        "Cho bảng tần số: giá trị $5, 6, 7, 8$ với tần số lần lượt $4, 6, 9, 5$. Tìm cỡ mẫu $N$ và mốt.",
      steps: [
        "Cỡ mẫu là tổng các tần số: $N = 4 + 6 + 9 + 5 = 24$.",
        "Tần số lớn nhất là $9$, ứng với giá trị $7$.",
        "Vậy cỡ mẫu $N = 24$ và mốt là $7$.",
      ],
    },
    {
      title: "Đọc biểu đồ cột",
      prompt:
        "Biểu đồ cột cho điểm của lớp có các cột tại $5, 6, 7, 8, 9, 10$ với chiều cao $2, 4, 8, 10, 7, 3$. " +
        "Có bao nhiêu học sinh và điểm nào nhiều bạn đạt nhất?",
      steps: [
        "Chiều cao mỗi cột chính là tần số của điểm tương ứng.",
        "Tổng số học sinh: $N = 2 + 4 + 8 + 10 + 7 + 3 = 34$.",
        "Cột cao nhất có chiều cao $10$, ứng với điểm $8$.",
        "Vậy lớp có $34$ học sinh và điểm $8$ là điểm nhiều bạn đạt nhất (mốt $= 8$).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Nhầm <b>tần số</b> của một giá trị với chính <b>giá trị</b> đó.",
      right: "Giá trị là điểm số (ví dụ $8$), còn tần số là <b>số lần</b> điểm đó xuất hiện.",
      note: "Trong bảng tần số, hai dòng có ý nghĩa khác nhau, đừng đọc lẫn.",
    },
    {
      wrong: "Cho rằng cỡ mẫu $N$ bằng số các giá trị khác nhau.",
      right: "Cỡ mẫu $N$ là <b>tổng tất cả các tần số</b>, không phải số giá trị khác nhau.",
      note: "Luôn cộng các tần số lại để kiểm tra $N$.",
    },
    {
      wrong: "Tìm mốt bằng cách lấy giá trị lớn nhất trong mẫu.",
      right: "Mốt là giá trị có <b>tần số lớn nhất</b>, không phải giá trị lớn nhất.",
      note: "Hãy so sánh các tần số $m_i$, không so sánh các giá trị $x_i$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt:
        "Trong dãy số liệu $3, 5, 3, 4, 3, 5$, tần số của giá trị $3$ là bao nhiêu?",
      hints: ["Đếm số lần giá trị $3$ xuất hiện."],
      solution: "Giá trị $3$ xuất hiện $3$ lần, nên tần số của $3$ là $3$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Một bảng tần số có các tần số là $5, 7, 4, 4$. Cỡ mẫu $N$ bằng bao nhiêu?",
      hints: ["Cỡ mẫu bằng tổng các tần số."],
      solution: "$N = 5 + 7 + 4 + 4 = 20$.",
    },
    {
      level: "Nhận biết",
      prompt:
        "Cho bảng tần số: giá trị $1, 2, 3, 4$ với tần số $6, 9, 5, 2$. Giá trị nào là mốt?",
      hints: ["Mốt là giá trị có tần số lớn nhất."],
      solution: "Tần số lớn nhất là $9$, ứng với giá trị $2$. Vậy mốt là $2$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Số con trong $12$ gia đình là: $2, 1, 2, 3, 2, 1, 2, 2, 3, 1, 2, 1$. Hãy lập bảng tần số.",
      hints: ["Các giá trị khác nhau là $1, 2, 3$.", "Đếm số lần mỗi giá trị xuất hiện."],
      solution:
        "Giá trị $1$ có $4$ lần; $2$ có $6$ lần; $3$ có $2$ lần. Kiểm tra: $4 + 6 + 2 = 12 = N$ ✓.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Cho bảng tần số: giá trị $4, 5, 6, 7, 8$ với tần số $3, x, 6, 4, 2$. Biết cỡ mẫu $N = 20$, tìm $x$.",
      hints: ["Tổng các tần số bằng $N = 20$.", "Lập phương trình rồi giải tìm $x$."],
      solution: "$3 + x + 6 + 4 + 2 = 20 \\Rightarrow x + 15 = 20 \\Rightarrow x = 5$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Biểu đồ đoạn thẳng có các điểm tại giá trị $1, 2, 3, 4$ với tung độ $5, 8, 6, 1$. " +
        "Tìm cỡ mẫu và mốt của mẫu.",
      hints: ["Tung độ mỗi điểm là tần số của giá trị tương ứng.", "Cộng các tần số để có $N$."],
      solution:
        "Cỡ mẫu $N = 5 + 8 + 6 + 1 = 20$. Tần số lớn nhất là $8$ tại giá trị $2$, nên mốt là $2$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Điểm thi của một nhóm $25$ bạn cho bảng tần số: điểm $6, 7, 8, 9, 10$ với tần số $4, 6, x, 5, 2$. " +
        "Tìm $x$ và cho biết điểm nào có nhiều bạn đạt nhất.",
      hints: ["Dùng $N = 25$ để lập phương trình tìm $x$.", "So sánh các tần số để tìm mốt."],
      solution:
        "$4 + 6 + x + 5 + 2 = 25 \\Rightarrow x + 17 = 25 \\Rightarrow x = 8$. Tần số lớn nhất là $8$ tại điểm $8$, " +
        "nên điểm $8$ có nhiều bạn đạt nhất.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Cho mẫu dữ liệu: $5, 7, 5, 8, 7, 5, 8, 7, 5, 8, 7$. Lập bảng tần số, tìm cỡ mẫu và mốt.",
      hints: ["Các giá trị khác nhau là $5, 7, 8$.", "Đếm tần số rồi cộng lại để kiểm tra $N$."],
      solution:
        "Giá trị $5$ có $4$ lần; $7$ có $4$ lần; $8$ có $3$ lần. Cỡ mẫu $N = 4 + 4 + 3 = 11$. " +
        "Tần số lớn nhất là $4$, đạt tại cả $5$ và $7$, nên mẫu có hai mốt là $5$ và $7$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Tần số của một giá trị là gì?",
      choices: [
        "Giá trị lớn nhất trong mẫu",
        "Số lần giá trị đó xuất hiện trong mẫu",
        "Tổng tất cả các giá trị",
        "Số giá trị khác nhau của mẫu",
      ], answer: 1,
      explain: "Tần số của một giá trị là số lần giá trị đó xuất hiện trong mẫu dữ liệu." },
    { type: "fill", q: "Một bảng tần số có các tần số là $3, 5, 7, 5$. Cỡ mẫu $N$ bằng bao nhiêu?",
      answer: 20, explain: "$N = 3 + 5 + 7 + 5 = 20$." },
    { type: "mc", q: "Cho bảng tần số: giá trị $5, 6, 7, 8, 9, 10$ với tần số $2, 4, 8, 10, 7, 3$. Mốt của mẫu là giá trị nào?",
      choices: ["$7$", "$8$", "$10$", "$6$"], answer: 1,
      explain: "Tần số lớn nhất là $10$, ứng với giá trị $8$, nên mốt là $8$." },
  ],
});
