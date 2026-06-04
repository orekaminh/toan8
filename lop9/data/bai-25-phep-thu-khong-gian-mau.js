/* Bài 25. Phép thử ngẫu nhiên và không gian mẫu
   Chương VIII (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-25-phep-thu-khong-gian-mau",
  chapter: "Chương VIII. Xác suất của biến cố trong một số mô hình xác suất đơn giản",
  order: 1,
  title: "Bài 25. Phép thử ngẫu nhiên và không gian mẫu",

  objectives: [
    "Nhận biết phép thử ngẫu nhiên và mô tả được các kết quả có thể xảy ra.",
    "Liệt kê được không gian mẫu $\\Omega$ và đếm số phần tử $n(\\Omega)$.",
    "Hiểu biến cố là một tập con của không gian mẫu.",
  ],

  intro: {
    text:
      "Khi gieo một con xúc xắc, bạn không thể biết trước mặt nào sẽ xuất hiện — đó là một hành động " +
      "mang tính <b>ngẫu nhiên</b>. Tuy không đoán được kết quả, ta vẫn biết chắc kết quả sẽ là một " +
      "trong các số $1, 2, 3, 4, 5, 6$. Tập hợp tất cả các kết quả có thể đó được gọi là " +
      "<b>không gian mẫu</b>, kí hiệu là $\\Omega$.",
    math: "\\Omega = \\{1; 2; 3; 4; 5; 6\\}",
  },

  theory: [
    {
      heading: "1. Phép thử ngẫu nhiên",
      html:
        "<b>Phép thử ngẫu nhiên</b> (gọi tắt là <b>phép thử</b>) là một hành động, một thí nghiệm mà ta " +
        "<b>không thể đoán trước</b> được kết quả của nó, nhưng có thể xác định được <b>tất cả</b> các kết " +
        "quả có thể xảy ra.<br>" +
        "Ví dụ: gieo một con xúc xắc, tung một đồng xu, rút một tấm thẻ từ hộp... đều là các phép thử ngẫu nhiên.",
    },
    {
      heading: "2. Không gian mẫu",
      html:
        "<b>Không gian mẫu</b> của một phép thử là <b>tập hợp tất cả các kết quả có thể xảy ra</b> của phép " +
        "thử đó, kí hiệu là $\\Omega$ (đọc là ô-mê-ga).<br>" +
        "Số phần tử của không gian mẫu được kí hiệu là $n(\\Omega)$. Đây chính là số kết quả có thể của phép thử.<br>" +
        "Chẳng hạn, khi gieo một con xúc xắc thì $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ nên $n(\\Omega) = 6$.",
      formula: "\\Omega = \\{1; 2; 3; 4; 5; 6\\} \\Rightarrow n(\\Omega) = 6",
    },
    {
      heading: "3. Biến cố",
      html:
        "Mỗi <b>biến cố</b> liên quan đến phép thử là một <b>tập con</b> của không gian mẫu $\\Omega$. Các " +
        "phần tử của tập con đó là những kết quả <b>làm cho biến cố xảy ra</b> (gọi là các kết quả thuận lợi).<br>" +
        "Ví dụ, với phép thử gieo xúc xắc, biến cố \"số chấm là số chẵn\" là tập con $\\{2; 4; 6\\}$ của $\\Omega$.",
    },
  ],

  visual: {
    type: "probability",
    config: {
      outcomes: ["1", "2", "3", "4", "5", "6"],
      favorable: ["2", "4", "6"],
      favLabel: "mặt chẵn",
    },
  },

  examples: [
    {
      title: "Liệt kê không gian mẫu khi tung đồng xu",
      prompt: "Tung một đồng xu một lần (S là mặt sấp, N là mặt ngửa). Hãy mô tả không gian mẫu và đếm $n(\\Omega)$.",
      steps: [
        "Khi tung một đồng xu, kết quả chỉ có thể là mặt sấp $(S)$ hoặc mặt ngửa $(N)$.",
        "Không gian mẫu là $\\Omega = \\{S; N\\}$.",
        "Số phần tử: $n(\\Omega) = 2$.",
      ],
    },
    {
      title: "Tung hai đồng xu",
      prompt: "Tung đồng thời hai đồng xu (mỗi đồng có hai mặt $S, N$). Hãy liệt kê không gian mẫu và đếm $n(\\Omega)$.",
      steps: [
        "Đồng xu thứ nhất có thể là $S$ hoặc $N$; ứng với mỗi trường hợp, đồng xu thứ hai lại có thể là $S$ hoặc $N$.",
        "Ghép từng cặp kết quả, ta được $\\Omega = \\{SS; SN; NS; NN\\}$.",
        "Số phần tử: $n(\\Omega) = 4$.",
      ],
    },
    {
      title: "Xác định một biến cố",
      prompt: "Gieo một con xúc xắc. Hãy viết tập hợp các kết quả thuận lợi cho biến cố $A$: \"số chấm xuất hiện lớn hơn $4$\".",
      steps: [
        "Không gian mẫu là $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$.",
        "Các số lớn hơn $4$ trong $\\Omega$ là $5$ và $6$.",
        "Vậy biến cố $A = \\{5; 6\\}$, là một tập con của $\\Omega$, có $2$ kết quả thuận lợi.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Cho rằng \"tính tổng $2 + 3$\" là một phép thử ngẫu nhiên.",
      right: "Phép thử ngẫu nhiên là hành động <b>không đoán trước</b> được kết quả; còn $2 + 3 = 5$ luôn cho cùng một kết quả.",
      note: "Hãy hỏi: kết quả có thể thay đổi mỗi lần thực hiện không?",
    },
    {
      wrong: "Khi tung hai đồng xu, viết $\\Omega = \\{SS; SN; NN\\}$ và kết luận $n(\\Omega) = 3$.",
      right: "Phải phân biệt thứ tự hai đồng xu: $\\Omega = \\{SS; SN; NS; NN\\}$ nên $n(\\Omega) = 4$.",
      note: "$SN$ (đồng 1 sấp, đồng 2 ngửa) khác $NS$ (đồng 1 ngửa, đồng 2 sấp).",
    },
    {
      wrong: "Hiểu biến cố là một con số (ví dụ biến cố \"chẵn\" $= 3$).",
      right: "Biến cố là một <b>tập con</b> của $\\Omega$; biến cố \"số chẵn\" là tập $\\{2; 4; 6\\}$.",
      note: "Số $3$ ở đây chỉ là số kết quả thuận lợi, không phải bản thân biến cố.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Trong các hành động sau, hành động nào là phép thử ngẫu nhiên: (a) gieo một con xúc xắc; (b) tính $5 \\times 4$; (c) rút ngẫu nhiên một quân bài từ bộ bài?",
      hints: ["Phép thử ngẫu nhiên là hành động không đoán trước được kết quả."],
      solution: "Các phép thử ngẫu nhiên là (a) và (c). (b) không phải vì $5 \\times 4 = 20$ luôn cho kết quả cố định.",
    },
    {
      level: "Nhận biết",
      prompt: "Gieo một con xúc xắc một lần. Hãy viết không gian mẫu $\\Omega$ và cho biết $n(\\Omega)$.",
      hints: ["Các kết quả là số chấm có thể xuất hiện trên mặt xúc xắc."],
      solution: "$\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ nên $n(\\Omega) = 6$.",
    },
    {
      level: "Nhận biết",
      prompt: "Tung một đồng xu một lần ($S$: sấp, $N$: ngửa). Viết không gian mẫu và đếm số phần tử $n(\\Omega)$.",
      hints: ["Đồng xu chỉ có hai mặt."],
      solution: "$\\Omega = \\{S; N\\}$, do đó $n(\\Omega) = 2$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Một hộp có $4$ tấm thẻ ghi số $1, 2, 3, 4$. Rút ngẫu nhiên một tấm thẻ. Hãy viết không gian mẫu và viết biến cố $B$: \"rút được thẻ ghi số chẵn\".",
      hints: ["Liệt kê tất cả số ghi trên thẻ.", "Số chẵn trong các số đó là những số nào?"],
      solution: "$\\Omega = \\{1; 2; 3; 4\\}$, $n(\\Omega) = 4$. Biến cố $B = \\{2; 4\\}$ có $2$ kết quả thuận lợi.",
    },
    {
      level: "Thông hiểu",
      prompt: "Tung đồng thời hai đồng xu. Hãy liệt kê không gian mẫu và viết biến cố $C$: \"cả hai đồng xu cùng xuất hiện một mặt\".",
      hints: ["Mỗi đồng có thể là $S$ hoặc $N$, có phân biệt thứ tự.", "\"Cùng một mặt\" nghĩa là $SS$ hoặc $NN$."],
      solution: "$\\Omega = \\{SS; SN; NS; NN\\}$, $n(\\Omega) = 4$. Biến cố $C = \\{SS; NN\\}$ có $2$ kết quả thuận lợi.",
    },
    {
      level: "Thông hiểu",
      prompt: "Gieo một con xúc xắc. Viết tập hợp các kết quả thuận lợi cho biến cố $D$: \"số chấm là số nguyên tố\".",
      hints: ["Số nguyên tố là số tự nhiên lớn hơn $1$ chỉ chia hết cho $1$ và chính nó.", "Xét trong $\\{1; 2; 3; 4; 5; 6\\}$."],
      solution: "Các số nguyên tố trong $\\Omega$ là $2, 3, 5$. Vậy $D = \\{2; 3; 5\\}$ có $3$ kết quả thuận lợi.",
    },
    {
      level: "Vận dụng",
      prompt: "Một hộp có $3$ quả bóng màu đỏ (Đ), xanh (X), vàng (V). Lấy ngẫu nhiên một quả, ghi màu rồi trả lại hộp, sau đó lấy ngẫu nhiên một quả nữa. Hãy liệt kê không gian mẫu và cho biết $n(\\Omega)$.",
      hints: ["Lần một có $3$ khả năng; ứng với mỗi khả năng đó, lần hai lại có $3$ khả năng.", "Ghép từng cặp (màu lần 1; màu lần 2)."],
      solution:
        "$\\Omega = \\{$ĐĐ; ĐX; ĐV; XĐ; XX; XV; VĐ; VX; VV$\\}$. Có $3 \\times 3 = 9$ kết quả, nên $n(\\Omega) = 9$.",
    },
    {
      level: "Vận dụng",
      prompt: "Tung một đồng xu, sau đó gieo một con xúc xắc. Hãy đếm số phần tử của không gian mẫu $n(\\Omega)$ và viết biến cố $E$: \"đồng xu ra mặt ngửa và xúc xắc ra số $6$\".",
      hints: ["Mỗi kết quả là một cặp (mặt đồng xu; số chấm xúc xắc).", "Đồng xu có $2$ khả năng, xúc xắc có $6$ khả năng."],
      solution:
        "Mỗi kết quả có dạng (mặt đồng xu; số chấm), nên $n(\\Omega) = 2 \\times 6 = 12$. Biến cố $E = \\{(N; 6)\\}$ chỉ có $1$ kết quả thuận lợi.",
    },
  ],

  quiz: [
    { type: "mc", q: "Khi gieo một con xúc xắc, số phần tử của không gian mẫu $n(\\Omega)$ bằng bao nhiêu?",
      choices: ["$2$", "$6$", "$12$", "$36$"], answer: 1,
      explain: "$\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ có $6$ phần tử nên $n(\\Omega) = 6$." },
    { type: "fill", q: "Tung đồng thời hai đồng xu. Số phần tử của không gian mẫu $n(\\Omega)$ là bao nhiêu?",
      answer: 4, explain: "$\\Omega = \\{SS; SN; NS; NN\\}$ nên $n(\\Omega) = 4$." },
    { type: "mc", q: "Gieo một con xúc xắc. Biến cố \"số chấm lớn hơn $4$\" được viết là tập con nào của $\\Omega$?",
      choices: ["$\\{4; 5; 6\\}$", "$\\{5; 6\\}$", "$\\{1; 2; 3; 4\\}$", "$\\{6\\}$"], answer: 1,
      explain: "Các số lớn hơn $4$ trong $\\Omega$ là $5$ và $6$, nên biến cố là $\\{5; 6\\}$." },
  ],
});
