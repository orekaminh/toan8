/* Bài 26. Xác suất của biến cố liên quan tới phép thử
   Chương VIII (Toán 9, Kết nối tri thức, Tập 2) */
MATH9.registerLesson({
  id: "bai-26-xac-suat-cua-bien-co",
  chapter: "Chương VIII. Xác suất của biến cố trong một số mô hình xác suất đơn giản",
  order: 2,
  title: "Bài 26. Xác suất của biến cố liên quan tới phép thử",

  objectives: [
    "Hiểu thế nào là các kết quả đồng khả năng của một phép thử.",
    "Tính được xác suất của một biến cố bằng công thức $P(A) = \\dfrac{n(A)}{n(\\Omega)}$.",
    "Nhận biết biến cố chắc chắn có xác suất bằng $1$ và biến cố không thể có xác suất bằng $0$.",
  ],

  intro: {
    text:
      "Khi gieo một con xúc xắc cân đối, sáu mặt $1, 2, 3, 4, 5, 6$ đều có cơ hội xuất hiện như nhau — ta " +
      "nói các kết quả là <b>đồng khả năng</b>. Vậy khả năng xuất hiện mặt có số chấm chẵn là bao nhiêu? " +
      "Có $3$ mặt chẵn $\\{2; 4; 6\\}$ trong tổng số $6$ mặt, nên xác suất là $\\dfrac{3}{6} = \\dfrac{1}{2}$. " +
      "Bài học này giúp bạn tính <b>xác suất</b> của một biến cố một cách chính xác.",
    math: "P(A) = \\dfrac{n(A)}{n(\\Omega)}",
  },

  theory: [
    {
      heading: "1. Kết quả đồng khả năng và không gian mẫu",
      html:
        "Tập hợp tất cả các kết quả có thể xảy ra của một phép thử gọi là <b>không gian mẫu</b>, kí hiệu " +
        "$\\Omega$. Số phần tử của nó kí hiệu là $n(\\Omega)$.<br>" +
        "Các kết quả của phép thử được gọi là <b>đồng khả năng</b> nếu chúng có cùng cơ hội xảy ra. " +
        "Chẳng hạn khi gieo một đồng xu cân đối hay một con xúc xắc cân đối, mọi kết quả đều đồng khả năng.",
      formula: "n(\\Omega) = \\text{so ket qua co the xay ra}",
    },
    {
      heading: "2. Công thức tính xác suất",
      html:
        "Giả sử các kết quả của phép thử là <b>đồng khả năng</b>. Khi đó <b>xác suất</b> của biến cố $A$ là " +
        "tỉ số giữa số kết quả <b>thuận lợi</b> cho $A$ (kí hiệu $n(A)$) và tổng số kết quả $n(\\Omega)$.<br>" +
        "Kết quả thuận lợi cho $A$ là những kết quả làm cho biến cố $A$ xảy ra.",
      formula: "P(A) = \\dfrac{n(A)}{n(\\Omega)}",
    },
    {
      heading: "3. Tính chất của xác suất",
      html:
        "Xác suất của mọi biến cố luôn thoả mãn $0 \\le P(A) \\le 1$.<br>" +
        "Biến cố <b>chắc chắn</b> (luôn xảy ra) có xác suất bằng $1$; biến cố <b>không thể</b> (không bao giờ " +
        "xảy ra) có xác suất bằng $0$. Xác suất càng lớn thì biến cố càng dễ xảy ra.",
      formula: "0 \\le P(A) \\le 1",
    },
  ],

  visual: {
    type: "probability",
    config: {
      outcomes: ["1", "2", "3", "4", "5", "6"],
      favorable: ["5", "6"],
      favLabel: "số chấm lớn hơn 4",
    },
  },

  examples: [
    {
      title: "Gieo xúc xắc — mặt chẵn",
      prompt: "Gieo một con xúc xắc cân đối. Tính xác suất biến cố $A$: “mặt xuất hiện có số chấm chẵn”.",
      steps: [
        "Không gian mẫu $\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ nên $n(\\Omega) = 6$.",
        "Các kết quả thuận lợi cho $A$ là $\\{2; 4; 6\\}$, nên $n(A) = 3$.",
        "Vậy $P(A) = \\dfrac{n(A)}{n(\\Omega)} = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
      ],
    },
    {
      title: "Gieo xúc xắc — số nguyên tố và số lớn hơn 4",
      prompt:
        "Gieo một con xúc xắc cân đối. Tính xác suất các biến cố $B$: “mặt có số chấm là số nguyên " +
        "tố” và $C$: “mặt có số chấm lớn hơn $4$”.",
      steps: [
        "Vẫn có $n(\\Omega) = 6$.",
        "Số nguyên tố trong $\\{1; ...; 6\\}$ là $\\{2; 3; 5\\}$, nên $n(B) = 3 \\Rightarrow P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
        "Số lớn hơn $4$ là $\\{5; 6\\}$, nên $n(C) = 2 \\Rightarrow P(C) = \\dfrac{2}{6} = \\dfrac{1}{3}$.",
      ],
    },
    {
      title: "Lấy bi từ trong túi",
      prompt:
        "Một túi có $3$ viên bi đỏ và $2$ viên bi xanh giống hệt nhau. Lấy ngẫu nhiên một viên. Tính xác " +
        "suất lấy được viên bi đỏ.",
      steps: [
        "Tổng số bi là $3 + 2 = 5$, mỗi viên có cơ hội được lấy như nhau nên $n(\\Omega) = 5$.",
        "Số kết quả thuận lợi (lấy được bi đỏ) là $n(A) = 3$.",
        "Vậy $P(\\text{do}) = \\dfrac{3}{5}$.",
      ],
    },
  ],

  commonMistakes: [
    {
      wrong: "Áp dụng công thức $P(A) = \\dfrac{n(A)}{n(\\Omega)}$ khi các kết quả <b>không</b> đồng khả năng.",
      right: "Công thức này chỉ đúng khi các kết quả của phép thử <b>đồng khả năng</b> (cân đối, đối xứng).",
      note: "Hãy kiểm tra điều kiện đồng khả năng trước khi tính.",
    },
    {
      wrong: "Đếm thiếu hoặc đếm thừa số kết quả thuận lợi $n(A)$.",
      right: "Liệt kê rõ tập kết quả thuận lợi rồi đếm cẩn thận, ví dụ số nguyên tố là $\\{2; 3; 5\\}$.",
      note: "Số $1$ không phải số nguyên tố — đừng đếm nhầm.",
    },
    {
      wrong: "Cho rằng có thể có xác suất lớn hơn $1$ hoặc nhỏ hơn $0$.",
      right: "Luôn có $0 \\le P(A) \\le 1$; nếu tính ra ngoài khoảng này thì chắc chắn đã sai.",
      note: "Biến cố chắc chắn $P = 1$, biến cố không thể $P = 0$.",
    },
  ],

  exercises: [
    {
      level: "Nhận biết",
      prompt: "Gieo một con xúc xắc cân đối. Không gian mẫu $\\Omega$ có bao nhiêu phần tử?",
      hints: ["Liệt kê các mặt có thể xuất hiện."],
      solution: "$\\Omega = \\{1; 2; 3; 4; 5; 6\\}$ nên $n(\\Omega) = 6$.",
    },
    {
      level: "Nhận biết",
      prompt: "Gieo một con xúc xắc cân đối. Tính xác suất biến cố “mặt có số chấm lớn hơn $4$”.",
      hints: ["Các mặt lớn hơn $4$ là $\\{5; 6\\}$."],
      solution: "$n(A) = 2,\\ n(\\Omega) = 6 \\Rightarrow P(A) = \\dfrac{2}{6} = \\dfrac{1}{3}$.",
    },
    {
      level: "Nhận biết",
      prompt: "Một túi có $3$ bi đỏ và $2$ bi xanh giống hệt nhau. Lấy ngẫu nhiên một viên, xác suất lấy được bi đỏ là bao nhiêu?",
      hints: ["Tổng số bi là $5$; số bi đỏ là $3$."],
      solution: "$P(\\text{do}) = \\dfrac{3}{5}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Gieo một con xúc xắc cân đối. Tính xác suất biến cố “mặt có số chấm là số nguyên tố”.",
      hints: ["Số nguyên tố từ $1$ đến $6$ là $\\{2; 3; 5\\}$.", "Nhớ rằng $1$ không phải số nguyên tố."],
      solution: "$n(A) = 3,\\ n(\\Omega) = 6 \\Rightarrow P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}$.",
    },
    {
      level: "Thông hiểu",
      prompt:
        "Có $10$ tấm thẻ đánh số $1, 2, ..., 10$. Lấy ngẫu nhiên một thẻ. Tính xác suất lấy được thẻ ghi số chia hết cho $3$.",
      hints: ["Các số từ $1$ đến $10$ chia hết cho $3$ là $\\{3; 6; 9\\}$."],
      solution: "$n(A) = 3,\\ n(\\Omega) = 10 \\Rightarrow P(A) = \\dfrac{3}{10}$.",
    },
    {
      level: "Thông hiểu",
      prompt: "Gieo một con xúc xắc cân đối. So sánh xác suất biến cố $A$: “mặt chẵn” và biến cố $B$: “mặt nguyên tố”.",
      hints: ["Mặt chẵn là $\\{2; 4; 6\\}$; mặt nguyên tố là $\\{2; 3; 5\\}$."],
      solution:
        "$P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}$ và $P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}$. Vậy $P(A) = P(B)$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Một túi có $4$ bi đỏ, $3$ bi xanh và $5$ bi vàng giống hệt nhau. Lấy ngẫu nhiên một viên. Tính xác suất lấy được bi <b>không</b> phải màu vàng.",
      hints: ["Tổng số bi là $4 + 3 + 5 = 12$.", "Bi không vàng gồm bi đỏ và bi xanh: $4 + 3 = 7$ viên."],
      solution: "$n(\\Omega) = 12,\\ n(A) = 4 + 3 = 7 \\Rightarrow P(A) = \\dfrac{7}{12}$.",
    },
    {
      level: "Vận dụng",
      prompt:
        "Có $10$ tấm thẻ đánh số $1, 2, ..., 10$. Lấy ngẫu nhiên một thẻ. Tính xác suất lấy được thẻ ghi số vừa chẵn vừa lớn hơn $5$.",
      hints: ["Số chẵn lớn hơn $5$ trong $\\{1; ...; 10\\}$ là những số nào?", "Đó là $\\{6; 8; 10\\}$."],
      solution: "Các kết quả thuận lợi là $\\{6; 8; 10\\}$ nên $n(A) = 3 \\Rightarrow P(A) = \\dfrac{3}{10}$.",
    },
  ],

  quiz: [
    { type: "mc", q: "Gieo một con xúc xắc cân đối. Xác suất xuất hiện mặt có số chấm chẵn là bao nhiêu?",
      choices: ["$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$", "$\\dfrac{1}{6}$"], answer: 1,
      explain: "Mặt chẵn là $\\{2; 4; 6\\}$ nên $P = \\dfrac{3}{6} = \\dfrac{1}{2}$." },
    { type: "fill", q: "Một túi có $3$ bi đỏ và $7$ bi xanh giống hệt nhau. Lấy ngẫu nhiên một viên, xác suất lấy được bi xanh là $\\dfrac{a}{10}$. Giá trị của $a$ là bao nhiêu?",
      answer: 7, explain: "Có $7$ bi xanh trên tổng $10$ bi nên $P = \\dfrac{7}{10}$, suy ra $a = 7$." },
    { type: "mc", q: "Biến cố chắc chắn (luôn luôn xảy ra) có xác suất bằng bao nhiêu?",
      choices: ["$0$", "$\\dfrac{1}{2}$", "$1$", "Lớn hơn $1$"], answer: 2,
      explain: "Biến cố chắc chắn luôn xảy ra nên $n(A) = n(\\Omega)$, do đó $P(A) = 1$." },
  ],
});
