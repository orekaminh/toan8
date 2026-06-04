/* Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ
   Chương VII (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-24-tan-so-ghep-nhom",
  chapter: "Chương VII. Tần số và tần số tương đối",
  order: 3,
  title: "Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ",

  objectives: [
    "Hiểu vì sao cần ghép nhóm dữ liệu thành các khoảng (nửa khoảng $[a; b)$).",
    "Lập được bảng tần số ghép nhóm và bảng tần số tương đối ghép nhóm.",
    "Tính tần số tương đối của mỗi nhóm và vẽ được biểu đồ cột (biểu đồ tần số ghép nhóm).",
  ],

  intro: {
    text:
      "Cô giáo đo chiều cao (đơn vị: cm) của $40$ học sinh trong lớp. Vì các số liệu nhiều và rất " +
      "khác nhau, nếu kẻ bảng cho từng giá trị thì bảng sẽ rất dài và khó đọc. Khi đó ta <b>ghép nhóm</b> " +
      "dữ liệu thành các khoảng, chẳng hạn $[150; 155)$, $[155; 160)$, $\\ldots$, rồi đếm xem mỗi khoảng " +
      "có bao nhiêu học sinh. Cách làm này giúp ta nhìn thấy <b>bức tranh tổng thể</b> về chiều cao của lớp.",
    math: "[150; 155),\\ [155; 160),\\ [160; 165),\\ [165; 170)",
  },

  theory: [
    {
      heading: "1. Ghép nhóm dữ liệu",
      html:
        "Khi dữ liệu có <b>nhiều giá trị</b> hoặc là số <b>liên tục</b> (chiều cao, cân nặng, thời gian, " +
        "$\\ldots$), ta chia miền giá trị thành các <b>nhóm</b> là những <b>nửa khoảng</b> $[a; b)$ có độ " +
        "rộng bằng nhau.<br>" +
        "Nửa khoảng $[a; b)$ gồm các số $x$ thoả mãn $a \\le x < b$: <b>tính</b> đầu mút trái $a$ nhưng " +
        "<b>không tính</b> đầu mút phải $b$. Nhờ vậy mỗi số liệu chỉ rơi vào <b>đúng một</b> nhóm.",
      formula: "[a; b) = \\{\\, x \\mid a \\le x < b \\,\\}",
    },
    {
      heading: "2. Bảng tần số ghép nhóm",
      html:
        "<b>Tần số</b> của một nhóm là <b>số giá trị</b> của mẫu số liệu rơi vào nhóm đó. Ta liệt kê các " +
        "nhóm cùng tần số tương ứng vào một bảng, gọi là <b>bảng tần số ghép nhóm</b>.<br>" +
        "Tổng tất cả các tần số bằng cỡ mẫu $N$ (tổng số giá trị).",
      formula: "m_1 + m_2 + \\ldots + m_k = N",
    },
    {
      heading: "3. Tần số tương đối ghép nhóm và biểu đồ",
      html:
        "<b>Tần số tương đối</b> của một nhóm là tỉ số giữa tần số của nhóm đó và cỡ mẫu $N$, thường viết " +
        "dưới dạng <b>phần trăm</b>.<br>" +
        "Từ bảng, ta vẽ <b>biểu đồ cột</b> (biểu đồ tần số ghép nhóm): trục ngang ghi các nhóm, trục đứng " +
        "ghi tần số (hoặc tần số tương đối); mỗi nhóm là một cột có chiều cao bằng tần số của nó.",
      formula: "f_i = \\dfrac{m_i}{N} \\cdot 100\\%",
    },
  ],

  visual: {
    type: "chart",
    config: {
      title: "Chiều cao học sinh theo nhóm (cm)",
      labels: ["[150;155)", "[155;160)", "[160;165)", "[165;170)"],
      values: [6, 12, 15, 7],
      unit: "học sinh",
      views: ["table", "bar"],
    },
  },

  examples: [
    {
      title: "Lập bảng tần số ghép nhóm",
      prompt:
        "Chiều cao (cm) của $40$ học sinh được ghép thành $4$ nhóm với tần số: $[150; 155)$ có $6$; " +
        "$[155; 160)$ có $12$; $[160; 165)$ có $15$; $[165; 170)$ có $7$. Hãy lập bảng tần số ghép nhóm và " +
        "kiểm tra tổng tần số.",
      steps: [
        "Sắp các nhóm theo thứ tự tăng dần cùng tần số: $[150;155) \\to 6$; $[155;160) \\to 12$; $[160;165) \\to 15$; $[165;170) \\to 7$.",
        "Tính tổng tần số: $6 + 12 + 15 + 7 = 40$.",
        "Tổng tần số bằng cỡ mẫu $N = 40$ nên bảng đã lập đúng.",
      ],
    },
    {
      title: "Tính tần số tương đối của các nhóm",
      prompt: "Với mẫu chiều cao ở trên $(N = 40)$, hãy tính tần số tương đối (%) của từng nhóm.",
      steps: [
        "Nhóm $[150;155)$: $f_1 = \\dfrac{6}{40} \\cdot 100\\% = 15\\%$.",
        "Nhóm $[155;160)$: $f_2 = \\dfrac{12}{40} \\cdot 100\\% = 30\\%$.",
        "Nhóm $[160;165)$: $f_3 = \\dfrac{15}{40} \\cdot 100\\% = 37{,}5\\%$.",
        "Nhóm $[165;170)$: $f_4 = \\dfrac{7}{40} \\cdot 100\\% = 17{,}5\\%$.",
        "Kiểm tra tổng: $15\\% + 30\\% + 37{,}5\\% + 17{,}5\\% = 100\\%$.",
      ],
    },
    {
      title: "Đọc biểu đồ cột",
      prompt:
        "Nhìn biểu đồ cột của mẫu chiều cao, hãy cho biết nhóm nào đông học sinh nhất và có bao nhiêu " +
        "học sinh cao từ $160$ cm trở lên.",
      steps: [
        "Cột cao nhất ứng với nhóm $[160; 165)$ với tần số $15$ → đây là nhóm đông nhất.",
        "Học sinh cao từ $160$ cm trở lên thuộc hai nhóm $[160;165)$ và $[165;170)$.",
        "Số học sinh đó là $15 + 7 = 22$ (học sinh).",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Xếp một học sinh cao đúng $155$ cm vào nhóm $[150; 155)$.",
      right: "Nửa khoảng $[150; 155)$ <b>không</b> chứa $155$; giá trị $155$ thuộc nhóm $[155; 160)$.",
      note: "Đầu mút trái được tính, đầu mút phải không được tính: $a \\le x < b$.",
    },
    {
      wrong: "Tính tần số tương đối bằng cách lấy tần số nhóm chia cho số nhóm.",
      right: "Tần số tương đối của một nhóm $= \\dfrac{m}{N} \\cdot 100\\%$, trong đó $m$ là tần số của nhóm và $N$ là <b>cỡ mẫu</b> (tổng tần số).",
      note: "Ở ví dụ chiều cao, $N = 40$ chứ không phải $4$ nhóm.",
    },
    {
      wrong: "Vẽ các cột có độ rộng khác nhau hoặc tách rời không đều cho các nhóm bằng nhau.",
      right: "Các nhóm có cùng độ rộng nên các cột được vẽ <b>sát nhau</b> và có <b>bề rộng bằng nhau</b>.",
      note: "Chiều cao mỗi cột mới thể hiện tần số của nhóm.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Số $160$ thuộc nhóm nào trong các nhóm $[150;155)$, $[155;160)$, $[160;165)$, $[165;170)$?",
      hints: ["Nửa khoảng $[a; b)$ chứa $x$ khi $a \\le x < b$."],
      solution: "Vì $160 \\le 160 < 165$ nên $160$ thuộc nhóm $[160; 165)$ (nhóm $[155;160)$ không chứa $160$).",
    },
    {
      level: "Nhận biết",
      prompt:
        "Một mẫu được ghép thành $4$ nhóm với tần số $6$; $12$; $15$; $7$. Cỡ mẫu $N$ bằng bao nhiêu?",
      hints: ["Cỡ mẫu bằng tổng tất cả các tần số."],
      solution: "$N = 6 + 12 + 15 + 7 = 40$.",
    },
    {
      level: "Nhận biết",
      prompt: "Trong biểu đồ cột chiều cao, cột nào cao nhất ứng với nhóm nào?",
      hints: ["Cột cao nhất ứng với nhóm có tần số lớn nhất."],
      solution: "Tần số lớn nhất là $15$ ứng với nhóm $[160; 165)$ nên cột này cao nhất.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính tần số tương đối (%) của nhóm $[155; 160)$ biết tần số là $12$ và $N = 40$.",
      hints: ["Áp dụng $f = \\dfrac{m}{N} \\cdot 100\\%$."],
      solution: "$f = \\dfrac{12}{40} \\cdot 100\\% = 30\\%$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Có bao nhiêu học sinh cao dưới $160$ cm trong mẫu chiều cao $(6; 12; 15; 7)$?",
      hints: ["Học sinh cao dưới $160$ cm thuộc hai nhóm $[150;155)$ và $[155;160)$."],
      solution: "Số học sinh đó là $6 + 12 = 18$ (học sinh).",
    },
    {
      level: "Thông hiểu",
      prompt: "Tính tần số tương đối (%) của nhóm $[165; 170)$ biết tần số là $7$ và $N = 40$.",
      hints: ["Lấy tần số chia cho $N$ rồi nhân $100\\%$."],
      solution: "$f = \\dfrac{7}{40} \\cdot 100\\% = 17{,}5\\%$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một nhóm có tần số tương đối $25\\%$ trong mẫu cỡ $N = 40$. Hỏi nhóm đó có bao nhiêu giá trị?",
      hints: ["Từ $f = \\dfrac{m}{N} \\cdot 100\\%$ hãy rút ra $m$.", "Thay $f = 25\\%$ và $N = 40$."],
      solution: "$m = \\dfrac{f \\cdot N}{100} = \\dfrac{25 \\cdot 40}{100} = 10$ (giá trị).",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một mẫu cỡ $N = 50$ ghép thành $4$ nhóm có tần số $8$; $x$; $20$; $10$. Tìm $x$ rồi tính tần số " +
        "tương đối (%) của nhóm có tần số $x$.",
      hints: ["Tổng các tần số phải bằng $N = 50$.", "Sau khi tìm $x$, dùng $f = \\dfrac{x}{N} \\cdot 100\\%$."],
      solution:
        "$8 + x + 20 + 10 = 50 \\Rightarrow x = 12$. Tần số tương đối: $\\dfrac{12}{50} \\cdot 100\\% = 24\\%$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Giá trị $165$ thuộc nhóm nào sau đây?",
      choices: ["$[155; 160)$", "$[160; 165)$", "$[165; 170)$", "Không thuộc nhóm nào"], answer: 2,
      explain: "Vì $165 \\le 165 < 170$ nên $165$ thuộc $[165; 170)$; nhóm $[160;165)$ không chứa $165$." },
    { type: "fill", q: "Mẫu chiều cao có tần số $6; 12; 15; 7$. Tần số tương đối (%) của nhóm $[160;165)$ là bao nhiêu? (Chỉ điền số, ví dụ $37{,}5$)",
      answer: 37.5, explain: "$\\dfrac{15}{40} \\cdot 100\\% = 37{,}5\\%$." },
    { type: "mc", q: "Tổng các tần số tương đối của tất cả các nhóm luôn bằng:",
      choices: ["$50\\%$", "$100\\%$", "Cỡ mẫu $N$", "Số nhóm"], answer: 1,
      explain: "Vì tổng các tần số bằng $N$ nên tổng các tần số tương đối là $\\dfrac{N}{N} \\cdot 100\\% = 100\\%$." },
  ],
});
